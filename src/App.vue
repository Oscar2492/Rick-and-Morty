<template>
  <div class="container">
    <h1>Rick and Morty</h1>
    <FilterByStatus />
    <FilterByLocations />
    <ListPersons />
  </div>
</template>

<script lang="ts">
import ListPersons from "./components/ListPersons.vue";
import FilterByStatus from "./components/FilterByStatus.vue";
import FilterByLocations from "./components/FilterByLocations.vue";

export default {
  name: "App",
  components: {
    ListPersons,
    FilterByStatus,
    FilterByLocations
},
};
</script>

<style lang="scss">
:root {
  --background-body: #24282f;
  --background-card: #3c3e44;
  --text-white: #ffffff;
  --text-gray: #c0c0c0;
  --text-orange: #ff9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 48px;
  text-align: center;
  font-size: 80px;
}
.container {
  width: 980px;
  max-width: 90%;
  margin: 80px auto;
}
img {
  width: 100%;
}
</style>
