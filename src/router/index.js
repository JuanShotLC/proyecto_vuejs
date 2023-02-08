import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: 'Home'
    },
    path: '/',
    name: 'home',
    component: Home
  },
  // {
  //   meta: {
  //     title: 'Tables'
  //   },
  //   path: '/tables',
  //   name: 'tables',
  //   component: () => import(/* webpackChunkName: "tables" */ '@/views/Tables.vue')
  // },
  // {
  //   meta: {
  //     title: 'Forms'
  //   },
  //   path: '/forms',
  //   name: 'forms',
  //   component: () => import(/* webpackChunkName: "forms" */ '@/views/Forms.vue')
  // },
  {
    meta: {
      title: 'Perfil'
    },
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile.vue')
  },
  {
    meta: {
      title: 'Lista de Pacientes'
    },
    path: '/lista-pacientes',
    name: 'ListadoPacientes',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/ListadoPacientes.vue')
  },
  {
    meta: {
      title: 'Nuevo Expediente'
    },
    path: '/crear-pacientes',
    name: 'CrearPacientes',
    component: () => import(/* webpackChunkName: "client-form" */ '@/views/CrearPacientes.vue')
  },
  // {
  //   meta: {
  //     title: 'Edit Client'
  //   },
  //   path: '/client/:id',
  //   name: 'client.edit',
  //   component: () => import(/* webpackChunkName: "client-form" */ '@/views/ClientForm.vue'),
  //   props: true
  // },
  {
    meta: {
      title: 'Consulta Medica'
    },
    path: '/editar-consulta/:id',
    name: 'consultaMdeica',
    component: () => import(/* webpackChunkName: "client-form" */ '@/views/EditarConsultaMed.vue'),
    props: true
  },
  {
    meta: {
      title: 'Consulta Odontologica'
    },
    path: '/editar-consulta-odont/:id',
    name: 'consultaOdontologica',
    component: () => import(/* webpackChunkName: "client-form" */ '@/views/EditarConsultaOdont.vue'),
    props: true
  },
  {
    meta: {
      title: 'Consulta Odontologica'
    },
    path: '/ver-paciente/:id',
    name: 'VerPaciente',
    component: () => import(/* webpackChunkName: "client-form" */ '@/views/VerPaciente.vue'),
    props: true
  },
  {
    path: '/full-page',
    component: () => import(/* webpackChunkName: "full-page" */ '@/views/FullPage.vue'),
    children: [
      {
        meta: {
          title: 'Login'
        },
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "full-page" */ '@/views/full-page/Login.vue')
      }
    ]
  }

]

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router

export function useRouter () {
  return router
}
