import * as contactService from '../../api/contactService';
const state = () => ({
    telegram: '',
    github: '',
    linkedin: '',

})
const mutations = {
    setTelegram(state, telegram) {
        state.telegram = telegram;
    },
    setLinkedin(state, linkedin) {
        state.linkedin = linkedin;
    },
    setGithub(state, github) {
        state.github = github;
    }
}
const actions = {
    async fetchGithub({ commit }) {
    const text = await contactService.getGithub();
     commit('setGithub',text);
    },
    async fetchLinkedin ({commit}) {
        const text = await contactService.getLinkedin();
        commit('setLinkedin',text);
    },
    async fetchTelegram ({commit}) {
        const text = await contactService.getTelegram();
        commit('setTelegram',text);
    }
}
const getters = {
    linkedin: state => {return state.linkedin},
    github: state => {return  state.github },
    telegram: state => {return state.telegram}
}

export default function createContactStore() {
    return {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    };
}