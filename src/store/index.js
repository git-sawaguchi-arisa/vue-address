import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        drawer: false,
        addresses: [],
        login_user: null,
    },
    getters: {
        userName: state => state.login_user ? state.login_user.displayName : "",
        photoURL: state => state.login_user ? state.login_user.photoURL : ""
    },
    mutations: {
        toggleSideMenu(state) {
            state.drawer = !state.drawer;
        },
        addAddress(state, address) {
            state.addresses.push(address)
        },
        setLoginUser(state, user) {
            state.login_user = user
        },
        deleteLoginUser(state) {
            state.login_user = null
        },
    },
    actions: {
        toggleSideMenu({commit}) {
            commit("toggleSideMenu");
        },
        addAddress({commit}, address) {
            commit('addAddress', address)
        },
        setLoginUser({commit}, user) {
            commit('setLoginUser', user)
        },
        login() {
            //Googleプロバイダオブジェクトのインスタンスの作成
            const google_auth_provider = new firebase.auth.GoogleAuthProvider()
            //ログインページ(Googleの)にリダイレクトしてログインする為のコード
            firebase.auth().signInWithRedirect(google_auth_provider)
        },
        logout() {
            firebase.auth().signOut()
        },
        deleteLoginUser({commit}) {
            commit('deleteLoginUser')//mutationのログインユーザー情報削除の呼び出し
        },
    },
    modules: {}
})
