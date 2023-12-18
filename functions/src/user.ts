import { beforeUserCreated, beforeUserSignedIn } from 'firebase-functions/v2/identity';
import { logger } from 'firebase-functions';

// Example of blocking functions
// https://firebase.google.com/docs/auth/extend-with-blocking-functions?gen=2nd#understanding_blocking_functions

export const logUserCreated = beforeUserCreated((event) => {
  const user = event.data;
  logger.info('User Created', user);
});

export const logUserSignIn = beforeUserSignedIn((event) => {
  logger.info('Sign In', event.data.email);
});
