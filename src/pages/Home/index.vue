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
    <!-- 楼层1 -->
    <Floor></Floor>
    <!-- 楼层2 -->
    <Floor></Floor>
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
export default {
  name: "component_name",
  data () {
    return {};
  },
  components: { ListContainer, Recommend, Rank, Like, Floor, Brand }
}
</script>
<style scoped>
</style>