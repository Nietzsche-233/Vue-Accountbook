<template>
  <div>
    <input type="radio" v-model="mode" value="all" @change="changeMode"/><label>查看所有</label>
    <input type="radio" v-model="mode" value="in" @change="changeMode"/><label>查看收入</label>
    <input type="radio" v-model="mode" value="out" @change="changeMode"/><label>查看支出</label>
  </div>
</template>
<script>
export default {
  data(){
    return{
      mode:'all'
    }
  },
  methods : {
    changeMode(){
      this.$store.itemsInTable(this.mode)
    }
  }
}
</script>
<style>
</style>