import {createStore} from 'vuex';
import createContactStore from './modules/contact';
import createSkillsStore from './modules/skills';
import createCvStore from './modules/cv';
import createDescriptionStore from './modules/description';
import createHomeStore from './modules/home';
import {createLogger} from 'vuex';

const isDebug = process.env.NODE_ENV !== 'production'
function createRootStore() {
    return createStore({
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