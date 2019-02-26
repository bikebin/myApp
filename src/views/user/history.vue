<template>
    <transition name="slide">
      <div class="history" v-if="showFlag">
        <button @click="goBack">返回</button>
      <p>我是history页面</p>
    </div>
    </transition>
</template>

<script>
    export default {
        name: "History",
      data() {
          return {
            showFlag: false
          }
      },
      watch: {

      },
      created() {
         
      },
      mounted() {

      },
      methods: {
          show() {
            this.showFlag = true
          },
          goBack() {
              this.showFlag = false
          }
      }
    }
</script>

<style scoped lang="less">
  .history {
    position: fixed;
    left: 0;
    top: 0;
    width: 3.75rem;
    height: 6.67rem;
    background-color: #fff;
    z-index: 1099;
  }
  .slide-enter-active, .slide-leave-active {
    transition: all 0.3s
  }
  .slide-enter, .slide-leave-to {
    transform: translate3d(100%,0,0)
  }
</style>
