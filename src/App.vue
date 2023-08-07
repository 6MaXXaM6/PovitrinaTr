<template>
  <div class = "Header"><Header></Header></div>
  <div class="main">
    <div class = "map"><Map></Map></div>
  </div>
  <div class = "lib" :class="{close: close}">
    <div class="button" @click="change">
      <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width=40px height=120px viewBox="0 0 306 306" style="enable-background:new 0 0 306 306;" xml:space="preserve">
        <g id="chevron-left">
          <polygon :points="polygons"/>
        </g>
      </svg>
    </div>
    <Lib v-if="!close"></Lib>
  </div>
  <bottom></bottom>
</template>

<script>
import Map from '@/components/Map.vue'
import Lib from '@/components/Lib.vue'
import Header from '@/components/Header.vue'
import bottom from '@/components/bottom.vue'

export default {
  name: 'App',
  data() {
    return {
      close:true
    }
  },
  components: {
    Map, Lib, Header, bottom
  },
  computed: {
    polygons(){
      if (this.close){return '247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153'}else{return '58.65,267.75 175.95,153 58.65,35.7 94.35,0 247.35,153 94.35,306'}
    }
  },
  methods: {
    change() {
      console.log("closing")
      this.close = !(this.close)
    },
    newData() {
      this.$store.dispatch('getData');
      setInterval(() => {
        this.$store.dispatch('getData');
    }, 10000);
    }
  },
  created() {
    this.newData()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
.map {
  height: 100%;
  aspect-ratio: 1639/973;
  margin: auto;
}
.lib{
  display: flex;
  flex-basis: 30%;
  max-width: 70%;
  height: 100%;
  position: fixed;
  transition: all 3s 0.5s;
  top: 0;
  right: 0;
  flex-wrap: nowrap;
  background-color: rgb(245, 245, 245);
  box-shadow: 4px 4px 2px #7e7c7c;
  border-radius: 2% 0% 0% 2%;
  z-index: 2;
}
.main {
  display: flex;
  max-height: 90vh;
  width: 100%;
  justify-content:flex-start;
  flex-wrap: wrap;
}
.Header {
  flex-basis: 100%;
  background-color: #ffffff;
  height: 10vh;
}
</style>
