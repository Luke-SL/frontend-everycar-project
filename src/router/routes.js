const routes = [
  // anyone session
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "index",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },
  // auth user session
  {
    path: "/",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "me",
        name: "me",
        component: () => import("src/pages/IndexPage.vue"),
      },
      {
        path: "write",
        name: "write",
        component: () => import("src/pages/WriterPage.vue"),
      },
    ],
    meta: {
      requiresAuth: true,
    },
  },
  // credentials manipulation session
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("src/pages/credentials/LoginPage.vue"),
      },
      {
        path: "sign-up",
        name: "sign-up",
        component: () => import("src/pages/credentials/RegisterPage.vue"),
      },
      {
        path: "email-confirmation",
        name: "email-confirmation",
        component: () => import("src/pages/credentials/EmailConfirmation.vue"),
      },
      {
        path: "forgot-password",
        name: "forgot-password",
        component: () => import("src/pages/credentials/ForgotPassword.vue"),
      },
      {
        path: "reset-password",
        name: "reset-password",
        component: () => import("src/pages/credentials/ResetPassword.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
