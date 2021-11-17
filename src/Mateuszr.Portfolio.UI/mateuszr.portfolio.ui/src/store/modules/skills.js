
const state = () => ({
    hardSkills: [],
    softSkills: [],
    passions: []
})
const mutations = {
   
}
const actions = {
  
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