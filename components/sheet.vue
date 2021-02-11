<template>
  <v-sheet
    :min-height="$vuetify.breakpoint.xs ? 300 : '20vh'"
    :rounded="$vuetify.breakpoint.xsOnly"
  >
    HERE THE SHEET
  </v-sheet>
</template>

<script>
export default {
  name: "sheet",
  mounted() {
    console.log(this.$vuetify.breakpoint.width);
  },
};
</script>
