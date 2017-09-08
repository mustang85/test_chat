import React from 'react'
import Chat from 'containers/index.js'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'

import './assets/styles/style.scss';

const renderApp = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('#mount_place')
  )
}


renderApp(Chat)


if(module.hot) {
  module.hot.accept('containers/Chat', () => { renderApp(Chat) })
}
