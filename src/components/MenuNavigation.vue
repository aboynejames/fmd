<template>
  <v-app-bar
    app
    color="red lighten-5"
    dark
  >
    <div class="d-flex align-center">
      <v-img
        alt="Fermi-AI"
        class="shrink mr-2"
        contain
        src="@/assets/logo.png"
        transition="scale-transition"
        width="26"
      />
    <v-toolbar-title class="red--text">FERMI AI</v-toolbar-title>
    </div>
    <v-spacer></v-spacer>
      <v-btn text><router-link to="/">home</router-link> |</v-btn>
      <v-btn text><router-link to="/ethics">ethics</router-link> |</v-btn>
      <v-btn text><a href="">blog</a> |</v-btn>
      <v-btn text><a href="">code</a></v-btn>
      <v-btn color="brown lighten-3">JOIN</v-btn>
  </v-app-bar>
</template>

<script setup>

</script>
