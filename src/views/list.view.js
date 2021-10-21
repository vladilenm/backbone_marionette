import {CollectionView} from 'backbone.marionette'
import {ItemView} from './item.view'

export const ListView = CollectionView.extend({
  tagName: 'ul',
  initialize() {
    this.loaded = false

    setTimeout(() => {
      this.collection.fetch()
    }, 1200)

    this.collection.on('sync', () => {
      this.loaded = true
      this.render()
    })

    this.collection.on('remove', () => {
      this.render()
    })

    this.collection.on('update', this.onRender.bind(this))
  },
  onRender() {
    if (!this.loaded) {
      this.$el.html('<span id="loader">Loading...</span>')
      return
    }

    if (this.collection.length === 0) {
      this.$el.html('<span id="loader">No items!</span>')
    } else {
      this.$el.find('#loader').remove()
    }
  },
  childView: ItemView,
  childViewOptions() {
    return {
      collection: this.collection
    }
  }
})