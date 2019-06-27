import Loadable from 'react-loadable'
import {} from '@qasir/views/example'

const loadable = (loader) => {
   return Loadable({
        loader,
        delay: false,
        loading: () => null
    })
}

const routes = {
    'example': {
        component: loadable(() => import('@qasir/views/example'))
    }
}

export default routes
