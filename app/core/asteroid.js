import { createClass } from 'asteroid'

const Asteroid = createClass()
export default new Asteroid({
  endpoint: 'ws://192.168.1.24:3000/websocket'
})