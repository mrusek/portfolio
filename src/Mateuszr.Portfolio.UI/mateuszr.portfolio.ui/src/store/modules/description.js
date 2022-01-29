import  * as descriptionService from '../../api/descriptionService';

const state = () => ({
    text: '',
    signature: ''
})
const mutations = {
    setDescriptionText(state, text) {
        state.text = text;
    },
    setSignature (state, text) {
        state.signature = text;
    }
}
const actions = {
    async fetchDescriptionText({commit}){
        const text = await descriptionService.getDescriptionText();
        commit('setDescriptionText', text);
    },
    async fetchSignature({commit}){
        const signature = await descriptionService.getSignature();
        commit('setSignature', signature);
    }
}
const getters = {
    signature: state => {return state.signature},
    text: state => {return  state.text }

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