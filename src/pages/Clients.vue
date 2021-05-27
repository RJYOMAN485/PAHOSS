<template>
  <div class="q-pa-md">
    <q-dialog v-model="edit">
      <q-card style="min-width:300px;max-width:600px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Update Client</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-form class="q-gutter-md q-pa-lg">
          <q-input
            v-model="formData.name"
            color="secondary"
            dense
            label="Name"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
          </q-input>

          <q-input
            v-model="formData.contact"
            color="secondary"
            dense
            type="number"
            label="Contact"
            lazy-rules
            :rules="[val => (val && val.length == 10) || 'Length shoud be 10']"
          >
          </q-input>

          <q-input
            v-model="formData.email"
            color="secondary"
            dense
            label="Email"
            type="email"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
          </q-input>

          <div style="display:flex">
            <div class="q-mr-sm">Sex</div>
            <q-radio
              dense
              required
              v-model="formData.gender"
              color="secondary"
              val="male"
              label="Male"
            />
            <q-radio
              class="q-ml-sm"
              dense
              required
              v-model="formData.gender"
              color="secondary"
              val="female"
              label="Female"
            />
          </div>

          <q-input
            v-model="formData.car_type"
            color="secondary"
            dense
            label="Car type"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
          </q-input>

          <q-input
            v-model="formData.address"
            color="secondary"
            dense
            label="Address"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
          </q-input>

          <div>
            <q-btn
              label="Update"
              class="full-width"
              type="submit"
              color="secondary"
            />
          </div>
        </q-form>
      </q-card>
    </q-dialog>
    <q-dialog v-model="confirm">
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="secondary" text-color="white" />
          <span class="q-ml-sm">Are you sure you want to delete ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="secondary" v-close-popup />
          <q-btn
           
            label="Confirm"
            color="red-5"
            v-close-popup
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="7">
            <div class="row no-wrap items-center">
              <div class="text-h5 q-ml-md text-white">Clients</div>
            </div>
          </th>
        </tr>
        <tr style="color: #444">
          <th class="text-left">Name</th>
          <th class="text-right">Contact</th>
          <th class="text-right">Email</th>
          <th class="text-right">Gender</th>
          <th class="text-right">Car type</th>
          <th class="text-right">Address</th>
          <th class="text-right">Actions</th>
        </tr>
      </thead>
      <tbody style="color: #555555" class="bg-grey-3">
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
          <th class="text-right">Female</th>
          <td class="text-right">24</td>
          <td class="text-right">4</td>
          <td class="text-right">
            <q-btn
              size="sm"
              round
              flat
              class="bg-grey-3 customBtn"
              color="green"
              icon="edit"
              @click="edit = true"
            />
            <q-btn
              size="sm"
              round
              flat
              class="bg-grey-3 customBtn"
              color="red-3"
              @click="confirm = true"
              icon="delete"
            />
          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      edit: false,
      formData: {
        name: "",
        contact: "",
        address: "",
        gender: "male",
        email: "",
        address: "",
        car_type: ""
      },
      confirm: false
    };
  }
};
</script>

<style></style>
