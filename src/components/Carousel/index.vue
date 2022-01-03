<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousel,index) in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
<script>
// 引入swiper
import Swiper from 'swiper'
export default {
  name: "Carousel",
  data () {
    return {
    };
  },
  props: ['list'],
  watch: {
    list: {
      // 立即监听 不管数据变没变化
      immediate: true,
      handler (newValue, oldValue) {
        // 实例化轮播图
        this.$nextTick(() => {
          const mySwiper = new Swiper(this.$refs.cur, {
            loop: true,
            // 需要分页器
            pagination: {
              el: ".swiper-pagination",
              // 点击小球也切换页面
              clickable: true
            },
            // 如果需要后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          })
        })
      }
    }
  }
}
</script>
<style scoped>
</style>