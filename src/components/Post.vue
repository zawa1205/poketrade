<template>
<div>
  <v-container class="postPage px-4">
    <v-card>
          <div class="d-flex flex-no-wrap justify-space-between">
            <v-card-text class="py-0 px-1">
              <v-row class="timeStamp"><small>{{ post.timeStamp }}</small></v-row>
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
                      <p v-if="post.pokeYume1 || post.pokeYume1">)</p>
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
                    <p v-if="post.pokeYume2 || post.pokeYume2">)</p>
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
                    <p v-if="post.pokeYume3 || post.pokeYume3">)</p>
                  </v-row>
                  <v-row class="mx-0" v-if="post.pokeItem1">
                    <p class="pl-1">{{ post.pokeItem1 }}</p>
                  </v-row>
                </v-col>
                <v-col cols="6" class="postContent px-1 py-0">
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
                    <p v-if="post.pokeYume4 || post.pokeYume4">)</p>
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
                    <p v-if="post.pokeYume5 || post.pokeYume5">)</p>
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
                    <p v-if="post.pokeYume6 || post.pokeYume6">)</p>
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
    <!-- <v-row class="sumiWrapper" justify="end">
      <small color="gray">交換を完了済みにする</small>
      <v-switch
        v-model="post.fin"
        color="#4d648d"
        hide-details
        
      />
    </v-row> -->

    <v-card class="commentsWrapper">
      <v-card-text>
        <v-row>
          <h3 class="commentTitle">コメント</h3>
        </v-row>
        <div v-for="comment in post.comments" v-bind:key="comment.comment_id" class="comment_wrapper">
          <v-divider class="vline"/>
          <p class="commentName">{{ comment.comment_name }}</p>
          <small>{{ comment.comment_time }}</small>
          <p v-html="comment.comment_cont"/>
        </div>
      </v-card-text>
    </v-card>

  </v-container>

  <v-footer
    color="#283655"
    padless
    class="postFooter"
  >
    <input v-model="comment.comment_name"/>
    <span v-if="comment_validation" class="vali comVali">＊ 不適切なワードが含まれています。</span>
    <textarea v-model="comment.comment_cont" :rows="rows" placeholder="コメントを入力" hide-details></textarea>
    <v-btn text icon small color="white" @click="pushComment()"><v-icon>mdi-send</v-icon></v-btn>

  </v-footer>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  data() {
    return {
      comment_validation: false,
      ngList: [],
      docId: '',
      comment: {
        comment_id: 0,
        comment_cont: '',
        comment_time: '',
        comment_name: '名無しさん'
      },
      post: {
        post_id: '',
        fin: undefined,
        room: '',
        other: '',
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
        comments: [],
      }
    }
  },
  computed: {
    rows:function(){
        var num = this.comment.comment_cont.split("\n").length;
        // return (num > 1) ? num : 1;
        if(num < 2) return 2;
        else if(num < 10) return num;
        else return 10;
    }
  },
  mounted() {
    this.fetchData()
  },
  created: function() {
    this.ngList = require('../../public/ngList.json')
  },
  watch: {
    'comment.comment_cont': function(newVal) {
      if(this.isNg(newVal)) this.comment_validation = true
      else this.comment_validation = false
    },
    toTop: function() {
      // this.$nextTick(() => {
      var positionY = sessionStorage.getItem('positionY')
      scrollTo(0, positionY);
      setTimeout(function(){
        scrollTo(0, positionY);
      }, 500);
    },
    'post.fin': function(newval, oldval) {
      if(oldval!= undefined) {
        firebase.firestore().collection("posted_data").doc(this.docId).update({ fin: this.post.fin })
      }
    }
  },
  methods: {
    isNg(item) {
      var regexp = new RegExp(this.ngList.join('|'))
      return regexp.test(item)
    },
    toBottom() {
      var element = document.documentElement;
      var bottom = element.scrollHeight - element.clientHeight;
      window.scroll(0, bottom);
      
    },
    timeStamp() {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth()+1;
      var date = now.getDate();
      var hours = now.getHours();
      var minute = now.getMinutes();
      var second = now.getSeconds();
      return year + '年' + month + '月' + date + '日' + hours + '時' + minute + '分' + second + '秒';
    },
    fetchData() {
      firebase.firestore().collection("posted_data").where("post_id", "==", this.$store.getters.getSledId)
      .onSnapshot(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // console.log("road fetch datas")
            this.post = doc.data()
            this.docId = doc.id
          }.bind(this));
      }.bind(this));
    },
    pushComment() {
      if(this.comment_validation) return;
      if(this.comment.comment_cont == '') return;
      
      this.post.comments.push(this.comment)
      this.comment.comment_id = this.makeId()
      this.comment.comment_cont = this.comment.comment_cont.replace(/\n/g,"<br />").replace(/\r/g,"");
      this.comment.comment_time = this.timeStamp()
      firebase.firestore().collection("posted_data").doc(this.docId).update({comments: this.post.comments})
      this.comment.comment_cont = ''
      this.comment.comment_time = ''
      this.toBottom()
    },
    makeId() {
      var now = new Date();
      var yyyy = this.toDoubleDigit(now.getFullYear());
      var mo = this.toDoubleDigit(now.getMonth()+1);
      var dd = this.toDoubleDigit(now.getDate());
      var hh = this.toDoubleDigit(now.getHours());
      var mm = this.toDoubleDigit(now.getMinutes());
      var ss = this.toDoubleDigit(now.getSeconds());
      var ms = this.toDoubleDigit(now.getMilliseconds());
      return Number(yyyy + mo + dd + hh + mm + ss + ms)
    },
    toDoubleDigit(num) {
      num += "";
      if (num.length === 1) {
        num = "0" + num;
      }
    return num ;

    },
  }
}
</script>

<style lang="scss">
.postPage {
  .timeStamp {
    margin: 5px 0 0 10px;
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

  .sumiWrapper {
    margin-top: 15px;
    margin-right:0;
    small {
      display: inline;
      font-size: 8px;
      line-height: 24px;
      vertical-align: center;
      padding-right: 5px;
    }
    .v-input {
      margin: 0;
      padding: 0;
    }
  }

  -webkit-scrollbar {
    /* Chrome, Safari 対応 */
    display:none;
  }

  .commentsWrapper {
    margin-top: 15px;
    overflow: scroll;
    max-height: 29vh;
    -ms-overflow-style: none;    /* IE, Edge 対応 */
    scrollbar-width: none;       /* Firefox 対応 */

    .commentTitle {
      margin: 0 auto;
      padding-bottom: 8px;
    }

    .comment_wrapper {
      position: relative;

      .vline {
        margin-top: 4px;
        margin-bottom: 8px;
      }

      .commentName {
        color: rgb(51, 138, 59);
        font-weight: bold;

        @media screen and (max-width: 320px) {
          max-width: 110px;
        }
        @media screen and (min-width:321px) and ( max-width:375px) {
          max-width: 170px;
        }
        @media screen and (min-width:376px) and ( max-width:425px) {
          max-width: 220px;
        }
      }

      p {
        margin-bottom: 9px;
        // display: inline-block;
      }
      small {
        position: absolute;
        right: 0;
        top: 8px;
      }
    }
  }
}

.v-footer {
  position: absolute;
  bottom: 0;
}

.postFooter {
  position: absolute !important;
  bottom: 0;
  width: 100%;

      .v-btn {
        margin: 0 auto;
        // margin-right: 10px;
      }
      textarea {
        border: solid 1px rgb(150, 179, 221);
        background-color: white;
        resize: none;
        width: 80%;
        min-height: 28px;
        margin: 12px 12px 12px 24px;
        border-radius: 15px;
        padding: 2px 15px;
        outline: none;
      }
      input {
        width: 40%;
        border: solid 1px rgb(150, 179, 221);
        outline: none;
        padding: 0 15px;
        margin-top: 12px;
        margin-left: 24px;
        background-color: white;
        border-radius: 15px;
      }

      .comVali {
        background-color: white;
        font-weight: bold;
        border-radius: 10px;
        position: absolute;
        top: 23px;
        right: 0;
        transform: scale(0.8)
      }
    
}
</style>