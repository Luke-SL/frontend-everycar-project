<template>
  <q-page padding>
    <div class="justify-center div-margin q-gutter-sm">
      <h1>Confirme o seu Email</h1>
      <q-separator />
      <q-img src="./assets/email.png" class="img-email" />
      <h2>
        Olá <span class="text-primary">{{ $route.query.name }}</span>
      </h2>
      <p>
        Enviamos um email para o ser correio eletrônica. Por favor, verifique-o
        para completar o seu cadastro.
      </p>
      <q-btn
        class="btn-primary"
        color="grey-7"
        label="Voltar"
        icon="mdi-arrow-left-bold"
        @click="$router.push({ name: 'login' })"
      />
    </div>
  </q-page>
</template>

<script></script>
