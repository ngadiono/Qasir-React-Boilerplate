import Loadable from 'react-loadable';
import {} from '@qasir/views/errors/400';
import {} from '@qasir/views/errors/500';
import {} from '@qasir/views/login';
import {} from '@qasir/views/dashboard';
import {} from '@qasir/views/userManagement';
import {} from '@qasir/views/welcome';

const loadable = (loader) => {
   return Loadable({
        loader,
        delay: false,
        loading: () => null
    })
}

const routes = {
    '/404': {
        component: loadable(() => import('@qasir/views/errors/400'))
    },
    '/500': {
      component: loadable(() => import('@qasir/views/errors/500'))
    },
    '/login': {
      component: loadable(() => import('@qasir/views/login'))
    },
    '/dashboard1': {
      component: loadable(() => import('@qasir/views/dashboard1'))
    },
    '/user-management': {
      component: loadable(() => import('@qasir/views/userManagement'))
    },
    '/welcome': {
      component: loadable(() => import('@qasir/views/welcome'))
  },
}

export default routes;
