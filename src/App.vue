<template>
  <div style="width: 600px;margin: 20px auto;" >
    <Account_From/>

    <Account_Table/>

    <Account_Mode/>
  </div>
</template>
<script>
import Account_From from './components/Account_Form'
import Account_Table from'./components/Account_Table'
import Account_Mode from './components/Account_Mode'
export default {
  components : {Account_Mode, Account_From, Account_Table},
}
</script>
<style>
</style>