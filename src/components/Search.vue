<template>
  <v-expansion-panels>
      <v-expansion-panel
        v-for="(item,i) in 1"
        :key="i"
      >
        <v-expansion-panel-header>検索条件</v-expansion-panel-header>
        <v-expansion-panel-content>
          ここに項目が入るよ
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<style lang="scss">

</style>
