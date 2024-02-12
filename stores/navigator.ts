export default defineStore('navigator', () => {
  const showNavigator = ref(true);

  const toggleNavigator = () => {
    showNavigator.value = !showNavigator.value;
  };

  return {
    showNavigator,
    toggleNavigator,
  };
});
