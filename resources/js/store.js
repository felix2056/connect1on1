import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        selectedUsers: [],
        conversationIsFull: false,
    },

    getters: {
       getSelectedUsers: state => state.selectedUsers
    },
    
    mutations: {
        SET_USER: (state, payload) => {
            state.selectedUsers.push(payload)
        },

        SET_CONVERSATION: (state, payload) => {
            state.conversation = payload
        },

        CONVO_FULL: (state, payload) => {
            state.conversationIsFull = payload;
        },

        REMOVE_USER: (state, payload) => {
            for(let s in state.selectedUsers) {
                if (state.selectedUsers[s].id === payload.id) {
                  state.selectedUsers.splice(s, 1);       
                }
            }
        }
    },

    actions: {
        addSelectedUser ({ commit }, {user}) {
            let exists = store.state.selectedUsers.filter(function(selected) {
                if (user.id === selected.id) {
                  return selected.id;
                }
            })

            if (exists.length) {
                return;
                
            } else{
                if (store.state.selectedUsers.length > 4) {
                    return;
                }

                if (store.state.conversationIsFull) {
                    return;
                }

                commit('SET_USER', user)
            }
        }
    }
});