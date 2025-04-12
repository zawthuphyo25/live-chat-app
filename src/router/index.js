import Chatroom from "@/views/Chatroom.vue";
import Welcome from "@/views/Welcome.vue";
import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/firebase/config";

const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if (!user) {
        next();
      } else {
        next({ name: "Chatroom" });
      }
    },
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if (user) {
        next();
      } else {
        next("/");
      }
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
