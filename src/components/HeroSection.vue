<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const activeTab = ref('territory')
const automaticTransitionEnabled = ref(true)

const tabs = [
  {
    id: 'territory',
    title: 'Territorio',
    subtitle: 'Mapas y rutas',
  },
  {
    id: 'culture',
    title: 'Cultura',
    subtitle: 'Colecciones digitales',
  },
  {
    id: 'assistant',
    title: 'Asistente IA',
    subtitle: 'Consulta inteligente',
  },
]

const TAB_INTERVAL = 5000

let tabInterval = null

function showNextTab() {
  if (!automaticTransitionEnabled.value) {
    return
  }

  const currentIndex = tabs.findIndex(
    (tab) => tab.id === activeTab.value,
  )

  const nextIndex = (currentIndex + 1) % tabs.length

  activeTab.value = tabs[nextIndex].id
}

function startAutomaticTransition() {
  stopAutomaticTransition()

  tabInterval = window.setInterval(
    showNextTab,
    TAB_INTERVAL,
  )
}

function stopAutomaticTransition() {
  if (tabInterval !== null) {
    window.clearInterval(tabInterval)
    tabInterval = null
  }
}

function selectTab(tabId) {
  activeTab.value = tabId
  automaticTransitionEnabled.value = false
  stopAutomaticTransition()
}

onMounted(() => {
  startAutomaticTransition()
})

onBeforeUnmount(() => {
  stopAutomaticTransition()
})
</script>

<template>
  <section class="hero">
    <!-- Fondo animado que ocupa todo el hero -->
 <div class="hero-motion-background" aria-hidden="true">
  <div class="hero-motion-base"></div>

  <div class="hero-motion-blob hero-motion-blob--one"></div>
  <div class="hero-motion-blob hero-motion-blob--two"></div>
  <div class="hero-motion-blob hero-motion-blob--three"></div>
  <div class="hero-motion-blob hero-motion-blob--four"></div>

  <div class="hero-motion-wave hero-motion-wave--one"></div>
  <div class="hero-motion-wave hero-motion-wave--two"></div>

  <div class="hero-motion-grid"></div>
  <div class="hero-motion-shine"></div>
</div>

    <div class="container hero-grid">
      <div class="hero-content">
        <div class="eyebrow">
          <span class="eyebrow-dot"></span>
          Tecnología para cultura y territorio
        </div>

        <h1>
          Software que conecta
          <span>cultura, personas y lugares.</span>
        </h1>

        <p class="hero-description">
          Diseñamos y desarrollamos plataformas, aplicaciones y experiencias
          digitales a medida para proyectos culturales, patrimoniales,
          turísticos y territoriales.
        </p>

        <div class="hero-actions">
          <RouterLink
            to="/contacto"
            class="button button--primary"
          >
            Cuéntanos tu proyecto

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </RouterLink>

          <a
            href="#servicios"
            class="button button--secondary"
          >
            Explorar capacidades
          </a>
        </div>

        <ul
          class="hero-highlights"
          aria-label="Características principales"
        >
          <li>
            <span class="check-icon">✓</span>
            Desarrollo a medida
          </li>

          <li>
            <span class="check-icon">✓</span>
            Arquitecturas mantenibles
          </li>

          <li>
            <span class="check-icon">✓</span>
            IA aplicada con propósito
          </li>
        </ul>
      </div>

      <div class="hero-visual">
        <div class="visual-card visual-card--main">
          <div class="visual-card-intro">
            <div>
              <span class="visual-card-label">
                Ejemplos interactivos
              </span>

              <strong>
                Explora nuestras capacidades
              </strong>
            </div>
          </div>

          <div
            class="visual-tabs"
            role="tablist"
            aria-label="Demostración de soluciones"
          >
            <button
              v-for="tab in tabs"
              :key="tab.id"
              type="button"
              role="tab"
              class="visual-tab"
              :class="{
                'visual-tab--active': activeTab === tab.id,
              }"
              :aria-selected="activeTab === tab.id"
              :aria-controls="`visual-panel-${tab.id}`"
              @click="selectTab(tab.id)"
            >
              <span
                v-if="tab.id === 'territory'"
                class="visual-tab-icon"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M4 19V9l8-5 8 5v10" />
                  <path d="M8 19v-6h8v6" />
                </svg>
              </span>

              <span
                v-else-if="tab.id === 'culture'"
                class="visual-tab-icon visual-tab-icon--culture"
                aria-hidden="true"
              >
                <svg viewBox="0 0 24 24">
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="2"
                  />
                  <circle cx="9" cy="9" r="2" />
                  <path d="m5 17 4-4 3 3 2-2 5 5" />
                </svg>
              </span>

              <span
                v-else
                class="visual-tab-icon visual-tab-icon--ai"
                aria-hidden="true"
              >
                AI
              </span>

              <span class="visual-tab-copy">
                <strong>{{ tab.title }}</strong>
                <small>{{ tab.subtitle }}</small>
              </span>
            </button>
          </div>

          <!-- Territorio -->
          <div
            v-if="activeTab === 'territory'"
            id="visual-panel-territory"
            class="visual-tab-panel"
            role="tabpanel"
          >
            <div class="territory-preview">
              <div class="territory-toolbar">
                <div class="territory-toolbar-copy">
                  <span
                    class="territory-toolbar-icon"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24">
                      <path
                        d="M4 6.5 9 4l6 2.5L20 4v13.5L15 20l-6-2.5L4 20Z"
                      />
                      <path d="M9 4v13.5" />
                      <path d="M15 6.5V20" />
                    </svg>
                  </span>

                  <div>
                    <span>Explorador territorial</span>
                    <strong>Centro histórico</strong>
                  </div>
                </div>

                <button
                  type="button"
                  class="territory-filter"
                  aria-label="Filtrar lugares"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 7h16" />
                    <path d="M7 12h10" />
                    <path d="M10 17h4" />
                  </svg>

                  Filtros
                </button>
              </div>

              <div class="map-area">
                <div class="map-street map-street--one"></div>
                <div class="map-street map-street--two"></div>
                <div class="map-street map-street--three"></div>
                <div class="map-street map-street--four"></div>

                <svg
                  class="map-route"
                  viewBox="0 0 500 280"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    class="map-route-shadow"
                    d="M62 200 C110 110, 175 145, 220 94 S340 52, 417 139"
                  />

                  <path
                    class="map-route-line"
                    d="M62 200 C110 110, 175 145, 220 94 S340 52, 417 139"
                  />
                </svg>

                <div
                  class="territory-marker territory-marker--museum"
                >
                  <span class="territory-marker-dot">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m4 9 8-5 8 5" />
                      <path d="M6 10h12" />
                      <path d="M7 10v7" />
                      <path d="M12 10v7" />
                      <path d="M17 10v7" />
                      <path d="M5 19h14" />
                    </svg>
                  </span>

                  <span class="territory-marker-label">
                    <strong>Museo</strong>
                    <small>Arte e historia</small>
                  </span>
                </div>

                <div
                  class="territory-marker territory-marker--monument"
                >
                  <span
                    class="territory-marker-dot territory-marker-dot--accent"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M6 20h12" />
                      <path d="M8 20V9h8v11" />
                      <path d="m7 9 5-5 5 5" />
                      <path d="M11 13h2" />
                    </svg>
                  </span>

                  <span class="territory-marker-label">
                    <strong>Monumento</strong>
                    <small>Patrimonio local</small>
                  </span>
                </div>

                <div
                  class="territory-marker territory-marker--viewpoint"
                >
                  <span
                    class="territory-marker-dot territory-marker-dot--dark"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M3 12s3.5-5 9-5 9 5 9 5-3.5 5-9 5-9-5-9-5Z"
                      />
                      <circle cx="12" cy="12" r="2.5" />
                    </svg>
                  </span>

                  <span class="territory-marker-label">
                    <strong>Mirador</strong>
                    <small>Vista panorámica</small>
                  </span>
                </div>

                <div
                  class="map-current-location"
                  aria-hidden="true"
                >
                  <span></span>
                </div>
              </div>

              <div class="territory-route">
                <div class="territory-route-main">
                  <span class="territory-route-number">
                    01
                  </span>

                  <div>
                    <span class="territory-route-label">
                      Ruta recomendada
                    </span>

                    <strong>
                      Paseo por el centro histórico
                    </strong>

                    <div class="territory-route-details">
                      <span>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <circle cx="12" cy="12" r="8" />
                          <path d="M12 8v4l3 2" />
                        </svg>

                        90 min
                      </span>

                      <span>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M5 19 19 5" />
                          <path d="M8 5h11v11" />
                        </svg>

                        2,4 km
                      </span>

                      <span>
                        <svg viewBox="0 0 24 24" aria-hidden="true">
                          <path
                            d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z"
                          />
                          <circle cx="12" cy="10" r="2" />
                        </svg>

                        6 lugares
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  class="territory-route-button"
                  aria-label="Abrir la ruta"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14" />
                    <path d="m13 6 6 6-6 6" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="visual-stats">
              <div>
                <strong>24</strong>
                <span>Recursos</span>
              </div>

              <div>
                <strong>8</strong>
                <span>Rutas</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Idiomas</span>
              </div>
            </div>
          </div>

          <!-- Cultura -->
          <div
            v-else-if="activeTab === 'culture'"
            id="visual-panel-culture"
            class="visual-tab-panel"
            role="tabpanel"
          >
            <div class="culture-preview">
              <div class="culture-preview-header">
                <div>
                  <span>Colección digital</span>
                  <strong>Obras destacadas</strong>
                </div>

                <button
                  type="button"
                  aria-label="Ver toda la colección"
                >
                  Ver colección
                </button>
              </div>

              <div class="artwork-grid">
                <article
                  class="artwork-card artwork-card--large"
                >
                  <div
                    class="artwork-image artwork-image--one"
                  >
                    <span class="artwork-badge">
                      Destacada
                    </span>
                  </div>

                  <div class="artwork-info">
                    <strong>Paisaje mediterráneo</strong>
                    <span>María Sorolla · 1924</span>
                  </div>
                </article>

                <article class="artwork-card">
                  <div
                    class="artwork-image artwork-image--two"
                  ></div>

                  <div class="artwork-info">
                    <strong>Forma y materia</strong>
                    <span>Colección moderna</span>
                  </div>
                </article>

                <article class="artwork-card">
                  <div
                    class="artwork-image artwork-image--three"
                  ></div>

                  <div class="artwork-info">
                    <strong>Memoria urbana</strong>
                    <span>Archivo fotográfico</span>
                  </div>
                </article>
              </div>
            </div>

            <div class="visual-stats">
              <div>
                <strong>1.248</strong>
                <span>Obras</span>
              </div>

              <div>
                <strong>86</strong>
                <span>Autores</span>
              </div>

              <div>
                <strong>12</strong>
                <span>Colecciones</span>
              </div>
            </div>
          </div>

          <!-- Asistente -->
          <div
            v-else
            id="visual-panel-assistant"
            class="visual-tab-panel"
            role="tabpanel"
          >
            <div class="assistant-preview">
              <div
                class="assistant-message assistant-message--user"
              >
                ¿Qué puedo visitar esta tarde?
              </div>

              <div
                class="assistant-message assistant-message--bot"
              >
                <div
                  class="assistant-avatar"
                  aria-hidden="true"
                >
                  AI
                </div>

                <p>
                  Te recomiendo una ruta por el centro histórico
                  con tres puntos destacados. La visita dura
                  aproximadamente 90 minutos.
                </p>
              </div>

              <div class="assistant-suggestions">
                <button type="button">
                  Crear una ruta
                </button>

                <button type="button">
                  Ver museos
                </button>

                <button type="button">
                  Consultar eventos
                </button>
              </div>

              <div class="assistant-input">
                <span>
                  Pregunta sobre el territorio...
                </span>

                <span
                  class="assistant-send"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24">
                    <path d="m4 4 17 8-17 8 3-8-3-8Z" />
                    <path d="M7 12h14" />
                  </svg>
                </span>
              </div>
            </div>

            <div class="visual-stats">
              <div>
                <strong>24/7</strong>
                <span>Disponible</span>
              </div>

              <div>
                <strong>3</strong>
                <span>Idiomas</span>
              </div>

              <div>
                <strong>98%</strong>
                <span>Consultas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>