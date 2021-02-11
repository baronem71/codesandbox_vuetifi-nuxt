<template>
  <div class="map"><slot></slot></div>
</template>
<script>
export default {
  name: "GMap",
  // head() {
  //   return {
  //     script: [
  //       { src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAHbknPTCvUSgWwU0jJ68m4h6b7vpyP6hM' },
  //     ],
  //   }
  // },
  provide: function() {
    return {
      getMap: this.getMap
    };
  },
  data: () => ({
    map: null,
  }),
  mounted: function() {
    this.map = new google.maps.Map(this.$el, {
      center: { lat: 0, lng: 0 },
      zoom: 1
    });
  },
  methods: {
    getMap: function(found) {
      var vm = this;
      function checkForMap() {
        if (vm.map) {
          found(vm.map);
        } else {
          setTimeout(checkForMap, 50);
        }
      }
      checkForMap();
    }
  },
}
</script>
<style scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>