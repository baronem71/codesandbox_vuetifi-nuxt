<template>
  <div>
    <!-- Adjust screen ******************************************-->
    <v-card
      class="pa-md-4 mx-lg-auto"
      color="secondary"
      width="250px"
      >
      <v-card-text>
        Adjust screen size to see spacing changes
      </v-card-text>
    </v-card>
    <!-- Horizontal ******************************************-->
    <v-card
      class="mx-auto"
      color="secondary"
      width="200px"
    >
      <v-card-text>
        Centered
      </v-card-text>
    </v-card>
    <!-- Negative margin ******************************************-->
    <v-card
      class="mx-auto"
      height="100"
      max-width="200"
      color="secondary"
    ></v-card>
    <v-card
      class="mt-n12 mx-auto"
      elevation="12"
      height="200"
      max-width="300"
      color="secondary"
    >
      <v-card-text>This card has negative top margin applied</v-card-text>
    </v-card>
  </div>

</template>
<script>
  export default {
    data: () => ({
      //
    }),
  }
</script>