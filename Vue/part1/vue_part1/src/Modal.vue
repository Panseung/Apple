<template>
  <div class="black-bg" v-if="modalState == true">
    <div class="white-bg">
      <img :src = "roomData[itemNum].image">
      <h4>{{roomData[itemNum].title}}</h4>
      <p>{{roomData[itemNum].content}}</p>
      <!-- <input @input="month = $event.target.value"> -->
      <input v-model="month">
      <p>가격 : ( {{month}} 개월 ) : {{roomData[itemNum].price * month}}원</p>
      <button @click="$emit('closeModal')" >닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalItem",
  props : {
    roomData : Object,
    itemNum : Number,
    modalState : Boolean
  },
  data() {
    return {
      month : 1,
    }
  }

}
</script>

<style>
  img {
    width: 100%;
  }
</style>