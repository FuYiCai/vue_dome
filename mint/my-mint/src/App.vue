<template>
  <div id="app">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
      <mt-button icon="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

    <mt-index-list>
      <mt-index-section v-for="item in userData" :index="item.index" :key="item.id">
        <mt-cell
          v-for="user in item.users"
          :title="user.name"
          @click.native="telAlert(user.tel)"
          :key="user.tel"
        ></mt-cell>
      </mt-index-section>
    </mt-index-list>
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
//引入弹窗
import { MessageBox } from 'mint-ui';

export default {
  name: "app",
  data() {
    return {
      userData: userData
    };
  },
  methods: {
    telAlert(tel) {
      MessageBox({
        title: "呼叫",
        message: tel,
        showCancelButton: true
      });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
