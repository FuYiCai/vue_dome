<!--  -->
<template>
  <div >
    <nav-bar :title='title' />

    <!-- 新闻列表 -->
         <div class="demo">
              <ul>
                    <li v-for="(news,index) in newsList" :key="id">
                        <router-link :to="{ name:'NewsDetail',params:{id:news.id} }">
                            <img class="" :src="news.icon">
                            <div >
                                <span>{{news.name}}</span>
                                <div class="news-desc">
                                    <p>点击数:{{news.id}}</p> /*| convertTime 过滤器 */
                                    <p>发表时间:{{news.add_time | convertTime('YYYY年MM月DD日')}}</p>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        title:'新闻列表',
        newsList:[],
    };
  },
 created() {
     this.$axios.get('categories')
     .then(res=>{
         console.log(res);
         this.newsList=res;
     })
 },
}

</script>
<style scoped>
.demo a {
    display: block;
    width: 330px;
    height: 44px;
    color: #000;
    padding-left:15px;
}
.demo img {
    float: left;
    width: 42px;
    height: 42px;
    margin-right: 20px;
}
.demo a div {
    float: left;
    width: 238px;
    margin-right: 20px;
}
.demo span {
    display: block;
    width: 100%;
    font-size: 17px;
    line-height: 21px;
}
.demo a p {
    float: left;
    color: #0bb0f5;
    font-size: 14px;
    line-height: 21px;
}
.demo p:nth-child(2) {
    float: right;
}

.demo ul {
    padding: 0;
}
.news-desc {
    height: 35px;
}
</style>