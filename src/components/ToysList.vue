<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Código</th>
          <th class="text-left">Productos</th>
          <th class="text-left">Precio</th>
          <th class="text-left">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="toy in toys" :key="toy.name">
           <td>{{ toy.data.sku }}</td>
          <td>{{ toy.data.name }}</td>
          <td>{{ toy.data.price }}</td>
          <td>{{ toy.data.stock }}</td>
          <td>
              <v-btn text @click="removeToy(toy.id)"></v-btn>
              <v-icon>mdi-delete</v-icon>
               <v-btn text @click="editToy(toy.id)"></v-btn>
                <v-icon>mdi-pencil</v-icon>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
    methods:{
     ...mapActions(['setToys', 'deleteToy']),
      removeToy(id){
          let confirmation = confirm ('Estas seguro de eliminarme?')
          if (confirmation){
              this.deleteToy(id)
          }
      }
    },
    computed:{
     ...mapState(['toys'])  

    },
    created(){
     this.setToys()
    }
    
}
</script>
<style lang="stylus">

</style>