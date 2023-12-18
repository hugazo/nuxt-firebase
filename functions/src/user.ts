import { beforeUserCreated } from 'firebase-functions/v2/identity';
import { logger } from 'firebase-functions';

export const createUserDocument = beforeUserCreated((event) => {
  logger.info('This should create the user document', event);
});
