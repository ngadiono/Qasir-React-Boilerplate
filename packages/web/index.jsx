import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
// import {LocaleProvider} from 'antd'
// import enGB from 'antd/lib/locale-provider/en_GB'
import {history, store} from '@qasir/store'
import Application from './component/application.jsx'

// import 'antd/dist/antd.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import '../components/resources/AntStyles/AntDesign/antd.cleanui.scss'
// import '../components/resources/CleanStyles/Core/core.cleanui.scss'
// import '../components/resources/CleanStyles/Vendors/vendors.cleanui.scss'

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {/* <LocaleProvider locale={enGB}> */}
                <Application/>
            {/* </LocaleProvider> */}
        </ConnectedRouter>
    </Provider>, 
document.getElementById("application"))