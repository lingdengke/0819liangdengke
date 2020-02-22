import axios from 'axios'
import qs from 'qs'
//生成伪实例
const instance = axios.create({
    baseURL: '/api'
})
//请求拦截器
instance.interceptors.request.use(config => {
    config.data = qs.stringify(config.data)
    return config
})
//响应拦截器
instance.interceptors.response.use(
    response => response.data,
    error => {
        alert('请求失败')
        return new Promise(() => { })
    }
)
export default instance