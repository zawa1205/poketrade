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
              <v-col cols="6">
                <h3>求めるポケモン</h3>
              </v-col>
              <v-col cols="6">
                <v-switch
                  v-model="fin"
                  color="#4d648d"
                  value="fin"
                  :label="'交換済を非表示'"
                  hide-details
                  style="margin-top:0;"
                ></v-switch>
              </v-col>
            </v-row>
            <p class="colTitle">ポケモン</p>
            <v-row class="poke">
              <v-col cols="4">
                <v-select label="ポケモン1" v-model="pokeName1" :options="pokeList"></v-select>
              </v-col>
              <v-col cols="4">
                <v-select v-model="pokeBall1" :options="ballList" label="ボール"></v-select>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="pokeYume1" label="夢" small></v-checkbox>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="pokeIro1" label="色" small></v-checkbox>
              </v-col>
            </v-row>
            <p class="colTitle">もちもの</p>
            <v-row class="poke">
              <v-col cols="8">
                <v-select v-model="pokeItem1" :options="itemList" label="もちもの"></v-select>
              </v-col>
            </v-row>
            <v-divider class="bottomBar"/>
            <v-row class="title"><h3>出せるポケモン</h3></v-row>
            <p class="colTitle">ポケモン</p>
            <v-row class="poke">
              <v-col cols="4">
                <v-select v-model="pokeName4" :options="pokeList" label="ポケモン1"></v-select>
              </v-col>
              <v-col cols="4">
                <v-select v-model="pokeBall4" :options="ballList" label="ボール"></v-select>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="pokeYume4" label="夢" small></v-checkbox>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="pokeIro4" label="色" small></v-checkbox>
              </v-col>
            </v-row>
            <p class="colTitle">もちもの</p>
            <v-row class="poke">
              <v-col cols="8">
                <v-select v-model="pokeItem2" :options="itemList" label="もちもの"></v-select>
              </v-col>
            </v-row>
            <v-divider class="bottomBar"/>
            <span v-if="room_validation" class="vali">＊ 未入力または4桁の半角数字にしてください</span>
            <v-row class="poke poke_bottom">
              <v-col cols="2"/>
              <v-col cols="4">
                <v-text-field color="#4d648d" class="room" label="ルーム番号" placeholder=" " v-model="room" :value="room" type="number"></v-text-field>
              </v-col>
              <v-col cols="2"/>
              <v-col cols="2">
                <v-btn type="button" style="color: #4d648d" v-on:click="clearSearch()">クリア</v-btn>
              </v-col>
              <v-col cols="2">
                <v-btn type="button" style="color: #4d648d" v-on:click="Search()">検索</v-btn>
              </v-col>
            </v-row>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
    <div class="posts_wrapper">
      <v-col
        cols="12"
        v-for='(post, index) in filteredUsers'
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
                <v-col cols="6" class="postContent pl-1 py-0">
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
      searchTerm: '',
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
      pokeYume1: false,
      pokeYume2: false,
      pokeYume3: false,
      pokeYume4: false,
      pokeYume5: false,
      pokeYume6: false,
      pokeIro1: false,
      pokeIro2: false,
      pokeIro3: false,
      pokeIro4: false,
      pokeIro5: false,
      pokeIro6: false,
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
    }
  },
  mounted:
  function() {
  //   fetch('http://tympopen.sakura.ne.jp/zawa/graphql', {mode: "cors"})
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   console.log(JSON.stringify(myJson));
  // });

    let searchRef = firebase.firestore().collection("posted_data").orderBy("post_id", "desc")
    searchRef.where("post_id", ">=", 1).limit(10)
      .onSnapshot(function(querySnapshot) {
        this.posts = []
          querySnapshot.forEach(function(doc) {
            this.posts.push(doc.data())
          }.bind(this));
      }.bind(this));
  },
  computed: {
    filteredUsers: function() {
      var posts = [];
      var posts_sumi = [];
      for(var i in this.posts) {
        var post = this.posts[i];

          if(post.pokeName1.indexOf(this.pokeName1) !== -1
            || post.pokeName2.indexOf(this.pokeName1) !== -1
            || post.pokeName3.indexOf(this.pokeName1) !== -1 
          ){
            if(post.pokeName4.indexOf(this.pokeName4) !== -1
              || post.pokeName5.indexOf(this.pokeName4) !== -1
              || post.pokeName6.indexOf(this.pokeName4) !== -1 
            ){
              if(post.pokeName1.indexOf(this.pokeName2) !== -1
                || post.pokeName2.indexOf(this.pokeName2) !== -1
                || post.pokeName3.indexOf(this.pokeName2) !== -1
              ){
                if(post.pokeName1.indexOf(this.pokeName3) !== -1
                  || post.pokeName2.indexOf(this.pokeName3) !== -1
                  || post.pokeName3.indexOf(this.pokeName3) !== -1
                ){
                  if(post.pokeName4.indexOf(this.pokeName5) !== -1
                    || post.pokeName5.indexOf(this.pokeName5) !== -1
                    || post.pokeName6.indexOf(this.pokeName5) !== -1 
                  ){
                    if(post.pokeName4.indexOf(this.pokeName6) !== -1
                      || post.pokeName5.indexOf(this.pokeName6) !== -1
                      || post.pokeName6.indexOf(this.pokeName6) !== -1 
                    ){
                      if(post.pokeItem1.indexOf(this.pokeItem1) !== -1){
                        if(post.pokeItem2.indexOf(this.pokeItem2) !== -1){
                          if(post.room.indexOf(this.room) !== -1){
                            posts.push(post);
                            if(!post.fin) {
                              posts_sumi.push(post);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
      }
      if(this.fin) {
        return posts_sumi;
      } else return posts;
    }
  },
  created: function() {
    this.pokeList = require('../../public/pokeList.json')
    this.itemList = require('../../public/itemList.json')
    this.ballList = require('../../public/ballList.json')
    this.ngList = require('../../public/ngList.json')
  },
  methods: {
    
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
      this.pokeYume1 = false
      this.pokeYume2 = false
      this.pokeYume3 = false
      this.pokeYume4 = false
      this.pokeYume5 = false
      this.pokeYume6 = false
      this.pokeIro1 = false
      this.pokeIro2 = false
      this.pokeIro3 = false
      this.pokeIro4 = false
      this.pokeIro5 = false
      this.pokeIro6 = false
      this.pokeItem1 = ''
      this.pokeItem2 = ''
      this.room = ''
      
    },
    toPost(post) {
      // this.$store.mutations.setSledId(this.$store.state, post.post_id)
      
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
      font-size: 11px;
    }
    .v-input--selection-controls__input {
      margin-left: auto;
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
    .room {
      margin-top:0;
      padding-top:4px;
      input {
        text-align: center;
      }
    }
    button {
      display: block;
      margin: auto;
    }
  }
}
.posts_wrapper {
  padding-top: 12px;

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

.adCard{
  display: none !important;
}

</style>
