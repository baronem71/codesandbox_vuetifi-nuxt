<template>
  <div>
  <v-img v-for="i in 10" :src="require(`@/static/img/image-${i}.jpg?vuetify-preload`)" :key="i">
  </div>
</template>

<script>
export default {
  name: "image",

};
</script>