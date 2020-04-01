import React from 'react';
import loadable from '@loadable/component';

const appName = 'Qasir';

const routes = {
  '/dashboard': {
    headHTML: {
      title: `Dashboard - ${appName}`
      // meta: {
      //   name: 'lorem ipsum',
      //   content: 'lorem ipsum'
      // }
    },
    component: loadable(() => import('@qasir/views/contents/dashboard'), {
      fallback: <p>Loading..</p>
    })
  },
  '/user-management': {
    headHTML: {
      title: `User Management - ${appName}`
    },
    component: loadable(() => import('@qasir/views/contents/user-management'), {
      fallback: <p>Loading..</p>
    })
  }
};

export default routes;
