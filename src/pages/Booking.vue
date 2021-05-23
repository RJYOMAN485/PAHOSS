<template>
  <div class="q-pa-md row justify-center q-gutter-md">
    <q-card v-if="current == 1" class="col-md-6 col-sm-8 col-xs-12 col-lg-5">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Step 1 of 2 Information</div>
      </q-card-section>

     
      <q-form @submit.prevent="onSubmit" class="q-gutter-md q-pa-lg">
        <div>
          <q-icon color="primary" size="lg" name="directions_car" />
          <span style="color:#444">Thuampui</span>
        </div>
        <div class="row justify-between">
          <q-input
            label="Entry date"
            class="col-6"
            filled
            v-model="date"
            mask="date"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date :options="optionsFn" v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            label="Entry time"
            class="col-5"
            filled
            v-model="time"
            mask="time"
            :rules="['time']"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <div class="row justify-between">
          <q-input
            label="Exit date"
            class="col-6"
            filled
            v-model="date"
            mask="date"
          >
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy
                  ref="qDateProxy"
                  transition-show="scale"
                  transition-hide="scale"
                >
                  <q-date :options="optionsFn" v-model="date">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-date>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
          <q-input
            label="Exit time"
            class="col-5"
            filled
            v-model="time"
            mask="time"
            :rules="['time']"
          >
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="time">
                    <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
                  </q-time>
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>

        <q-btn label="Continue" type="submit" color="secondary" />
      </q-form>
      <q-separator />
    </q-card>

    <q-card v-else class="col-md-6 col-sm-8 col-xs-12 col-lg-5">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">
          Step 2 of 2 Payment
          <q-img
            src="http://www.prepbootstrap.com/Content/images/shared/misc/creditcardicons.png"
          />
        </div>
      </q-card-section>

      <q-form @submit.prevent="onSubmit" class="q-gutter-md q-pa-lg">
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
      </q-form>
      <q-separator />
    </q-card>

    <!-- <q-pagination v-model="current" :max="5" /> -->
  </div>
</template>

<script>
export default {
  mounted() {
    var today = new Date();

    var add = "";

    console.log("today day" + today.getDate());

    this.date = today.getFullYear() + "/0" + (today.getMonth() + 1);
    "/" + today.getDate();

    if (today.getDate() < 10) add = "0" + today.getDate();
    else add = today.getDate();

    this.date = this.date + "/" + today.getDate();

    console.log("current date: " + this.date);
  },
  data() {
    return {
      date: "2019-02-01 12:44",
      time: "10:56",
      timeWithSeconds: "10:56:00",
      current: 1,
      cardNumber: "",
      expiryDate: "",
      cvc: "",
      cardHolder: "",
      month: "",
      year: ""
    };
  },
  methods: {
    onSubmit() {
      this.current = 2;
    },
    optionsFn(date) {
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
    }
  }
};
</script>
<style></style>
