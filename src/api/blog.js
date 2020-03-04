import request from '@/utils/request'

export default {
  getHotBlog () {
    return request({
      url: '/blog/hotBlog',
      method: 'get'
    })
  }
}
