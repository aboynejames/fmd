<template>
  <v-app>
    <v-main>
      <MenuNavigation />
      <RouterView />
    </v-main>
  </v-app>
</template>

<script setup>
  import MenuNavigation from '@/components/MenuNavigation.vue'
  import { RouterView } from 'vue-router'
</script>
