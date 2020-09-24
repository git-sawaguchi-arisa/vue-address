<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <!-- <router-link to="/home">Home</router-link>
    <router-view/> -->
      <v-app-bar-nav-icon @click.stop="toggleSideMenu"></v-app-bar-nav-icon>
      <v-toolbar-title>マイアドレス帳</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$store.state.login_user">
      <v-btn text @click="logout">ログアウト</v-btn>
      </v-toolbar-items>
       </v-app-bar>
      <SideNav />
     <v-content>
      <v-container fluid fill-height align-start>
      <router-view/>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
import firebase from 'firebase'
import {mapActions} from 'vuex'
import SideNav from "./components/SideNav.vue";

export default {
  name: 'App',
  components:{
    SideNav
  },

  created(){
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        this.setLoginUser(user);
        if(this.$router.currentRoute.name === "Home"){
          this.$router.push({name:"addresses"},() =>{});
        }
      }else{
        this.deleteLoginUser();
        this.$router.push({name:"Home"},() => {});
      }
    });
  },

  data: () => ({
    //
  }),
  methods:{
    ...mapActions(['toggleSideMenu','setLoginUser','logout','deleteLoginUser'])
  }
};
</script>
