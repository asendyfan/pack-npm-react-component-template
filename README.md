1. 修改package.json 中的name改为自己组件名字
1. 安装依赖 npm install
1. 在src/Components.js中创建自己的react组件
1. 调试组件 npm run dev
1. 打包组件 npm run build
1. 验证打包后的npm包，
    1. 在组件项目下npm link，与全局模块链接
    1. 在其他项目中下通过npm link xxx(自己设定的组件名字) 链接模块
    1. 在项目中通过import导入包进行测试 