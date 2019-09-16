import Loadable from 'react-loadable';

import {} from '@qasir/views/contents/dashboard';
import {} from '@qasir/views/contents/user-management';

const loadable = (loader) => {
   return Loadable({
        loader,
        delay: false,
        loading: () => null
    })
}

const routes = {
    '/dashboard': {
      component: loadable(() => import('@qasir/views/contents/dashboard'))
    },
    '/user-management': {
      component: loadable(() => import('@qasir/views/contents/user-management'))
    }
}

export default routes;
