/*
import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {
  //1.创建组件构造器
  const toastConstructor = Vue.extend(Toast);
  //2.new的方式,根据组件构造器,可以创建一个组件对象
  const toast = new toastConstructor();
  //3.将组件对象挂载到一个元素上
  toast.$mount(document.createElement('div'));
  //4.toast.$el对应的就是挂载的div,将它添加到页面中
  document.body.appendChild(toast.$el);

  Vue.prototype.$toast = toast;
}

export default obj;*/

import Toast from './Toast'

const plugin = {}

function removeDom(event) {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target)
  }
}

plugin.install = (Vue) => {
  const ToastConstructor = Vue.extend(Toast)

  // 注意:这里不能用箭头函数
  ToastConstructor.prototype.close = function() {
    this.isShow = false
    this.$el.addEventListener('transitionend', removeDom)
  }

  Vue.prototype.$toast = (options={}) => {
    // 1.将创建出来的组件,挂载到某个div中
    const toast = new ToastConstructor()
    toast.$mount(document.createElement('div'))

    // 2.将toast的$el添加到body中
    document.body.appendChild(toast.$el)

    // 3.获取用户自定义数据
    const duration = options.duration || 2000
    toast.message = options.message
    toast.isShow = true

    // 4.定时器让toast消失
    setTimeout(() => {
      toast.close()
    }, duration)
  }
}

export default plugin




