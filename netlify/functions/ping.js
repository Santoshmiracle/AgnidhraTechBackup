const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, X-Reconcile-Key, x-reconcile-key, Authorization',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Content-Type': 'application/json; charset=utf-8'
};

exports.handler = async function(event, context) {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 204, headers: CORS_HEADERS, body: '' };
  return {
    statusCode: 200,
    headers: CORS_HEADERS,
    body: JSON.stringify({ ok: true, timestamp: new Date().toISOString() })
  };
};
