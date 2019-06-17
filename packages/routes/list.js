import Loadable from 'react-loadable'
import {} from '@qasir/example'

const loadable = (loader) => {
   return Loadable({
        loader,
        delay: false,
        loading: () => null
    })
}

const routes = {
    '/example': {
        component: loadable(() => import('@qasir/example'))
    }
}

export default routes
