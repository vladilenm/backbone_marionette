import {View} from 'backbone.marionette'
import _ from 'lodash'

export const TitleView = View.extend({
  ui: {
    input: 'input'
  },
  events: {
    'keydown @ui.input': 'handleKeydown',
  },
  className: 'box',
  template: _.template(`
    <h2><%= appTitle %></h2>
    <input type="text">
  `),
  handleKeydown(event) {
    if (event.key === 'Enter') {
      const title = this.ui.input.val()

      if (title.trim().length === 0) {
        return
      }

      this.collection.add({title})

      this.ui.input.val('')
    }
  }
})