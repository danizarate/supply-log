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
        usuarioLogueado: null,
        Productos : [],
        Cotizacion: {
            autor:'',
            fecha:'',
            rut:'',
            razonSocial:'',
            email:'',
            telefono:'',
            cotizacionID:'',
            descripcionProducto:'',
            id:'',
            modificado:false,
            valorProducto: 0,
            cantidad:0,
            recargo:0,
            subtotal1:0,

            pesoxKilo:0,
            largo:0,
            ancho:0,
            alto:0,
            kiloVol:0,

            aduanaKG:0,
            honorarios: 0,
            delivery: 0,
            drecargo: 0,
            kilosAduana:0,
            subDelivery:0,

            fleteltl:0,
            frecargo:0,
            fsubtotal:0,

            warehouse:0,
            wrecargo:0,
            wsubtotal:0,

            seguro:0,
            srecargo:0,
            ssubtotal:0,

            arancel:0,
            arecargo:0,
            asubtotal:0,

            iva:0,
            irecargo:0,
            isubtotal:0,

            gaduana:0,
            garecargo:0,
            gasubtotal:0,

            hagaduana:0,
            hagrecargo:0,
            hagsubtotal:0,

            dscl:0,
            sclrecargo:0,
            sclsubtotal:0,

            fee:0,
            feerecargo:0,
            feesubtotal:0,

            costoTotal:0,
            costoT:0,
            costoSubtotal:0
        }

    },
    getters:{
        isLoguedIn(state){
            return state.usuarioLogueado == null ? false : true;
            // OPCION 2(ESTÁ LOGUEADO): return state.usuarioLogueado != null ? true : false
        }
    },
    mutations:{
        setUser(state, user){
            state.usuarioLogueado = user; //Cambia el estado del usuario logueado
            /* console.log('Mutations - UsuarioLogueado : '+state.usuarioLogueado) */
        },
        Set(state, payload){   
            state.Productos.push(payload)
        },
        eliminar(state, payload){
            state.Productos = state.Productos.filter(item => item.id !== payload)
        },
        editar(state, payload){
            state.Cotizacion = state.Productos.find(item => item.id === payload)
           /*  console.log(state.Cotizacion) */
        },
        actualizar(state, payload){
            state.Productos = state.Productos.map(item => item.id === payload.id ? payload : item) 
           /*  console.log('*** ARRAY COPIA - EN LA TIENDA ***')
            console.log(state.Productos) */
        }
        
    },
    actions:{
        setUserAction(context, user){
            context.commit('setUser', user)
        },
        async SetProducto({commit}, Cotizacion){
            try {
                const res = await fetch(`https://supply-log-default-rtdb.firebaseio.com/cotizador/${Cotizacion.id}.json`, {
                    method : 'PUT',
                    headers : {
                        'Content-Type':'application/json'
                    },
                    body: JSON.stringify(Cotizacion)
                })

                const dataDB = await res.json();
                console.log(dataDB)
                
            } catch (error) {
                console.log(error)
            }
            commit('Set', Cotizacion)
            
        },
        eliminar({commit}, id){
            commit('eliminar', id)
        },
        editar({commit}, id){
            commit('editar', id)
        },
        actualizar({commit}, copia){
            commit('actualizar', copia)
        }

    },

})

export default store