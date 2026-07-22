<script setup>
import { reactive, ref } from 'vue'

const submitted = ref(false)
const errorMessage = ref('')

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: '',
})

function submitForm() {
  errorMessage.value = ''

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    errorMessage.value = 'Completa los campos obligatorios.'
    return
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(form.email)) {
    errorMessage.value = 'Introduce una dirección de correo válida.'
    return
  }

  // Sustituir posteriormente por una petición a tu API.
  console.info('Formulario enviado:', { ...form })

  submitted.value = true
}
</script>

<template>
  <section class="section contact-section">
    <div class="container contact-panel">
      <div class="contact-copy">
        <span class="section-label section-label--light">Hablemos</span>

        <h2>
          ¿Estás preparando un proyecto cultural o territorial?
        </h2>

        <p>
          Cuéntanos qué necesitas desarrollar o qué requisitos debe cubrir tu
          proyecto. Estudiaremos su viabilidad y la mejor forma de abordarlo.
        </p>

        <a href="mailto:hola@nubloo.es" class="contact-email">
          hola@nubloo.es
        </a>
      </div>

      <form v-if="!submitted" class="contact-form" @submit.prevent="submitForm">
        <div class="form-row">
          <label>
            <span>Nombre *</span>
            <input
              v-model="form.name"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Tu nombre"
            />
          </label>

          <label>
            <span>Empresa</span>
            <input
              v-model="form.company"
              type="text"
              name="company"
              autocomplete="organization"
              placeholder="Empresa u organización"
            />
          </label>
        </div>

        <label>
          <span>Correo electrónico *</span>
          <input
            v-model="form.email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="nombre@empresa.com"
          />
        </label>

        <label>
          <span>¿Qué proyecto estás preparando? *</span>
          <textarea
            v-model="form.message"
            name="message"
            rows="5"
            placeholder="Describe brevemente el proyecto, sus objetivos o los requisitos principales."
          ></textarea>
        </label>

        <p v-if="errorMessage" class="form-error">
          {{ errorMessage }}
        </p>

        <button class="button button--light button--full" type="submit">
          Enviar consulta

          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>

        <small>
          Al enviar el formulario aceptas el tratamiento de tus datos para
          responder a la consulta.
        </small>
      </form>

      <div v-else class="form-success">
        <span>✓</span>
        <h3>Consulta preparada</h3>
        <p>
          El formulario funciona en modo demostración. El siguiente paso será
          conectarlo con tu correo o con una API.
        </p>
      </div>
    </div>
  </section>
</template>