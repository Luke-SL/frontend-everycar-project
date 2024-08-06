<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlePasswordReset()">
      <p class="col-12 text-h5 text-center">Reset Password</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="New Password"
          v-model="password"
          type="password"
          lazy-rules
          :rules="[
            (val) => (val && val.length >= 8) || 'Please type your Email',
          ]"
        />

        <div class="full-width">
          <q-btn
            label="Send new password"
            color="primary"
            class="full-width"
            outline
            rounded
            type="submit"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>
<script>
import { ref } from "vue";
import useAuthUser from "src/composables/useAuthUser";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { resetPassword } = useAuthUser();

    const router = useRouter();

    const password = ref(null);

    const handlePasswordReset = async () => {
      await resetPassword(password.value);
      router.push({ name: "login" });
    };

    return {
      password,
      handlePasswordReset,
    };
  },
};
</script>
