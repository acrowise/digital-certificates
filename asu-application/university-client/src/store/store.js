import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        isadmin: '',
        islogged: '',
        identity:'',
        firstName:'',
        fullName : '',
        listResponse: []
        
    },
    mutations: {
        setListResponse(state,listResponse){
          state.listResponse = listResponse;
        },
        setislogged(state,logged)
        {
            state.islogged = logged;
        },
        setispaid(state,ispaid)
        {
            state.ispaid = ispaid;
        },
        setadmin(state,admin)
        {
            state.isadmin = admin;
        },
        saveUserLogged (state, loggedUser)
        {
        state.identity = loggedUser
        },
      saveUsername (state, Name)
       {
        state.firstName = Name
       },
      savename (state, Name) {
      state.fullName = Name
  }
},
    actions: {
      saveUserLogged (context, loggedUser) {
        context.commit('saveUserLogged', loggedUser)
      },
      saveUsername (context, Name) {
        context.commit('saveUsername', Name)
      }
    },
    plugins: [createPersistedState()]

});
