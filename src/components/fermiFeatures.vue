<template>
  <v-container
      class="bg-surface-variant mb-6"
    >
    <v-row style="height:40px;" xs12 md6>Participate</v-row>
    <v-row
      align="start"
      no-gutters
    >
      <v-col>
        <v-sheet class="pa-2 ma-2" wrap>
          <h3 class="headline mb-0 font-weight-bold">FermiAI - BentoBox-DS</h3>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            Download the <a href="https://bentobox.healthscience.network/"> toolkit</a>The toolkit comes complete with a set of templates that will bring together healthspan data, educational material and health data.
          </div>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 ma-2" wrap>
          <h3 class="headline mb-0 font-weight-bold">Visualisations</h3>
              <div style="word-break: break-word" class="spacing-playground pa-3">
                Each health board comes with personalised charts and these charts can be combined with a couple of clicks allowing peers to intuitively explore the data.
              </div>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row
      align="start"
      no-gutters
    >
      <v-col sm="12">
        <h3 class="headline mb-0 font-weight-bold">Goldilocks Simulations</h3>
        <div style="word-break: break-word" class="spacing-playground pa-3">
          A new style of health visualisation: The Earth is said to be in the habitable or goldilocks zone, not too cold or too hot but just right for life. Often in health it is not about maximising a single value but more about taking a holistic approach. The goldielocks simulations make possible holistic visualisations.
          </div>
      </v-col>
      <v-col sm="12">
        <h3 class="headline mb-0 font-weight-bold">AI agent</h3>
        <div style="word-break: break-word" class="spacing-playground pa-3">
          Coming soon. A personal AI chat agent that will support querying the data and building simulations. It also helps build networks of peers in coordinating evolutionary computing to help combine collective intelligence. 
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  const align = 'start'
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
