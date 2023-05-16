import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import './samples/node-api'
import store from './store';

const app = createApp(App)

app.use(store);

app.mount('#app').$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
