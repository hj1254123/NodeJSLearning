// querystring是早期Node版本操作查询参数的遗留API
// 完全可被URL实例的serachParam属性替代，该属性是URLSearchParams类的实例
// 几个常用的操作查询参数的方法
// urlSearchParams.get(name)
// urlSearchParams.set(name, value)
// urlSearchParams.delete(name)
// urlSearchParams.append(name, value)
// urlSearchParams.forEach(fn[, thisArg])

// 直接以例子演示：
const myURL = new URL('https://example.org/?name=123')
const mySearchParams = myURL.searchParams

// 获取
console.log(mySearchParams.get('abc')) // 123
// 设置/修改
mySearchParams.set('q', '123')
mySearchParams.set('name', 'new') //
console.log(myURL.href) // https://example.org/?name=new&q=123
// 删除
mySearchParams.delete('q')
console.log(myURL.href) // https://example.org/?name=new
// 末尾添加
mySearchParams.append('age', '18')
console.log(myURL.href) // https://example.org/?name=new&age=18
// 遍历
mySearchParams.forEach((value, key, parent) => {
    console.log('遍历：', value, key, parent);
})
// 遍历： new name URLSearchParams { 'name' => 'new', 'age' => '18' }
// 遍历： 18 age URLSearchParams { 'name' => 'new', 'age' => '18' }