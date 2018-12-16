import Cookies from 'js-cookie'

//获取cookies
//获取所有cookie
// Cookies.get(); // => { name: 'value' }
export function getToken(saveName) {
  return Cookies.get(saveName)
}
//设置cookies
//创建有效期为7天的cookie
// Cookies.set('name', 'value', { expires: 7 });
//为当前页创建有效期7天的cookie
// Cookies.set('name', 'value', { expires: 7, path: '' });
export function setToken(saveName,val) {
  return Cookies.set(saveName,val)
}

//删除cookies
//如果值设置了路径，那么不能用简单的delete方法删除值，需要在delete时指定路径
// Cookies.set('name', 'value', { path: '' });
// Cookies.remove('name'); // 删除失败
// Cookies.remove('name', { path: '' }); // 删除成功
//注意，删除不存在的cookie不会报错也不会有返回
export function removeToken(saveName) {
  return Cookies.remove(saveName)
}

//json相关
//js-cookie允许你向cookie中存储json信息。

//如果你通过set方法，传入Array或类似对象，而不是简单的string，
// 那么js-cookie会将你传入的数据用JSON.stringify转换为string保存。

// Cookies.set('name', { foo: 'bar' });
// Cookies.get('name'); // => '{"foo":"bar"}'
// Cookies.get(); // => { name: '{"foo":"bar"}' }
//
// //如果你用getJSON方法获取cookie，那么js-cookie会用JSON.parse解析string并返回。
//
// Cookies.getJSON('name'); // => { foo: 'bar' }
// Cookies.getJSON(); // => { name: { foo: 'bar' } }
