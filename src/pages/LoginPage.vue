<template>
  <q-page Padding>
    <div class="q-mt-xl">
      <q-form class="row justify-center">
        <p class="col-12 text-h5 text-center">Sign In</p>
        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
          <q-input
            v-model="email"
            label="Email"
            type="email"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type your Email',
            ]"
          />
          <q-input
            v-model="password"
            label="Password"
            type="password"
            lazy-rules
            :rules="[
              (val) =>
                (val !== null && val !== '') || 'Please type your password',
              ((val) => val.length >= 8) ||
                'A senha precisa ter no mínimo 8 caracteres',
            ]"
          />
          <div class="full-width q-pt-md">
            <q-btn
              label="Login"
              color="grey-8"
              class="full-width"
              rounded
              type="submit"
            />
          </div>
          <div class="full-width q-gutter-y-sm">
            <q-btn
              label="Register"
              color="grey-7"
              class="full-width"
              flat
              rounded
              to="register"
              size="sm"
            />
            <q-btn
              label="Fogot Password?"
              color="grey-7"
              class="full-width"
              flat
              rounded
              to="forgot-password"
              size="sm"
            />
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LoginPage",
  setup() {
    const email = ref("");
    const password = ref("");
    const form = ref({
      email,
      password,
    });
    return {
      email,
      password,
    };
  },
};
</script>
