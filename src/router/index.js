import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PlaceholderView from '@/views/PlaceholderView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Nubloo | Software para cultura, patrimonio y territorio',
    },
  },
  {
    path: '/servicios',
    name: 'services',
    component: PlaceholderView,
    props: {
      title: 'Servicios',
      description:
        'Consultoría tecnológica y desarrollo de software a medida para proyectos culturales y territoriales.',
    },
    meta: {
      title: 'Servicios | Nubloo',
    },
  },
  {
    path: '/sectores',
    name: 'sectors',
    component: PlaceholderView,
    props: {
      title: 'Sectores',
      description:
        'Trabajamos con consultoras, instituciones culturales, administraciones públicas y entidades vinculadas al territorio.',
    },
    meta: {
      title: 'Sectores | Nubloo',
    },
  },
  {
    path: '/proyectos',
    name: 'projects',
    component: PlaceholderView,
    props: {
      title: 'Proyectos',
      description:
        'Estamos preparando nuevos proyectos y demostraciones de tecnología aplicada a la cultura y el territorio.',
    },
    meta: {
      title: 'Proyectos | Nubloo',
    },
  },
  {
    path: '/nosotros',
    name: 'about',
    component: PlaceholderView,
    props: {
      title: 'Sobre Nubloo',
      description:
        'Un estudio tecnológico especializado en convertir estrategias culturales y territoriales en soluciones digitales.',
    },
    meta: {
      title: 'Sobre Nubloo',
    },
  },
  {
    path: '/contacto',
    name: 'contact',
    component: PlaceholderView,
    props: {
      title: 'Contacto',
      description:
        'Cuéntanos qué proyecto estás preparando y estudiaremos cómo convertirlo en una solución digital.',
    },
    meta: {
      title: 'Contacto | Nubloo',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title ?? 'Nubloo'
})

export default router