import m from 'mithril'
const root = document.body

async function defineRoutes(){
    const {Home} = await import("./views/home")
    
    m.route(root, "/", {
        "/": Home
    })
}

defineRoutes()

