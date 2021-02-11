<template>
<div>
</div>
</template>
<script>
export default {
  name: "GMapMarker",
  inject: ["getMap"],
  props: ["places"],
  created: function() {
    var vm = this;
    vm.getMap(function(map) {
      vm.places.forEach(function(place) {
        new google.maps.Marker({
          position: place.position,
          map: map
        });
      });
    });
  },
        render(h) {
          return null;
        }
}
</script>
<style scoped>

</style>