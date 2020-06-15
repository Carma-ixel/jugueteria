<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="deep-purple accent-4"
      dark
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Juegueteria Otto Klaus</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text @click="logout">
          <span class="mr-2" >Cerrar Sesión</span>
          <v-icon>mdi-lock</v-icon>
        </v-btn>
    
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-7"
      class="overflow-y-auto"
      max-height="600"
    >
      <v-container style="height: 60px;">

      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
import Firebase from 'firebase'

export default {
  methods: {
    logout(){
      Firebase.auth().signOut().then(() =>{
        this.$router.push('/login')
      })
    }
  }
}
</script>