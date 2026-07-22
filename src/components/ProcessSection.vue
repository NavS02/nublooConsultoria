<script setup>
const steps = [
  {
    number: '01',
    title: 'Entender',
    description:
      'Analizamos el contexto, los usuarios, los requisitos y los objetivos reales del proyecto.',
  },
  {
    number: '02',
    title: 'Definir',
    description:
      'Convertimos las necesidades en una propuesta funcional, técnica y económica.',
  },
  {
    number: '03',
    title: 'Construir',
    description:
      'Diseñamos, desarrollamos, probamos e integramos una solución mantenible.',
  },
  {
    number: '04',
    title: 'Evolucionar',
    description:
      'Acompañamos el lanzamiento y continuamos mejorando la plataforma.',
  },
]
</script>

<template>
  <section class="section process-section">
    <div class="container">
      <div class="section-heading section-heading--centered">
        <div>
          <span class="section-label">Cómo trabajamos</span>

          <h2>
            Un proceso claro,
            <span>de principio a fin.</span>
          </h2>
        </div>

        <p>
          Reducimos la incertidumbre mediante entregas progresivas, comunicación
          constante y decisiones técnicas justificadas.
        </p>
      </div>

      <div class="process-grid">
        <article v-for="(step, index) in steps" :key="step.number" class="process-step">
          <div class="process-marker">
            <span>{{ step.number }}</span>
          </div>

          <div v-if="index < steps.length - 1" class="process-line"></div>

          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>