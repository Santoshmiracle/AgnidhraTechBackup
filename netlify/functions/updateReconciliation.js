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

  const key = event.headers['x-reconcile-key'] || event.headers['X-Reconcile-Key'] || event.headers['authorization'];
  if (!key || key !== process.env.RECONCILE_KEY) {
    return { statusCode: 401, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Unauthorized' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body);
  } catch (err) {
    return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Invalid JSON' }) };
  }

  const { id, status, notes } = payload;
  if (!id || !status) return { statusCode: 400, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Missing id or status' }) };

  try {
    initFirebase();
    const db = admin.firestore();
    const ref = db.collection('reconciliations').doc(id);
    await ref.set({ status, notes: notes || null, updatedAt: admin.firestore.FieldValue.serverTimestamp() }, { merge: true });
    return { statusCode: 200, headers: CORS_HEADERS, body: JSON.stringify({ success: true, id }) };
  } catch (err) {
    console.error('updateReconciliation error', err);
    return { statusCode: 500, headers: CORS_HEADERS, body: JSON.stringify({ success: false, message: 'Server error' }) };
  }
};
