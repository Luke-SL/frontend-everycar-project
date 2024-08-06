<template>
  <q-page Padding>
    <div class="q-mt-xl">
      <q-form
        class="row justify-center q-pa-xl col-12"
        @submit.prevent="handlerRegister()"
      >
        <div class="col-md-4 q-gutter-y-md">
          <div class="row q-gutter-sm justify-center">
            <q-input
              label="Nome"
              v-model="name"
              type="text"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type your name',
              ]"
              class="name-input"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-input
              label="Sobrenome"
              v-model="surname"
              type="text"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type your name',
              ]"
              class="name-input"
            >
              <template v-slot:prepend>
                <q-icon name="mdi-pencil" />
              </template>
            </q-input>
          </div>
          <q-input
            label="Email"
            v-model="email"
            type="email"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type your Email',
            ]"
          >
            <template v-slot:prepend>
              <q-icon name="mdi-email" />
            </template>
          </q-input>
          <q-input
            label="Senha"
            v-model="password"
            type="password"
            :rules="[
              ((val) => val.length >= 8) ||
                'A senha precisa ter no mínimo 8 caracteres',
              (val) => (val !== null && val !== '') || 'Informe uma senha',
            ]"
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock" />
            </template>
          </q-input>
          <q-input
            label="Senha"
            v-model="retype_password"
            type="password"
            :rules="[
              ((val) => val.length >= 8) ||
                'A senha precisa ter no mínimo 8 caracteres',
              (val) => (val !== null && val !== '') || 'Informe uma senha',
            ]"
            lazy-rules
          >
            <template v-slot:prepend>
              <q-icon name="mdi-lock-question" />
            </template>
          </q-input>
          <div class="row justify-center q-gutter-md">
            <q-page-sticky
              v-if="$q.platform.is.mobile"
              position="bottom-left"
              :offset="[18, 18]"
            >
              <q-btn
                fab
                icon="mdi-arrow-left-bottom"
                color="grey-7"
                :to="{ name: 'login' }"
              />
            </q-page-sticky>
            <q-btn
              color="grey-7"
              label="Voltar"
              icon="mdi-arrow-left-bottom"
              outline
              :to="{ name: 'login' }"
              class="back-button"
            />
            <q-btn
              color="grey-7"
              label="Enviar"
              icon="mdi-send"
              type="submit"
            />
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import useAuthUser from "src/composables/useAuthUser";
import useNotify from "src/composables/useNotify";
import { useRouter } from "vue-router";

export default {
  name: "RegisterPage",
  setup() {
    const name = ref("");
    const surname = ref("");
    const email = ref("");
    const password = ref("");
    const retype_password = ref("");

    const router = useRouter();
    const { register } = useAuthUser();
    const { notifySuccess, notifyError } = useNotify();

    const handlerRegister = async () => {
      const form = ref({
        name: name.value,
        surname: surname.value,
        email: email.value,
        password: password.value,
        retype_password: retype_password.value,
      });

      try {
        await register(form.value);
        notifySuccess("Usuário cadastrado com sucesso!");
        router.push({
          name: "email-confirmation",
          query: { name: name.value },
        });
      } catch (error) {
        notifyError(error.message);
      }
    };
    return { name, surname, email, password, retype_password, handlerRegister };
  },
};
</script>
