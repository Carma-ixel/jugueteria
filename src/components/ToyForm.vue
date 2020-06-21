<template>
    <div class="text-center">
    <v-dialog
    :value="showForm"
      width="500"  
    persistent
    >
   
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Agregar Productos
        </v-card-title>

        <v-text-field label="Nombre" type="text" :value="currentToy.data.name" @input="updateName"></v-text-field>
        <v-text-field label="Código"  type="text" :value="currentToy.data.sku" @input="updateSku"></v-text-field>
        <v-text-field label="Precio" prefix="$" :value="currentToy.data.price" @input="updatePrice"></v-text-field>
        <v-text-field label="Stock" suffix="Unidades" :value="currentToy.data.stock" @input="updateStock"></v-text-field>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text  @click="submitForm">{{ currentToy.id ? 'Actualizar' : 'Crear'}}</v-btn>
          <v-btn color="primary"   @click="cancelForm">Cancelar Formulario</v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

    
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
    methods:{
         ...mapActions (['hideToyForm', 'updateName', 'updatePrice', 'updateSku', 'updateStock', 'postToy', 'cancelForm', 'updateToy']),
        submitForm(){
         if (this.currentToy.id) {
           this.updateToy(this.currentToy.id)
         } else{ this.postToy() }
        this.hideToyForm()
        }
    },
    computed:{
        ...mapState(['showForm', 'currentToy'])
    }
    
}
</script>
<style lang="stylus">

</style>