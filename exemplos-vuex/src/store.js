import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    usuario: "Eduardo",
    quantidadeAulasCompletas: 15,
    cep: null
  },
  mutations: {
    MUDAR_USUARIO(state, payload) {
      state.usuario = payload.novoUsuario;
    },
    COMPLETAR_AULA(state) {
      state.quantidadeAulasCompletas++;
    },
    SETAR_CEP(state, payload) {
      state.cep = payload
    }
  },
  actions: {
    completarAula(context) {
      context.commit("COMPLETAR_AULA")
    },
    fetchCep(context) {
      fetch(`https://viacep.com.br/ws/99150000/json`)
        .then(r => r.json())
        .then(r => {
          setTimeout(() => {
            context.commit("SETAR_CEP", r);
            context.commit("MUDAR_USUARIO", {
              novoUsuario: "Ciclano"
            });
            context.dispatch("completarAula");
          }, 1000)
        });
    }
  }
});