<!--  -->
<template>
    <ul>
        <slot></slot>
    </ul>
</template>

<script>
export default {
  name:'my-ul',
  data () {
    return {
    };
  }
}

</script>
<style scoped>
ul{
  display:flex;
  width:100%;
  flex-wrap:wrap;
}
</style>