// src/env.d.ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string; // Example: You can add your own custom env variables here
  // Add other Vite-specific env variables if needed, e.g., VITE_API_URL
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
