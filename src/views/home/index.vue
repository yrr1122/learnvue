<template>
  <div id="home">
    <nav-bar class="home-nav">
      <span slot="left">left</span>
      <div slot="center">首页</div>
      <div slot="right">right</div>
    </nav-bar>
    <swiper :autotime="3000" :list="banner"></swiper>
    <recommend :list="recommend"></recommend>
  </div>
</template>
<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import Swiper from '../../components/common/swiper/Swiper.vue'
import Recommend from './childComps/RecommendView.vue'
import { getHome } from '../../api/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    Swiper,
    Recommend
  },
  data () {
    return {
      // listData: null,
      banner: null,
      recommend: null,
    }
  },
  created() {
    // 组件创建完发生请求
    this.getHomeData()
  },
  methods: {
    getHomeData () {
      getHome().then(res => {
        // this.listData = res.data
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    }
  }
}
</script>
<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
