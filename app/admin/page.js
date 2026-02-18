"use client";

import { useState } from "react";

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    const firebase = await import("firebase/app");
    const authModule = await import("firebase/auth/dist/esm2017/index.js");

    const { initializeApp, getApps, getApp } = firebase;
    const { getAuth, signInWithEmailAndPassword } = authModule;

    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    };

    const app =
      !getApps().length ? initializeApp(firebaseConfig) : getApp();

    const auth = getAuth(app);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful ✅");
    } catch (error) {
      setMessage("Login failed ❌");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Admin Login - Nikhil Telecom</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", marginBottom: 10 }}
      />

      <button onClick={handleLogin}>Login</button>

      <p>{message}</p>
    </div>
  );
}
