<template>
  <div class="q-mt-lg">
    <div v-if="show == 0" class="row text-center justify-center">
      <div style="color:#444" class="col-6 col-xs-10 text-body2">
        Select Location or
        <q-input
          class="q-ml-md"
          style="display:inline-grid"
          dense
          label="Enter PIN Code"
        />
        <q-btn
          outline
          rounded
          color="secondary"
          class="q-ml-md"
          label="Search"
        />
      </div>
    </div>

    <div class="row q-pa-md justify-center q-gutter-md">
      <div v-if="show == 0" class="col-md-12 col-sm-12 col-xs-12 col-lg-12">
        <q-card-section>
            <div class="text-caption"
              >Markers with <span><q-icon color="red" size="md" name="room" /></span> are the parking zones. Hover over to book (Refresh the page if no markers showed)</div>
          </q-card-section>
        <gmap-map
          class="col-6 col-xs-10"
          ref="mapRef"
          :center="center"
          :zoom="16"
          style="width:100%;  height: 400px;"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m"
            @click="openInfoWindowTemplate(m)"
            @mouseover="openInfoWindowTemplate(m)"
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
            <div class="text-center">
              <small>{{ address }}</small
              ><br />
              <q-btn
                @click="setLocation()"
                flat
                dense
                label="Book"
                color="red"
              />
            </div>
          </gmap-info-window>
        </gmap-map>
      </div>
      <div v-if="show == 1" class="col-md-10 col-sm-8 col-xs-12 col-lg-8">
        <q-card>
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">Step 1 of 2 Information</div>
          </q-card-section>
          <q-form @submit.prevent="getPayment" class="q-gutter-md q-pa-lg">
            <div>
              <q-icon color="primary" size="lg" name="directions_car" />
              <span style="color:#444">{{ this.address }}</span>
            </div>
            <div class="row justify-between">
              <div class="col-6">
                <q-input label="Entry date" filled v-model="entryDate">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          @click="optionsFnTime3"
                          :options="optionsFn"
                          v-model="entryDate"
                          mask="YYYY-MM-DD"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-5">
                <q-input
                  label="Entry time"
                  @click="optionsFnTime3"
                  filled
                  v-model="entryTime"
                  mask="time"
                  :rules="['time']"
                >
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time @click="optionsFnTime3" v-model="entryTime">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div class="row justify-between">
              <div class="col-6">
                <q-input readonly label="Exit date" filled v-model="exitDate">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <!-- <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date
                          mask="YYYY-MM-DD"
                          readonly
                          :options="optionsFn"
                          v-model="exitDate"
                        >
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy> -->
                    </q-icon>
                  </template>
                </q-input>
              </div>
              <div class="col-5">
                <q-input readonly v-model="exitTime" label="Exit time" filled>
                  <template v-slot:append>
                    <q-icon name="access_time" class="cursor-pointer">
                      <q-popup-proxy
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-time readonly v-model="exitTime">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-time>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
                <!-- <small class="text-red" v-if="validateExit">
                  {{ validateExit }}
                </small> -->
              </div>
              <!-- <small>{{ validateExit }}</small> -->
            </div>
            <div class="row justify-between">
              <div class="col-6">
                <q-select
                  dense
                  v-model="period"
                  @input="optionsFnTime3"
                  :options="options"
                  label="Period"
                />
              </div>
              <div class="col-5 text-weight-bold text-green q-mt-md">
                Total Amount: {{ this.amount }}
              </div>
            </div>
            <q-btn label="Continue" type="submit" color="secondary" />
          </q-form>
          <q-separator />
        </q-card>
      </div>
      <div class="col-md-10 col-sm-8 col-xs-12 col-lg-8">
        <q-card v-if="show == 2">
          <q-card-section class="bg-primary text-white">
            <div class="text-h6">
              Step 2 of 2 Payment<br />
              <q-img
                src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"
              />
            </div>
          </q-card-section>
          <q-form @submit.prevent="onBook" class="q-gutter-md q-pa-lg">
            <q-input
              dense
              color="grey-3"
              label-color="orange"
              outlined
              v-model="cardNumber"
              label="Card Number"
            >
              <template v-slot:append>
                <q-icon name="credit_card" color="grey" />
              </template>
            </q-input>
            <div class="row justify-between">
              <q-input
                maxlength="2"
                dense
                v-model="month"
                class="col-2"
                label="MM"
              />
              <small class="col-1 text-h6 q-mt-sm">/</small>
              <q-input
                maxlength="4"
                dense
                v-model="year"
                class="col-2"
                label="YY"
              />
              <q-input
                class="col-6"
                dense
                color="grey-3"
                label-color="orange"
                outlined
                v-model="cvc"
                label="CVC Code"
                maxlength="3"
                type="password"
              >
                <template v-slot:append>
                  <q-icon name="gpp_good" color="grey" />
                </template>
              </q-input>
            </div>
            <q-input
              class="col-6"
              dense
              color="grey-3"
              label-color="orange"
              outlined
              v-model="cardHolder"
              label="Card Holder Name"
            >
              <template v-slot:append>
                <q-icon name="person" color="grey" />
              </template>
            </q-input>
            <q-btn label="Book now" type="submit" color="secondary" />
            <q-btn
              label="Back"
              flat
              @click="show = 1"
              icon="arrow_back"
              color="primary"
            />
          </q-form>
          <q-separator />
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";
import { date } from "quasar";

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
      },
      parking_zones: [],
      address: "",

      entryDate: null,
      entryTime: "08:56",
      validateExit: "",

      exitDate: null,
      exitTime: null,

      timeWithSeconds: "10:56:00",
      current: 1,
      show: 0,
      cardNumber: "3062-4528-45-28",
      expiryDate: "",
      cvc: "888",
      cardHolder: "Dummy Holder",
      month: "05",
      year: "2023",
      hourOptionsTime1: [9, 10, 11, 13, 15],

      marker: { position: { lat: 10, lng: 10 } },
      center: { lat: 10, lng: 10 },

      mapOptions: {
        disableDefaultUI: true
      },

      formData: {
        location: "",
        lat: "null",
        lng: "null",
        postal: "888888",
        available_space: 6,
        available_time: null
      },

      amount: null,

      selectedLocation: "",

      period: "30 minutes",

      options: ["30 minutes", "1 Hour", "2 Hours", "5 Hours", "1 day"]
    };
  },
  mounted() {
    // this.geolocate();

    let timeStamp = Date.now();
    let formattedString = date.formatDate(timeStamp, "YYYY-MM-DD");

    // console.log("timestamp", formattedString);

    this.optionsFnTime3();

    this.date = this.entryDate = this.exitDate = formattedString;

    console.log("exit date: " + this.exitDate);

    this.geolocate();

    // this.$refs.mapRef.$mapPromise.then(map => {
    //   map.panTo({ lat: 1.38, lng: 103.8 });
    // });
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },

    setLocation() {
      this.show = 1;

      // this.addre = ''
    },

    closeWindow() {
      console.log("hello");
    },

    openInfoWindowTemplate(m) {
      console.log("mouse over");
      this.address = m.label;
      // const { lat, lng, name, street, zip, city } = this.loadedDealers[index];
      this.infoWindow.position = { lat: m.lat, lng: m.lng };

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
      console.log("leave");
      this.infoWindow.open = false;
    },
    //   geolocate() {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.marker.position = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude
    //     };

    //     this.getCityAndCountry();

    //     this.panToMarker();
    //   });
    // },
    geolocate: function() {
      console.log("test");
      this.$axios
        .get("http://127.0.0.1:8000/api/parking-zones")
        .then(response => {
          this.parking_zones = response.data;
          console.log("parking-zones", response.data);
        })
        .catch(error => {
          console.log("error", error.message);
        });
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

        // this.markers = [
        //   {
        //     lat: position.coords.latitude,
        //     lng: position.coords.longitude,
        //     label: "Salem Veng"
        //   },
        //   {
        //     lat: 23.72031668265584,
        //     lng: 92.72720575332642,
        //     label: "Aizawl"
        //   }
        // ];

        this.parking_zones.forEach(zone => {
          console.log('zone',zone);
          let marker = {
            lat: parseFloat(zone.lat),
            lng: parseFloat(zone.lng),
            label: zone.pname
          };
          this.markers = [...this.markers,marker];

          console.log('allmarker',this.markers);
        });
      });

      this.getCityAndCountry();

      this.panToMarker();
    },
    onBook() {
      let formData = {
        user_id: 18,
        parking_id: 5,
        entry_date: this.entryDate,
        entry_time: this.entryTime,
        exit_date: this.exitDate,
        exit_time: this.exitTime,
        amount: this.amount,
        status: "active"
      };

      // console.log(formData);
      // return
      this.$axios
        .post("http://127.0.0.1:8000/api/storebooking", formData)
        .then(response => {
          // return console.log(response.data);
          console.log("success", response.data);
          this.$router.replace("/mybookings");
        })
        .catch(error => {
          console.log("error", error.message);
        });

      //redirect
      // this.$q.loading.show({
      //   message:
      //     'Booking in process.<br/><span class="text-orange text-weight-bold">Hang on...</span>'
      // });
    },

    showCurrent() {
      this.show = false;
      console.log("show", this.show);
    },

    optionsFnTime3(hr) {
      this.exitDate = this.entryDate;
      console.log("helo");
      // return
      var str = ("index", this.entryTime.indexOf(":"));

      var hr = this.entryTime.substring(0, str);
      var min = this.entryTime.substring(str + 1, 5);
      //  var min2 = this.entryTime.substring(str + 1, 5);

      //  console.log('result',hr+min);
      if (this.period == "30 minutes") {
        this.amount = 30;
        let m = Number(min) + 30;

        console.log("plus", m);

        if (m > 60) {
          let extraHr = m / 60;
          let newHr = "";

          let extraMin = m % 60;
          console.log("extra min", Math.trunc(extraMin));

          if (Number(extraMin) < 10) extraMin = "0" + extraMin;

          if (Number(hr) + Math.trunc(extraHr) < 10) {
            newHr = "0" + (Number(hr) + Math.trunc(extraHr));
            console.log("nnkj", newHr);
          } else {
            newHr = Number(hr) + Math.trunc(extraHr);
          }

          // console.log('trunc',Math.trunc(extraHr) + 1);

          console.log("newHR", Number(hr) + Math.trunc(extraHr));

          this.exitTime = newHr + ":" + extraMin;
        } else {
          this.exitTime = hr + ":" + (Number(min) + 30);
        }
      } else if (this.period == "1 Hour") {
        this.amount = 60;
        let m = Number(hr) + 1;

        if (m < 10) m = "0" + m;

        this.exitTime = m + ":" + min;
      } else if (this.period == "2 Hours") {
        this.amount = 120;
        let m = Number(hr) + 2;

        if (m < 10) m = "0" + m;

        this.exitTime = m + ":" + min;
      } else if (this.period == "5 Hours") {
        this.amount = 300;
        let m = Number(hr) + 5;

        if (m < 10) m = "0" + m;

        this.exitTime = m + ":" + min;
      } else if (this.period == "1 day") {
        this.amount = 720;

        this.exitTime = this.entryTime;
        var day = this.entryDate.substring(
          this.exitDate.length - 2,
          this.exitDate.length
        );

        console.log("day", day);

        day = Number(day) + 1;

        if (day < 10) {
          day = "0" + day;
        }

        var year = this.entryDate.substring(0, 4);

        console.log("year", year);

        var month = this.entryDate.substring(5, 7);

        //  if(month < 10) {
        //   month = '0'+month
        // }

        console.log("month", month);

        this.exitDate = year + "-" + month + "-" + day;
      }
      // console.log(this.exitTime);
      // var str = ("index", this.time.indexOf(":"));

      // return hr > this.time.substring(0, str) || hr % 12 === 0;

      // return 10 + 1;

      console.log("optonsfn", this.exitDate);
    },

    getPayment() {
      let timeStamp = Date.now();
      let formattedString = date.formatDate(timeStamp, "YYYY-MM-DD");

      // if (date.isSameDate(this.entryDate,formattedString))
      //   console.log('match');
      // else
      // console.log('not match');

      if (this.entryDate < formattedString) {
        this.$q.notify({
          message: "Entry time should not be less than current date",
          color: "red-4",
          position: "top",
          icon: "warning"
        });

        return;
      }

      // var entry = ("index", this.entryTime.indexOf(":"));

      // var exit = ("index", this.exitTime.indexOf(":"));

      // let entryCheck = this.entryTime.substring(0, entry);

      // let exitCheck = this.exitTime.substring(0, exit);

      // if (entryCheck == exitCheck) {
      //   this.validateExit =
      //     "Exit time should be atleast 1 hr greaterr than entry time";
      //   return;
      // }
      // return;
      this.show = 2;
    },
    optionsFn(date) {
      console.log("options fn", this.date);
      return date >= this.date;
      var today = new Date();

      var dt =
        today.getFullYear() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getDate();
      console.log("date: ", dt);

      return (
        date >=
        today.getFullYear() + "/" + today.getMonth + "/" + today.getDate()
      );
    },

    onSubmit() {
      this.$axios.defaults.withCredentials = true;
      console.log("submitted");

      // this.$axios;
      // .get("http://pahoss.herokuapp.com/sanctum/csrf-cookie")
      // .then(response => {
      this.$axios
        .post("http://pahoss.herokuapp.com/api/storeparking", this.formData)
        .then(response => {
          // return console.log(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.log(error.message);
        });

      this.current = 1;
      // });
    },
    //detects location from browser

    getCityAndCountry() {
      this.formData.lat = this.marker.position.lat;
      this.formData.lng = this.marker.position.lng;
      console.log(this.marker.position.lat);
      // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

      let apiUrl = `http://geocode.xyz/${this.marker.position.lat},${this.marker.position.lng} ?json=1`;
      this.$axios.defaults.withCredentials = false;

      this.$axios
        .get(apiUrl)
        .then(result => {
          console.log("address", result.data);
          this.formData.location = result.data.city + "," + result.data.region;
          // this.postal = result.data.postal
        })
        .catch(err => {
          console.log(err);
        });
    },

    //sets the position of marker when dragged
    handleMarkerDrag(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
    },

    //Moves the map view port to marker
    panToMarker() {
      if (this.current) return;
      this.$refs.mapRef.panTo(this.marker.position);
      // this.$refs.mapRef.setZoom(18);
    },

    //Moves the marker to click position on the map
    handleMapClick(e) {
      this.marker.position = { lat: e.latLng.lat(), lng: e.latLng.lng() };
      // console.log('before lat',e);
      this.getCityAndCountry();
    }
  }
};
</script>
