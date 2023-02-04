import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createRootStore } from './store/index';
import { createI18n } from 'vue-i18n';
import FlagIcon from 'vue-flag-icon';
const messages = {
    en : {
        home : {
            hello: 'Welcome to my page!',
            disclaimer: 'This is portfolio of sorts, still in the making, where I will post updates regarding my experience, links to my most recent projects and detailed description of myself.',
            contactMe: 'Please contact me 💬',
            appCode: 'If you want to dive into the code of this app, you can do this ',
            linkAlt: 'under this link'
        }
    },
    pl : {
        home : {
            hello: 'Witaj na mojej stronie!',
            disclaimer: 'Jest to swego rodzaju zalążek portfolio, gdzie będą pojawiać się kolejne informacje o moim doświadczeniu, odnośniki do wykonanych projektów czy szerszy opis mojej osoby.',
            contactMe: 'Zachęcam do kontaktu 💬',
            appCode: 'Jeżeli chcesz zajrzeć w kod tej aplikacji możesz to zrobić ',
            linkAlt: 'pod tym linkiem'
        }
    }
    
    };
    const i18n = new createI18n({
        locale: 'pl',
        fallbackLocale: 'en',
        globalInjection: true,
        legacy: false,
        messages
    });
const app = createApp(App).use(createRootStore()).use(Quasar, quasarUserOptions);
app.use(router);
app.use(i18n);
app.use(FlagIcon);
app.mount('#app');
