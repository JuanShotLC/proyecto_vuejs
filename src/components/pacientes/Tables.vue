<template>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Busqueda"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <router-link
      to="/crear-pacientes"
      class="navbar-item"
      exact-active-class="is-active"
      >
      <button
      type="button"
      class="button is-link is-primary">
      <span>Nuevo Expediente</span>
    </button>
      </router-link>
            <router-link
      to="/editar-consulta/1"
      class="navbar-item"
      exact-active-class="is-active"
      >
      <button
      type="button"
      class="button is-link is-primary">
      <span> test Consulta</span>
    </button>
      </router-link>
            <router-link
      to="/editar-consulta-odont/1"
      class="navbar-item"
      exact-active-class="is-active"
      >
      <button
      type="button"
      class="button is-link is-primary">
      <span>test odontología</span>
    </button>
      </router-link>
    </v-card-title>
    <v-data-table
    :headers="Cabecera"
    :items="items"
    class="elevation-1">
    <template v-slot:[`item.actions`]="{ item }">
      <button
      type="button"
      :to="`/ver-paciente/${item.id}`"
      class="button is-link is-light"
      @click="verExpediente(item)">
        <span>Ver más</span>
      </button>
      <button
      small
      type="button"
      class="button is-link is-primary"
      @click="CreaConsulta(item)">
        <span>Crear Consulta</span>
      </button>
    </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['Cabecera', 'items'],
  data () {
    return {
      search: '',
      Item: {
        id_evaluacion: 0
      }
    }
  },
  methods: {
    ...mapActions('listapacientes', ['addMtvo']),
    CreaConsulta (item) {
      this.$alertify.confirm(
        '¿Desea agregar una nueva consulta para <b>' + item.nombre + ' ' + item.apellido + '</b>?',
        () => {
          this.addMtvo(this.Item)
          this.$alertify.success('ok')
        },
        () => this.$alertify.error('cancel')
      )
    },
    verExpediente (item) {
      this.$alertify.success('ok')
      window.location.href = '/#/ver-paciente/' + item.id_paciente
    }
  }
}
</script>
