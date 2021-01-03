// 之前不论是全局定义, 还是局部定义, 都需要这个组件配置对象
// 但是之前提供配置对象的方式, 不好! => 应该用单文件组件了
// 1. template 没有高亮
// 2. 配置对象, 没有考虑 css

// 单文件组件 => 就是后缀名 .vue 的文件, 作用: 也是用于提供组件的配置对象
// 包含三部分结构 template script style
export default {
  template: `
    <div>我是jack组件 - {{ msg }}</div>
  `,
  data () {
    return {
      msg: 'zs'
    }
  },
  methods: {
    fn () {
      console.log(1111)
    }
  }
}