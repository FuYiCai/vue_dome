<!--  -->
<template>
  <div id="header" :style="{'position' : customFixed ?'fixed':'absolute'}">
    <slot name="left"/>
    {{customTitle}}
    <slot name="right"/>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  props: {
    //传递参数
    customTitle: {
      type: String,
      default: "标题"
    },
    customFixed: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style>
        #header{position: absolute;left:0;top:0;z-index: 10; width: 100%;height: 40px;background:#f60;color: #fff;text-align: center;line-height: 40px;}
        #header button{height: 100%;padding: 0 5px;}
        #header button:nth-of-type(1){float: left;}
        #header button:nth-of-type(2){float: right;}
</style>