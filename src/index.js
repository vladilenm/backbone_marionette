import * as $ from 'jquery'
import App from './app'

const app = new App()

$(document).ready(() => {
  app.start({
    data: {
      appTitle: 'Am alive'
    }
  })
})

