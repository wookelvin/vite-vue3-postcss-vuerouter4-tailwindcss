import { createApp } from 'vue'
// TypeScript error? Run VSCode command
// TypeScript: Select TypeScript version - > Use Workspace Version
import App from './App.vue'
import { router } from './router'

import './styles/index.css'

createApp(App)
  .use(router)
  .mount('#app')
