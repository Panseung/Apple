<template>
  <img :src = "roomData.image">
  <h4 @click="$emit('openModal', roomData.id)">{{roomData.title}}</h4>
  <p>{{roomData.price}}</p>
</template>

<script>
export default {
  name : "ItemList",
  props : {
    roomData : Object,
  }
}
</script>

<style>

</style>