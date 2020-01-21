<template>
  <div>
    <div class="search_window">
      <v-expansion-panels>
        <v-expansion-panel
          v-for="(item,i) in 1"
          :key="i"
          style="z-index: 101;"
        >
          <v-expansion-panel-header><p class="searchTitle">検索条件</p></v-expansion-panel-header>
          <v-expansion-panel-content>
            
            <v-row class="title">
              <v-col>
                <v-radio-group hide-details class="mt-0" v-model="searchSelect"><v-radio class="mx-auto searchLabel" color="#4d648d" label="相手が出せるポケモンで検索" value="出"/></v-radio-group>
              </v-col>
              <!-- <v-col>
                <h3>相手が出す条件で検索</h3>
              </v-col> -->
            </v-row>
            <div v-if="searchSelect=='出'">
              <p class="colTitle">ポケモン</p>
              <v-row class="poke">
                <v-col cols="4">
                  <v-select v-model="pokeName4" :options="pokeList" label="ポケモン1"></v-select>
                </v-col>
                <v-col cols="4">
                  <v-select v-model="pokeBall4" :options="ballList" label="ボール"></v-select>
                </v-col>
                <v-col cols="2">
                  <v-checkbox class="check" v-model="pokeYume4" label="夢" value="夢" small></v-checkbox>
                </v-col>
                <v-col cols="2">
                  <v-checkbox class="check" v-model="pokeIro4" label="色" value="色" small></v-checkbox>
                </v-col>
              </v-row>
            </div>

            <v-divider class="my-3"/>
            
            <v-row class="title">
              <v-col>
                <v-radio-group hide-details class="mt-0" v-model="searchSelect"><v-radio class="mx-auto searchLabel" color="#4d648d" label="相手が出せるもちもので検索" value="出も"/></v-radio-group>
              </v-col>
            </v-row>
            <div v-if="searchSelect=='出も'">
              <p class="colTitle">もちもの</p>
              <v-row class="poke">
                <v-col cols="12">
                  <v-select v-model="pokeItem2" :options="itemList" label="もちもの"></v-select>
                </v-col>
              </v-row>
            </div>
            
            <v-divider class="my-3"/>

            <v-row class="title">
              <!-- <v-col cols="6"> -->
              <v-col>
                <v-radio-group hide-details class="mt-0 pt-0" v-model="searchSelect"><v-radio class="mx-auto searchLabel" color="#4d648d" label="相手が求めるポケモンで検索" value="求"/></v-radio-group>
              </v-col>
            </v-row>
            <div v-if="searchSelect=='求'">
              <p class="colTitle">ポケモン</p>
              <v-row class="poke">
                <v-col cols="4">
                  <v-select label="ポケモン1" v-model="pokeName1" :options="pokeList"></v-select>
                </v-col>
                <v-col cols="4">
                  <v-select v-model="pokeBall1" :options="ballList" label="ボール"></v-select>
                </v-col>
                <v-col cols="2">
                  <v-checkbox class="check" v-model="pokeYume1" label="夢" value="夢" small></v-checkbox>
                </v-col>
                <v-col cols="2">
                  <v-checkbox class="check" v-model="pokeIro1" label="色" value="色" small></v-checkbox>
                </v-col>
              </v-row>
            </div>

            <v-divider class="my-3"/>

            <v-row class="title">
              <v-col>
                <v-radio-group hide-details class="mt-0 pt-0" v-model="searchSelect"><v-radio class="mx-auto searchLabel" color="#4d648d" label="相手が求めるもちもので検索" value="求も"/></v-radio-group>
              </v-col>
            </v-row>
            <div v-if="searchSelect=='求も'">
              <p class="colTitle">もちもの</p>
              <v-row class="poke">
                <v-col cols="12">
                  <v-select v-model="pokeItem1" :options="itemList" label="もちもの"></v-select>
                </v-col>
              </v-row>
            </div>


            <v-divider class="mt-3 mb-4"/>
            <!-- <span v-if="room_validation" class="vali">＊ 未入力または4桁の半角数字にしてください</span> -->
            <v-row class="poke poke_bottom">
              <v-col>
                <!-- <v-text-field color="#4d648d" class="room" label="ルーム番号" placeholder=" " v-model="room" :value="room" type="number"></v-text-field> -->
                <div class="btnWrapper">
                  <v-btn class="clearBtn" type="button" style="color: #4d648d" @click="clearSearch()">クリア</v-btn>
                  <v-btn class="searchBtn" type="button" style="color: #4d648d" @click="startSearch()">検索</v-btn>
                </div>
              </v-col>
            </v-row>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <!-- admax -->
    <div id="ad" class="pt-4" width="100%"></div>
    <!-- admax -->
    <div class="posts_wrapper">
      <v-col
        cols="12"
        v-for='(post, index) in this.posts'
        :key="post.post_id"
      >
        <v-card class="adCard">
          {{index}}
        </v-card>
        <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-card-text @click="toPost(post)" class="py-0 px-1">
              <v-row class="timeStamp">
                <small>{{ post.timeStamp }}</small>
              </v-row>
              <v-row>
                
                <v-col cols="6" class="postContent pr-1 py-0">
                  <v-row><p style="margin: 0 auto; font-weight: bold">出</p></v-row>
                  <v-row class="mx-0" v-if="post.pokeName4">
                    <v-img 
                      aspect-ratio="1"
                      contain
                      max-height="22px"
                      max-width="22px"
                      class="px-1"
                      :src="require('../assets/ball/B' + post.pokeBall4 + '.png')"
                    />
                    <p>{{ post.pokeName4 }}</p>
                    <p class="pl-1" v-if="post.pokeYume4 || post.pokeIro4">(</p>
                    <p v-if="post.pokeYume4">夢</p>
                    <p v-if="post.pokeYume4 && post.pokeIro4">,</p>
                    <p v-if="post.pokeIro4">色</p>
                    <p v-if="post.pokeYume4 || post.pokeIro4">)</p>
                  </v-row>
                  <v-row class="mx-0" v-if="post.pokeName5">
                    <v-img 
                      aspect-ratio="1"
                      contain
                      max-height="22px"
                      max-width="22px"
                      class="px-1"
                      :src="require('../assets/ball/B' + post.pokeBall5 + '.png')"
                    />
                    <p>{{ post.pokeName5 }}</p>
                    <p class="pl-1" v-if="post.pokeYume5 || post.pokeIro5">(</p>
                    <p v-if="post.pokeYume5">夢</p>
                    <p v-if="post.pokeYume5 && post.pokeIro5">,</p>
                    <p v-if="post.pokeIro5">色</p>
                    <p v-if="post.pokeYume5 || post.pokeIro5">)</p>
                  </v-row>
                  <v-row class="mx-0" v-if="post.pokeName6">
                    <v-img 
                      aspect-ratio="1"
                      contain
                      max-height="22px"
                      max-width="22px"
                      class="px-1"
                      :src="require('../assets/ball/B' + post.pokeBall6 + '.png')"
                    />
                    <p>{{ post.pokeName6 }}</p>
                    <p class="pl-1" v-if="post.pokeYume6 || post.pokeIro6">(</p>
                    <p v-if="post.pokeYume6">夢</p>
                    <p v-if="post.pokeYume6 && post.pokeIro6">,</p>
                    <p v-if="post.pokeIro6">色</p>
                    <p v-if="post.pokeYume6 || post.pokeIro6">)</p>
                  </v-row>
                  <v-row class="mx-0" v-if="post.pokeItem2">
                    <p class="pl-1">{{ post.pokeItem2 }}</p>
                  </v-row>
                </v-col>
                <v-col cols="6" class="postContent pl-1 py-0">
                  <v-row><p style="margin: 0 auto; font-weight: bold">求</p></v-row>
                  <v-row class="mx-0" v-if="post.pokeName1">
                      <v-img 
                        aspect-ratio="1"
                        contain
                        max-height="22px"
                        max-width="22px"
                        class="px-1 image"
                        :src="require('../assets/ball/B' + post.pokeBall1 + '.png')"
                      />
                      <p>{{ post.pokeName1 }}</p>
                      <p class="pl-1" v-if="post.pokeYume1 || post.pokeIro1">(</p>
                      <p v-if="post.pokeYume1">夢</p>
                      <p v-if="post.pokeYume1 && post.pokeIro1">,</p>
                      <p v-if="post.pokeIro1">色</p>
                      <p v-if="post.pokeYume1 || post.pokeIro1">)</p>
                  </v-row>
                  <v-row class="mx-0" v-if="post.pokeName2">
                    <v-img 
                      aspect-ratio="1"
                      contain
                      max-height="22px"
                      max-width="22px"
                      class="px-1"
                      :src="require('../assets/ball/B' + post.pokeBall2 + '.png')"
                    />
                    <p>{{ post.pokeName2 }}</p>
                    <p class="pl-1" v-if="post.pokeYume2 || post.pokeIro2">(</p>
                    <p v-if="post.pokeYume2">夢</p>
                    <p v-if="post.pokeYume2 && post.pokeIro2">,</p>
                    <p v-if="post.pokeIro2">色</p>
                    <p v-if="post.pokeYume2 || post.pokeIro">)</p>
                  </v-row>
                  <v-row class="mx-0" v-if="post.pokeName3">
                    <v-img 
                      aspect-ratio="1"
                      contain
                      max-height="22px"
                      max-width="22px"
                      class="px-1"
                      :src="require('../assets/ball/B' + post.pokeBall3 + '.png')"
                    />
                    <p>{{ post.pokeName3 }}</p>
                    <p class="pl-1" v-if="post.pokeYume3 || post.pokeIro3">(</p>
                    <p v-if="post.pokeYume3">夢</p>
                    <p v-if="post.pokeYume3 && post.pokeIro3">,</p>
                    <p v-if="post.pokeIro3">色</p>
                    <p v-if="post.pokeYume3 || post.pokeIro3">)</p>
                  </v-row>
                  <v-row class="mx-0" v-if="post.pokeItem1">
                    <p class="pl-1">{{ post.pokeItem1 }}</p>
                  </v-row>
                </v-col>
              </v-row>
              <v-row style="min-height: 46px;">
                <v-col cols="8" class="postContent pr-0">
                  <p v-html="post.other"/>
                </v-col>
                <v-col cols="3" class="postContent" style="position:relative;">
                  <p v-if="post.room" class="postRoom">パスワード<br> {{ post.room }}</p>
                </v-col>
                <v-col cols="1" class="postContent pb-0 pl-0" style="position:relative;">
                  <img :src="require('../assets/icon/sumi.png')" v-if="post.fin"/>
                </v-col>
              </v-row>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import vSelect from 'vue-select' // eslint-disable-line no-unused-vars
import 'vue-select/dist/vue-select.css';
import router from '../router' // eslint-disable-line no-unused-vars
export default {
  components: {
    vSelect
    
  },
  data() {
    return {
      unsub: null,
      searchSelect: null,
      searchTerm: firebase.firestore().collection("posted_data").orderBy("post_id", "desc"),
      room_validation: false,
      posts: [],
      fin: false,
      room: '',
      pokeName1: '',
      pokeName2: '',
      pokeName3: '',
      pokeName4: '',
      pokeName5: '',
      pokeName6: '',
      pokeBall1: '',
      pokeBall2: '',
      pokeBall3: '',
      pokeBall4: '',
      pokeBall5: '',
      pokeBall6: '',
      pokeYume1: '',
      pokeYume2: '',
      pokeYume3: '',
      pokeYume4: '',
      pokeYume5: '',
      pokeYume6: '',
      pokeIro1: '',
      pokeIro2: '',
      pokeIro3: '',
      pokeIro4: '',
      pokeIro5: '',
      pokeIro6: '',
      pokeItem1: '',
      pokeItem2: '',
      pokeList: [],
      itemList: [],
      ballList: [],
      ngList: []
    }
  },

  watch: {
    room: function(newValue) {
      this.room_validation = this.isRoom(newValue)
    },
    pokeName1: function(newValue) {
      if(newValue == null) this.pokeName1 = ''
    },
    pokeBall1: function(newValue) {
      if(newValue == null) this.pokeBall1 = ''
    },
    pokeYume1: function(newValue) {
      if(newValue == null) this.pokeYume1 = ''
    },
    pokeIro1: function(newValue) {
      if(newValue == null) this.pokeIro1 = ''
    },
    pokeName4: function(newValue) {
      if(newValue == null) this.pokeName4 = ''
    },
    pokeBall4: function(newValue) {
      if(newValue == null) this.pokeBall4 = ''
    },
    pokeYume4: function(newValue) {
      if(newValue == null) this.pokeYume4 = ''
    },
    pokeIro4: function(newValue) {
      if(newValue == null) this.pokeIro4 = ''
    },
    pokeItem1: function(newValue) {
      if(newValue == null) this.pokeItem1 = ''
    },
    pokeItem2: function(newValue) {
      if(newValue == null) this.pokeItem2 = ''
    },
  },
  mounted:
  function() {
    this.allSearch(),
    this.setAd()
  },
  created: function() {
    this.pokeList = require('../../public/pokeList.json')
    this.itemList = require('../../public/itemList.json')
    this.ballList = require('../../public/ballList.json')
    this.ngList = require('../../public/ngList.json')
  },
  methods: {
    setAd() {
      var target = document.getElementById('ad'); 
      var iframe = document.createElement('iframe'); //動的にiframeを作成
      iframe.width = 320;
      iframe.height = 50;
      iframe.frameBorder = "0";
      iframe.scrolling = "no";
      iframe.marginWidth = 0;
      iframe.marginHeight = 0;
      iframe.src = "about:self"; //iframeのsrcをabout:selfに設定
      target.appendChild(iframe);
      var src = "https://adm.shinobi.jp/s/ce6a8c261653f1cf01b3ef081fde46c8"; // サードーパーティのurl
      var doc = iframe.contentWindow.document;
      doc.open();
      var d = "";
      d += '<html><head></head>';
      d += '<body>';
      d += '<script src="'+src+'"><\/script>'; // eslint-disable-line no-useless-escape
      d += '<script>inDapIF = true;<\/script>'; // eslint-disable-line no-useless-escape
      d += '</body></html>';
      doc.write(d);
      doc.close();
    },
    setCustom(name, nameFrom) {
      this.unsub()
      this.searchTerm = firebase.firestore().collection("posted_data").orderBy("post_id", "desc").where(name, "array-contains", nameFrom)
      this.unsub = this.searchTerm.limit(10)
        .onSnapshot(function(querySnapshot) {
          console.log("read x10")
          this.posts = []
          querySnapshot.forEach(function(doc) {
            this.posts.push(doc.data())
          }.bind(this));
        }.bind(this));
    },
    allSearch() {
      this.searchTerm = firebase.firestore().collection("posted_data").orderBy("post_id", "desc")
        this.unsub = this.searchTerm.limit(10)
        .onSnapshot(function(querySnapshot) {
          console.log("all x10")
          this.posts = []
          querySnapshot.forEach(function(doc) {
            this.posts.push(doc.data())
          }.bind(this));
        }.bind(this));
    },
    startSearch() {
      if(this.searchSelect == null) return
      if(this.unsub != null) this.unsub()
      if(this.searchSelect == "出") {
        let nameArray = this.pokeName4 + this.pokeBall4 + this.pokeYume4 + this.pokeIro4
        this.setCustom("give", nameArray)
      }
      else if(this.searchSelect == "求") {
        let nameArray = this.pokeName1 + this.pokeBall1 + this.pokeYume1 + this.pokeIro1
        this.setCustom("take", nameArray)
      }
      else if(this.searchSelect == "出も") {
        let nameArray = this.pokeItem2
        this.setCustom("give", nameArray)
      }
      else if(this.searchSelect == "求も") {
        let nameArray = this.pokeItem1
        this.setCustom("take", nameArray)
      }
      
    },
    isRoom(item) {
      if(item.length == 4 || item == '') {
        return false
      }
      else return true
    },
    objectSort(object) {
      var sorted = {};
      var array = [];
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          array.push(key);
        }
      }
      array.sort(); 
      for (var i = 0; i < array.length; i++) {
        sorted[array[i]] = object[array[i]];
      }
      return sorted;
    },
    clearSearch() {
      this.pokeName1 = ''
      this.pokeName2 = ''
      this.pokeName3 = ''
      this.pokeName4 = ''
      this.pokeName5 = ''
      this.pokeName6 = ''
      this.pokeBall1 = ''
      this.pokeBall2 = ''
      this.pokeBall3 = ''
      this.pokeBall4 = ''
      this.pokeBall5 = ''
      this.pokeBall6 = ''
      this.pokeYume1 = ''
      this.pokeYume2 = ''
      this.pokeYume3 = ''
      this.pokeYume4 = ''
      this.pokeYume5 = ''
      this.pokeYume6 = ''
      this.pokeIro1 = ''
      this.pokeIro2 = ''
      this.pokeIro3 = ''
      this.pokeIro4 = ''
      this.pokeIro5 = ''
      this.pokeIro6 = ''
      this.pokeItem1 = ''
      this.pokeItem2 = ''
      this.room = ''

      if(this.unsub != null) this.unsub()
      this.allSearch()
    },
    toPost(post) {
      // this.$store.mutations.setSledId(this.$store.state, post.post_id)
      this.unsub()
      this.$store.commit('setSledId', post.post_id)
      router.push({ name: 'post', params: { post_id: post.post_id } }, () => {}, () => {})
    }
  },
  beforeRouteUpdate (to, from, next) {
    // URL の id が変わったときに src/components/items-detail.vue の updateItem 関数を実行してモデルを更新する
    this.$refs.items.fetchData();
    next();
  }
}
</script>

<style lang="scss">
.search_window {

  z-index: 101;
  width: 100vw;
  max-width: 768px;

  .searchTitle {
    text-align: center;
    margin: 0 auto;
    padding-left: 24px;
    font-weight: bold;
    color: rgb(100, 100, 100);
  }

  .title {
    .col {
      padding :0;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 10px;
      margin-bottom: 0;
    }
    label {
      font-size: 16px;
      font-weight: bold;
      color:rgb(66, 66, 66)
    }
  }

  .poke {
    .col {
      height: 40px;
      padding: 0 5px;

      .v-input--selection-controls {
        margin-top: 0px;
      }

      .vs__dropdown-toggle {
        height: 35px;
        .vs__selected-options {
          overflow: hidden;
        }
      }

      ul {
        padding: 0;
        margin: 0;
      }
      .check {
        .v-input--selection-controls__input {
          margin-right: 0px;
          margin-left: auto;
        }
        label {

          margin-right: auto;
        }
      }
      .row {
        height: 17px;
        padding-left: 5px;
        .v-input {
          margin: 0;
        }
      }
      
    }
  }
  .poke_bottom {
    margin-top: 10px;
    position: relative;
    .room {
      margin-top:0;
      padding-top:4px;
      max-width: 80px;
      display: inline-block;

      input {
        text-align: center;
      }
    }
    .btnWrapper {
      display: inline-block;
      position: absolute;
      right: 10px;
      button {
        margin-right: 10px;
      }
    }
  }
}
.posts_wrapper {
  // padding-top: 12px;

  .timeStamp {
    margin: 5px 0 0 10px;
    .commentNum {
      height: 21px;
      width: 21px;
      margin-left: auto;
      margin-right: 5px;
      background-color: rgb(27, 95, 199);
      color: white;
      font-weight: bold;
      padding: 0 6.5px;
      border-radius: 50%;
    }
  }

  .postContent {
    p {
      margin: 0;
    }
    .postRoom {
      font-size: 12px;
      line-height: normal;
      text-align: center;
      position: absolute;
      bottom: 0;
      padding-bottom: 12px;
    }
    img {
      max-height: 30px;
      max-width: 30px;
      position: absolute;
      bottom: 0;
      left: -5px;
      padding-bottom: 12px;
    }
  }
}

.vs--searchable {
  ul {
    max-height: 45vh;
    width: 100% !important;
    li {
      width: 90% !important;
      overflow: hidden;
      border-bottom:solid 1px rgb(172, 172, 172);
      margin: auto;
      padding: 5px;
      text-align: center;
      font-weight: bold;
      color:rgb(100, 100, 100);
    }
  }
  label {
    display: inline;
  }
}

// .searchLabel {
//   width: 300px;
// }

.adCard{
  display: none !important;
}

#ad {
  text-align: center;
}

</style>
