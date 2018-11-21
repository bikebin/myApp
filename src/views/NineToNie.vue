<template>
  <div class="nine-to-nie">
    <mt-header class="login-header clearfix" title="茶">
      <router-link to="/home" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="nine-content">
      <teaList :chalist="puleisheng"></teaList>
      <teaList :chalist="puleishu"></teaList>
      <teaList :chalist="hong"></teaList>
      <teaList :chalist="huacao"></teaList>
      <teaList :chalist="lvcao"></teaList>
      <teaList :chalist="wulong"></teaList>
      <teaList :chalist="chaju"></teaList>
    </div>
  </div>
</template>

<script>
  import teaList from '../components/teaList/teaList'
  import {sortTeaList} from '../api/axios'
    export default {
        name: "NineToNie",
      components: {
          teaList
      },
      data() {
          return {
            puleisheng: [],
            puleishu: [],
            hong: [],
            huacao: [],
            lvcao: [],
            wulong: [],
            chaju: []
          }
      },
      created() {
        this.teaList()
      },
      mounted() {

      },
      methods: {
        teaList() {
          sortTeaList().then((res) => {
            // console.log('茶',res.data.datas)
            this.puleisheng = res.data.datas[1]
            this.puleishu = res.data.datas[2]
            this.hong = res.data.datas[3]
            this.huacao = res.data.datas[4]
            this.lvcao = res.data.datas[5]
            this.wulong = res.data.datas[6]
            this.chaju = res.data.datas[7]
            // console.log('普雷熟茶',this.puleishu)
          }).catch((err) => {
            console.log(err)
          })
        }
      }
    }
</script>

<style scoped lang="less">
  .nine-to-nie {
    .mint-header {
      background: linear-gradient(to left,#FA4DBE 0,#FBAA58 100%) !important;
      position: fixed;
      width: 100%;
      top: 0;
      left: 0;
    }
    .nine-content {
      position: fixed;
      top: 0.4rem;
      bottom: 0.4rem;
      overflow: auto;
    }
  }
</style>
