import Loadable from 'react-loadable';
import {} from '@qasir/views/welcome';

const loadable = (loader) => {
   return Loadable({
        loader,
        delay: false,
        loading: () => null
    })
}

const routes = {
    '/welcome': {
        component: loadable(() => import('@qasir/views/welcome'))
    }
}

export default routes;
