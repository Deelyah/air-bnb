<template>
  <div class="fixed top-0 left-0 right-0 bg-white z-50">
    <div class="py-3.5 px-6 w-full">
      <button class="flex items-center py-2 rounded-full w-full shadow-lg">
        <div class="flex items-center">
          <div class="px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                height: 16px;
                width: 16px;
                fill: currentcolor;
              "
            >
              <path
                d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
              ></path>
            </svg>
          </div>
          <div class="">
            <h4 class="text-[#222222] text-sm text-left">Anywhere</h4>
            <p class="text-[#717171] text-xs">Any week . Add guests</p>
          </div>
        </div>
        <div class="rounded-full border border-[#DDDDDD] ml-auto p-3 mx-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style="
              display: block;
              height: 16px;
              width: 16px;
              fill: rgb(34, 34, 34);
            "
          >
            <path
              d="M5 8a3 3 0 0 1 2.83 2H14v2H7.83A3 3 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.83 4H2V4h6.17A3 3 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
            ></path>
          </svg>
        </div>
      </button>
    </div>
    <div>
      <div class="">
        <nav class="w-full overflow-auto flex pl-3 shadow-lg">
          <RouterLink
            to="/"
            v-for="nav in navigationItems"
            class="px-2 mx-2 pb-2"
          >
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navigation from "./database/navigation.json";
export default defineComponent({
  setup() {
    interface INav {
      title: string;
      icon: string;
    }
    const navigationItems: INav[] = navigation.data;
    // console.log(navigationItems);
    return {
      navigationItems,
    };
  },
});
</script>

<style scoped></style>
