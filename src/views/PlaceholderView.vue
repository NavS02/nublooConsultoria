<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <section class="placeholder-page">
    <div class="container">
      <span class="section-label">Nubloo</span>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>

      <RouterLink to="/" class="button button--primary">
        Volver al inicio
      </RouterLink>
    </div>
  </section>
</template>