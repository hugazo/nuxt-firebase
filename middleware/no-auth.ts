import { getCurrentUser } from 'vuefire';

export default defineNuxtRouteMiddleware(async (to) => {
  // Disabled on client side
  if (process.server) return;
  // Runs only on root path
  if (to.path !== '/') return;
  // Gets the user
  const user = await getCurrentUser();
  // No user, proceed with page load
  if (!user) {
    const cleanFetchInstance = $fetch.create({ baseURL: '/', headers: {} });
    $fetch = cleanFetchInstance;
    return;
  }
  // If there is an user, checks for roles and redirects to the right page
  const tokenResult = await user.getIdTokenResult();
  const path = tokenResult.claims.admin ? '/admin' : '/home';
  return navigateTo({ path });
});
