<template>
  <div class="md:pt-2 lg:pt-4">
    <nav class="w-full overflow-auto flex pl-3 shadow-lg">
      <RouterLink to="/" v-for="nav in navigationItems" class="px-2 mx-2 pb-2">
        <div class="flex flex-col items-center">
          <div class="w-6 h-6">
            <img :src="nav.icon" :alt="nav.title" />
          </div>
          <p class="whitespace-nowrap text-xs text-[#717171] pt-2">
            {{ nav.title }}
          </p>
        </div>
      </RouterLink>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navigation from "../../database/navigation.json";

export default defineComponent({
  setup() {
    interface INav {
      title: string;
      icon: string;
    }
    const navigationItems: INav[] = navigation.data;

    return {
      navigationItems,
    };
  },
});
</script>

<style scoped></style>
