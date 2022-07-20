import axios from "axios";

export function request (config) {
  const instance = axios.create({
    baseURL : 'http://152.136.185.210:7878/api/hy66',
    timeout : 5000,
  })

  //拦截器
  //发送请求拦截器
  /*instance.interceptors.request.use(config => {//请求成功时返回的是config
    console.log(config);
    return config;//不返回的话请求返送完就会中断
  } , error => {//请求失败返回信息.很少能碰见
    console.log(error);
  })*/
  //接收响应拦截器
  instance.interceptors.response.use(res => {
    return res.data;
  }, err => {
    console.log(err);
  })

  return instance(config);
}