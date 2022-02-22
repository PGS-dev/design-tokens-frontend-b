import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Colors from "./views/Colors.vue";
import A11y from "./views/A11y.vue";

const routes = [
  { path: "/", component: Colors },
  { path: "/a11y", component: A11y },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.config.productionTip = false;

Vue.use(VueRouter);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
