import { DecodedIdToken, getAuth } from 'firebase-admin/auth';

export default defineEventHandler(async (event) => {
  // Disables this middleware on client-side
  if (process.browser) return;
  // Declares routes to be protected
  const protectedRoutes = ['/api'];
  // Validates if the current route is protected
  if (protectedRoutes.some((route) => getRequestURL(event).pathname.startsWith(route))) {
    // Gets the authorization header
    const authHeader = event.node.req.headers.authorization?.split(' ')[1];
    if (authHeader) {
      const auth = getAuth();
      // Verifies the token
      const verified = await auth.verifyIdToken(authHeader);
      // Assigns the token to the user context
      event.context.user = verified as DecodedIdToken;
    } else {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
      });
    }
  }
});
