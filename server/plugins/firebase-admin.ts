import { initializeApp } from 'firebase-admin/app';

export default defineNitroPlugin(() => {
  initializeApp();
});
