<template>
  <section class="hero">
    <div class="hero-decoration hero-decoration--one"></div>
    <div class="hero-decoration hero-decoration--two"></div>

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
          <RouterLink to="/contacto" class="button button--primary">
            Cuéntanos tu proyecto

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </RouterLink>

          <a href="#servicios" class="button button--secondary">
            Explorar capacidades
          </a>
        </div>

        <ul class="hero-highlights" aria-label="Características principales">
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

      <div class="hero-visual" aria-hidden="true">
        <div class="visual-orbit visual-orbit--outer"></div>
        <div class="visual-orbit visual-orbit--inner"></div>

        <div class="visual-card visual-card--main">
          <div class="visual-card-header">
            <span class="visual-card-icon">
              <svg viewBox="0 0 24 24">
                <path d="M4 19V9l8-5 8 5v10" />
                <path d="M8 19v-6h8v6" />
              </svg>
            </span>

            <div>
              <strong>Territorio conectado</strong>
              <span>Experiencia digital</span>
            </div>
          </div>

          <div class="map-area">
            <div class="map-path map-path--one"></div>
            <div class="map-path map-path--two"></div>

            <span class="map-pin map-pin--one"></span>
            <span class="map-pin map-pin--two"></span>
            <span class="map-pin map-pin--three"></span>
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

        <div class="floating-card floating-card--top">
          <span class="floating-icon">AI</span>
          <div>
            <strong>Asistente inteligente</strong>
            <span>Consulta el territorio</span>
          </div>
        </div>

        <div class="floating-card floating-card--bottom">
          <span class="status-indicator"></span>
          <div>
            <strong>Datos conectados</strong>
            <span>Información actualizada</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>