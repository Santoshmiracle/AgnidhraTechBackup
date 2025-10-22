const admin = require('firebase-admin');

function initFirebase() {
  if (admin.apps.length) return admin.app();
  const base64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
  if (!base64) throw new Error('Missing FIREBASE_SERVICE_ACCOUNT_BASE64 env var');
  const serviceAccountJson = Buffer.from(base64, 'base64').toString('utf8');
  const serviceAccount = JSON.parse(serviceAccountJson);

  return admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: process.env.FIREBASE_PROJECT_ID
  });
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, X-Reconcile-Key, x-reconcile-key, Authorization',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8'
};

exports.handler = async (event) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Method Not Allowed' }) };

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Invalid JSON' }) };
  }

  const { enrollmentId, transactionId, amount } = payload;
  if (!enrollmentId || !transactionId || !amount) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Missing required fields' }) };
  }

  // --- server-side pricing validation (minimal, keep in sync with src/utils/pricing.js) ---
  try {
    const coursePaid = (payload.course || payload.selectedAddon || '').toString();
    const origin = (payload.originCourse || '').toString();

    const ADDON_BASE_PRICE = 10000;
    const ADDON_FOR_COURSE_STUDENT = 5000;
    const STANDARD_PRICE = 20000;
    const DIWALI_PRICE = 15000;
    const DIWALI_OFFER_COURSES = [
      'Defensive Security Professional',
      'Programming with DSA',
      'Multi-Cloud DevOps Professional'
    ];

    function isDiwaliPeriod(now = new Date()) {
      const start = new Date('2025-10-19');
      const end = new Date('2025-11-02');
      return now >= start && now <= end;
    }

    let expectedAmount = STANDARD_PRICE;
    if (coursePaid && /addon|add-?ons|specialized/i.test(coursePaid)) {
      expectedAmount = (origin && /(offensive|defensive|cyber|security)/i.test(origin)) ? ADDON_FOR_COURSE_STUDENT : ADDON_BASE_PRICE;
    } else if (coursePaid) {
      const normalized = coursePaid.trim().toLowerCase();
      for (const o of DIWALI_OFFER_COURSES) {
        if (normalized === o.toLowerCase()) {
          expectedAmount = isDiwaliPeriod() ? DIWALI_PRICE : STANDARD_PRICE;
          break;
        }
      }
    }

    payload.expectedAmount = expectedAmount;
    payload.amountMismatch = Number(amount) !== Number(expectedAmount);
  } catch (e) {
    // ignore validation errors but still record payload
    console.warn('Pricing validation failed', e);
  }

  try {
    initFirebase();
    const db = admin.firestore();

    const docRef = db.collection('reconciliations').doc(enrollmentId);
    await docRef.set({
      ...payload,
      currency: payload.currency || 'INR',
      status: 'pending',
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    }, { merge: true });

    return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ success: true, status: 'pending', docId: enrollmentId }) };
  } catch (err) {
    console.error('reconcile error', err);
    return { statusCode: 500, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Server error' }) };
  }
};
