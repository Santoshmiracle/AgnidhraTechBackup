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
  if (event.httpMethod !== 'GET') return { statusCode: 405, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Method Not Allowed' }) };

  const key = event.headers['x-reconcile-key'] || event.headers['X-Reconcile-Key'] || event.headers['authorization'];
  if (!key || key !== process.env.RECONCILE_KEY) {
    return { statusCode: 401, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Unauthorized' }) };
  }

  try {
    initFirebase();
    const db = admin.firestore();

    const snapshot = await db.collection('reconciliations').orderBy('createdAt', 'desc').limit(500).get();
    const items = [];
    snapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });

    return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ success: true, items }) };
  } catch (err) {
    console.error('listReconciliations error', err);
    return { statusCode: 500, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Server error' }) };
  }
};
