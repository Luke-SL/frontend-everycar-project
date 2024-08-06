<template>
  <q-page Padding>
    <div class="q-mt-xl">
      <q-form class="row justify-center" @submit.prevent="handleLogin()">
        <p class="col-12 text-h5 text-center">Sign In</p>
        <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
          <q-input
            v-model="email"
            label="Email"
            type="email"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Informe o seu Email']"
          />
          <q-input
            v-model="password"
            label="Senha"
            type="password"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Informe a sua Senha',
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
              label="Registrar"
              color="grey-7"
              class="full-width"
              flat
              rounded
              to="sign-up"
              size="sm"
            />
            <q-btn
              label="Esqueceu a senha?"
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
import { onMounted, ref } from "vue";
import useAuthUser from "src/composables/useAuthUser.js";
import useNotify from "src/composables/useNotify";
import { useRouter } from "vue-router";

export default {
  name: "LoginPage",
  setup() {
    const router = useRouter();
    const { signIn } = useAuthUser();
    const { notifySuccess, notifyError } = useNotify();

    const email = ref("");
    const password = ref("");

    const handleLogin = async () => {
      const form = ref({
        email: email.value,
        password: password.value,
      });
      try {
        await signIn(form.value);
        notifySuccess("Login realizado com sucesso!");
        router.push({ name: "me" });
      } catch (error) {
        notifyError("Email ou senha incorretos!");
      }
    };

    return {
      email,
      password,
      handleLogin,
    };
  },
};
</script>
