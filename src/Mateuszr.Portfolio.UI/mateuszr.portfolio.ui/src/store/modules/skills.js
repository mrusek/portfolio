import skillsService from '../../api/skillsService';

const state = () => ({
    hardSkills: [],
    softSkills: [],
    passions: []
})
const mutations = {
    setHardSkills(state, hardSkills) {
        state.hardSkills = [...hardSkills];
    },
    setSoftSkills(state, softSkills) {
        state.softSkills = [...softSkills];
    },
    setPassions(state, passions) {
        state.passions = [...passions];
    }
}
const actions = {
    async fetchHardSkills({ commit }) {
        const hardSkills = await skillsService.getHardSkills();
        commit('setHardSkills', hardSkills);
    },
    async fetchSoftSkills({ commit }) {
        const softSkills = await skillsService.getSoftSkills();
        commit('setSoftSkills', softSkills);
    },
    async fetchPassions({ commit }) {
        const passions = await skillsService.getPassions();
        commit('setPassions', passions);
    }
}
const getters = {

}

export default function createSkillsStore() {
    return {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    };
}