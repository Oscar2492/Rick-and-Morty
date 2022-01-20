import { createStore } from "vuex";
import { Person } from "@/models/person.models";
export default createStore({
  state: {
    persons: [] as Person[],
    personsFilter: [] as Person[],
    page: 1,
  },
  mutations: {
    setPersons(state, results) {
      state.persons = results;
    },
    setPersonsFilter(state, results) {
      state.personsFilter = results;
    },
    setPage(state, nextpage) {
      state.page = nextpage;
    },
  },
  actions: {
    async getPersons({ commit }) {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
        );
        const data = await response.json();
        commit("setPersons", data.results);
        commit("setPersonsFilter", data.results);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
    filterByStatus({ commit, state }, status: string) {
      const results = state.persons.filter((person: Person) => {
        return person.status.includes(status);
      });
      commit("setPersonsFilter", results);
    },
    filterByName({ commit, state }, name: string) {
      const results = state.persons.filter((person: Person) => {
        return person.name.toLowerCase().includes(name.toLowerCase());
      });
      commit("setPersonsFilter", results);
    },
    nextPage({ commit, state }, page: number) {
      const nextpage = () => {
        if (this.state.personsFilter.length) {
          this.getters.page += 1;
          this.state.personsFilter.push();
        }
        commit("setPersonsFilter", nextpage);
        commit("setPage", nextpage);
      };
      return this.dispatch("getPersons");
    },
  },
  modules: {},
  getters: {
    counter(state) {
      return state.personsFilter.length;
    },
    page(state) {
      return state.page;
    },
  },
});
