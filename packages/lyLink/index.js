// 引入组件
import lyLink from './src';

// 提供 install 安装方法，供按需引入
lyLink.install = function (Vue) {
    // 
    Vue.component(lyLink.name, lyLink)
}

export default lyLink