import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "tailwindcss/tailwind.css";
Vue.directive("click-outside", {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (
        !(el == event.target || el.contains(event.target)) &&
        !event.target.classList.contains("exceptItem")
      ) {
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.body.removeEventListener("click", el.clickOutsideEvent);
  },
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
