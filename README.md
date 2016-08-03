- 使用的时候直接使用打包好的bundle.js即可
- 引入代码的时候，需要调用下面的全局的函数 
```javascript
getProductData({url:"data.json"})
```
并且传入jquery的ajax参数，此时建议用get方式，把用户信息一起传入，得到对应的用户的产品信息。注意，不要写jquery的success函数，如写会导致程序运行不正常。