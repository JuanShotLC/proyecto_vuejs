<template>
  <div>
    <hero-bar :has-right-visible="false">
      Lista de pasientes
    </hero-bar>
    <section class="section is-main-section">
      <CardComponent title="Registro de pacientes">
        <Tables
        :Cabecera="Cabecera"
        :items="items"
        />
      </CardComponent>
    </section>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import HeroBar from '@/components/HeroBar.vue'
import CardComponent from '@/components/CardComponent.vue'
import Tables from '@/components/pacientes/Tables.vue'
import { mapActions, mapGetters } from 'vuex'

export default defineComponent({
  name: 'ListadoPacientes',

  components: {
    HeroBar,
    CardComponent,
    Tables
  },
  data () {
    return {
      Cabecera: [
        { text: 'Tipo', value: 'tipo_documento' },
        { text: 'Cédula', value: 'documento' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'Acciones', value: 'actions' }
      ]
    }
  },
  computed: {
    ...mapGetters('listapacientes', ['items'])
  },
  created () {
    this.getPacientes()
  },
  methods: {
    ...mapActions('listapacientes', ['getPacientes'])
  }
})
</script>
