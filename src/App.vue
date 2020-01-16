<template>
  <v-app id="app" onContextmenu="window.alert('右クリック禁止です。');return false">
    <Header/>
    <v-content id="wrapper" class="justify-center">
      <router-view/>
    </v-content>
    
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  },
  data() {
    return {
      drawer: false,
    }
  },
  methods: {
    upDateDrawer() {
      this.drawer = true
    }
  }
};
</script>

<style lang="scss">


.v-content__wrap {
  max-width: 768px !important;
}
.v-footer {
  left: 0;
}

.prevent {
  position: fixed;
  width: 100%;
}

html {
  scroll-behavior: smooth;
  -webkit-overflow-scrolling : touch;
}
</style>