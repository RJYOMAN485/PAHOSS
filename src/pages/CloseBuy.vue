<template>
  <div class="">j;hoihgui</div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    this.locatorButtonPressed();
  },
  data() {
    return {
      lat: 0,
      lng: 0,
      type: "",
      radius: "",
      places: []
    };
  },
  computed: {
    coordinates() {
      return `${this.lat}, ${this.lng}`;
    }
  },

  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        },
        error => {
          console.log("Error getting location");
        }
      );

      this.findCloseBuyButtonPressed();
    },
    findCloseBuyButtonPressed() {
      const URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
        this.lat
      },${this.lng}&type=${this.type}&radius=${this.radius *
        1000}&key=AIzaSyCHlv2-IEah4gf37BYM4AwRaVghr9WHqTY`;
      this.$axios
        .get(URL)
        .then(response => {
          console.log(response.data);
          this.places = response.data.results;
          this.addLocationsToGoogleMaps();
        })
        .catch(error => {
          console.log(error.message);
        });
    },
    addLocationsToGoogleMaps() {
      var map = new google.maps.Map(this.$refs["map"], {
        zoom: 15,
        center: new google.maps.LatLng(this.lat, this.lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
      var infoWindow = new google.maps.infoWindow()
      this.places.forEach(place => {
        const lat = place.geometry.location.lat;
        const lng = place.geometry.location.lng;
        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map
        });

        // google.map.event.addListener(marker,"click",() => {

        // })

        infoWindow.open(map,marker)
      });
    }
  }
};
</script>

<style></style>
