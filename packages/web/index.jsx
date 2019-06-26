import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {history, store} from '@qasir/store'
import Application from './component/application.jsx'

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>            
            <Application/>            
        </ConnectedRouter>
    </Provider>, 

document.getElementById('application'));