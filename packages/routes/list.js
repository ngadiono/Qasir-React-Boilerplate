import React from 'react';
import loadable from '@loadable/component';

const routes = {
    '/dashboard': {
      component: loadable(() => import('@qasir/views/contents/dashboard'), {
        fallback: <p>Loading..</p>,
      })
    },
    '/user-management': {
      component: loadable(() => import('@qasir/views/contents/user-management'), {
        fallback: <p>Loading..</p>,
      })
    }
}

export default routes;
