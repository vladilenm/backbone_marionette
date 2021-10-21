import Backbone from 'backbone'

export const MyCollection = Backbone.Collection.extend({
  url: 'https://jsonplaceholder.typicode.com/todos?_limit=3'
})