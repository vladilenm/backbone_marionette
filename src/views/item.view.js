import {View} from 'backbone.marionette'
import _ from 'lodash'

export const ItemView = View.extend({
  ui: {
    button: 'button'
  },
  events: {
    'click @ui.button': 'removeItem'
  },
  initialize() {
    console.log(this.model.toJSON())
  },
  getTemplate() {
    return this.template
  },
  template: _.template('<li><%= title %> | <button>&times;</button></li>'),
  removeItem() {
    this.collection.remove(this.model)
  }
})