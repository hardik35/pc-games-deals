import Vue from 'vue'
import Vuex from 'vuex'
import games from './games.module'
import stores from './stores.module'
import deals from './deals.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    games,
    deals,
    stores
  }
})
