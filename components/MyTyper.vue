<template>
  <!-- Typer ******************************************
  https://github.com/cngu/vue-typer
  https://cngu.github.io/vue-typer/
  -->
  <vue-typer
  :text="['Please','pass me a text','thank you']"
  :repeat='Infinity'
  :shuffle='false'
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='70'
  :pre-erase-delay='2000'
  :erase-delay='250'
  erase-style='select-all'
  :erase-on-complete='false'
  :caret-animation='expand'
  ></vue-typer>
</template>
<script>
export default {
  name: "MyTyper",
  props: {
    typerOpts: {
      type: Object,
      default: () => { return { 
                       txt: ['Please','pass me a text','thank you'], 
                       ani: 'expand',
                     } }
    },
  },
  // data: () => ({
  //   //
  // }),
}
</script>
<style>

</style>