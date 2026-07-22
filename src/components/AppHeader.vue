<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navigation = [
  { label: 'Inicio', to: '/' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Sectores', to: '/sectores' },
  { label: 'Proyectos', to: '/proyectos' },
  { label: 'Nosotros', to: '/nosotros' },
]

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false
  },
)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="site-header">
    <div class="container header-content">
      <RouterLink to="/" class="brand" aria-label="Nubloo, página de inicio">
        <span class="brand-symbol" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <span class="brand-name">nubloo</span>
      </RouterLink>

      <button
        class="menu-toggle"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Abrir menú"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
      </button>

      <nav class="main-navigation" :class="{ 'main-navigation--open': isMenuOpen }">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="navigation-link"
        >
          {{ item.label }}
        </RouterLink>

        <RouterLink to="/contacto" class="button button--small button--primary">
          Cuéntanos tu proyecto
        </RouterLink>
      </nav>
    </div>
  </header>
</template>