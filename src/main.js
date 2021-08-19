import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'
import 'animate.css'
import titleMixin from './mixins/titleMixin'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false


new WaveUI(app, {
})

app.mixin(titleMixin)
app.use(router)
app.mount('#app')
