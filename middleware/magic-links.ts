export default defineNuxtRouteMiddleware(async () => {
  // Disabled on server side
  if (process.server) return;
  // Process the magic links
  const { processMagicLinks } = useAuth();
  await processMagicLinks();
});
