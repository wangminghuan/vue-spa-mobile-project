# 项目说明

## 项目拉取

	git clone https://github.com/wangminghuan/vue-spa-mobile-project.git   
    

## 安装依赖
	cd vue-spa-mobile-project
	npm i 
## 项目运行

   	npm run dev

## 项目构建
   	npm run build

## 说明

该项目是基于vue的一个移动端spa项目，将vue-cli生成的配置做了一些定制化修改，包括不限于：  

1. 打包后的static文件夹与vue-spa-mobile-project同一级
2. 模块采用异步加载方案，减少首屏渲染时间，异步模块的版本号取当前系统的时间戳，理论上每次都不同。
3. 异步模块的资源路径publicPath通过模板内的window.resourceBaseUrl为最终结果（模板中一定要配置好window.resourceBaseUrl的值）也可以将这串代码注释掉通过修改webpack.prod.conf文件中的publicPath来实现同样的效果（但这种方式只能打包出来的固定的cdn地址）。
4. webpack.base.conf中配置好了vuxUI的loader，默认注释掉了，可以开启。