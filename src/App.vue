<template>
  <div id="app">
    <router-view/>
    <foot></foot>
  </div>
</template>

<script>
  import foot from './components/foot/Foot'
export default {
  name: 'App',
  components: {
    foot
  },
  data() {
    return {

    }
  },
  watch: {

  }
}
</script>

<style>
#app {

}
</style>
