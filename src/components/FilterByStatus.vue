<template>
  <div class="filter">
    <div class="item" @click="filter('')">All:</div>
    <div class="item" @click="filter('Alive')">Alive:</div>
    <div class="item" @click="filter('Dead')">Dead:</div>
    <div class="item" @click="filter('unknown')">Unknown:</div>
  </div>
  <SearchBox />
  <CounterStatus />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import CounterStatus from "./CounterStatus.vue";
import SearchBox from "./SearchBox.vue";
export default defineComponent({
  components: {
    CounterStatus,
    SearchBox,
  },
  setup() {
    const store = useStore();
    const filter = (status: string) => {
      store.dispatch("filterByStatus", status);
    };
    return {
      filter,
    };
  },
});
</script>

<style lang="scss">
.filter {
  width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-radius: 10px;
  overflow: hidden;
  .item {
    padding: 16px 8px;
    background-color: var(--background-card);
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(--text-orange);
    }
  }
}
</style>
