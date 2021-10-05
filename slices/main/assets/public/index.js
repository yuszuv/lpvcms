// Import your JS here

import "@popperjs/core";
import "@fortawesome/fontawesome-free";
import "bootstrap";
import "./photoswipe";

import Vue from "vue";
import App from "./App.vue";
import ContactToggler from "./ContactToggler.vue";

document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById("app")) {
    new Vue({
      el: "#app",
      render: h => h(App)
    });
  }

  const togglers = document.getElementsByClassName("contact-toggler");
  let res = [];
  for (var i = 0; i < togglers.length; i++) {
    let el = togglers[i];
    const context = { props: { cardId: parseInt(el.dataset.id) } };

    res.push(() => {
      return new Vue({
        el: el,
        render: h => h(ContactToggler, context)
      });
    });
  }
  res.forEach(t => t());
});
