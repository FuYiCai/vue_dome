<!--  -->
<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
export default {
  name:'my-li',
  data () {
    return {
    };
  }
}

</script>
<style scoped>
li{
    padding:0 20px;
    list-style:none;
    text-align:center;
}
</style>