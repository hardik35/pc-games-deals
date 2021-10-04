<template>
  <div class="home">
    <Navbar/>
    <el-row :gutter="10">
      <el-col 
        :span="8"
        v-for="(deal, index) in allDeals"
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
  async created() {
    await this.getAllDeals();
  },
  computed: {
    ...mapGetters('deals', [
      'allDeals'
    ])
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
