import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import VueAxios from 'vue-axios'
import axios from 'axios'


const app = createApp(App)

app.use(router)
app.use(store)
app.use(VueAxios,axios)

app.mount('#app')
