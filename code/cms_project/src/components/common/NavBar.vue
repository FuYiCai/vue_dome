<!--  -->
<template>
  <div>
    <mt-header :title="title">
        // 自己写go-1.不要自带的/
        <div @click='goback' slot="left">
            <mt-button icon="back">返回</mt-button>
        </div>
        <mt-button icon="more" slot="right"></mt-button>
     </mt-header>
  </div>
</template>

<script>
export default {
    name:'nav-bar',
  props:['title'],//父传子接收后可直接使用（相当于直接在data里面）
  data () {
    return {
    };
  },
  methods: {
      goback(){
          this.$router.go(-1);
      }
  },

}

</script>
<style scoped>
#newList .mint-header{
background-color:#f60;
}
</style>