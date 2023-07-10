<template>
  <div>
    <div v-for="(_, index) in 9">
      <ShowcaseCard :key="index" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import ShowcaseCard from "../../components/cards/ShowcaseCard";
import ShowcaseCard from "../../components/cards/ShowcaseCard.vue";
export default defineComponent({
  setup() {
    return {};
  },
  components: { ShowcaseCard },
});
</script>

<style scoped></style>
