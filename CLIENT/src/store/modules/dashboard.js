import axios from 'axios';

const state = {
  userData: [],
};

const getters = {
  userData: (state) => state.userData,
};

const actions = {
  async fetchUserData({ commit }, user) {
    const response = await axios.get('/api/users/' + user);
    console.log('inside');

    console.log(response.data);

    commit('setUserData', response.data);
  },
};

const mutations = {
  setUserData: (state, userData) => (state.userData = userData),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
