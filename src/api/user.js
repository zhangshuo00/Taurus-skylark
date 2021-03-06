import request from "@/utils/request"

export function login(data) {
  return request({
    url: '/skylark/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/skylark/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/skylark/user/logout',
    method: 'post'
  })
}
