export default defineNuxtRouteMiddleware(async (to) => {
  // Disables this middleware on server-side
  if (process.server) return;
  const user = await getCurrentUser();
  if (to.path === '/') return;
  if (!user) {
    // Redirect to login page if user is not logged in
    // eslint-disable-next-line consistent-return
    return navigateTo({
      path: '/',
      query: {
        redirect: to.path,
      },
    });
  }
  console.log('User is logged in', user.email);
});
