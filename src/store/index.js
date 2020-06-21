import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

function emptyToy() { return { data: { sku:'', name: '', stock: '', price: ''}, id: null } }
export default new Vuex.Store({
  state: {
    toys:[],
    showForm: false,
    loading:false,
    currentToy: emptyToy(),
   
  },
  mutations: {
    //inicializador guardían..?? wtf?
    SET_TOYS(state, data){state.toys = data},
    //nos ayuda a cambiar el estado del fomr
    DISPLAY_TOY_FORM(state){state.showForm = true},
    HIDE_TOY_FORM(state){ state.showForm = false},

    UPDATE_NAME(state, name){ state.currentToy.data.name = name},

    UPDATE_PRICE(state, price){ state.currentToy.data.price = price},
    
    UPDATE_SKU(state, sku){ state.currentToy.data.sku = sku},

    UPDATE_STOCK(state, stock){ state.currentToy.data.stock = stock},

    SET_CURRENT_TOY(state, toy){state.currentToy = toy },

    SET_LOADING (state){state.loading = true},
    
    INSET_LOADING(state){state.loading = false},

    SET_EMPTY_TOY(state) {
      state.currentToy.id = null;
      const base = emptyToy()
      Object.keys(base.data).forEach(key => {
        state.currentToy.data[key] = base.data[key]
      })
    }
  },
  actions: {
    setToys({ commit }){ 
      commit ('SET_LOADING')
      axios.get(`https://us-central1-jugueteriaotto.cloudfunctions.net/toys/toys`)
      .then(response =>{
        commit('SET_TOYS', response.data) 
        commit('SET_EMPTY_TOY')
      }).finally(() =>{
        commit('INSET_LOADING')
      })
    },
    displayToyForm ({ commit }) {commit('DISPLAY_TOY_FORM')},

    cancelForm({commit}) { 
      commit('HIDE_TOY_FORM')
      commit('SET_EMPTY_TOY') 
    },

    hideToyForm ({ commit }) {commit('HIDE_TOY_FORM')},
    //para formulario
    updateName({ commit},  name ) {commit('UPDATE_NAME', name)},
    updatePrice({ commit }, price) {commit('UPDATE_PRICE', price)},
    updateSku({ commit }, sku) {commit('UPDATE_SKU', sku)},
    updateStock({commit }, stock) {commit('UPDATE_STOCK', stock)},

    postToy({dispatch,state }){
      axios.post(`https://us-central1-jugueteriaotto.cloudfunctions.net/toys/toy`, state.currentToy.data)
      .then(() =>{ 
        dispatch('setToys')
      })
    },
    deleteToy({ dispatch}, id ){
      axios.delete(`https://us-central1-jugueteriaotto.cloudfunctions.net/toys/toy/${id}`)
      .then(() =>{
        dispatch('setToys')
      })
    },
    setCurrentToy({ commit }, id){
      axios.get(`https://us-central1-jugueteriaotto.cloudfunctions.net/toys/toy/${id}`)
      .then((response) =>{
        commit('SET_CURRENT_TOY', response.data)
      })
    },
    updateToy({state, dispatch}, id ){
      axios.put(`https://us-central1-jugueteriaotto.cloudfunctions.net/toys/toy/${id}`,state.currentToy.data)
      .then(()=>{
       dispatch('setToys')  
      })
    }
  },
  modules: {
  }
})
