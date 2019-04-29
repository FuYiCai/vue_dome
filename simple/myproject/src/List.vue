<!--  -->
<template>
  <div id="list">
    <ul class="list_user" ref="listUser" @touchmove="bMove=true">
      <li v-for="item in userData">
        <p>{{item.index}}</p>
        <ul>
          <li @touchend="showTel(user.tel)" v-for="user in item.users">{{user.name}}</li>
        </ul>
      </li>
    </ul>
    <ul class="list_index" ref="listIndex">
      <li @touchstart="setScroll" v-for="idx in userData">{{idx.index}}</li>
    </ul>
  </div>
</template>

<script>
import myAlert from "./alert.js";
export default {
  name: "my-list",
  props: {
    "user-data": {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      bMove: false //开始时是不滑动的
    };
  },
  computed: {
    usserIndex() {
      return this.filterIndex(this.userData);
    }
  },
  methods: {
    filterIndex(data) {
      var result = [];
      var len = data.length;
      for (var i = 0; i < len; i++) {
        if (data[i].index) {
          result.push(data[i].index);
        }
      }
      return result;
    },
    setListIndexPos() {
      var iH = this.$refs.listIndex.offsetHeight;
      this.$refs.listIndex.style.marginTop = -iH / 2 + "px";
    },
    setScroll(ev) {
      var ap = this.$refs.listUser.getElementsByTagName("p");
      for (var i = 0; i < ap.length; i++) {
        console.log(222);
        if (ap[i].innerHTML == ev.target.innerHTML) {
          //页面指定dtd用documentElement
          document.body.scrollTop = document.documentElement.scrollTop =
            ap[i].offsetTop;
        }
      }
    },
    showTel(tel) {
      if (!this.bMove) {
        //参数传入js组件
        myAlert({
          title: "呼叫",
          body: tel,
          confirm: function() {
            alert(1);
          },
          cancel: function() {
            alert(2);
            //取消呼叫
            document.body.removeChild(document.getElementById("alert"));
          }
        });
      } else {
        this.bMove = false;
      }
    },
    mounted() {
      //挂载结束更新前，初始化index
      this.setListIndexPos();
    }
  }
};
</script>
<style>
#list {
  position: relative;
  top: 40px;
  overflow: hidden;
}
#list .list_user p {
  background: #ccc;
  padding-left: 10px;
}
#list .list_user ul li {
  padding-left: 10px;
  height: 50px;
  line-height: 50px;
  border-bottom: 1px #ccc solid;
}
#list .list_index {
  position: fixed;
  right: 10px;
  top: 50%;
  font-size: 20px;
}
#list .list_index li {
  margin: 0 5px;
}
</style>