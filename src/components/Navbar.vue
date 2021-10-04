<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <!-- can use v-for -->
    <el-menu-item index="1">Deals</el-menu-item>
    <el-menu-item index="2" disabled>Games</el-menu-item>
    <el-menu-item index="3" disabled>Stores</el-menu-item>
  </el-menu>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: this.$route.name === 'dealDetails' ? "0" : "1",
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            this.$router.push('/deals');
        }
    }
}
</script>

<style>

</style>