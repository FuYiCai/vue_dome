<template>
  <div id="app">
    <my-header custom-title="通讯录" custom-fixed>
      <button @touchstart="backRtn" slot="left">返回</button>
      <button @touchstart="homeBtn" slot="right">主页</button>
    </my-header>
    <my-list :user-data="userData"></my-list>
  </div>
</template>

<script>
var userData = [
  {
    index: "A",
    users: [
      { name: "a1", tel: "12000001" },
      { name: "a2", tel: "12000002" },
      { name: "a3", tel: "12000003" }
    ]
  },
  {
    index: "B",
    users: [
      { name: "b1", tel: "12000021" },
      { name: "b2", tel: "12000022" },
      { name: "b3", tel: "12000023" }
    ]
  },
  {
    index: "C",
    users: [
      { name: "c1", tel: "12000031" },
      { name: "c2", tel: "12000032" },
      { name: "c3", tel: "12000033" }
    ]
  },
  {
    index: "D",
    users: [
      { name: "d1", tel: "12000041" },
      { name: "d2", tel: "12000042" },
      { name: "d3", tel: "12000043" }
    ]
  },
  {
    index: "E",
    users: [
      { name: "e1", tel: "12000051" },
      { name: "e2", tel: "12000052" },
      { name: "e3", tel: "12000053" }
    ]
  },
  {
    index: "F",
    users: [
      { name: "f1", tel: "12000061" },
      { name: "f2", tel: "12000062" },
      { name: "f3", tel: "12000063" }
    ]
  }
];
export default {
  data() {
    return { userData: userData };
  },
  methods: {
    //不能写在componen中，要写在vm实例的作用域内
    backRtn() {
      alert(123);
    },
    homeBtn() {
      alert(456);
    }
  }
};
</script>

<style>
*{margin: 0;padding: 0;list-style: none;}
</style>
