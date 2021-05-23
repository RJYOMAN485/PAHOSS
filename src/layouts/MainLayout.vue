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

        <q-btn rounded flat label="Bookings" />
        <q-btn rounded flat label="Contact" />
        <q-btn rounded flat label="Know More" />

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

            <q-item
              style="min-height: 0!important"
              to="/admin"
              clickable
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Roles</q-item-label>
              </q-item-section>
            </q-item>

            <q-item
              style="min-height: 0!important"
              @click="logout"
              clickable
              v-close-popup
            >
              <q-item-section>
                <q-item-label>Logout</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-drawer
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
          <q-item clickable tag="a" target="_blank" :href="link">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>
          </q-item>
          <q-card>
            <q-card-section>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              eius reprehenderit eos corrupti commodi magni quaerat ex numquam,
              dolorum officiis modi facere maiores architecto suscipit iste
              eveniet doloribus ullam aliquid.
            </q-card-section>
          </q-card>
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
    link: "https://quasar.dev"
  },
  {
    title: "Parking Zones",

    icon: "school",
    link: "https://quasar.dev"
  },
  {
    title: "Clients",
    icon: "code",
    link: "https://github.com/quasarframework"
  },
  {
    title: "Discord Chat Channel",
    caption: "chat.quasar.dev",
    icon: "chat",
    link: "https://chat.quasar.dev"
  },
  {
    title: "Forum",
    caption: "forum.quasar.dev",
    icon: "record_voice_over",
    link: "https://forum.quasar.dev"
  },
  {
    title: "Twitter",
    caption: "@quasarframework",
    icon: "rss_feed",
    link: "https://twitter.quasar.dev"
  },
  {
    title: "Facebook",
    caption: "@QuasarFramework",
    icon: "public",
    link: "https://facebook.quasar.dev"
  },
  {
    title: "Quasar Awesome",
    caption: "Community Quasar projects",
    icon: "favorite",
    link: "https://awesome.quasar.dev"
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
