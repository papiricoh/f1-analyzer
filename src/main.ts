import { createApp } from 'vue'
import "./style.css"
import App from './App.vue'
import './samples/node-api'
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

library.add(faFlag)
library.add(faXmark)

const app = createApp(App)

app.use(store);

app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
