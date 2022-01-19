<template>
  <div class="counter">
    <span>{{ counter }} Results</span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    const counter = computed(() => {
      return store.getters.counter;
    });
    return {
      counter,
    };
  },
});
</script>

<style lang="scss">
.counter {
  display: flex;
  justify-content: center;
  font-size: 50px;
  margin: 10px 0px 10px 0px;
}
</style>
