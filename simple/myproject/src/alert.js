import Vue from 'vue'
import Alert from './alert.vue'

var myAlert = (function(){
    //默认的一些参数
    var defaults = {
        title : "弹窗",
        body :"",
        confirm : null,
        cancel : null
    };

    //用Vue方法创建js组件
    var MyComponent = Vue.extend(Alert);

    //return 一个函数接收参数
    return function(data){
        for(var arg in data){
            //覆盖默认值
            defaults[arg] = data[arg];
        }
        var vm = new MyComponent({
            el : document.createElement('div'),
            data : {
                customTitle : defaults.title,
                custombody : defaults.body,
                confirm:defaults.confirm,
                cancel : defaults.cancel
            }
        });
        document.body.appendChild(vm.$el);
    }
})();


export default myAlert;