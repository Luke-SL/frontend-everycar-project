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
        <q-btn-dropdown
          flat
          color="white"
          icon="person"
          :label="$q.platform.is.mobile ? '' : `${user.user_metadata.name}`"
        >
          <q-list>
            <q-item
              clickable
              v-if="user.user_metadata.is_writer"
              :to="{ name: 'write' }"
            >
              <q-item-section>
                <q-item-label
                  ><q-icon name="mdi-fountain-pen" /> Escrever</q-item-label
                >
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="handleLogout">
              <q-item-section>
                <q-item-label class="text-negative"
                  ><q-icon name="mdi-logout" /> Sair</q-item-label
                >
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
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
import useAuthUser from "src/composables/useAuthUser";
import useNotify from "src/composables/useNotify";
import { useRouter } from "vue-router";

export default {
  name: "MainLayout",
  components: { EssentialLink },
  setup() {
    const $q = useQuasar();
    const router = useRouter();
    const leftDrawerOpen = ref(false);
    const { notifySuccess } = useNotify();

    const { logout, user } = useAuthUser();

    console.log();

    const handleLogout = async () => {
      $q.dialog({
        title: "Logout",
        message: "Tem certeza que quer sair?",
        cancel: true,
        cancelLabel: "No",
        ok: true,
        okLabel: "Yes",
        color: "negative",
        persistent: true,
      }).onOk(async () => {
        await logout();
        notifySuccess("Você saiu!");
        router.replace({ name: "index" });
      });
    };

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }

    return { linksList, leftDrawerOpen, user, toggleLeftDrawer, handleLogout };
  },
};
</script>
