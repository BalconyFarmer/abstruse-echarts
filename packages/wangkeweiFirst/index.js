// 引入组件
import wangkeweiFirst from './src';

// 提供 install 安装方法，供按需引入
wangkeweiFirst.install = function (Vue) {
    //
    Vue.component(wangkeweiFirst.name, wangkeweiFirst)
}

export default wangkeweiFirst
