<template>
  <table style="line-height:25px; border:solid 1px lightskyblue; width:100%; text-align: center; margin-top: 50px;">
    <thead>
    <tr>
      <th style="width: 50px;">类型</th>
      <th style="width: 50px;">金额</th>
      <th style="width: 250px;">描述</th>
      <th style="width: 150px;">收录时间</th>
      <th style="width: 100px;">操作</th>
    </tr>
    </thead>
    <tbody v-if="data.length > 0">
    <tr v-for="item in data" v-bind:key="item.id " >
      <td style="border-top: solid 1px #00ff00;">
        <span>
              {{item.type}}
        </span>
      </td>
      <td @dblclick="item.editable=true" style="border-top: solid 1px lime;">
        <input v-if="item.editable" v-model="item.money" @focusout="()=>Change(item)">
        <!-- 使用()=>后系统不会先调用方法而是在focusout后调用方法-->
        <span v-else>{{item.money}}</span>
      </td>
      <td @dblclick="item.editable=true" style="border-top: solid 1px lime;">
        <input v-if="item.editable" v-model="item.title" @focusout="()=>Change(item)">
        <span v-else>{{item.title}}</span>
      </td>
      <td style="border-top: solid 1px lime;">{{item.date}}</td>
      <td style="width: 50px">
        <button @click="removeItem(item.id)">删除</button>
      </td>
    </tr>
    </tbody>
    <tbody v-else>
    <tr>
      <td style="border-top: solid 1px lime;" colspan="6">无数据</td>
    </tr>
    </tbody>
  </table>
</template>
<script>

export default {
  computed:{
    //惰性计算，只有依赖的数据发生改变时才发生更新。
    data(){
      return this.$store.state.items.filter( item => {
        switch (this.mode){
          case 'all':
            return true;
          case 'in':
            return item.type === '收入'
          case 'out':
            return item.type === '支出'
        }
      })
    },
    mode () {
      return this.$store.state.mode
    }
  },
  created(){
    fetch('http://localhost:8080/API/Account')
        .then(response => response.json())
        .then(json => this.$store.initItems(json))
  },
  methods:{
    removeItem(id){
      fetch('http://localhost:8080/API/Account/'+id,
          {method:'delete'})
      .then(() => this.$store.removeItem(id))
    },
    Change(item){
      fetch(`http://localhost:8080/API/Account/${item.id}/${item.title}/${item.money}`,
          {
            method: 'PUT'
          })
       .then(item.editable=false)
    }
  },

}
</script>
