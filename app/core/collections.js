import asteroid from './asteroid'
import Mingo from 'mingo'
import _ from 'lodash'
import m from 'mithril'

export class Collection {
  data = []
	upsert(data){
		let index = _.findIndex(this.data, {_id: data._id})
		if (index > -1){
			this.data[index] = Object.assign(this.data[index], data)
		} else {
			this.data.push(data)
		}
	}
	find(query){
		const mQ = new Mingo.Query(query)
		let cursor = mQ.find(this.data)
		cursor.fetch = cursor.all
		return cursor
	}
  findOne(query){
    const mQ = new Mingo.Query(query)
		let cursor = mQ.find(this.data)
		return cursor.first()
  }
  constructor (collectionName, ...subParams) {
    this.subscription = asteroid.subscribe(collectionName, ...subParams)
    asteroid.ddp.on('added', ({collection, id, fields}) => {
      fields._id = id
			this.upsert(fields)
			m.redraw()
    })

		asteroid.ddp.on('changed', ({collection, id, fields}) => {
			fields._id = id
			this.upsert(fields)
			m.redraw()
		})
  }
}
