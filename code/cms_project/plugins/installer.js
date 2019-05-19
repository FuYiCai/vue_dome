//vue插件必须具备Install函数
function Install (){
    //自身初始化行为
}

Install.install = function(Vue){
    //接收构造函数，给原型挂载属性或注册全局组件或过滤器
    //console.log(Vue)

    //1.注册全局组件
    Vue.component('text',{
        template:`<h1>嘿嘿</h1>`
    })
    //2.挂载属性
    // Vue.prototype.$log = function(){
    //     console.log('hiehi')
    // }
    // this.$log = 'abcd' 子类可以修改父类属性不好
    let log = function(){
        console.log('自个定义的log函数');
    }
    Object.defineProperty(Vue.prototype,'$log',{
        set:function(newV){
            console.log('梦里想吧')
        },
        get:function(){
            return log
        }
    })
}

export default Install;