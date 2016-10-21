export default {
  name: 'Loading',
  render (h) {
    return (
      <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
        <mt-spinner type="double-bounce" color="#26a2ff" size={100}></mt-spinner>
      </div>
    )
  }
}
