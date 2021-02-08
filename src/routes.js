import { JsHome } from './Pages/JavaScript'
import { Home } from './Pages/Home'
import { Proximamente } from './Pages/Proximamente'

const routes = [
  {
    path: '/',
    component: Home

  },
  {
    path: '/javascript',
    component: JsHome
  },
  {
    path: '/proximamente',
    component: Proximamente
  }

];

export default routes