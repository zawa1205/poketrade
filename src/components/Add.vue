<template>
  <v-row class="addBtn">
    <v-dialog v-model="dialog" scrollable persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="#4d648d" class="addBtn" fab v-on="on" dark>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>
      <v-card class="mx-1">
        <v-card-title class="pb-0" style="position: relative;">
          <span class="headline">投稿内容</span>
          <span style="color:red; font-size: 8px; line-height: 18px; bottom:0; right: 10px; position: absolute;">* は必須項目</span>
        </v-card-title>
        <v-divider class="addTopBar"/>
        <v-card-text>
          <v-container class="formContents">
          <!-- <small style="color: red">* は必須項目</small> -->
            <v-row class="title"><h3><span style="color:red">*</span>投稿情報</h3><span style="color:red; font-size: 8px; padding-left: 4px;">(My投稿一覧、投稿削除に必要)</span></v-row>
            <v-row style="height: 22px;">
              <v-col cols="6" class="pa-0"><span v-if="user_validation" class="vali" style="display: block; text-align: center;">＊ 半角英数字4文字以上</span></v-col>
              <v-col cols="6" class="pa-0"><span v-if="pass_validation" class="vali" style="display: block; text-align: center;">＊ 半角英数字4文字以上</span></v-col>
            </v-row>
            <v-row>
              <v-col cols="6" class="py-0 pr-1">
                <v-text-field class="formId" hide-details outlined color="#4d648d" label="投稿ID" placeholder=" " v-model="form_data.formUser"></v-text-field>
              </v-col>
              <v-col cols="6" class="py-0 pl-1">
                <v-text-field required class="formPass" hide-details outlined color="#4d648d" label="パスワード" placeholder=" " v-model="form_data.formPass"></v-text-field>
              </v-col>
            </v-row>

            <v-divider class="bottomBar"/>

            <v-row class="title"><h3><span style="color:red">*</span>出せるポケモン</h3></v-row>
            <span v-if="give_validation" class="vali">＊ ポケモン/もちものを選んでください。</span>
            <p class="colTitle">ポケモン1</p>
            <v-row class="poke">
              <v-col cols="4">
                <v-select v-model="form_data.pokeName4" :options="pokeList" label="ポケモン1"></v-select>
              </v-col>
              <v-col cols="4">
                <v-select v-model="form_data.pokeBall4" :options="ballList" label="ボール"></v-select>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeYume4" label="夢" value="夢"></v-checkbox>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeIro4" label="色" value="色"></v-checkbox>
              </v-col>
            </v-row>
            <p class="colTitle">ポケモン2</p>
            <v-row class="poke">
              <v-col cols="4">
                <v-select v-model="form_data.pokeName5" :options="pokeList" label="ポケモン2"></v-select>
              </v-col>
              <v-col cols="4">
                <v-select v-model="form_data.pokeBall5" :options="ballList" label="ボール"></v-select>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeYume5" label="夢" value="夢"></v-checkbox>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeIro5" label="色" value="色"></v-checkbox>
              </v-col>
            </v-row>
            <p class="colTitle">ポケモン3</p>
            <v-row class="poke">
              <v-col cols="4">
                <v-select v-model="form_data.pokeName6" :options="pokeList" label="ポケモン3"></v-select>
              </v-col>
              <v-col cols="4">
                <v-select v-model="form_data.pokeBall6" :options="ballList" label="ボール"></v-select>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeYume6" label="夢" value="夢"></v-checkbox>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeIro6" label="色" value="色"></v-checkbox>
              </v-col>
            </v-row>
            <p class="colTitle">もちもの</p>
            <v-row class="poke">
              <v-col cols="8">
                <v-select v-model="form_data.pokeItem2" :options="itemList" label="もちもの"></v-select>
              </v-col>
            </v-row>

            <v-divider class="bottomBar"/>


            <v-row class="title" style="margin-top: 20px;">
              <h3><span style="color:red">*</span>求めるポケモン</h3>
            </v-row>
            <span v-if="want_validation" class="vali">＊ ポケモン/もちものを選んでください。</span>

            <p class="colTitle">ポケモン1</p>
            <v-row class="poke">
              <v-col cols="4">
                <v-select label="ポケモン1" v-model="form_data.pokeName1" :options="pokeList"></v-select>
              </v-col>
              <v-col cols="4">
                <v-select v-model="form_data.pokeBall1" :options="ballList" label="ボール"></v-select>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeYume1" label="夢" value="夢"></v-checkbox>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeIro1" label="色" value="色"></v-checkbox>
              </v-col>
            </v-row>
            <p class="colTitle">ポケモン2</p>
            <v-row class="poke">
              <v-col cols="4">
                <v-select v-model="form_data.pokeName2" :options="pokeList" label="ポケモン2"></v-select>
              </v-col>
              <v-col cols="4">
                <v-select v-model="form_data.pokeBall2" :options="ballList" label="ボール"></v-select>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeYume2" label="夢" value="夢"></v-checkbox>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeIro2" label="色" value="色"></v-checkbox>
              </v-col>
            </v-row>
            <p class="colTitle">ポケモン3</p>
            <v-row class="poke">
              <v-col cols="4">
                <v-select v-model="form_data.pokeName3" :options="pokeList" label="ポケモン3"></v-select>
              </v-col>
              <v-col cols="4">
                <v-select v-model="form_data.pokeBall3" :options="ballList" label="ボール"></v-select>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeYume3" label="夢" value="夢"></v-checkbox>
              </v-col>
              <v-col cols="2">
                <v-checkbox class="check" v-model="form_data.pokeIro3" label="色" value="色"></v-checkbox>
              </v-col>
            </v-row>
            <p class="colTitle">もちもの</p>
            <v-row class="poke">
              <v-col cols="8">
                <v-select v-model="form_data.pokeItem1" :options="itemList" label="もちもの"></v-select>
              </v-col>
            </v-row>

            <v-divider class="bottomBar"/>

            <span v-if="room_validation" class="vali">＊ 未入力または4桁の半角数字にしてください</span>
            <v-text-field color="#4d648d" class="addRoom" label="ルーム番号" placeholder=" " v-model="form_data.room" type="number"></v-text-field>
            
            <span v-if="other_validation" class="vali">＊ 不適切なワードが含まれています。</span>
            
            <v-row>
              <v-col>
                <v-textarea color="#4d648d" class="post_textarea" hide-details label="その他" v-model="form_data.other" placeholder="遺伝わざや個体値などが必要な場合は、こちらへご記入ください。"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-divider class="addBottomBar"/>
        <v-card-actions class="pt-5">
          <v-spacer></v-spacer>
          <span v-if="post_validation" class="postVali">＊ 正しい入力にしてください。</span>
          <v-btn color="#4d648d" text @click="closeDialog()">キャンセル</v-btn>
          <v-btn color="#4d648d" text @click="test()">送信</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import firebase from 'firebase'
import vSelect from 'vue-select' // eslint-disable-line no-unused-vars
import 'vue-select/dist/vue-select.css'


export default {
  components: {
    vSelect
  },
  data() {
    return {
      form_data: {
        formPass:'',
        formUser:'',
        fin: false,
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
      },
      // id_last: 0,
      user_validation: true,
      pass_validation: true,
      other_validation: false,
      room_validation: false,
      post_validation: false,
      want_validation: false,
      give_validation: false,
      dialog: false,
      pokeList: [],
      ballList: [],
      itemList: [],
      ngList: []
    }
  },
  created: function() {
    this.pokeList = require('../../public/pokeList.json')
    this.itemList = require('../../public/itemList.json')
    this.ballList = require('../../public/ballList.json')
    this.ngList = require('../../public/ngList.json')
  },
  methods: {
    isUserPass(item) {
      if(item != null && item.length < 4) return true
      else if(item == null || item.match(/^[0-9a-zA-Z]*$/) == null) return true
      else return false
    },
    wantVali() {
      if(
        this.form_data.pokeName1 == '' &&
        this.form_data.pokeName2 == '' &&
        this.form_data.pokeName3 == '' &&
        this.form_data.pokeItem1 == ''
      ) {
        this.want_validation = true
        return true
      }
    },
    giveVali() {
      if(
        this.form_data.pokeName4 == '' &&
        this.form_data.pokeName5 == '' &&
        this.form_data.pokeName6 == '' &&
        this.form_data.pokeItem2 == ''
      ) {
        this.give_validation = true
        return true
      }
    },
    postVali() {
      if(
        this.form_data.formUser == '' && 
        this.form_data.formPass == '' &&
        this.form_data.room == '' &&
        this.form_data.other == '' &&
        this.form_data.pokeName1 == '' &&
        this.form_data.pokeName2 == '' &&
        this.form_data.pokeName3 == '' &&
        this.form_data.pokeName4 == '' &&
        this.form_data.pokeName5 == '' &&
        this.form_data.pokeName6 == '' &&
        this.form_data.pokeBall1 == '' &&
        this.form_data.pokeBall2 == '' &&
        this.form_data.pokeBall3 == '' &&
        this.form_data.pokeBall4 == '' &&
        this.form_data.pokeBall5 == '' &&
        this.form_data.pokeBall6 == '' &&
        this.form_data.pokeItem1 == '' &&
        this.form_data.pokeItem2 == ''
      ) {
        this.post_validation = true
        return true
      }
      if(
        this.isNg(this.form_data.other) ||
        this.isRoom(this.form_data.room)
      ) {
        this.post_validation = true
        return true
      }
    },
    isRoom(item) {
      if(item.length == 4 || item == '') {
        return false
      }
      else return true
    },
    isNg(item) {
      var regexp = new RegExp(this.ngList.join('|'))
      return regexp.test(item)
    },
    toDoubleDigit(num) {
      num += ""
      if (num.length === 1) {
        num = "0" + num
      }
    return num

    },
    makeId() {
      var now = new Date()
      var yyyy = this.toDoubleDigit(now.getFullYear())
      var mo = this.toDoubleDigit(now.getMonth()+1)
      var dd = this.toDoubleDigit(now.getDate())
      var hh = this.toDoubleDigit(now.getHours())
      var mm = this.toDoubleDigit(now.getMinutes())
      var ss = this.toDoubleDigit(now.getSeconds())
      var ms = this.toDoubleDigit(now.getMilliseconds())
      return Number(yyyy + mo + dd + hh + mm + ss + ms)
    },
    timeStamp() {
      // return new Date(Date.now() + ((new Date().getTimezoneOffset() + (9 * 60)) * 60 * 1000));
      var now = new Date()
      var year = now.getFullYear()
      var month = now.getMonth()+1
      var date = now.getDate()
      var hours = now.getHours()
      var minute = now.getMinutes()
      var second = now.getSeconds()
      return year + '年' + month + '月' + date + '日' + hours + '時' + minute + '分' + second + '秒'
    },
    clearInput() {
      this.form_data.formUser = ''
      this.form_data.formPass = ''
      this.form_data.room = ''
      this.form_data.other = ''
      this.form_data.pokeName1 = ''
      this.form_data.pokeName2 = ''
      this.form_data.pokeName3 = ''
      this.form_data.pokeName4 = ''
      this.form_data.pokeName5 = ''
      this.form_data.pokeName6 = ''
      this.form_data.pokeBall1 = ''
      this.form_data.pokeBall2 = ''
      this.form_data.pokeBall3 = ''
      this.form_data.pokeBall4 = ''
      this.form_data.pokeBall5 = ''
      this.form_data.pokeBall6 = ''
      this.form_data.pokeYume1 = ''
      this.form_data.pokeYume2 = ''
      this.form_data.pokeYume3 = ''
      this.form_data.pokeYume4 = ''
      this.form_data.pokeYume5 = ''
      this.form_data.pokeYume6 = ''
      this.form_data.pokeIro1 = ''
      this.form_data.pokeIro2 = ''
      this.form_data.pokeIro3 = ''
      this.form_data.pokeIro4 = ''
      this.form_data.pokeIro5 = ''
      this.form_data.pokeIro6 = ''
      this.form_data.pokeItem1 = ''
      this.form_data.pokeItem2 = ''
    },
    closeDialog() {
      this.clearInput()
      this.dialog = false
      this.post_validation = false
      this.give_validation = false
      this.want_validation = false
    },
    test() {
      if(this.user_Validation || this.pass_validation || this.wantVali() || this.giveVali() || this.postVali()) return

      firebase.firestore().collection("posted_data").add({
        room: this.form_data.room.trim(),
        fin: false,
        // post_id: this.id_last,
        post_id: this.makeId(),
        take: [
          this.form_data.pokeName1,
          this.form_data.pokeName1 + this.form_data.pokeBall1,
          this.form_data.pokeName1 + this.form_data.pokeYume1,
          this.form_data.pokeName1 + this.form_data.pokeIro1,
          this.form_data.pokeName1 + this.form_data.pokeBall1 + this.form_data.pokeYume1,
          this.form_data.pokeName1 + this.form_data.pokeBall1 + this.form_data.pokeIro1,
          this.form_data.pokeName1 +this.form_data.pokeYume1 + this.form_data.pokeIro1,
          this.form_data.pokeName1 + this.form_data.pokeBall1 +this.form_data.pokeYume1 + this.form_data.pokeIro1,
          this.form_data.pokeName2,
          this.form_data.pokeName2 + this.form_data.pokeBall2,
          this.form_data.pokeName2 + this.form_data.pokeYume2,
          this.form_data.pokeName2 + this.form_data.pokeIro2,
          this.form_data.pokeName2 + this.form_data.pokeBall2 + this.form_data.pokeYume2,
          this.form_data.pokeName2 + this.form_data.pokeBall2 + this.form_data.pokeIro2,
          this.form_data.pokeName2 +this.form_data.pokeYume2 + this.form_data.pokeIro2,
          this.form_data.pokeName2 + this.form_data.pokeBall2 +this.form_data.pokeYume2 + this.form_data.pokeIro2,
          this.form_data.pokeName3,
          this.form_data.pokeName3 + this.form_data.pokeBall3,
          this.form_data.pokeName3 + this.form_data.pokeYume3,
          this.form_data.pokeName3 + this.form_data.pokeIro3,
          this.form_data.pokeName3 + this.form_data.pokeBall3 + this.form_data.pokeYume3,
          this.form_data.pokeName3 + this.form_data.pokeBall3 + this.form_data.pokeIro3,
          this.form_data.pokeName3 +this.form_data.pokeYume3 + this.form_data.pokeIro3,
          this.form_data.pokeName3 + this.form_data.pokeBall3 +this.form_data.pokeYume3 + this.form_data.pokeIro3,
          this.form_data.pokeItem1
        ],
        give: [
          this.form_data.pokeName4,
          this.form_data.pokeName4 + this.form_data.pokeBall4,
          this.form_data.pokeName4 + this.form_data.pokeYume4,
          this.form_data.pokeName4 + this.form_data.pokeIro4,
          this.form_data.pokeName4 + this.form_data.pokeBall4 + this.form_data.pokeYume4,
          this.form_data.pokeName4 + this.form_data.pokeBall4 + this.form_data.pokeIro4,
          this.form_data.pokeName4 +this.form_data.pokeYume4 + this.form_data.pokeIro4,
          this.form_data.pokeName4 + this.form_data.pokeBall4 +this.form_data.pokeYume4 + this.form_data.pokeIro4,
          this.form_data.pokeName5,
          this.form_data.pokeName5 + this.form_data.pokeBall5,
          this.form_data.pokeName5 + this.form_data.pokeYume5,
          this.form_data.pokeName5 + this.form_data.pokeIro5,
          this.form_data.pokeName5 + this.form_data.pokeBall5 + this.form_data.pokeYume5,
          this.form_data.pokeName5 + this.form_data.pokeBall5 + this.form_data.pokeIro5,
          this.form_data.pokeName5 +this.form_data.pokeYume5 + this.form_data.pokeIro5,
          this.form_data.pokeName5 + this.form_data.pokeBall5 +this.form_data.pokeYume5 + this.form_data.pokeIro5,
          this.form_data.pokeName6,
          this.form_data.pokeName6 + this.form_data.pokeBall6,
          this.form_data.pokeName6 + this.form_data.pokeYume6,
          this.form_data.pokeName6 + this.form_data.pokeIro6,
          this.form_data.pokeName6 + this.form_data.pokeBall6 + this.form_data.pokeYume6,
          this.form_data.pokeName6 + this.form_data.pokeBall6 + this.form_data.pokeIro6,
          this.form_data.pokeName6 +this.form_data.pokeYume6 + this.form_data.pokeIro6,
          this.form_data.pokeName6 + this.form_data.pokeBall6 +this.form_data.pokeYume6 + this.form_data.pokeIro6,
          this.form_data.pokeItem2
        ],
        formUser: this.form_data.formUser.trim(),
        formPass: this.form_data.formPass.trim(),
        pokeName1: this.form_data.pokeName1.trim(),
        pokeName2: this.form_data.pokeName2.trim(),
        pokeName3: this.form_data.pokeName3.trim(),
        pokeName4: this.form_data.pokeName4.trim(),
        pokeName5: this.form_data.pokeName5.trim(),
        pokeName6: this.form_data.pokeName6.trim(),
        pokeBall1: this.form_data.pokeBall1.trim(),
        pokeBall2: this.form_data.pokeBall2.trim(),
        pokeBall3: this.form_data.pokeBall3.trim(),
        pokeBall4: this.form_data.pokeBall4.trim(),
        pokeBall5: this.form_data.pokeBall5.trim(),
        pokeBall6: this.form_data.pokeBall6.trim(),
        pokeYume1: this.form_data.pokeYume1,
        pokeYume2: this.form_data.pokeYume2,
        pokeYume3: this.form_data.pokeYume3,
        pokeYume4: this.form_data.pokeYume4,
        pokeYume5: this.form_data.pokeYume5,
        pokeYume6: this.form_data.pokeYume6,
        pokeIro1: this.form_data.pokeIro1,
        pokeIro2: this.form_data.pokeIro2,
        pokeIro3: this.form_data.pokeIro3,
        pokeIro4: this.form_data.pokeIro4,
        pokeIro5: this.form_data.pokeIro5,
        pokeIro6: this.form_data.pokeIro6,
        pokeItem1: this.form_data.pokeItem1.trim(),
        pokeItem2: this.form_data.pokeItem2.trim(),
        other: this.form_data.other.replace(/\n/g,"<br />").replace(/\r/g,""),
        timeStamp: this.timeStamp().trim(),
        comments: []
      });

      this.clearInput()
      // }.bind(this));
      this.dialog = false
      this.post_validation = false
      this.give_validation = false
      this.want_validation = false
    }
  },
  watch:{
    dialog(newValue) {
      if(newValue) {
        document.getElementById("app").classList.add("prevent")
      } else {
        document.getElementById("app").classList.remove("prevent")
      }
    },
    form_data:{
      handler(newValue){
        this.other_validation = this.isNg(newValue.other)
        this.room_validation = this.isRoom(newValue.room)
        this.user_validation = this.isUserPass(newValue.formUser)
        this.pass_validation = this.isUserPass(newValue.formPass)
        if(newValue.pokeName1 == null) this.pokeName1 = ''
        if(newValue.pokeName2 == null) this.pokeName2 = ''
        if(newValue.pokeName3 == null) this.pokeName3 = ''
        if(newValue.pokeName4 == null) this.pokeName4 = ''
        if(newValue.pokeName5 == null) this.pokeName5 = ''
        if(newValue.pokeName6 == null) this.pokeName6 = ''
        if(newValue.pokeBall1 == null) this.pokeBall1 = ''
        if(newValue.pokeBall2 == null) this.pokeBall2 = ''
        if(newValue.pokeBall3 == null) this.pokeBall3 = ''
        if(newValue.pokeBall4 == null) this.pokeBall4 = ''
        if(newValue.pokeBall5 == null) this.pokeBall5 = ''
        if(newValue.pokeBall6 == null) this.pokeBall6 = ''
        if(newValue.pokeYume1 == null) this.pokeYume1 = ''
        if(newValue.pokeYume2 == null) this.pokeYume2 = ''
        if(newValue.pokeYume3 == null) this.pokeYume3 = ''
        if(newValue.pokeYume4 == null) this.pokeYume4 = ''
        if(newValue.pokeYume5 == null) this.pokeYume5 = ''
        if(newValue.pokeYume6 == null) this.pokeYume6 = ''
        if(newValue.pokeIro1 == null) this.pokeIro1 = ''
        if(newValue.pokeIro2 == null) this.pokeIro2 = ''
        if(newValue.pokeIro3 == null) this.pokeIro3 = ''
        if(newValue.pokeIro4 == null) this.pokeIro4 = ''
        if(newValue.pokeIro5 == null) this.pokeIro5 = ''
        if(newValue.pokeIro6 == null) this.pokeIro6 = ''
      },
      deep: true
    }
  }
}
</script>

<style lang="scss">
ul {
  padding: 0;
}
.addBtn {
  position: fixed;
  z-index: 50;
  right: 30px;
  bottom: 30px;
}

.formContents {
  padding: 0;

  .title {
    .col {
      padding :0;
    }
    h3 {
      font-size: 20px;
      // margin-top: 10px;
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
}

.colTitle {
  margin-bottom: 0 !important;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6)
}

.bottomBar {
  margin: 20px 0;
}

.addTopBar {
  margin-top: 10px;
}

.addBottomBar {
  margin-bottom: 10px;
}

.addRoom {
  width: 100px;
  input {
    text-align: center;
  }
}

.postVali {
  font-size: 12px;
  position: absolute;
  bottom: 48px;
  right: 10px;
  color: red;
}

.vali {
  color: red !important;
  font-size: 8px;
}

.formPass, .formId {
  fieldset {
    height: 38px;
  }
  .v-input__slot, .v-input__control, .v-text-field__slot {
    height: 38px;
    min-height: 38px !important;
  }
}


</style>