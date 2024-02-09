import { getCurrentUser } from 'vuefire';

export default defineNuxtRouteMiddleware(async (to) => {
  // Disables this middleware on server-side
  if (process.server) return;
  if (to.path === '/') return;
  const user = await getCurrentUser();
  if (user) {
    // If user we assign the token for nuxt $fetch
    const token = `Bearer ${await user.getIdToken()}`;
    const fetchInstance = $fetch.create({ baseURL: '/', headers: { Authorization: token } });
    // Assigns token to $fetch
    $fetch = fetchInstance;
  } else {
    // Redirect to login page if user is not logged in
    return navigateTo({
      path: '/',
      query: {
        redirect: to.path,
      },
    });
  }
});
