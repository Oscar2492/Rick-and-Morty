<template>
  <div class="filter">
<span>Locations:  </span>
    <select
      @change="filterLocation(selectedValue)"
      v-model="selectedValue"
      name="location"
      id="location"
    >
      <option
        v-for="location in locations"
        :key="location.id"
        :value="location.name"
      >
        {{ location.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    let selectedValue;
    const locations = computed(() => {
      return store.getters.locations;
    });
    const filterLocation = (location: Location) => {
      store.dispatch("filterByLocation", location);
    };
    onMounted(() => {
      store.dispatch("getLocations");
    });
    return {
      locations,
      filterLocation,
      selectedValue,
    };
  },
});
</script>

<style></style>
