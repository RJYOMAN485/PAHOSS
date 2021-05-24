<template>
  <div
    style="min-height:100vh;"
    class="row flex flex-center q-gutter-md custombg"
  >
    <q-card
      class="my-card q-pa-md col"
      style="max-width: 600px;border: 3px solid #26A69A;"
    >
      <q-card-section class="bg-grey-8 text-white">
        <div class="text-h6 text-center">User Registration</div>
      </q-card-section>

      <q-card-section class="bg-red-5 q-mt-sm" v-if="this.errorMessage">
        <div class="text-white text-weight-light">{{ this.errorMessage }}</div>
      </q-card-section>
      <q-card-section>
        <q-form @submit="submitForm" class="q-gutter-md">
          <q-input
            v-model="formData.name"
            :rules="[val => (val && val.length > 0) || 'Please type something']"
            color="purple-12"
            label="Name"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>

          <q-input
            v-model="formData.email"
            :rules="[val => (val && val.length > 0) || 'Please type something']"
            color="purple-12"
            label="Mobile no"
            type="email"
          >
            <template v-slot:prepend>
              <q-icon name="call" />
            </template>
          </q-input>

          <q-input
            v-model="formData.email"
            :rules="[val => (val && val.length > 0) || 'Please type something']"
            color="purple-12"
            label="Car type"
          >
            <template v-slot:prepend>
              <q-icon name="directions_car" />
            </template>
          </q-input>

          <q-radio
            required
            v-model="formData.gender"
            color="secondary"
            val="male"
            label="Male"
          />
          <q-radio
            required
            v-model="formData.gender"
            color="secondary"
            val="female"
            label="Female"
          />

          <q-input
            v-model="formData.email"
            :rules="[val => (val && val.length > 0) || 'Please type something']"
            color="purple-12"
            label="Address"
          >
            <template v-slot:prepend>
              <q-icon name="home" />
            </template>
          </q-input>

          <q-input
            v-model="formData.email"
            :rules="[val => (val && val.length > 0) || 'Please type something']"
            color="purple-12"
            label="Password"
            type="password"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>

          <q-input
            v-model="formData.email"
            :rules="[val => (val && val.length > 0) || 'Please type something']"
            color="purple-12"
            label="Confirm Password"
            type="email"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
        </q-form>

        <div class="text-green q-mt-md" style="max-width:430px;display:flex">
          <small class=""
            ><q-icon name="info" size="xs" />Already have an account ?
            <q-btn
              size="xs"
              to="/login"
              flat
              color="blue"
              dense
              label="Login"
            />
            page instead
          </small>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapState } from "vuex";
import axios from "axios";
export default {
  computed: {
    ...mapState("store", ["errorMessage"])
  },

  // created() {
  //   axios
  //     .get(this.$store.state.store.APP_URL + "user")
  //     .then(response => {
  //       // return true;
  //     })
  //     .catch(err => {
  //       console.error = () => {};

  //       console.log("not logged", err.message);
  //     });
  // },

  data() {
    return {
      name: null,
      age: null,
      loading: false,

      accept: false,

      errors: [],

      formData: {
        name: "",
        email: "",
        password: "",
        contact: "",
        car_type: "",
        roles: "user",
        gender: "female"
      },
      error: {}
    };
  },

  methods: {
    async submitForm() {
      this.loading = true;
      console.log("submitted");

      localStorage.removeItem("token");
      // this.loginUser(this.formData)

      await this.$axios
        .get("http://127.0.0.1:8000/sanctum/csrf-cookie")
        .then(response => {
          // console.log(response);
          this.$axios
            .post("http://127.0.0.1:8000/login", this.formData)
            .then(response => {
              // return console.log(response.data);
              this.loading = false;

              // localStorage.setItem('token',response.data)
              console.log("server response", response.data);

              // this.$store.commit('setUserDetails',response.data);

              this.loginUser(response.data);

              console.log("userDetails", this.$store.state.store.userDetails);
              if (response.data.roles == "admin")
                this.$router.replace("/dashboard");
              else {
                console.log("redirect to validate");
                this.$router.replace("/validate-lisence");
              }
              // console.log(response.data);
              console.log(
                "store email",
                this.$store.state.store.userDetails.email
              );
            })
            .catch(error => {
              // return console.log(error.message);
              this.loading = false;
              this.errors = error.response.data.errors;
              this.$q.notify({
                message: error.message,
                color: "red-4",
                position: "top",
                icon: "warning"
              });
            });
        });
    }
  }
};
</script>

<style lang="sass" scoped>

.custombg
  // background: linear-gradient(rgba(255,255,255,.5), rgba(200,240,240,.5)),url(../assets/mining.jpg)
  // background: url(../assets/mining.jpg)
  background-size: cover
  background-repeat: no-repeat
  background-position: center
  // background: #6190E8 /* fallback for old browsers */
  // background: -webkit-linear-gradient(to top, #A7BFE8, #6190E8)  /* Chrome 10-25, Safari 5.1-6 */
  // background: linear-gradient(to top, #A7BFE8, #6190E8) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
.my-card
</style>
