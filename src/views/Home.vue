<template>
<v-container>
<v-layout>
  <v-flex xs12 mt-5>
  <v-btn color="info" @click="login">Googleアカウントでログイン</v-btn>
  </v-flex>
 </v-layout>
</v-container>
</template>


<script>
// @ is an alias to /src
import { mapActions } from "vuex"; 
// import Addresses from "@/views/Addresses.vue";
export default {
  // components:{
  //   Addresses
  // },
  methods:{
    ...mapActions(["login"]),
  },
};
</script>
