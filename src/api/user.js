import { service,service3 } from '@/utils/request'
import { LOGIN } from './url'
export function login(params) {
  return service3({
    url: LOGIN,
    method: 'POST',
    data: params
  })
}

export function getInfo(token) {
  return service({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return service({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
