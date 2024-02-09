import { useTheme } from 'vuetify';
import { useStorage } from '@vueuse/core';

export const useAppTheme = () => {
  const themes = [
    {
      name: 'Light',
      value: 'light',
      icon: 'mdi-light-switch',
    },
    {
      name: 'Dark',
      value: 'dark',
      icon: 'mdi-light-switch-off',
    },
    {
      name: 'System',
      value: 'auto',
      icon: 'mdi-lightbulb-auto',
    },
  ];

  const selectedTheme = useStorage<number>('selectedTheme', 0);

  const currentTheme = computed(() => themes[selectedTheme.value]);

  const changeTheme = () => {
    const selectedValue = selectedTheme.value < themes.length - 1
      ? selectedTheme.value + 1
      : 0;
    selectedTheme.value = selectedValue;
  };

  const userDarkPreference = usePreferredDark();

  const theme = useTheme();

  watch(currentTheme, (themeValue) => {
    if (themeValue.value === 'auto') {
      theme.global.name.value = userDarkPreference.value ? 'dark' : 'light';
    } else {
      theme.global.name.value = themeValue.value;
    }
  }, { immediate: true });

  watch(userDarkPreference, (darkPreference) => {
    if (currentTheme.value.value === 'auto') {
      theme.global.name.value = darkPreference ? 'dark' : 'light';
    }
  }, { immediate: true });

  return {
    currentTheme,
    changeTheme,
  };
};
