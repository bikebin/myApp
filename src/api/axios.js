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
