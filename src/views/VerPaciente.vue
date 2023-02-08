<template>
  <div>
    <hero-bar :has-right-visible="true">
      <di>
      Ficha del Paciente
      </di>
      <div>
                        <div class="buttons">
              <button
                type="button"
                class="button is-light is-small"
              >
                <span class="icon is-small"><i class="mdi mdi-undo"></i></span
                ><span>Regresar</span></button
              ><button
                type="button"
                class="button is-info is-light is-small"
              >
                <span class="icon is-small"
                  ><i class="mdi mdi-magnify"></i></span
                ><span>Ver Detalle</span></button
              ><button
                type="button"
                class="button is-link is-small"
              >
                <span>Crear Consulta</span>
              </button>
            </div>
      </div>
    </hero-bar>
    <section class="section is-main-section">
      <CardComponent title="Datos del paciente">
        <FichaPaciente />
      </CardComponent>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import HeroBar from '@/components/HeroBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import FichaPaciente from '@/components/pacientes/FichaPaciente.vue'

export default defineComponent({
  name: 'VerPaciente',

  components: {
    HeroBar,
    CardComponent,
    FichaPaciente
  }
})
</script>
