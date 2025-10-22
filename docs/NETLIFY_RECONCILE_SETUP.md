# Netlify Reconcile Function — Setup

This project uses Netlify Functions to reconcile offline payments (Paytm/UPI/bank). The `/.netlify/functions/reconcile` function stores reconciliation records in Firestore.

Required environment variables (set in Netlify or your local environment):

- `RECONCILE_KEY` — secret key used by the admin UI and clients to call protected endpoints like `updateReconciliation` and `listReconciliations`. Keep this secret.
- `FIREBASE_PROJECT_ID` — Firebase project id.
- `FIREBASE_SERVICE_ACCOUNT_BASE64` — base64-encoded service account JSON (the content of the service account file base64-encoded). The function decodes this and initializes the Firebase Admin SDK.

Local testing notes:
- You can set env vars in a `.env` file and use `netlify-cli` to run functions locally. Example `.env` keys:

  RECONCILE_KEY=supersecret
  FIREBASE_PROJECT_ID=your-project-id
  FIREBASE_SERVICE_ACCOUNT_BASE64=<base64-json>

Security:
- Client-side checks are only UX hints. Final price validation and acceptance must happen server-side. The reconcile function computes an `expectedAmount` and sets an `amountMismatch` flag on the stored document when the reported `amount` differs from the server-side expected value.
