<template>
  <div class="persons">
    <div class="cpersons__item" v-for="person in persons" :key="person.id">
      <CardPerson :person="person" />
    </div>
    <!-- <Observer /> -->
  </div>
</template>

<script lang="ts">
import { onMounted, computed, defineComponent } from "vue";
import { useStore } from "vuex";
import CardPerson from "@/components/CardPerson.vue";
// import Observer from "@/components/Observer.vue";

//defineComponent con esto coge los tipos
export default defineComponent({
  components: {
    CardPerson,
    // Observer,
  },
  setup() {
    const store = useStore();
    const persons = computed(() => {
      return store.state.personsFilter;
    });

    onMounted(() => {
      store.dispatch("getPersons");
    });
    return {
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
