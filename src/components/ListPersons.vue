<template>
  <section>
    <div class="persons">
      <div class="cpersons__item" v-for="person in persons" :key="person.id">
        <CardPerson :person="person" />
      </div>
      <!-- <Observer /> -->
      <!-- <infinite-loading @infinite="infiniteHandler"/> -->
    </div>
  </section>
</template>

<script lang="ts">
import { onMounted, computed, defineComponent } from "vue";
import { useStore } from "vuex";
import CardPerson from "@/components/CardPerson.vue";
// import Observer from "@/components/Observer.vue";
// import InfiniteLoading from "vue-infinite-loading";

//defineComponent con esto coge los tipos
export default defineComponent({
  components: {
    CardPerson,
    // Observer,
    // InfiniteLoading,
  },
  setup() {
    const store = useStore();
    const persons = computed(() => {
      return store.state.personsFilter;
    });

    // const infiniteHandler = (page: number) => {
    //   if (store.state.personsFilter.length) {
    //     store.dispatch("nextPage", page);
    //   }
    // };

    onMounted(() => {
      store.dispatch("getPersons");
    });
    return {
      // infiniteHandler,
      persons,
    };
  },
});
</script>

<style lang="scss">
.persons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 48px;
  margin: 48px 0;
}
</style>
