import Loadable from 'react-loadable';

import {} from '@qasir/views/dashboard';
import {} from '@qasir/views/user-management';

const loadable = (loader) => {
   return Loadable({
        loader,
        delay: false,
        loading: () => null
    })
}

const routes = {
    '/dashboard': {
      component: loadable(() => import('@qasir/views/dashboard'))
    },
    '/user-management': {
      component: loadable(() => import('@qasir/views/user-management'))
    }
}

export default routes;
