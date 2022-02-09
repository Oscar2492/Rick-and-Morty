import { createStore } from "vuex";
import { Person } from "@/models/person.models";
import { Location } from "@/models/location.models";
export default createStore({
  state: {
    persons: [] as Person[],
    personsFilter: [] as Person[],
    locations: [] as Location[],
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
    setLocation(state, location) {
      return (state.locations = location);
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
    async getLocations({ commit }) {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/location`
        );
        const data = await response.json();
        commit("setLocation", data.results);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },

    // getMorePersons({ startRow: number }):Promise<Person[]> {
    //   const previousRow = new RegExp(`[0-9]+(?page=)`);
    //       return fetch( this.state.url.replace(previousRow, String(this.startRow)))
    //      .then( response =>response.json());
    //      .them(json=>{
    //        return this.loadMorePersons(json, startRow)
    //      })

    //   },
    filterByStatus({ commit, state }, status: string) {
      const results = state.persons.filter((person: Person) => {
        return person.status.includes(status);
      });
      commit("setPersonsFilter", results);
    },
    filterByLocation({ commit, state }, location: string) {
      const results = state.persons.filter((person: Person) => {
        console.log(location);

        return person.location.name.includes(location);
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
          this.state.personsFilter;
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
    persons(state) {
      return state.persons;
    },
    locations(state): Location[] {
      return state.locations;
    },
  },
});
