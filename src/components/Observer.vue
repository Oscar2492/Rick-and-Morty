<template>
  <div class="observer"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();
    let observer = new IntersectionObserver(([entry]) => {
      entry && entry.isIntersecting;
      let nextPage = (store.state.page += 1);
      store.dispatch("nextPage");
    });
    observer.observe(this.$el);
  },
});
</script>

<style></style>
