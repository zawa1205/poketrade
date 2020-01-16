<template>
<div>
  <v-app-bar
    app
    color="#283655"
    dark
    class="headerWrapper"
  >
    <v-btn 
      text
      icon
      small
      color="white"
      @click="toTop()"
      :class="{'clearBtn': $route.path === '/'}"
      class="backIcon"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <h1>ソード/シールド リアルタイム交換所（β）</h1>
      <div class="hMenu">
      <v-btn 
          text
          icon
          small
          color="white"
          @click="openMenu()"
          class="hIcon"
        ><v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        color="#283655"
        class="drawerMenu"
      >
        <v-btn 
          text
          icon
          small
          color="white"
          @click.stop="closeMenu()"
          class="hIcon"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <div class="menuList">
          <div>
            <p style="font-weight: bold">ー 運営者より ー</p>
            <p>大変恐縮ですが<br>現在、試作段階です。</p>
            <p>ご意見やコメント、<br>バグ等ありましたら</p>
            <a href="https://twitter.com/poketradeswsh" target="__blank"><p>@poketradeswsh</p></a>
            <p>にDM、またはメンションでお願いします。</p>
            <p>利用して下さる人が増えるほどマッチングもしやすくなるので<br>拡散していただけると運営者も励みになります。</p>
          </div>
          <!-- <v-divider/>
          <p>あ</p>
          <v-divider/>
          <p>あ</p>
          <v-divider/> -->
          <div class="bottomContents">
            <router-link to="/about"><p>このサイトについて</p></router-link>
            <router-link to="/term"><p>利用規約</p></router-link>
            <router-link to="/privacy"><p>プライバシーポリシー</p></router-link>
          </div>
        </div>
      </v-navigation-drawer>
    </div>
</template>

<script>

export default {
  data() {
    return {
      drawer: null
    }
  },
  methods: {
    toTop() {
      this.$router.push('/')
    },
    changeDrawer() {
      this.$emit('updateDrawer')
    },
    openMenu() {
      this.drawer = !this.drawer
      // document.getElementById("app").classList.add("prevent")
    },
    closeMenu() {
      this.drawer = !this.drawer
      // document.getElementById("app").classList.remove("prevent")
    }
  },
  watch: {
    drawer(newValue) {
      if(newValue) {
        document.getElementById("app").classList.add("prevent")
      } else {
        document.getElementById("app").classList.remove("prevent")
      }
    }
  }
}
</script>

<style lang="scss">
.drawerMenu {
  z-index: 9999;
  color: white;
  max-height: 100vh;

  .hIcon {
    position: absolute;
    right: 12px;
    top: 2vh;
  }

  .menuList {
    margin-top: 54px;

    p {
      margin: 12px;
      text-align: center;
    }

    .bottomContents {
      position: absolute;
      bottom: 0vh;
      width: 100%;

      a, a:visited, a:hover {
        color: white;
        text-decoration: none;
      }

      margin-bottom: 80px;
       p {
         font-size: 12px;
         margin: 6px;
       }
    }
  }
}

.headerWrapper {
  
  h1 {
    font-size: 15px;
    margin: auto;
    text-align: center;
  }
  button {
    padding: 0 12px;
  }
  .clearBtn {
    display: none;
  }
  .backIcon {
    position: fixed;
  }
}
</style>