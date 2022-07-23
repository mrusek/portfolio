import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createRootStore } from './store/index';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
const app = createApp(App).use(createRootStore()).use(Quasar, quasarUserOptions);
app.use(router);
app.use(i18n);
app.use(FlagIcon);
app.mount('#app');
