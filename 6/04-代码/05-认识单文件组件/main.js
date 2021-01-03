// 之前定义组件
// 不管是全局定义还是局部定义, 都是需要一个组件配置对象
// import Jack from './Jack.js'
// Vue.component('jack', Jack)

// 有了单文件组件
import Jack from './Jack.vue'
Vue.component('jack', Jack)