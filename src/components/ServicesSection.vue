<script setup>
const services = [
  {
    number: '01',
    title: 'Consultoría tecnológica',
    description:
      'Traducimos necesidades, estrategias y pliegos en soluciones técnicas claras, viables y presupuestables.',
    items: [
      'Análisis funcional y técnico',
      'Arquitectura de soluciones',
      'Prototipado y estimación',
      'Apoyo técnico a licitaciones',
    ],
    icon: 'compass',
  },
  {
    number: '02',
    title: 'Plataformas digitales',
    description:
      'Desarrollamos herramientas web que permiten publicar, gestionar y descubrir contenidos culturales y territoriales.',
    items: [
      'Portales culturales y turísticos',
      'Catálogos y archivos digitales',
      'Mapas, rutas y agendas',
      'Paneles de gestión',
    ],
    icon: 'layers',
  },
  {
    number: '03',
    title: 'Aplicaciones y experiencias',
    description:
      'Creamos productos digitales accesibles desde cualquier dispositivo y adaptados a cada contexto.',
    items: [
      'Aplicaciones web y PWA',
      'Guías y audioguías digitales',
      'Experiencias mediante QR',
      'Gamificación e interacción',
    ],
    icon: 'devices',
  },
  {
    number: '04',
    title: 'IA y datos',
    description:
      'Aplicamos inteligencia artificial para facilitar el acceso a la información y mejorar la gestión de contenidos.',
    items: [
      'Asistentes especializados',
      'Búsqueda semántica',
      'Recomendación de contenidos',
      'Automatización y analítica',
    ],
    icon: 'spark',
  },
]
</script>

<template>
  <section id="servicios" class="section services-section">
    <div class="container">
      <div class="section-heading">
        <div>
          <span class="section-label">Qué hacemos</span>

          <h2>
            De la estrategia
            <span>a una solución funcional.</span>
          </h2>
        </div>

        <p>
          Participamos en todo el proceso tecnológico: análisis, definición,
          desarrollo, integración, lanzamiento y evolución.
        </p>
      </div>

      <div class="services-grid">
        <article v-for="service in services" :key="service.number" class="service-card">
          <div class="service-card-top">
            <span class="service-number">{{ service.number }}</span>

            <span class="service-icon" aria-hidden="true">
              <svg v-if="service.icon === 'compass'" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
              </svg>

              <svg v-else-if="service.icon === 'layers'" viewBox="0 0 24 24">
                <path d="m12 3 9 5-9 5-9-5 9-5Z" />
                <path d="m3 12 9 5 9-5" />
                <path d="m3 16 9 5 9-5" />
              </svg>

              <svg v-else-if="service.icon === 'devices'" viewBox="0 0 24 24">
                <rect x="3" y="4" width="14" height="11" rx="2" />
                <path d="M8 20h4M10 15v5" />
                <rect x="17" y="8" width="4" height="10" rx="1" />
              </svg>

              <svg v-else viewBox="0 0 24 24">
                <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                <path d="m5.6 5.6 2.1 2.1M16.3 16.3l2.1 2.1" />
                <path d="m18.4 5.6-2.1 2.1M7.7 16.3l-2.1 2.1" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </span>
          </div>

          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>

          <ul>
            <li v-for="item in service.items" :key="item">
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>