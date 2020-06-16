import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toys:[],
    showForm: false,
    currentToy:{ 
      data: {
        name:'',
        price: 0,
        sku:'',
        stock: 0,
      },
      id: null,
    }
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
  },
  actions: {
    setToys({ commit }){ 
      axios.get(`https://us-central1-jugueteriaotto.cloudfunctions.net/toys/toys`)
      .then(response =>{
        commit('SET_TOYS', response.data) 
      }) 
    },
    displayToyForm ({ commit }) {commit('DISPLAY_TOY_FORM')},
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
    deleteToy({ dispatch }, id ){
      axios.delete(`https://us-central1-jugueteriaotto.cloudfunctions.net/toys/toy/${id}`)
      .then(() =>{
        dispatch('setToys')
      })
    } 
  },
  modules: {
  }
})
