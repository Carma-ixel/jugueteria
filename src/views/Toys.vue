<template>
    <div>
      <appbar></appbar>
      <v-main>  
        Lista DE Productos
        <v-btn @click="displayToyForm">Agregar Juguete</v-btn>
        <toy-form></toy-form>
        <toys-list></toys-list>   
      </v-main>
       
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import Appbar from '../components/Appbar'
import ToysList from '../components/ToysList'
import ToyForm from '../components/ToyForm'
export default {
  components: {
    Appbar,
    ToysList,
    ToyForm
  },
  methods:{
    ...mapActions (['displayToyForm'])
  }
}
</script>

