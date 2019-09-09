import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { history, store } from '@qasir/store';

import Application from './component/application.jsx';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../components/resources/AntStyles/AntDesign/antd.cleanui.scss';
import '../components/resources/CleanStyles/Core/core.cleanui.scss';
import '../components/resources/CleanStyles/Vendors/vendors.cleanui.scss';

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>            
            <Application/>            
        </ConnectedRouter>
    </Provider>, 
document.getElementById("application"));

// if ('serviceWorker' in navigator) {    
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/service-worker.js').then(registration => {
//             console.log('SW registered: ', registration);
//         }).catch(registrationError => {
//             console.log('SW registration failed: ', registrationError);
//         });
//     });
// }