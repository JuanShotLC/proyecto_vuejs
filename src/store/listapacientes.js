
export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    items (state) {
      return state.items
    }
  },
  mutations: {
    SET_ITEMS (state, data) {
      state.items = data.body
    }
  },
  actions: {
    getPacientes: async function ({ commit }) {
      const setting = {
        method: 'GET'
      }
      const url = 'http://localhost:4000/api/pacientes'
      const data = await fetch(url, setting)
      const json = await data.json()
      commit('SET_ITEMS', json)
    },
    addMtvo: async function ({ commit, despatch }, datos) {
      try {
        const setting = {
          method: 'POST',
          Headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(datos)
        }
        const url = 'http://localhost:4000/api/motivos'
        const data = await fetch(url, setting)
        const json = await data.json()
        console.log(json)
        console.log(setting)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
