import m from 'mithril'
import {Collection} from '../core/collections'

class Home {
    state = {
      products: new Collection("products")
    }
    getProducts(){
      return this.state.products.find().fetch()
    }
    view() {
        return (
          <div>
            {this.getProducts().map((product => {
              return (
                <div>
                  <h5>{product.name}</h5>
                  <img src={product.image} alt={product.name} />
                </div>
              )
            }))}
          </div>
        )
    }
}

export { Home }
