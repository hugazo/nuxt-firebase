export default defineNuxtRouteMiddleware(async (to) => {
  // Disables this middleware on server-side
  if (process.server) return;
  const user = await getCurrentUser();
  if (to.path === '/') return;
  if (user) {
    const token = `Bearer ${await user.getIdToken()}`;
    const fetchInstance = $fetch.create({ baseURL: '/', headers: { Authorization: token } });
    // Assigns token to $fetch
    $fetch = fetchInstance;
  }
  // Redirect to login page if user is not logged in
  navigateTo({
    path: '/',
    query: {
      redirect: to.path,
    },
  });
});
