import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import './assets/base.css'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    //clientId: '563649859984-tqqdvdd37ktfp23g5bbv79up6939clck.apps.googleusercontent.com'
    clientId: '610321883958-8a7ft04tj2bb4uhpjvsthe8m50aol5uq.apps.googleusercontent.com'
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
