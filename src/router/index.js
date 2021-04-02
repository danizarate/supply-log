import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contactanos from "../views/Contactanos.vue"
import Notfound from '../views/Notfound.vue'
import Compras from '../views/Compras.vue'
import Repuestos from '../views/Repuestos.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Contactanos",
    name: "Contactanos",
    component: Contactanos,
  },
  {
    path: "/Compras",
    name: "Compras",
    component: Compras,
  },
  {
    path: "/Repuestos",
    name: "Repuestos",
    component: Repuestos,
  },
  {
    path: '/404',
    name: '404',
    component: Notfound
  },
  { 
    path: "/:catchAll(.*)", 
    redirect: '/404' 
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
