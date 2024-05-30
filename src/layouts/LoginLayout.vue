<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark">
        <q-toolbar-title>
          <q-btn :to="{ name: 'index' }">
            <q-img src="./assets/LogoDashBoard.png" style="width: 100px" />
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LoginLayout",
  setup() {},
};
</script>
