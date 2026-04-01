import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/auth/loginView.vue";
import SignupView from "@/views/auth/signupView.vue";
import DashboardView from "@/views/dashboard/dashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/signup",
      name: "signup",
      component:SignupView,
    },
    {
      path: "/",
      name: "dashborad",
      component: DashboardView
    }
  ],
});

export default router;
