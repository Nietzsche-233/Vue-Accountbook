<template>
  <div>
    <select id ="Genre" style="width: 50px;" >
      <option value="收入">收入</option>
      <option value="支出">支出</option>
    </select>
    <label>
      <input v-model="money"
             placeholder="请输入金额"
             @keyup.enter="addItem"/>
    </label>
    <label>
      <input v-model="title"
             placeholder="请输入描述"
             style="width: 295px;margin-left: 5px;"
             @keyup.enter="addItem"/>
    </label>
    <button v-on:click="addItem()" style="width:50px;margin-left: 15px;">添加</button>
  </div>
</template>
<script>

import moment from 'moment';

export  default {
  data(){
    return{
      money:'',
      title:''
    }
  },
  methods : {
    gettype(){
      this.select = document.getElementById("Genre");
      return this.select.value;
    },
    addItem(){                                                        //异步请求
      fetch('http://localhost:8080/API/Account',
            {
              body:JSON.stringify({
                type:this.gettype(),
                money:this.money,
                title:this.title,
                date:moment().format("YYYY/M/D H:m"),
              }),
              method: 'POST',
              headers: { "Content-Type":"application/json" },
            })
      .then(response => {return response.json()})
      .then(Account=>{this.$store.addItem(Account)})
    },
  },
}
</script>