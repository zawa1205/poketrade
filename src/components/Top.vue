<template>
  <div>
    <BoardList/>
    <AddPost/>
  </div>
</template>

<script>
import BoardList from './BoardList.vue'
import AddPost from './Add.vue'

export default {
  name: 'app',
  components: {
    BoardList,
    AddPost
  },
  data() {
    return {
      name:'',
      message: '',
      date: '',
      lists: [],
    }
  },
  methods: {
    doAdd: function(name, message){
      var now = new Date();
      this.lists.push({
        name: name,
        message: message,
        date: now.getMonth()+1 + '月' + now.getDate() + '日' + now.getHours() + '時' + now.getMinutes() + '分'
      })
    }
  }
}
</script>

<style lang="scss">

</style>