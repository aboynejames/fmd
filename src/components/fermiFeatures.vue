<template>
  <v-container
      class="bg-surface-variant mb-6"
    >
    <v-row xs12>Participate</v-row>
      <v-row
        align="start"
        no-gutters
        style="height: 150px;"
      >
        <v-col>
          <v-sheet class="pa-2 ma-2" wrap>
            <h3 class="headline mb-0 font-weight-bold">BentoBox-DS</h3>
            <div style="word-break: break-word" class="spacing-playground pa-3">
              Download a <a href="https://bentobox.healthscience.network/">graphical toolkit</a>Self analysis of wearable and fasting data, private, personalised visualisations.
            </div>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2" wrap>
            <h3 class="headline mb-0 font-weight-bold">Visualisations</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  The tools allow you to compare different data over differennt time periods.
                </div>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row
        align="start"
        no-gutters
        style="height: 150px;"
      >
        <v-col>
          <h3 class="headline mb-0 font-weight-bold">Goldilocks Simulations</h3>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            Earth is said to be in the habitable or goldilocks zone, not too cold or too hot but just right for life.  This thinking applies to the biology of life too, including us humans.
            </div>
        </v-col>
        <v-col>
          <h3 class="headline mb-0 font-weight-bold">AI agent</h3>
          <div style="word-break: break-word" class="spacing-playground pa-3">
            Coming soon. A personal AI agent that performs evolutionary computing to help build models that better understand our health.
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
