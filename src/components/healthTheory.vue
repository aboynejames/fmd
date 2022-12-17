<template>
  <v-container grid-list-lg>
    <v-layout row>
        <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5 color red lighten-5">FermiAI</v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md12>
        <v-card>
          <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0 font-weight-bold">Fasting Mimicking Diets Peer to Peer</h3>
                <div style="word-break: break-word" class="spacing-playground pa-3">
                  Aging, we all age.  How to do well?   Fasting, Fasting Mimicking Diets  FMD.
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
