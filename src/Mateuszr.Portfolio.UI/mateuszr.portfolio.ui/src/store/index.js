import Vue from 'vue';
import Vuex from 'vuex';
import createContactStore from './modules/contact';


Vue.use(Vuex);
const isDebug = process.env.NODE_ENV !== 'production'
function createRootStore() {
    return new Vuex.Store({
        modules: {
            home: createHomeStore(),
            cv: createCvStore(),
            contact: createContactStore(),
            skills: createSkillsStore(),
            description: createDescriptionStore()
        },
        strict: isDebug,
        plugins: isDebug ? [createLogger()] : []
    });
}
export {createRootStore};