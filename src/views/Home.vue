<template>
  <v-container fluid fill-height>
    <div class="cale-waves">
      <fermi-learn></fermi-learn>
      <!-- <cale-ai></cale-ai> -->
      <health-theory></health-theory>
      <fermi-features></fermi-features>
      <fermi-footer></fermi-footer>
    </div>
  </v-container>
</template>

<script>
// import CaleAi from '@/components/caleAI'
import HealthTheory from '@/components/healthTheory'
import FermiLearn from '@/components/fermiLearn'
import FermiFeatures from '@/components/fermiFeatures'
import FermiFooter from '@/components/fermiFooter'

export default {
  name: 'CALE-Content',
  components: {
    // CaleAi,
    HealthTheory,
    FermiLearn,
    FermiFeatures,
    FermiFooter
  }
}
</script>

<style>
.cale-waves {
  background-color: 'green lighten-5';
  background-position: center center;
  background-repeat: repeat-y;
  width: 100%;
  height: 100%;
}
</style>
