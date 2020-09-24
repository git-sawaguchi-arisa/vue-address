import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC-ejhpfGOWaQJU54Mug1PtDcb-UCimS_I",
    authDomain: "my-vue-project-d01cc.firebaseapp.com",
    databaseURL: "https://my-vue-project-d01cc.firebaseio.com",
    projectId: "my-vue-project-d01cc",
    storageBucket: "my-vue-project-d01cc.appspot.com",
    messagingSenderId: "676797474983",
    appId: "1:676797474983:web:11c21df770585a32cbd382",
    measurementId: "G-DCJXD5VKPX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
