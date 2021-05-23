<template>
  <div>
    <br>
    <h1>Vue Google Maps Add Multiple Markers Example - Nicesnippets.com</h1>

    <gmap-map
      :center="center"
      :zoom="12"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m"
        @click="center=m"
      ></gmap-marker>
    </gmap-map>

  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      currentPlace: null
    };
  },

  mounted() {
    this.geolocate();
  },

  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    geolocate: function() {

        navigator.geolocation.getCurrentPosition(position => {
          this.center = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
        });

        this.markers = [
          {
              lat: 21.1594627,
              lng: 72.6822083,
              label: 'Surat'
          },
          {
              lat: 23.0204978,
              lng: 72.4396548,
              label: 'Ahmedabad'
          },
          {
              lat: 22.2736308,
              lng: 70.7512555,
              label: 'Rajkot'
          }
      ];

    }
  }
};
</script>