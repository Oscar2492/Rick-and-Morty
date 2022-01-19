<template>
  <div class="search">
    <input
      type="text"
      class="container__input"
      @input="search($refs.input.value)"
      ref="input"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const search = (name: string) => {
      store.dispatch("filterByName", name);
    };
    return {
      search,
    };
  },
});
</script>

<style lang="scss">
.search {
  display: flex;
  justify-content: center;
  margin: 20px 0px 0px 0px;
  input {
    height: 53px;
    width: 400px;
    border: none;
    font-size: 30px;
    border-radius: 10px;
    padding: 0 8px;
    &:focus {
      outline: none;
    }
  }
}
</style>
