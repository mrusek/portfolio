import * as cvService from '../../api/cvService';
const state = () => ({
    firstPositionDescription: '',
    secondPositionDescription: '',
    thirdPositionDescription: '',
    cvUrl: ''
})
const mutations = {
    setFirstPositionDescription: (state,text) => {
        state.firstPositionDescription = text;
    },
    setSecondPositionDescription: (state,text) => {
        state.secondPositionDescription = text;
    },
    setThirdPositionDescription: (state,text) => {
        state.thirdPositionDescription = text;
    },
    setCvUrl: (state,text) => {
        state.cvUrl = text;
    },
}
const actions = {
    async fetchFirstPositionDescription({ commit }) {
        const text = await cvService.getFirstDescription();
        commit('setFirstPositionDescription', text);
    },
    async fetchSecondPositionDescription({ commit }) {
        const text = await cvService.getSecondDescription();
        commit('setSecondPositionDescription', text);
    },
    async fetchThirdPositionDescription({ commit }) {
        const text = await cvService.getThirdDescription();
        commit('setThirdPositionDescription', text);
    },
    async fetchCvUrl({ commit }) {
        const text = await cvService.getCvUrl();
        commit('setCvUrl', text);
    }
}
const getters = {
    firstPositionDescription: state => { return state.firstPositionDescription },
    secondPositionDescription: state => { return state.secondPositionDescription },
    thirdPositionDescription: state => { return state.thirdPositionDescription },
    cvUrl: state => { return state.cvUrl }
}

export default function createCvStore() {
    return {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    };
}