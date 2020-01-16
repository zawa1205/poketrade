import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'
import router from './router'
import store from "./index"

Vue.config.productionTip = false

Vue.use(VueRouter)

var firebaseConfig = {
  apiKey: "AIzaSyBgUHIc9A30QI8u23cd60fO_v0Xtbid6uQ",
  authDomain: "poketrade-86862.firebaseapp.com",
  databaseURL: "https://poketrade-86862.firebaseio.com",
  projectId: "poketrade-86862",
  storageBucket: "poketrade-86862.appspot.com",
  messagingSenderId: "721012930675",
  appId: "1:721012930675:web:ff48fae38e1d494cb85206",
  measurementId: "G-4QHFPZS0LC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')