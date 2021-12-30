<template>
  <div>
    <!-- 三级联动组件 -->
    <TypeNav></TypeNav>
    <!-- 轮播图 -->
    <ListContainer></ListContainer>
    <!-- 今日推荐 -->
    <Recommend></Recommend>
    <!-- 排行 -->
    <Rank></Rank>
    <!-- 猜你喜欢 -->
    <Like></Like>
    <!-- 楼层 -->
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"></Floor>
    <!-- 商标 -->
    <Brand></Brand>
  </div>
</template>
<script>
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "./Recommend/index.vue";
import Rank from "./Rank/index.vue";
import Like from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
import { mapState } from "vuex";
export default {
  name: "home",
  data () {
    return {};
  },
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand },
  mounted () {
    // 派发action 获取floor组件的数据
    this.$store.dispatch('getFloorList')
  },
  computed: {
    ...mapState({
      floorList: state => state.home.floorList
    })
  }
}
</script>
<style scoped>
</style>