<template>
  <div class="q-mt-lg">
    <div class="row justify-center">
      <div style="color:#444" class="col-6 col-xs-10 text-body2">
        Select Location or 
         <q-input class="q-ml-md" style="display:inline-grid" dense  label="Enter PIN Code" />
         <q-btn outline rounded color="secondary" class="q-ml-md" label="Search"/>
      </div>
      
    </div>

    
    <div class="row q-mt-md justify-center">
      <gmap-map
      class="col-6 col-xs-10"
        ref="mapRef"
        :center="center"
        :zoom="16"
        style="width:80%;  height: 400px;"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m"
          @click="openInfoWindowTemplate('dd')"
          @mouseover="openInfoWindowTemplate('dd')"
      
          content="kl"
        />
        <gmap-info-window
      
          :options="{
            maxWidth: 300,
            pixelOffset: { width: 0, height: -35 }
          }"
          :position="infoWindow.position"
          :opened="infoWindow.open"
          @closeclick="infoWindow.open = false"
        >
          <div>
            <q-btn label="vbook" color="red"/>
          </div>
        </gmap-info-window>
      </gmap-map>
      
    </div>
   
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  name: "GoogleMap",
  computed: {
    google: gmapApi
  },
  data() {
    return {
      center: { lat: 39.933049, lng: 32.858912 },
      currentPlace: null,
      markers: [],
      places: [],
      infoWindow: {
        position: { lat: 0, lng: 0 },
        open: false,
        template: ""
      }
    };
  },
  mounted() {
    this.geolocate();

    // this.$refs.mapRef.$mapPromise.then(map => {
    //   map.panTo({ lat: 1.38, lng: 103.8 });
    // });
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },

    closeWindow() {
      console.log("hello");
    },

    openInfoWindowTemplate(index) {
      console.log('mouse over');
      // const { lat, lng, name, street, zip, city } = this.loadedDealers[index];
      this.infoWindow.position = { lat: this.lat, lng: this.lng };

      //  this.infoWindow.template = "<q-btn label="hello" color=green'/>" 
      this.infoWindow.template = `
      <small>Avalable(2/5)</small> <br>
      <button style='cursor:pointer;margin-top:10px;background:green;border:none;padding:3px;color:#ccc;text-decoration:none'>book</button>
      `;
      this.infoWindow.open = true;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        // this.markers.push({ position: marker });
        this.markers = [
          {
            lat: 21.1594627,
            lng: 72.6822083,
            label: "Hahaha"
          },
          {
            lat: 23.0204978,
            lng: 72.4396548,
            label: "AhmeLOLLLdabad"
          },
          {
            lat: 22.2736308,
            lng: 70.7512555,
            label: "Rajkot"
          }
        ];
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    closeInfo() {
      console.log('leave');
       this.infoWindow.open = false;
    },
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          // lat: 21.1594627,
          lng: position.coords.longitude
          // lng: 72.6822083
        };

        this.lat = position.coords.latitude;
        // lat: 21.1594627,
        this.lng = position.coords.longitude;

        this.markers = [
          {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            label: "Hahaha"
          }
        ];
      });
    }
  }
};
</script>
