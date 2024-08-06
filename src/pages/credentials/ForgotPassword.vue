<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handlePasswordForgot()">
      <p class="col-12 text-h5 text-center">Reset Password</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input
          label="Email"
          v-model="email"
          type="email"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Please type your Email',
          ]"
        />

        <div class="full-width">
          <q-btn
            label="Send Reset Email"
            color="grey-7"
            class="full-width"
            outline
            rounded
            type="submit"
          />
        </div>
        <div class="full-width">
          <q-btn
            label="Back"
            color="grey-7"
            class="full-width"
            rounded
            flat
            :to="{ name: 'login' }"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>
<script>
import useAuthUser from "src/composables/useAuthUser";
import useNotify from "src/composables/useNotify";
import { ref } from "vue";

export default {
  setup() {
    const { sendPasswordRestEmail } = useAuthUser();
    const { notifyError, notifySuccess } = useNotify();

    const email = ref("");

    const handlePasswordForgot = async () => {
      try {
        await sendPasswordRestEmail(email.value);
        notifySuccess(`Password reset email sent to: ${email.value}`);
      } catch (error) {
        notifyError(error.message);
      }
    };

    return {
      email,
      handlePasswordForgot,
    };
  },
};
</script>
