"use server"

import { auth } from "@clerk/nextjs/server"
import { adminDb } from "../firebase_admin"

export async function createNewDocument() {
    auth.protect();

    const { sessionClaims } = await auth();

    const docCollectionRef = adminDb.collection("documents");
    const newDocRef = await docCollectionRef.add({
        title: "New Doc"
    })

    await adminDb.collection("users").doc(sessionClaims?.email!).collection("rooms").doc(newDocRef.id).set({
        userId: sessionClaims?.email!,
        role: "owner",
        createdAt: new Date(),
        roomId: newDocRef.id
    });

    return { docId: newDocRef.id }
}