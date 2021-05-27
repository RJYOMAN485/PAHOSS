<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-cyan-8">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          PAHOSS Smart Parking
        </q-toolbar-title>

        <q-item to="/mybookings" class="q-ml-md" clickable>
          <q-item-section>
            <q-item-label>Bookings</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/contact" class="q-ml-md" clickable>
          <q-item-section>
            <q-item-label>Contact us</q-item-label>
          </q-item-section>
        </q-item>

        <q-btn-dropdown rounded flat icon="account_circle" color="white">
          <q-list class="q-pa-sm">
            <q-item
              style="min-height: 0!important"
              to="/profile"
              clickable
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Profile</q-item-label>
              </q-item-section>
            </q-item>

            <!-- <q-item
              style="min-height: 0!important"
              to="/admin"
              clickable
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Roles</q-item-label>
              </q-item-section>
            </q-item> -->

            <q-item style="min-height: 0!important" clickable v-close-popup>
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
      style="color:#444"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-expansion-item
          expand-separator
          icon="perm_identity"
          label="Bookings"
        >
          <q-item to="/booking/today" class="q-ml-md" clickable>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Today's Booking</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/booking/active" class="q-ml-md" clickable>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Active Booking</q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/bookings" class="q-ml-md" clickable>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Bookings</q-item-label>
            </q-item-section>
          </q-item>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Home",

    icon: "school",
    link: "/admin"
  },
  {
    title: "Parking Zones",

    icon: "school",
    link: "/parking-zones"
  },
  {
    title: "Clients",
    icon: "code",
    link: "/clients"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>
