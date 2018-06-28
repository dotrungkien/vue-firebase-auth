// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

let app
let config = {
  apiKey: 'AIzaSyA3ZLM5SNLQrPxZFmIxAJCKXlnTxbw9i_E',
  authDomain: 'vue-firebase-tutorial-d5d0d.firebaseapp.com',
  databaseURL: 'https://vue-firebase-tutorial-d5d0d.firebaseio.com',
  projectId: 'vue-firebase-tutorial-d5d0d',
  storageBucket: 'vue-firebase-tutorial-d5d0d.appspot.com',
  messagingSenderId: '486078846453'
}

firebase.initializeApp(config)
firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})
