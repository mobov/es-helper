# es-helper
#### 常用es6的工具方法集合

### 安装
```shell
yarn add @megmore/es-helper or npm install @megmore/es-helper
```

### `initClient(lang, isMount): {type, lang, OS}`
> 初始化设备信息

| 参数名称 | 类型 | 默认值 | 说明 |  
| :---: | :---: | :---: | :----: | 
| lang | string | navigator.language | 语言 | 
| isMount  | boolean | true | 是否挂载节点信息 |

### `getClient(): { type, lang, OS }`
> 获取初始化的设备信息

| 返回参数 | 返回值 | 说明 |  
| :---: | :---: | :---: |
| type  | 'pc' / 'mobile' | 设备类型 
| lang  | string | 语言
| OS    | 'Windows' / 'Android' / 'IOS' | 系统 |

### `clip2Board(text): promise`
> 复制内容到剪切板, 返回promise

| 参数名称 | 类型 | 默认值 | 说明 |  
| :---: | :---: | :---: | :----: | 
| text | string | navigator.language | 文本内容 


### `camelCase(name): string`
> 将字符串转为驼峰

| 参数名称 | 类型 | 默认值 | 说明 |  
| :---: | :---: | :---: | :----: | 
| name | string |  | 文本内容 |

### `imageLoaded(url): promise[then({ height, width })])`
> 预加载图片, 返回promise, 

| 参数名称 | 类型 | 默认值 | 说明 |  
| :---: | :---: | :---: | :----: | 
| url | string |  | 文本内容 |

> then返回图片信息参数

| 返回参数 | 返回值 | 说明 |  
| :---: | :---: | :---: |
| height  | number | 高度 
| width  | number | 宽度

### `scrollToY($scroller, justify, duration, transition)`
> 滚动到Y轴某个位置

| 参数名称 | 类型 | 默认值 | 说明 |  
| :---: | :---: | :---: | :----: | 
| $scroller | HTMLElement |  | 要滚动的容器 |
| justify | number / 'start' / 'end' | 0 | 滚动偏差值, 'start'：滚动到起始位置, 'end'：滚动到结束位置, 正数表示正向滚动， 比如-300表示向下滚动300距离 |
| duration | number | 500 | 过渡时间 |
| transition | 'linear' / 'easeIn' / 'strongEaseIn' / 'strongEaseOut' / 'sineaseIn' / 'sineaseOut' | 'sineaseOut' | 过渡动画 |

### `scrollToX($scroller, justify, duration, transition)`
> 滚动到X轴某个位置

参照如上

### `scrollToY($scroller, justify, duration, transition)`
> 滚动到Y轴某个位置

参照scrollToX

### `strStyle(styleObj): string`
> css样式构造

| 参数名称 | 类型 | 默认值 | 说明 |  
| :---: | :---: | :---: | :----: | 
| styleObj | object |  | 样式表键值对  |

### `getStyle(element, styleName): any`
> 获取节点的CSS属性的值

| 参数名称 | 类型 | 默认值 | 说明 |  
| :---: | :---: | :---: | :----: | 
| element | HTMLElement |   |节点  |
| styleName | string |  | 属性名  |

### `getUrlParam(name, url): string`
> 获取指定的URL参数值

| 参数名称 | 类型 | 默认值 | 说明 |  
| :---: | :---: | :---: | :----: | 
| name | string |   |参数名  |
| url | string |  location.href | url  |

### `appendUrlParam(params, url): string`
> 追加指定的URL参数值

| 参数名称 | 类型 | 默认值 | 说明 |  
| :---: | :---: | :---: | :----: | 
| params | object |   |参数键值对   |
| url | string |  location.href | url  |






