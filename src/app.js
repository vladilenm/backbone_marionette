import Backbone from 'backbone'
import { Application } from 'backbone.marionette'
import {MyModel} from './models/my.model'
import {MyView} from './views/my.view'

export default Application.extend({
  region: '#app',

  onBeforeStart(app, options) {
    this.model = new MyModel(options.data)
  },

  onStart(app, options) {
    this.showView(new MyView({model: this.model}))
    Backbone.history.start()
  }
})