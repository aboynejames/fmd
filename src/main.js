/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// Plugins
import { registerPlugins } from '@/plugins'

import App from './App.vue'
import router from './router'

const app = createApp(App)

registerPlugins(app)

app.use(createPinia())
app.use(router)

app.mount('#app')

