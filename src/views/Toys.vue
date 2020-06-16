<template>
    <div>
      <appbar></appbar>
      <v-main>  
        
       <h1> Lista DE Productos</h1>
       <v-row justify="center">
        <v-btn class="btnn" @click="displayToyForm">Agregar Juguete</v-btn>
        </v-row>
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
<style scoped>
h1{
  margin: 2rem;
}

</style>
