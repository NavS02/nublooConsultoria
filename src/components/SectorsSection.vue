<script setup>
const sectors = [
  {
    title: 'Cultura y patrimonio',
    description:
      'Museos, fundaciones, archivos, exposiciones, asociaciones y proyectos de interpretación patrimonial.',
    initials: 'CP',
  },
  {
    title: 'Turismo y territorio',
    description:
      'Destinos, municipios, rutas, oficinas de turismo y proyectos de promoción y desarrollo territorial.',
    initials: 'TT',
  },
  {
    title: 'Administración pública',
    description:
      'Herramientas institucionales, portales, inventarios, sistemas de información y proyectos financiados.',
    initials: 'AP',
  },
  {
    title: 'Consultoras y agencias',
    description:
      'Colaboración tecnológica para preparar y ejecutar proyectos, concursos y licitaciones.',
    initials: 'CA',
  },
]
</script>

<template>
  <section class="section sectors-section">
    <div class="container sectors-layout">
      <div class="sectors-intro">
        <span class="section-label section-label--light">Para quién trabajamos</span>

        <h2>
          Tecnología adaptada a
          <span>cada proyecto y contexto.</span>
        </h2>

        <p>
          Colaboramos tanto con entidades finales como con consultoras y
          adjudicatarias que necesitan un socio tecnológico especializado.
        </p>

        <RouterLink to="/sectores" class="text-link text-link--light">
          Descubrir sectores

          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </RouterLink>
      </div>

      <div class="sectors-grid">
        <article v-for="sector in sectors" :key="sector.title" class="sector-card">
          <span class="sector-initials">{{ sector.initials }}</span>

          <div>
            <h3>{{ sector.title }}</h3>
            <p>{{ sector.description }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>