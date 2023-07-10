<template>
  <div class="fixed top-0 left-0 right-0 bg-white z-50">
    <div
      class="py-3.5 px-6 md:px-10 w-full md:border-b flex items-center justify-end lg:justify-between"
    >
      <NavLogo />
      <FilterButton />
      <MenuSection />
    </div>
    <div>
      <NavItems />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavLogo from "./components/navigation/NavLogo.vue";
import NavItems from "./components/navigation/NavItems.vue";
import FilterButton from "./components/navigation/FilterButton.vue";
import MenuSection from "./components/navigation/MenuSection.vue";

export default defineComponent({
  setup() {
    // console.log(navigationItems);
    return {};
  },
  components: { NavItems, FilterButton, NavLogo, MenuSection },
});
</script>

<style scoped></style>
