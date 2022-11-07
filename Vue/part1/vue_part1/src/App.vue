<template>

  <h4>XX 원룸</h4>
  <p :style="myStyle">{{price1}} 만원</p>

  <div class="menu">
    <a v-for="작명 in Menu" :key="작명">{{작명}}</a>    
  </div>

 <Discount/>
 <Modal
  @closeModal="modalState=false"
  :roomData="roomData"
  :itemNum="itemNum"
  :modalState="modalState"
  />
  <ItemList 
    @openModal="modalState = true; itemNum = $event"
    :roomData="rd" 
    v-for="(rd, i) in roomData" 
    :key="i"/>

</template>

<script>
import data from "./assets/data"
import Discount from './Discount.vue'
import ItemList from './ItemList.vue'
import Modal from './Modal.vue'
export default {
  name: 'App',

  data(){
    return{
      modalState : false,
      roomData : data,
      itemNum : 0,
      Menu : ['Home', 'Shop', 'About',],
      price1 : 60,
      myStyle : 'color : blue',
      products : ['역삼동원룸', '천호동원룸', '마포구원룸',],
      // reports : [0, 0, 0],

    }
  },

  components: {
    Discount,
    Modal,
    ItemList,
  }
}
</script>

<style>

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}

.discount {
  background: #eee;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
}

.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
} 

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15pxl;
  border-radius: 5px;
}

.menu a {
  color : white;
  padding: 10px;
}

</style>
