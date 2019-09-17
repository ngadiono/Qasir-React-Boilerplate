import React from 'react';

const routes = {
    '/dashboard': {
      component: React.lazy(() => import('@qasir/views/contents/dashboard'))
    },
    '/user-management': {
      component: React.lazy(() => import('@qasir/views/contents/user-management'))
    }
}

export default routes;
