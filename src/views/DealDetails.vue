<template>
  <div v-if="Object.keys(getStoreListMap).length > 0">
      <!-- {{gameInfo}} -->
      <el-row>
        <el-col :span="12">
          <h3>{{gameInfo.title}}</h3>
            <strike>${{selectedDeal[0].retailPrice}} </strike> &nbsp; &nbsp; <span style="color: green"> ${{selectedDeal[0].price}}</span>
            <span style="margin-left: 10px"> You save ${{(Number(selectedDeal[0].retailPrice) - Number(selectedDeal[0].price)).toFixed(2)}}</span>
          <h4>Available at {{getStoreListMap[selectedDeal[0].storeID].storeName}}</h4>
        </el-col>
        <el-col :span="12">
            <h3>Other deals for this game</h3>
            <div v-for="(game, index) in remainingDeals" :key="game.storeID">
                <el-row>
                    <el-col :span="12">
                        <h2>{{getStoreListMap[remainingDeals[index].storeID].storeName}}</h2>
                        <strike>${{game.retailPrice}} </strike> &nbsp; &nbsp; <span style="color: green"> ${{game.price}}</span>
                    </el-col>
                    <el-col :span="12">
                        <el-button @click="updateParams(game.dealID)">View More</el-button>
                    </el-col>
                </el-row>
                
            </div>
        </el-col>
      </el-row>
      
      
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    async created() {
        // console.log()
        const gameId = this.$route.params.gameId;
        // console.log(gameID)
        this.getGameInfo(gameId);
    },
    computed: {
        ...mapGetters('games', [
            'gameDeals',
            'gameInfo'
        ]),
        ...mapGetters('stores', [
            'getStoreListMap',
        ]),
        
        selectedDeal() {
            console.log(this.gameDeals)
            console.log(this.$route.params.dealId, decodeURIComponent("JoxoQ576%2FlUf%2B0bJuUJsZ24X5MXcc1vBwXj%2B8cj0uQM%3D"))
            console.log(this.gameDeals.filter(game => decodeURIComponent(game.dealID) === decodeURIComponent(this.$route.params.dealId)))
            return this.gameDeals.filter(game => decodeURIComponent(game.dealID) === decodeURIComponent(this.$route.params.dealId))
        },
        remainingDeals() {
            console.log(this.gameDeals)
            console.log(this.gameDeals.filter(game => decodeURIComponent(game.dealID) === this.$route.params.dealId))
            return this.gameDeals.filter(game => decodeURIComponent(game.dealID) !== decodeURIComponent(this.$route.params.dealId))
        }
    },
    methods: {
        ...mapActions('games', [
            'getGameInfo'
        ]),
        updateParams(dealID) {
            console.log("called", dealID)
            let params = this.$route.params
            console.log(params)
            params.dealId = dealID
            this.$router.push({ name: 'dealDetails', params: params })
        }
    },
    
}
</script>

<style>

</style>
