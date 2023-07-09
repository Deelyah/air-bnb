<template>
  <div class="px-6 mb-8">
    <div class="relative">
      <button class="absolute flex w-full" @click="toggleLike">
        <div class="ml-auto p-2 pr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            :style="isLiked ? likedIcon : unlikedIcon"
          >
            <path
              d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"
            ></path>
          </svg>
        </div>
      </button>
      <img
        src="https://a0.muscache.com/im/pictures/miso/Hosting-29589886/original/6250f7c4-0869-482e-b763-4f9d73046fb1.jpeg?im_w=720"
        alt="place"
        class="rounded-md h-80"
      />
    </div>
    <div class="flex w-full items-start mt-2">
      <div class="">
        <h3 class="font-bold text-[#222]">Teighntenmouth close</h3>
        <p>Individual host</p>
        <p>20-25 Nov</p>
        <button class="font-bold text-[#222] underline">
          $345 <span class="font-normal">total</span>
        </button>
      </div>
      <div class="flex items-center ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style="display: block; height: 12px; width: 12px; fill: currentcolor"
        >
          <path
            fill-rule="evenodd"
            d="m15.1 1.58-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
          ></path>
        </svg>
        <p class="ml-1">4.83</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    let isLiked = ref(false);

    const likedIcon = `display: block;
              fill: transparent;
              height: 24px;
              width: 24px;
              stroke: white;
              stroke-width: 2;
              overflow: visible;`;

    const unlikedIcon = `display: block;
              fill: red;
              height: 24px;
              width: 24px;
              stroke: var(--f-mkcy-f);
              stroke-width: 2;
              overflow: visible;`;

    const toggleLike = () => {
      isLiked.value = !isLiked.value;
    };
    return {
      isLiked,
      likedIcon,
      unlikedIcon,
      toggleLike,
    };
  },
});
</script>

<style scoped></style>
