<template>
  <v-container grid-list-lg>
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5 color red lighten-5">Participate</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">BentoBox-DS</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  Download a <a href="https://bentobox.healthscience.network/">graphical toolkit</a>Self analysis of wearable and fasting data, private, personalised visualisations.
                </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">Visualisations</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  The tools allow you to compare different data over differennt time periods.
                </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm6 md6>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">Goldilocks Simulations</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  Earth is said to be in the habitable or goldilocks zone, not too cold or too hot but just right for life.  This thinking applies to the biology of life too, including us humans.
                </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md6>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">FermiAI</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                 Coming soon. A personal AI agent that performs evolutionary computing to help build models that better understand our health.
                </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'fermi-learn',
  data: () => ({
    model: 0
  }),
  methods: {
  }
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
