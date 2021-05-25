<template>
  <div class="q-pa-md">
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
    <q-dialog v-model="edit">
      <q-card style="min-width:300px;max-width:600px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Update Parking</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-form class="q-gutter-md q-pa-lg">
          <q-input
            color="secondary"
            dense
            label="Name"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
          </q-input>

          <q-input
            color="secondary"
            dense
            label="Latitude"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
          </q-input>

          <q-input
            color="secondary"
            dense
            label="Longitude"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
          >
          </q-input>

          <q-input
            color="secondary"
            dense
            label="Available Time"
            :rules="[val => (val && val.length == 10) || 'Maximum 10 digits']"
          >
          </q-input>

          <q-select
            dense
            outlined
            label="Available Space"
            lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type something']"
            flat
          >
          </q-select>

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
    <q-markup-table flat bordered>
      <thead class="bg-grey">
        <tr>
          <th colspan="6">
            <div class="row no-wrap items-center">
              <div class="text-h5 q-ml-md text-white">Parking Zones</div>
              <q-space />
              <q-btn to="/parking/new" dense icon="add" color="green" label="New Parking" />
            </div>
          </th>
        </tr>
        <tr style="color: #444">
          <th class="text-left">Name</th>
          <th class="text-right">Latitude</th>
          <th class="text-right">Longitude</th>
          <th class="text-right">Available Space</th>
          <th class="text-right">Available Time</th>
          <th class="text-right">Actions</th>
        </tr>
      </thead>
      <tbody style="color: #555555" class="bg-grey-3">
        <tr>
          <td class="text-left">Frozen Yogurt</td>
          <td class="text-right">159</td>
          <td class="text-right">6</td>
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
              @click="editDialog"
            />
            <q-btn
              size="sm"
              round
              flat
              class="bg-grey-3 customBtn"
              color="red-5"
              icon="delete"
            />
          </td>
        </tr>
        <tr>
          <td class="text-left">Ice cream sandwich</td>
          <td class="text-right">237</td>
          <td class="text-right">9</td>
          <td class="text-right">37</td>
          <td class="text-right">4.3</td>

          <td class="text-right">
            <q-btn
              size="sm"
              round
              flat
              class="bg-grey-3 customBtn"
              color="green"
              icon="edit"
            />
            <q-btn
              size="sm"
              round
              flat
              class="bg-grey-3 customBtn"
              color="red-5"
              icon="delete"
            />
          </td>
        </tr>
        <tr>
          <td class="text-left">Eclair</td>
          <td class="text-right">262</td>
          <td class="text-right">16</td>
          <td class="text-right">23</td>
          <td class="text-right">6</td>

          <td class="text-right">
            <q-btn
              size="sm"
              round
              flat
              class="bg-grey-3 customBtn"
              color="green"
              icon="edit"
            />
            <q-btn
              size="sm"
              round
              flat
              class="bg-grey-3 customBtn"
              color="red-5"
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
      confirm: false,
    };
  },
  methods: {
    editDialog() {
      this.edit = true;
    }
  }
};
</script>

<style></style>
