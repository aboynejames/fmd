<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <fermi-learn></fermi-learn>
          <!-- <bb-ai></bb-ai> -->
          <health-theory></health-theory>
          <fermi-features></fermi-features>
          <fermi-footer></fermi-footer>
          <v-spacer></v-spacer>
       </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
// import BbAi from '@/components/BBAI'
import FermiLearn from '@/components/fermiLearn'
import HealthTheory from '@/components/healthTheory'
import FermiFeatures from '@/components/fermiFeatures'
import FermiFooter from '@/components/fermiFooter'

</script>

<style>

</style>
