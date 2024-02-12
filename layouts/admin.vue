<template>
  <div>
    <v-app-bar>
      <template #prepend>
        <v-app-bar-nav-icon @click="store.toggleNavigator" />
      </template>
      <v-app-bar-title>Admin Site</v-app-bar-title>
      <v-spacer />
      <p class="text-body-1 px-2">
        Welcome {{ user?.displayName }}
      </p>
      <template #append>
        <v-menu
          location="bottom"
          open-on-click
        >
          <template #activator="{ props }">
            <v-btn
              icon="mdi-dots-vertical"
              v-bind="props"
            />
          </template>
          <v-list :min-width="100">
            <!-- Demo list, disabled for clicking -->
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :prepend-icon="item.icon"
              link
              disabled
            >
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item
              link
              prepend-icon="mdi-logout"
              @click.prevent="logout"
            >
              <v-list-item-title>
                Logout
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-app-bar>
    <v-main>
      <NuxtPage />
    </v-main>
  </div>
</template>

<script setup lang="ts">
import NavigatorStore from '@/stores/navigator';

const items = [
  {
    title: 'Profile',
    icon: 'mdi-account',
  },
  {
    title: 'Settings',
    icon: 'mdi-cog',
  },
];

const { user, logout } = useAuth();
const store = NavigatorStore();
</script>
