<template>
    <div class="sort">
      <div class="sort-header">
        <span class="sort-san"><</span>
        <input type="text" placeholder="请输入">
      </div>
      <div class="sort-content">
        <div class="sort-goodNavs">
          <ul>
            <li @click="changeIndex(index)" :class="{active:lightIndex === index}" v-for="(item,index) in sortGoodsLists" :key="index">{{item.name}}</li>
          </ul>
        </div>
        <div class="sort-goodList">
          <ul>
            <li v-for="(item,index) in sortItemLists" :key="index">
              <img :src="item.icon" alt="">
              <p>{{item.name}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
  import {sortGoodsList} from '../api/axios'
    export default {
        name: "Sort",
      data() {
          return {
            sortGoodsLists: [],
            lightIndex: 0,
            sortItemLists: [],
            sortItemLists1: []
          }
      },
      watch: {

      },
      created() {
          this.getSortGoodsList()
      },
      mounted() {

      },
      methods: {
          getSortGoodsList() {
            sortGoodsList().then((res) => {
              this.sortGoodsLists = res.data.data
              this.sortItemLists = res.data.data[0].sub_class
              this.sortGoodsLists.forEach((item) => {
                this.sortItemLists1.push(item.sub_class)
              })
              console.log('分类商品右侧列表', this.sortItemLists1)
            }).catch((err) => {
              console.log(err)
            })
          },
          changeIndex(val) {
            this.lightIndex  = val
            this.sortItemLists = this.sortItemLists1[val]
        }
      }
    }
</script>

<style scoped lang="less">
  .sort {
    .sort-header {
      width: 3.75rem;
      height: 0.45rem;
      background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%) !important;
      .sort-san {
        display: inline-block;
        font-size: 0.24rem;
        color: white;
        padding: 0 0.03rem;
        margin: 0.04rem 0.05rem 0 0.05rem;
      }
      input {
        width: 3.2rem;
        height: 0.28rem;
        outline: none;
        border: 0;
        border-radius: 0.04rem;
        padding-left: 0.08rem;
        vertical-align: top;
        margin-top: 0.1rem;
      }
    }
    .sort-content {
      display: flex;
      position: absolute;
      width: 3.75rem;
      top: 0.45rem;
      bottom: 0.4rem;
      overflow: hidden;
      .sort-goodNavs::-webkit-scrollbar {
        display: none;
      }
      .sort-goodNavs {
        flex: 0 0 0.8rem;
        width: 0.8rem;
        overflow: auto;
        ul {
          background-color: #F4F4F4;
          li {
            height: 0.45rem;
            text-align: center;
            font-size: 0.14rem;
            line-height: 0.45rem;
            &.active {
              background-color: #fff;
              border-left: 0.02rem solid #FC3F78;
            }
          }
        }
      }
      .sort-goodList {
        flex: 1;
        ul {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          li {
            flex-basis: 0.98rem;
            height: 0.9rem;
            /*background-color: yellow;*/
            img {
              width: 0.58rem;
              height: 0.58rem;
              -webkit-background-size: cover;
              background-size: cover;
              margin: 0.08rem 0 0 0.2rem;
            }
            p {
              text-align: center;
              color: #333;
            }
          }
        }
      }
    }
  }
</style>
