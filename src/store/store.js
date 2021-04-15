import Vue from 'vue'
export default {
    state:Vue.observable({
        items:[],//type:'类型‘,money：'金额',title:'描述',date:'收录日期'
        type:'',
        title:'',
        money:'',
        mode:'all',
    }),
    addItem(item) {
        this.state.items.push(item)
    },
    removeItem(id) {
        this.state.items = this.state.items.filter(item => item.id !== id)
    },
    itemsInTable(mode){
            this.state.mode = mode
    },
    initItems(items){
        this.state.items = items
    },
    changeItem(id){
        this.state.items.forEach(item => {
            if(item.id === id){
                item.editable=false
            }
        })
    }
}