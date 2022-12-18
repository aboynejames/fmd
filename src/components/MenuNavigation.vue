<template>
  <v-app-bar
    app
    color="pink lighten-4"
  >
    <div class="d-flex align-center">
      <v-img
        alt="Fermi-AI"
        class="shrink mr-2"
        contain
        src="src/assets/logo.png"
        transition="scale-transition"
        width="60"
      />
    </div>
    <v-toolbar-title class="lime--text">FERMI AI</v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link to="/">
      <v-btn
          color="white"
          flat
          value="feed"
        >
          <span>home |</span>
        </v-btn>
      </router-link>
      <router-link to="/ethics">
      <v-btn
          color="white"
          flat
          value="ethics"
        >
          <span>ethics |</span>
        </v-btn>
      </router-link>
      <v-btn
        color="white"
        flat
        value="blog"
      >
        <span><a href="" class="text-white">blog</a> |</span>
        </v-btn>
      <v-btn
        color="white"
        flat
        value="code"
      >
        <span><a href="" class="text-white">code</a> |</span>
      </v-btn>
      <v-btn color="lime lighten-3">JOIN</v-btn>
  </v-app-bar>
</template>

<script setup>

</script>
