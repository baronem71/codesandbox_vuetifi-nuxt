<template>
  <!-- Type Tests ******************************************
      <vue-typer 
        text='Hello World! I was registered locally!'
        caret-animation='expand'
      ></vue-typer>
  -->
<div>
  <v-card>
    <v-card-text>
      Typer Test:
    </v-card-text>
  </v-card>
  <v-card
    width="350px"
    >
    <v-card-text>
      <my-typer typerOpts="typerOpts" />
    </v-card-text>
  </v-card>
</div>
</template>
<script>
import MyTyper from "~/components/MyTyper"

export default {
  components: {
    MyTyper
  },
  data: () => ({
    typerOpts: {
      txt: ['here','your text','thank you'], ani: 'expand'
    },
  }),
}
</script>
<style scoped>

</style>
