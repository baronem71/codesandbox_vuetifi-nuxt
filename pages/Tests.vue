/* eslint-disable no-undef */
<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div v-if="$nuxt.isOffline">You are offline</div>
      <div :class="[`body-${$store.state.class.bodyClass}`]">
        <h2>Test Site <button @click="refresh">[Refresh]</button></h2>
        <p>{{ content }}</p>
        <p>Process static: {{ ps }}</p>
        <p>Process target: {{ pt }}</p>
        <p>Route query: {{ rq }}</p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
// ?preview=true
export default {
  // validate({ params, query }) { // FOR PREVIEW MODE ONLY
  //   if (query.preview) {
  //     return true
  //   }
  // },
  //middleware: 'auth',
  head: {
    title: 'Test page',
  },
  components: {},
  data() {
    return {
      ps: true, //this.process.static,
      pt: true //this.process.target,
    }
  },
  asyncData() {
    return { 
      content: 'Created at: ' + new Date(),
      renderedOn: 'client' //this.process.client ? 'client' : 'server',
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
  methods: {
    rq() {
      return this.$route.query
    },
    refresh() {
      this.$nuxt.refresh()
    },
  },
}
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>