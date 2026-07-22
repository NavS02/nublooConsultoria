<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <RouterLink to="/" class="brand brand--footer">
          <span class="brand-symbol" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <span class="brand-name">nubloo</span>
        </RouterLink>

        <p>
          Consultoría y desarrollo de software para cultura, patrimonio,
          turismo y territorio.
        </p>
      </div>

      <div class="footer-column">
        <strong>Navegación</strong>
        <RouterLink to="/servicios">Servicios</RouterLink>
        <RouterLink to="/sectores">Sectores</RouterLink>
        <RouterLink to="/proyectos">Proyectos</RouterLink>
        <RouterLink to="/nosotros">Nosotros</RouterLink>
      </div>

      <div class="footer-column">
        <strong>Contacto</strong>
        <a href="mailto:hola@nubloo.es">hola@nubloo.es</a>
        <span>Valencia, España</span>
      </div>
    </div>

    <div class="container footer-bottom">
      <span>© {{ currentYear }} Nubloo</span>

      <div>
        <a href="#">Aviso legal</a>
        <a href="#">Privacidad</a>
        <a href="#">Cookies</a>
      </div>
    </div>
  </footer>
</template>