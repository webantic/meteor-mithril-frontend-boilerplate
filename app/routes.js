import page from 'page'
import m from 'mithril'
const root = document.body

page('/', async function() {
  const {Home} = await import("./views/home")
  m.mount(root, Home)
});
page('/test', async function() {
  const {Test} = await import("./views/test")
  m.mount(root, Test)
});

page.base("/#!")
page.start()