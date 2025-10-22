import React, { useEffect, useState } from 'react';

export default function AdminReconciliations() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rawResponse, setRawResponse] = useState(null);
  const [showFullRaw, setShowFullRaw] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    setRawResponse(null);
    try {
      const env = typeof import.meta !== 'undefined' ? import.meta.env : (typeof process !== 'undefined' ? process.env : {});
      const key = env.VITE_RECONCILE_KEY || env.REACT_APP_RECONCILE_KEY || env.RECONCILE_KEY || '';
      const base = env.VITE_FUNCTIONS_BASE_URL || '';
      const res = await fetch(`${base}/.netlify/functions/listReconciliations`, {
        headers: { 'x-reconcile-key': key }
      });

      // If response not OK, capture raw body for debugging
      if (!res.ok) {
        const text = await res.clone().text();
        setRawResponse(text);
        throw new Error(`HTTP ${res.status}: ${text}`);
      }

      const ct = (res.headers.get('content-type') || '').toLowerCase();
      if (ct.includes('application/json')) {
        try {
          const json = await res.json();
          setItems(json.items || []);
          setRawResponse(null);
        } catch (parseErr) {
          // parsing failed despite content-type, save raw text to help debug
          const text = await res.clone().text();
          setRawResponse(text);
          throw new Error('Failed to parse JSON response: ' + (parseErr.message || '') + '\n' + text.slice(0, 1000));
        }
      } else {
        const text = await res.clone().text();
        setRawResponse(text);
        throw new Error(`Expected JSON but got ${ct}: ${text.slice(0, 1000)}`);
      }
    } catch (err) {
      setError(err.message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchItems(); }, []);

  const markVerified = async (id) => {
    try {
      const env = typeof import.meta !== 'undefined' ? import.meta.env : (typeof process !== 'undefined' ? process.env : {});
      const key = env.VITE_RECONCILE_KEY || env.REACT_APP_RECONCILE_KEY || env.RECONCILE_KEY || '';
      const base = env.VITE_FUNCTIONS_BASE_URL || '';
      const res = await fetch(`${base}/.netlify/functions/updateReconciliation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-reconcile-key': key },
        body: JSON.stringify({ id, status: 'verified' })
      });
      if (!res.ok) {
        const text = await res.clone().text();
        throw new Error(`Update failed HTTP ${res.status}: ${text}`);
      }
      await fetchItems();
    } catch (err) {
      console.error(err);
      alert('Update failed: ' + (err.message || err));
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Admin — Reconciliations</h2>
      {loading && <div>Loading...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {rawResponse && (
        <div className="mt-2 p-2 bg-gray-800 text-white rounded">
          <div className="flex items-center justify-between">
            <div className="text-sm">Raw response (first 1000 chars):</div>
            <button onClick={() => setShowFullRaw(v => !v)} className="ml-2 text-xs underline">{showFullRaw ? 'Hide' : 'Show'}</button>
          </div>
          <pre className="mt-2 text-xs overflow-auto" style={{ maxHeight: showFullRaw ? 400 : 120 }}>{showFullRaw ? rawResponse : rawResponse.slice(0, 1000)}</pre>
        </div>
      )}
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="p-4 border rounded bg-white text-black">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-mono text-sm text-gray-600">{item.id}</div>
                <div className="font-semibold text-lg">{item.name} — {item.course}</div>
                <div className="text-sm text-gray-700">Amount: ₹{item.amount} | Tx: {item.transactionId}</div>
                <div className="text-xs text-gray-500 mt-2">Status: {item.status || 'pending'}</div>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => markVerified(item.id)} className="px-3 py-1 bg-green-600 text-white rounded">Mark Verified</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
