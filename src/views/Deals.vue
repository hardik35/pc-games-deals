<template>
  <div class="home">
    <Navbar/>
    <div><h2>Filters</h2></div>
    <el-checkbox v-model="onSale">On Sale</el-checkbox>
    <el-input placeholder="Filter Deals By name" v-model="inputDealFilter"></el-input>
    <el-row :gutter="10">
      <el-col 
        :span="8"
        v-for="(deal, index) in dealsToView"
        :key="index"
        class="grid-content">
        <div class="bg-purple" style="padding: 5px">
          <h3 class="textOverflowEllipsis">{{deal.title}}</h3>
          <span><strike>${{deal.normalPrice }} </strike></span>
          <span style="color: green"> {{ deal.salePrice}}</span>
          <br>
          <br>
          <el-button @click="routeToDealDetails(deal.gameID, deal.dealID)">View More</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return {
      onSale: false,
      inputDealFilter: '',
    }
  },
  async created() {
    await this.getAllDeals();
  },
  computed: {
    ...mapGetters('deals', [
      'allDeals'
    ]),
    dealsToView() {
      let deals = JSON.parse(JSON.stringify(this.allDeals));
      if (this.onSale) {
        deals = deals.filter(game => game.isOnSale === "1");
      }
      if (this.inputDealFilter) {
        deals = deals.filter(game => game.title.toLowerCase().includes(this.inputDealFilter.toLowerCase()));
      }
      return deals;
    }
  },
  methods: {
    ...mapActions('deals', [
      'getAllDeals'
    ]),
    routeToDealDetails(gameId, dealId) {
      this.$router.push({
        name: 'dealDetails',
        params: {
          dealId,
          gameId,
        }
      })
    }
  }
}
</script>

<style scoped>
.grid-content {
  margin: 10px 0;
  cursor: pointer;
}
.bg-purple {
  background-color: #d3dce6;
}
.textOverflowEllipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
