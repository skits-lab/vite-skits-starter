/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SKITS_APP_NAME: string;
  readonly SKITS_APP_URL: string;
  readonly SKITS_API_URL: string;
  readonly SKITS_FIREBASE_API_KEY: string;
  readonly SKITS_FIREBASE_AUTH_DOMAIN: string;
  readonly SKITS_FIREBASE_PROJECT_ID: string;
  readonly SKITS_FIREBASE_STORAGE_BUCKET: string;
  readonly SKITS_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly SKITS_FIREBASE_APP_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
