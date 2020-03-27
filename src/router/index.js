//进行路由的配置
import VueRouter from "vue-router"
import Vue from  "vue"
import Home from "../components/Home"
import HellWorld from "../components/HelloWorld"


//通过Vue.use(插件名)，安装 插件  以后只要是Vue的插件都要使用Vue.use()来安装这个插件
Vue.use(VueRouter)
//2.创建VueRouter对象
const router = new VueRouter({
  //配置路由和组件的映射关系
  routes:[
    //这里面是映射关系 到时候一个URl对应一个组件 一个映射关系下面就一个对象
    {
    path:"/home",
    component:Home
    },
    {
      path:"/hell",
      component:HellWorld
    }
  
  ],
  mode:'history',
})
//3.将创建好的router对象传入到Vue实例中y
 先在这个页面导出
export default router