<template>
  <v-app>
    <MenuNavigation />
    <v-main>
      <RouterView />
    </v-main>
    <v-footer>Health Coherence</v-footer>
  </v-app>
</template>

<script setup>
  import { RouterView } from 'vue-router'

  import MenuNavigation from '@/components/MenuNavigation.vue'
</script>
