<template>
  <div>
    <div class="flex flex-wrap lg:px-6">
      <div
        v-for="(beach, index) in Beaches"
        class="basis-auto sm:basis-1/2 md:basis-1/3 xl:basis-1/4 2xl:basis-1/5"
      >
        <ShowcaseCard :key="index" :image="beach?.images[3]" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShowcaseCard from "../../components/cards/ShowcaseCard.vue";
import BeachFront from "../../database/beachFront.json";
import { IBeaches } from "../../types";
export default defineComponent({
  setup() {
    const Beaches: IBeaches[] = BeachFront;
    return { Beaches };
  },
  components: { ShowcaseCard },
});
</script>

<style scoped></style>
