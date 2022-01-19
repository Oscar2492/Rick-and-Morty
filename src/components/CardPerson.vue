<template>
  <div class="person">
    <img :src="person.image" :alt="person.name" />
    <div class="person__info">
      <h3>{{ person.name }}</h3>
      <div class="status">
        <span
          :class="
            person.status == 'Alive'
              ? 'alive'
              : person.status == 'Dead'
              ? 'dead'
              : 'default'
          "
        ></span>
        <span>{{ person.status }} - {{ person.species }}</span>
      </div>
      <div class="origin">
        <span>
          Origin:
          {{ person.origin.name }}
        </span>
      </div>
      <div class="location">
        Location:
        {{ person.location.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Person } from "@/models/person.models";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    person: { type: Object as PropType<Person> },
  },
});
</script>

<style lang="scss">
.person {
  background-color: var(--background-card);
  border-radius: 20px;
  box-shadow: 0 0 10px 1px var(--background-body);
  overflow: hidden;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  height: 100%;
  &:hover {
    transform: scale(1.05);
    h3 {
      color: var(--text-orange);
    }
  }
  span {
    color: var(--text-gray);
  }
  h3 {
    margin-bottom: 8px;
  }
  &__info {
    padding: 25px;
    .status {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      span {
        color: var(--text-gray);
        &:first-child {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 8px;
        }
      }
      .alive {
        background-color: green;
      }
      .dead {
        background-color: red;
      }
      .default {
        background-color: white;
      }
    }
    .origen {
      margin-bottom: 8px;
    }
  }
}
</style>
