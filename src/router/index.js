import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/Edit')
  },
  
  {
    path: '/registrar',
    name: 'recepcion',
    component: () => import('../components/Registrar')
  },
  
  {
    path: '/buscar',
    name: 'buscar',
    component: () => import('../components/Buscar')
  },
  {
    path: '/asignarimagen',
    name: 'asignarimagen',
    component: () => import('../components/AsignarFoto')
  },
  {
    path: '/proximos',
    name: 'proximos',
    component: () => import('../components/test')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router