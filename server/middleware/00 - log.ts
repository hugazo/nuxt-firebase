import { log } from 'firebase-functions/logger';

export default defineEventHandler((event) => {
  if (process.server) {
    log(`[Backend Call] - ${event.method} - ${event.path}`);
  }
  if (process.client) {
    log(`[Frontend Call] - ${event.method} - ${event.path}`);
  }
});
