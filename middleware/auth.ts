export default defineNuxtRouteMiddleware(() => {
  // Disables this middleware on server-side
  if (process.server) return;
  console.log('Authmiddleware called on client');
});
