<template>
  <div class="q-pa-md">
    <q-markup-table flat bordered>
      <thead class="bg-teal">
        <tr>
          <th colspan="6">
            <div class="row no-wrap items-center">
              <div class="text-h5 q-ml-md text-white">Clients</div>
            </div>
          </th>
        </tr>
        <tr style="color: #444">
          <th class="text-left">Name</th>
          <th class="text-right">Contact</th>
          <th class="text-right">Email</th>
          <th class="text-right">Address</th>
          <th class="text-right">Car type</th>
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
            />
            <q-btn
              size="sm"
              round
              flat
              class="bg-grey-3 customBtn"
              color="red-3"
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
              color="red-3"
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
              color="red-3"
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
      columns: [
        {
          name: "name",
          required: true,
          label: "Dessert (100g serving)",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "name",
          align: "center",
          label: "Name",
          field: "name",
          sortable: true
        },
        { name: "email", label: "Email", field: "email", sortable: true },
        { name: "contact", label: "Contact", field: "contact" },
        { name: "protein", label: "Protein (g)", field: "protein" },
        { name: "sodium", label: "Sodium (mg)", field: "sodium" },
        {
          name: "calcium",
          label: "Calcium (%)",
          field: "calcium",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "iron",
          label: "Iron (%)",
          field: "iron",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        }
      ],

      data: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: "14%",
          iron: "1%"
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: "8%",
          iron: "1%"
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: "6%",
          iron: "7%"
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: "3%",
          iron: "8%"
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: "7%",
          iron: "16%"
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: "0%",
          iron: "0%"
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: "0%",
          iron: "2%"
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: "0%",
          iron: "45%"
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: "2%",
          iron: "22%"
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: "12%",
          iron: "6%"
        }
      ]
    };
  }
};
</script>

<style></style>
