<template>
    <v-container fluid fill-height>
        <!-- <v-btn color="pink" dark @click.stop="drawer = !drawer">Toggle</v-btn> -->
        <v-navigation-drawer v-model="$store.state.drawer" absolute temporary>
            <v-list>
            <v-list-item>
                <v-list-item-avatar>
                    <img v-if="photoURL" :src="photoURL"/>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title>{{userName}}</v-list-item-title>
                </v-list-item-content>
             </v-list-item>
             <v-divider></v-divider>
              <v-list-item v-for="(item, index) in items" :key="index" :to="item.link"> 
                  <v-list-item-icon>
                      <v-icon>{{item.icon}}</v-icon>
                  </v-list-item-icon>
                   <v-list-item-content> 
                       <v-list-item-title>{{item.title}}</v-list-item-title>
                   </v-list-item-content>
              </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed:{
        ...mapGetters(["userName","photoURL"]),
    },
    data(){
        return{
            drawer: false,
            items: [{title: "ホーム",icon:"mdi-home", link:{name:"home"}}],
            items: [{title: "連絡先一覧",icon:"mdi-menu", link:{name:"addresses"}}],
        };
    }
};
</script>