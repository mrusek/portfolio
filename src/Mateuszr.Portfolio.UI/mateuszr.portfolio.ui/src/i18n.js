import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);


const labels = {
'en' : {},
'pl' : {}

};

export const i18n = new VueI18n({
    locale: 'pl',
    fallbackLocale: 'en',
    labels
});
