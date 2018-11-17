import axios from 'axios'

const service = axios.create({
  timeout: 5000,
  // baseURL: process.env.BASE_API   // api的base_url
})
//HTTPrequest拦截器
service.interceptors.request.use(config => {
  // if(store.getter.token) {
  //   config.headers['X-Frame-Token'] = getToken()
  // }
  return config
}, error => {
  return Promise.reject(error)
})

//response 拦截器
service.interceptors.response.use(
  response => {
    if(response.status !== 200) {
      // Toast("接口返回失败")
    }
    return response
  },
  error => {
    // Toast("接口返回失败")
    Promise.reject(error)
  })

export default service;
