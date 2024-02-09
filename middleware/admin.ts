export default defineNuxtRouteMiddleware(async () => {
  // Gets the current User
  const user = useCurrentUser();
  if (user) {
    const tokenResult = await user.value?.getIdTokenResult();
    // Checks custom claims if the user is an admin
    if (!tokenResult || !tokenResult.claims.admin) {
      return navigateTo({ path: '/home' });
    }
    // User is an admin, navigation continues
    return;
  }
  // No user default case
  return navigateTo({ path: '/' });
});
