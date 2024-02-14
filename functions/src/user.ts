import { beforeUserCreated, beforeUserSignedIn, HttpsError } from 'firebase-functions/v2/identity';
import { getAuth } from 'firebase-admin/auth';
import { onCall } from 'firebase-functions/v2/https';
import { logger } from 'firebase-functions/v2';
import { checkUserRole } from '../utils/auth.js';

// Example of blocking functions
// https://firebase.google.com/docs/auth/extend-with-blocking-functions?gen=2nd#understanding_blocking_functions

export const handleUserCreationRules = beforeUserCreated((event) => {
  const user = event.data;
  if (!user?.email?.includes('@42devs.cl')) {
    logger.error('Unauthorized email', user.email);
    throw new HttpsError('invalid-argument', 'Unauthorized email');
  }
  logger.info('User Created', user);
});

export const logUserSignIn = beforeUserSignedIn((event) => {
  logger.info('Sign In', event.data.email);
});

export const getAllUsers = onCall(async (context) => {
  checkUserRole(context, 'admin');
  // Gets the users
  const token = context.data?.nextPageToken || undefined;
  const auth = getAuth();
  const result = await auth.listUsers(10, token);
  return result;
});
