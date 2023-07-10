<template>
  <div>
    <div class="flex flex-wrap">
      <div v-for="(_, index) in 9" class="basis-auto sm:basis-1/2">
        <ShowcaseCard :key="index" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShowcaseCard from "../../components/cards/ShowcaseCard.vue";
export default defineComponent({
  setup() {
    return {};
  },
  components: { ShowcaseCard },
});
</script>

<style scoped></style>
