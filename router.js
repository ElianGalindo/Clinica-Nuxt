import Vue from 'vue'
import VueRouter from 'vue-router'
import UiCitas from '~/components/uiPatients/uiCitas' // Asegúrate de tener esta vista creada
import Dashboard from '@/components/uiDashboard/Inicio.vue' // Asegúrate de tener esta vista creada
import Pacientes from '@/components/uiPatients/uiPacientes.vue' // Asegúrate de tener esta vista creada
import Calendario from '@/components/uiUsers/uiCalendario.vue'
//import Inicio from '~/components/uiDashboard/Inicio.vue';//import uiCitas from '~/components/uiDashboard/Inicio.vue'
//import uiUsuarios from '@/components/uiUsers/uiUsuarios.vue'

   
Vue.use(VueRouter)

const routes = [
  { path: '/inicio', component: Dashboard },
  { path: '/citas', component: UiCitas },
  { path: '/pacientes', component: Pacientes },
  { path: '/calendario', component: Calendario }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router