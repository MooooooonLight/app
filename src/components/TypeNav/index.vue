<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all" @mouseenter="enterShow" @mouseleave="leaveShow">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <!-- 三级联动 -->
      <!-- 过度动画 -->
      <transition name="sort">
        <div class="sort" v-show="show">
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              @mouseenter="changeIndex(index)"
              @mouseleave="leaveIndex"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3>
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                >{{ c1.categoryName }}</a>
              </h3>
              <!-- 二级、三级分类 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div class="subitem" v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId">
                  <dl class="fore">
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                      >{{ c2.categoryName }}</a>
                    </dt>
                    <dd>
                      <em v-for="(c3, index) in c2.categoryChild" :key="c3.categoryId">
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                        >{{ c3.categoryName }}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import throttle from 'lodash/throttle'
export default {
  name: "TypeNav",
  data () {
    return {
      // 储存鼠标在哪一个分类
      currentIndex: -1,
      show: true
    };
  },
  // 组件挂载完毕，可以向服务器发送请求
  mounted () {
    // 判断是哪个路由组件
    if (this.$route.path == '/home') {
      this.show = true
    } else if (this.$route.path == '/search') {
      this.show = false
    }
  },
  computed: {
    ...mapState({
      // 右侧需要一个函数，当使用这个函数作为计算属性的时候，右侧函数会立即执行一次
      // 注入一个state，其实即为大仓库中的数据
      categoryList: state => state.home.categoryList
    })
  },
  methods: {
    // 一级菜单鼠标进入(节流50ms)
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    // 一级菜单鼠标移出
    leaveIndex () {
      this.currentIndex = -1
    },
    goSearch (event) {
      // 采用编程式导航+事件委派完成路由跳转以及传参
      // 事件委派需要保证点击子标签类型为a时才进行跳转，并且需要区分是哪一级的a标签
      // 所以需要给a标签加上自定义属性 event.target.dataset可以获取自定义属性（无视大小写）
      const element = event.target;

      const { categoryname, category1id, category2id, category3id } = element.dataset

      if (categoryname) {
        const location = { name: "search" }
        const query = { categoryName: categoryname }
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else {
          query.category3Id = category3id
        }
        // 如果路由中有params参数，捎带上
        if (this.$route.params) {
          location.params = this.$route.params
        }
        // 整理参数
        location.query = query
        // 发送路由
        this.$router.push(location)
      }
    },
    // 鼠标进入，商品列表显示
    enterShow () {
      this.show = true
    },
    // 鼠标离开，商品列表隐藏
    leaveShow () {
      this.currentIndex = -1
      if (this.$route.path == '/search') {
        this.show = false
      }

    }
  }
}
</script>
<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        overflow: hidden;
        height: 450px;
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //   // .item-list {
          //   //   display: block;
          //   // }
          // }
        }
        .cur {
          background-color: skyblue;
        }
      }
    }
    // 过度动画的样式
    // 过度动画开始状态
    .sort-enter {
      height: 0;
    }
    .sort-enter-to {
      height: 461px;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
    // .sort-leave {
    //   height: 461px;
    // }
    // .sort-leave-to {
    //   height: 0px;
    // }
    // .sort-leave-active {
    //   transition: all 0.5s linear;
    // }
  }
}
</style>