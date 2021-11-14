import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createRootStore } from './store/index';
const app = createApp(App).use(createRootStore()).use(Quasar, quasarUserOptions);
app.use(router);
app.mount('#app');
