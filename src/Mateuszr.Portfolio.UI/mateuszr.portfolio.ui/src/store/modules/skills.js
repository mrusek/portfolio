import * as skillsService from '../../api/skillsService';

const state = () => ({
    technicalSkills: [],
    softSkills: []
})
const mutations = {
    setTechnicalSkills(state, technicalSkills) {
        state.technicalSkills = [...technicalSkills];
    },
    setSoftSkills(state, softSkills) {
        state.softSkills = [...softSkills];
    }
}
const actions = {
    async fetchTechnicalSkills({ commit }) {
        const technicalSkills = await skillsService.getTechnicalSkills();
        commit('setTechnicalSkills', technicalSkills);
    },
    async fetchSoftSkills({ commit }) {
        const softSkills = await skillsService.getSoftSkills();
        commit('setSoftSkills', softSkills);
    }
}
const getters = {
    technicalSkills: state => state.technicalSkills,
    softSkills: state => state.softSkills
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