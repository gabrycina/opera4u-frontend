import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import 'animate.css'

const app = createApp(App)

new WaveUI(app, {
})

app.use(router)
app.mount('#app')
