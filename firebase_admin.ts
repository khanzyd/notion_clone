import { App, cert, getApp, getApps, initializeApp } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore";

let app:App;

let serviceKey = require("./service_key.json");

app = getApps().length === 0? initializeApp({
    credential: cert(serviceKey)
}) : getApp();

const adminDb = getFirestore(app);

export { app as adminApp, adminDb };