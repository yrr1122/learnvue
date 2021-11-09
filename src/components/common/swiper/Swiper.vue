<template>
  <div class="swiper-container">
    <mt-swipe :auto="autotime">
      <mt-swipe-item v-for="(item, index) in list" :key="index">
        <img :src="item.image" @click="toCatelog(item.link)">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  name: 'Swiper',
  props: {
    autotime: {
      type: Number,
      default: 2000
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    toCatelog(link) {
      console.log(link)
    }
  }
}
</script>
<style scoped>
.swiper-container{
  height: 200px;
  background-color: #f6f6f6;
  text-align: center;
}
.mint-swipe-item{
  line-height: 200px;
}
.mint-swipe-item img{
  width: 100%;
  object-fit: contain;
}
</style>