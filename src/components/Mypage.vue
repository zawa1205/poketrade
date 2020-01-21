<template>
  <div>
    <v-card>
        <h3 class="ml-3 mt-1">My投稿一覧</h3>

      <v-card-text class="px-2 py-0" style="overflow: hidden;">
        <v-row style="height: 22px;">
          <v-col cols="6" class="pa-0"><span v-if="user_validation" class="vali" style="display: block; text-align: center;">＊ 半角英数字4文字以上</span></v-col>
          <v-col cols="6" class="pa-0"><span v-if="pass_validation" class="vali" style="display: block; text-align: center;">＊ 半角英数字4文字以上</span></v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="py-0">
            <v-text-field class="formId" hide-details outlined color="#4d648d" label="投稿ID" placeholder=" " v-model="formUser"></v-text-field>
          </v-col>
          <v-col cols="6" class="py-0">
            <v-text-field required class="formPass" hide-details outlined color="#4d648d" label="パスワード" placeholder=" " v-model="formPass"></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="pt-0">
          <v-spacer></v-spacer>
          <v-btn color="#4d648d" text @click="searchMyForm()">決定</v-btn>
        </v-card-actions>
    </v-card>

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
  <!-- <div class="posts_wrapper">
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
  </div> -->
</template>

<script>
import router from '../router'
import firebase from 'firebase'

export default {
  data() {
    return {
      formUser: null,
      formPass: null,
      user_validation: true,
      pass_validation: true,
      searchTerm: null,
      posts: []
    }
  },
  mounted: function() {
    this.setAd()
  },
  watch: {
    formUser(newVal) {
      this.user_validation = this.isUserPass(newVal)
    },
    formPass(newVal) {
      this.pass_validation = this.isUserPass(newVal)
    }
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
    toPost(post) {
      // this.$store.mutations.setSledId(this.$store.state, post.post_id)
      
      this.$store.commit('setSledId', post.post_id)
      router.push({ name: 'post', params: { post_id: post.post_id } }, () => {}, () => {})
    },
    isUserPass(item) {
      if(item != null && item.length < 4) return true
      else if(item == null || item.match(/^[0-9a-zA-Z]*$/) == null) return true
      else return false
    },
    searchMyForm() {
      if(this.user_validation || this.pass_validation) return
      this.posts = []
      this.searchTerm = firebase.firestore().collection("posted_data").orderBy("post_id", "desc").where("formUser", "==", this.formUser).where("formPass", "==", this.formPass)
      this.searchTerm.limit(10).get().then(snapshot => {
          console.log("x10")

        snapshot.forEach(doc => {
          this.posts.push(doc.data())
        });
      })
    }
  }
}
</script>