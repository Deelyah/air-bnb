<template>
  <button
    class="flex items-center py-2 rounded-full w-full box-shadow md:w-fit"
  >
    <div class="flex items-center">
      <div class="md:hidden px-4" id="searchIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="display: block; height: 16px; width: 16px; fill: currentcolor"
        >
          <path
            d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
          ></path>
        </svg>
      </div>
      <div class="class flex flex-col md:flex-row md:items-center">
        <h4
          class="text-[#222222] text-sm text-left md:px-4 md:border-r md:font-semibold"
        >
          Anywhere
        </h4>
        <div class="text-[#717171] text-xs md:text-sm flex items-center">
          <p
            class="md:px-4 md:border-r md:font-semibold md:text-[#222222] whitespace-nowrap"
          >
            Any week <span class="mr-1 md:hidden">.</span>
          </p>
          <p class="md:px-4 whitespace-nowrap">Add guests</p>
        </div>
      </div>
    </div>
    <div
      id="searchOrFilter"
      class="rounded-full border border-[#DDDDDD] p-3 md:p-2.5 mx-2.5 md:bg-[#FF385C] ml-auto"
    >
      <div class="md:hidden">
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
      <div class="hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="display: block; height: 12px; width: 12px; fill: white"
        >
          <path
            d="M13 0a13 13 0 0 1 10.5 20.67l7.91 7.92-2.82 2.82-7.92-7.91A12.94 12.94 0 0 1 13 26a13 13 0 1 1 0-26zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
          ></path>
        </svg>
      </div>
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
