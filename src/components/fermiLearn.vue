<template>
  <v-container>
    <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows="hover"
    >
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="items[i]"
      >
        <v-sheet
          :color="colors[i]"
          height="100%"
          tile
        >
          <v-img
          :src="items[i]"
          ></v-img>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script setup>
  import { ref } from 'vue'

  const model = ref(0)
  const items = ref([
    {
      src: 'src/assets/four-health.png',
      button: { mobile: 'Download App soon', toolkit: 'Toolkit', bbox: 'healthmodel' }
    },
    {
      src: 'src/assets/mind.png',
      button: { mobile: 'Download App soon', toolkit: 'Toolkit', bbox: 'healthmodel' }
    },
    {
      src: 'src/assets/movement.png',
      button: { mobile: 'Download App soon', toolkit: 'Toolkit', bbox: 'healthmodel' }
    },
    {
      src: 'src/assets/sleep.png',
      button: { mobile: 'Download App soon', toolkit: 'Toolkit', bbox: 'healthmodel' }
    },
    {
      src: 'src/assets/food.png',
      button: { mobile: 'Download App soon', toolkit: 'Toolkit', bbox: 'healthmodel' }
    },
    {
      src: 'src/assets/lifeflow.png',
      button: { mobile: 'Download App soon', toolkit: 'Toolkit', bbox: 'healthmodel' }
    }
  ])

  const colors = ref([
    'indigo',
    'warning',
    'pink darken-2',
    'red lighten-1',
    'deep-purple accent-4'
  ])
  
  const slides = ref([
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
  ])

  function bboxMobile (select) {
    console.log('download mobile ')
    console.log(select)
  } 

  function bboxJoin (select) {
    console.log('join click for ')
  }
</script>

<style scoped>

.open-left {
  margin-top: 3em;
  perspective: 1000px;
}

.left-perspective {
  transform: rotateY(14deg);
}

.open-right {
  perspective: 1000px;
  filter: drop-shadow(10px 20px 55px #B2DFDB);
}

.right-perspective {
  transform: rotateY(-14deg);
}

.middle-top {
  margin-top: 200px;
}
</style>
