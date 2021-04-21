import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Contactanos from "../views/Contactanos.vue"
import Cotizador from '../views/Cotizador.vue'
import Notfound from '../views/Notfound.vue'
import Compras from '../views/Compras.vue'
import Repuestos from '../views/Repuestos.vue'
import LandingAllenbradley from '../views/LandingAllenbradley.vue'
import LandingAtlas from '../views/LandingAtlas.vue'
import LandingCat from '../views/LandingCat.vue'
import LandingEpiroc from '../views/LandingEpiroc.vue'
import LandingFleetguard from '../views/LandingFleetguard.vue'
import LandingFluke from '../views/LandingFluke.vue'
import LandingKomatsu from '../views/LandingKomatsu.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Contactanos",
    name: "Contactanos",
    component: Contactanos
  },
  {
    path: "/Cotizador",
    name: "Cotizador",
    component: Cotizador
  },
  {
    path: "/Compras",
    name: "Compras",
    component: Compras
  },
  {
    path: "/Repuestos",
    name: "Repuestos",
    component: Repuestos
  },
  {
    path: "/LandingAllenbradley",
    name: "LandingAllenbradley",
    component: LandingAllenbradley
  },
  {
    path: "/LandingAtlas",
    name: "LandingAtlas",
    component: LandingAtlas
  },
  
  {
    path: "/LandingCat",
    name: "LandingCat",
    component: LandingCat
  },
  {
    path: "/LandingEpiroc",
    name: "LandingEpiroco",
    component: LandingEpiroc
  },
  {
    path: "/LandingFleetguard",
    name: "LandingFleetguard",
    component: LandingFleetguard
  },
  {
    path: "/LandingFluke",
    name: "LandingFluke",
    component: LandingFluke
  },
  {
    path: "/LandingKomatsu",
    name: "LandingKomatsu",
    component: LandingKomatsu
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
