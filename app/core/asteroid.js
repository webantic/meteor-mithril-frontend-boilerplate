import { createClass } from 'asteroid'

const Asteroid = createClass()
export default new Asteroid({
  endpoint: 'ws://localhost:3000/websocket'
})