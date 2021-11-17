import descriptionService from '../../api/descriptionService';

const state = () => ({
    text: ''
})
const mutations = {
    setDescriptionText(state, text) {
        state.text = text;
    }
}
const actions = {
    async fetchDescriptionText({commit}){
        const text = await descriptionService.getDescriptionText();
        commit('setDescriptionText', text);
    }
}
const getters = {
    
}

export default function createDescriptionStore() {
    return {
        namespaced: true,
        state,
        getters,
        actions,
        mutations
    };
}