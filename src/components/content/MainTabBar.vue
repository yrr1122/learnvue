<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="tab-icon" src="../../assets/images/tabbar/home.svg">
        <img slot="tab-icon-active" src="../../assets/images/tabbar/home-blue.svg">
        <div slot="tab-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/catalog" activeColor="blue">
        <img slot="tab-icon" src="../../assets/images/tabbar/catalog.svg">
        <img slot="tab-icon-active" src="../../assets/images/tabbar/catalog-blue.svg">
        <div slot="tab-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/car" activeColor="blue">
        <img slot="tab-icon" src="../../assets/images/tabbar/car.svg">
        <img slot="tab-icon-active" src="../../assets/images/tabbar/car-blue.svg">
        <div slot="tab-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile" activeColor="blue">
        <img slot="tab-icon" src="../../assets/images/tabbar/profile.svg">
        <img slot="tab-icon-active" src="../../assets/images/tabbar/profile-blue.svg">
        <div slot="tab-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name: 'MainTabBar',
  components: { TabBar, TabBarItem }
}
</script>
<style scoped>

</style>
