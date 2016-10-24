export default {
  name: 'NotFound',
  render (h) {
    return (
      <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
        <router-link to={{path: '/index'}}><mt-button type="primary">回到首页</mt-button></router-link>
      </div>
    )
  }
}
