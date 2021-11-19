import cvService from '../../api/cvService';

const state = () => ({
    jobDetails: []
})
const mutations = {
    setJobDetails(state, jobDetails) {
        state.jobDetails = [...jobDetails];
    }
}
const actions = {
    async fetchJobDetails({ commit }) {
        const jobDetails = await cvService.getJobDetails();
        commit('setJobDetails', jobDetails);
    }
}
const getters = {

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