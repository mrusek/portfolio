import contactService from '../../api/contactService';
const state = () => ({
    emailAddres: '',
    phoneNumber: '',
    github: '',
    linkedin: '',
    isphoneNumberVisible: false
})
const mutations = {
    setEmailAddress(state, emailAddres) {
        state.emailAddres = emailAddres;
    },
    setPhoneNumber(state, phoneNumber) {
        state.phoneNumber = phoneNumber;
    },
    setGithub(state, github) {
        state.github = github;
    },
    setLinkedin(state, linkedin) {
        state.linkedin = linkedin;
    },
    setPhoneNumberVisible(state, phoneNumberVisiblity) {
        state.isphoneNumberVisible = phoneNumberVisiblity;
    }
}
const actions = {
    async fetchAllInfo({ commit }) {
     const info = await contactService.getAllInfo();
     commit('setEmailAddress',info.emailAddres);
     commit('setLinkedin',info.linkedin);
     commit('setPhoneNumber',info.phoneNumber);
     commit('setGithub',info.github);
    }
}
const getters = {
    getAllInfo (state) {
        return {
            emailAddress: state.emailAddres,
            phoneNumber: state.phoneNumber,
            github: state.github,
            linkedin: state.linkedin
        }
    }
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