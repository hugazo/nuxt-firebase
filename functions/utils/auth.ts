import { CallableRequest, HttpsError } from 'firebase-functions/v2/https';

export const checkUserRole = (context: CallableRequest, role: string) => {
  if (context.auth?.token?.[role]) {
    return;
  }
  throw new HttpsError('permission-denied', 'Your user does not have permission.');
};
