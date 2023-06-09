# Price Color Scheme

一个简单使用的价格格式化组件

## 安装
``` npm i price-color ```


## 例子
***
```javascript
//在main.js中
import priceColorScheme from 'price-color'
Vue.use(priceColorScheme);


// 在vue中
<template>
  <priceColorScheme :value="100"></priceColorScheme>
</template>

<script>

export default {
 
};
</script>
```


```javascript
<priceColorScheme :value="100" ></priceColorScheme>
<priceColorScheme :value="100" dot="+" ></priceColorScheme>
<priceColorScheme :value="100" dot="-" color="#32cc"  :customStyle="{fontSize:'20px'}"></priceColorScheme>
<priceColorScheme :value="100" dot="~"  color="green"> 啊 这么多钱 ？ </priceColorScheme>
```
![Imgur](https://i.imgur.com/g8M8Hhe.png)
***
[备用图片地址](https://imgur.com/g8M8Hhe)
## Props

| 参数    | 说明           | 类型             | 默认值 | 是否必填 |
| :------ | :------------- | :--------------- | :----- | :------- |
| value   | 金额的数值     | Number 或 String | 无     | 是       |
| unit    | 金额的单位     | String           | ￥     | 否       |
| dot     | 金额的符号     | String           | ""     | 否       |
| color | 默认金额颜色。 | String           | ""     | 否       |
| customStyle | 自定义样式 | Object           | ""     | 否       |
