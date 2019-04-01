# es-helper
> 常用es6的工具方法集合

### 安装
```shell
yarn add @mobov/es-helper 
```
### `Client`
> 初始化的设备信息对象

| 返回参数 | 返回值 | 说明 |  
| :--- | :--- | :--- |
| type  | 'pc' / 'mobile' | 设备类型 
| lang  | string | 语言
| OS    | 'Windows' / 'Android' / 'IOS' | 系统 |
| version  | string | '' | 系统版本 |

### `Client.init(lang, isMount)`
> 重新初始化设备信息对象

| 返回参数 | 返回值 | 说明 |  
| :--- | :--- | :--- |
| lang | string | navigator.language | 语言 | 
| isMount  | boolean | true | 是否挂载节点信息 |

### `clip2Board(text): promise`
> 复制内容到剪切板, 返回promise

| 参数名称 | 类型 | 默认值 | 说明 |  
| :--- | :--- | :--- | :--- | 
| text | string | navigator.language | 文本内容 


### `camelCase(name): string`
> 将字符串转为驼峰

| 参数名称 | 类型 | 默认值 | 说明 |  
| :--- | :--- | :--- | :--- | 
| name | string |  | 文本内容 |

### `imageLoaded(url): promise[then({ height, width })])`
> 预加载图片, 返回promise, 

| 参数名称 | 类型 | 默认值 | 说明 |  
| :--- | :--- | :--- | :--- | 
| url | string |  | 文本内容 |

> then返回图片信息参数

| 返回参数 | 返回值 | 说明 |  
| :--- | :--- | :--- |
| height  | number | 高度 
| width  | number | 宽度

### `scrollToY($scroller, { target, justify, duration, transition }): promise`
> 滚动到Y轴某个位置

| 参数名称 | 类型 | 默认值 | 说明 |  
| :--- | :--- | :--- | :--- | 
| $scroller | HTMLElement |  | 要滚动的容器 |
| target | HTMLElement / number / 'start' / 'end' | 0 | 滚动的目标节点，如果该参数存在，则会滚动到该节点的距离, 'start'：滚动到起始位置, 'end'：滚动到结束位置, 正数表示正向滚动， 比如300表示向下滚动300距离 |
| justify | number | 0 | 滚动偏差值，在target的基础最终计算滚动值加上该值  |
| duration | number | 500 | 过渡时间 |
| transition | 'linear' / 'easeIn' / 'strongEaseIn' / 'strongEaseOut' / 'sineaseIn' / 'sineaseOut' | 'sineaseOut' | 过渡动画 |
| position | 'start' / 'end' / 'center' | 'center' | target为DOM时候滚动到dom视图点 |

### `scrollToX($scroller, { target, justify, duration, transition }): promise`
> 滚动到X轴某个位置

参照scrollToY

### `strStyle(styleObj): string`
> css样式构造

| 参数名称 | 类型 | 默认值 | 说明 |  
| :--- | :--- | :--- | :--- | 
| styleObj | object |  | 样式表键值对  |

### `getStyle(element, styleName): any`
> 获取节点的CSS属性的值

| 参数名称 | 类型 | 默认值 | 说明 |  
| :--- | :--- | :--- | :--- | 
| element | HTMLElement |   |节点  |
| styleName | string |  | 属性名  |

### `getUrlParam(name, url): string`
> 获取指定的URL参数值

| 参数名称 | 类型 | 默认值 | 说明 |  
| :--- | :--- | :--- | :--- | 
| name | string |   |参数名  |
| url | string |  location.href | url  |

### `getUrlParams(url): string`
> 获取指定的URL全部参数值

| 参数名称 | 类型 | 默认值 | 说明 |  
| :--- | :--- | :--- | :--- | 
| url | string |  location.href | url  |

### `appendUrlParams(params, url, sort): string`
> 追加指定的URL参数值

| 参数名称 | 类型 | 默认值 | 说明 |  
| :--- | :--- | :--- | :----: | 
| params | object |   |参数键值对   |
| url | string |  location.href | url  |
| sort | boolean |  false | 是否对参数做重组排序   |

### `arrayUnique:(arr:array)=>Array`
> 数组去重

| 参数名称 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- | 
| array | Array | - |输入数组|


### `deepCopy:(arr:any)=>any`

> 深度拷贝

| 参数名称 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- | 
| input | Object | - |输入json对象|

### `findNode:({data:object | array,id:string,childStr:string})=>object | array`

> 节点查找

| 参数名称 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- | 
| data | Object | - |数据源|
| field | String | id |唯一标示字段|
| key | String | - |唯一标示字段值|

### `deepEqual:(param1:any,param2:any)=>boolean`

> json深度对比

| 参数名称 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- | 
| param1,param2 | any | - |需要对比的数据|







