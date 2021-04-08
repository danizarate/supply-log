/* import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});
 */

import { createStore } from 'vuex'
export const store = createStore({
    state:{
        usuarioLogueado: null
    },
    getters:{
        isLoguedIn(state){
            console.log(state);
            return state.usuarioLogueado == null ? false : true;
            // OPCION 2(ESTÁ LOGUEADO): return state.usuarioLogueado != null ? true : false
        }
    },
    actions:{
        setUserAction(context, user){
            context.commit('setUser', user)
        }

    },
    mutations:{
        setUser(state, user){
            state.usuarioLogueado = user; //Cambia el estado del usuario logueado
            console.log(state.usuarioLogueado)
        }
    }

})

export default store