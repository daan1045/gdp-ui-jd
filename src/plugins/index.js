// 动态引入并注册
// 学习金渡讲师说的一次引入，终身受用 => 全局注册，分布式动态路由

// a. 优化重复的import引入操作 => 项目实战
// require.context() webpack API 引入文件
// 1.路径   2.是否匹配子集   3.匹配规则
const requireComponent = require.context('./', true, /\.vue$/)

const install = (Vue) => {
  // 注册单个组件
  if (install.installed) return
  install.installed
  console.log(requireComponent.keys())
  requireComponent.keys().forEach(element => {
    // 第 i 个循环粒子
    const config = requireComponent(element)
    const componentName = config.default.name
    Vue.component(componentName, config.default || config)
  })
}

// import Button from './button'
// import Dialog from './dialog'
// import Input from './input'
// import Checkbox from './checkbox'
// import Radio from './radio'
// import RadioGroup from './radioGroup'
// import Switch from './switch'
// import CheckboxGroup from './checkboxGroup'
// import Form from './form'
// import FormItem from './formItem'
import './fonts/iconfont.scss'
// 存储组件列表
// const components = [
//   Button,
//   Dialog,
//   Input,
//   Checkbox,
//   Radio,
//   RadioGroup,
//   Switch,
//   CheckboxGroup,
//   Form,
//   FormItem
// ]
// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
// const install = function (Vue) {
//   // 遍历注册全局组件
//   components.forEach(component => {
//     Vue.component(component.name, component)
//   })
// }

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
