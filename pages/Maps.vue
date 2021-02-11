<template>
<!-- Typer ******************************************
Dependency Injection example
-->
<div>
  <g-map>
    <g-map-marker v-bind:places="vueConfCities"></g-map-marker>
  </g-map>
</div>
</template>
<script>
import GMap from "~/components/maps/GMap"
import GMapMarker from "~/components/maps/GMapMarker"

export default {
  components: {
  GMap,GMapMarker,
    // 'GMap': () => import('~/components/maps/GMap'),
    // 'GMapMarker': () => import('~/components/maps/GMapMarker'),
  },
  head() {
    return {
      // script: [
      //   { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAHbknPTCvUSgWwU0jJ68m4h6b7vpyP6hM' },
      // ],
    }
  },
  data: () => ({
    vueConfCities: [
      {
        name: "Wrocław",
        position: {
          lat: 51.107885,
          lng: 17.038538
        }
      },
      {
        name: "New Orleans",
        position: {
          lat: 29.951066,
          lng: -90.071532
        }
      }
    ],
  }),
}
</script>
<style>

</style>