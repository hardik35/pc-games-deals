<template>
  <div v-if="Object.keys(getStoreListMap).length > 0">
      <!-- {{gameInfo}} -->
        <Navbar/>
      <el-row>
        <el-col :span="12" v-if="selectedDeal.length > 0">
          <h3>{{gameInfo.title}}</h3>
            <strike>${{selectedDeal[0].retailPrice}} </strike> &nbsp; &nbsp; <span style="color: green"> ${{selectedDeal[0].price}}</span>
            <span style="margin-left: 10px"> You save ${{(Number(selectedDeal[0].retailPrice) - Number(selectedDeal[0].price)).toFixed(2)}}</span>
          <h4>Available at {{getStoreListMap[selectedDeal[0].storeID].storeName}}</h4>
        </el-col>
        <el-col :span="12">
            <h3>Other deals for this game</h3>
            <div v-for="(game, index) in remainingDeals" :key="game.storeID" style="margin: 40px 0">
                <el-row>
                    <el-col :span="12">
                        <div><b>{{getStoreListMap[remainingDeals[index].storeID].storeName}}</b></div>
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
import Navbar from '@/components/Navbar.vue';


export default {
    components: {
        Navbar
    },
    async created() {
        const gameId = this.$route.params.gameId;
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
            return this.gameDeals.filter(game => decodeURIComponent(game.dealID) === decodeURIComponent(this.$route.params.dealId))
        },
        remainingDeals() {
            return this.gameDeals.filter(game => decodeURIComponent(game.dealID) !== decodeURIComponent(this.$route.params.dealId))
        }
    },
    methods: {
        ...mapActions('games', [
            'getGameInfo'
        ]),
        updateParams(dealID) {
            let params = this.$route.params
            params.dealId = dealID
            this.$router.push({ name: 'dealDetails', params: params })
        }
    },
    
}
</script>

<style>

</style>
