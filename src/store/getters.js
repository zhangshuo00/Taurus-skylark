const getters = {
    name: state => state.user.name,
    avatar: state => state.user.avatar,
    token: state => state.user.token,
    device: state => state.app.device,
    sidebar: state => state.app.sidebar
}
export default getters
