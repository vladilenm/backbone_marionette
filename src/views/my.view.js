import _ from 'lodash'
import {View} from 'backbone.marionette'
import {TitleView} from './title.view'
import {ListView} from './list.view'
import {MyCollection} from '../collections/my.collection'

export const MyView = View.extend({
  regions: {
    titleRegion: '#title',
    listRegion: '#list'
  },
  template: _.template(`
    <div id="title"></div>
    <hr />
    <div id="list"></div>
  `),
  initialize() {
    this.collection = new MyCollection([])
  },
  onRender() {
    this.showChildView('titleRegion', new TitleView({model: this.model, collection: this.collection}))
    this.showChildView('listRegion', new ListView({collection: this.collection}))
  }
})