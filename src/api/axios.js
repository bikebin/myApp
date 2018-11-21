import service from './request'
export function getNacList(query) {
  return service({
    url: `http://localhost:8080/api/index.php?${query}`,
    method: 'GET',
    params: {}
  })
}
export function getGoodsList(query) {
  return service({
    url: `http://localhost:8080/api/index.php?${query}`,
    method: 'GET',
    params: {}
  })
}
export function login(data) {
  return service({
    url: `http://localhost:8080/api/index.php?r=login/login`,
    method: 'POST',
    data
  })
}
export function register(data) {
  return service({
    url: `http://localhost:8080/api/index.php?r=login/codeeg`,
    method: 'POST',
    data
  })
}
export function loginInfo(data) {
  return service({
    url: `http://localhost:8080/api/index.php?r=login/info`,
    method: 'POST',
    data
  })
}
export function loginOut(query) {
  return service({
    url: `http://localhost:8080/api/index.php?r=login/destroy&token=${query}`,
    method: 'GET',
    params: {}
  })
}
export function sortGoodsList() {
  return service({
    url: `http://localhost:8080/api/index.php?r=class/index&type=1`,
    method: 'GET',
    params: {}
  })
}

export function sortTeaList() {
  return service({
    url: 'http://www.chawo.com/mobile/index.php?act=index',
    method: 'GET',
    params: {}
  })
}
export function goodsDetail(goods_id) {
  return service({
    url: `http://www.chawo.com/mobile/index.php?act=goods&op=goods_detail&goods_id=${goods_id}&key=bf65e52becc7ddd8349a0d4ac7256b70&dis_id=`,
    method: 'GET',
    params: {}
  })
}
