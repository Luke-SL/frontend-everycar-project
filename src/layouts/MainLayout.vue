<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-img src="./assets/LogoDashBoard.png" style="width: 100px" />
        </q-toolbar-title>

        <q-btn flat color="white" icon="mdi-facebook">
          <q-tooltip class="bg-primary" :offset="[10, 10]">
            FaceBook
          </q-tooltip>
        </q-btn>
        <q-btn flat color="white" icon="mdi-instagram">
          <q-tooltip class="bg-purple-7" :offset="[10, 10]">
            Instagram
          </q-tooltip>
        </q-btn>
        <q-btn
          flat
          color="white"
          icon="person"
          :label="$q.platform.is.mobile ? '' : 'Sign In'"
          :to="{ name: 'login' }"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import linksList from "./sideTable";
import EssentialLink from "components/EssentialLink.vue";
import { useQuasar } from "quasar";

export default {
  name: "MainLayout",
  components: { EssentialLink },
  setup() {
    const $q = useQuasar();

    const leftDrawerOpen = ref(false);

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return { linksList, leftDrawerOpen, toggleLeftDrawer };
  },
};
</script>
