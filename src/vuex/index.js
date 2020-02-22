import Vue from 'vue'
import Vuex from 'vuex'
import state from  './state'
import getters from  './getters'
import mutations from  './mutations'
import actions from  './actions'
//注册vuex
Vue.use(Vuex)
//生成store对象
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
//暴露全局
export default store
