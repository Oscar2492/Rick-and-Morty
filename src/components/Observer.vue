<template>
  <div class="observer" ref="el"/>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const el = ref();
    onMounted(() => {
      let observer = new IntersectionObserver(([entry]) => {
        entry && entry.isIntersecting;
        let nextPage = (store.state.page += 1);

        store.dispatch("nextPage");
        console.log("hello");
      });
      observer.observe(el.value);
    });
    return {
      el,
    };
  },
});
</script>
<style lang="scss" scoped>
.observer {
  width: 100px;
  height: 100px;
  background-color: aqua;
  position: absolute;
  bottom: 0;
}
</style>
-->
