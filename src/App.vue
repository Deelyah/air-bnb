<script setup lang="ts">
import TheFooter from "./TheFooter.vue";
import TheHeader from "./TheHeader.vue";

// import
</script>

<template>
  <div class="">
    <the-header />
    <div class="mt-44">
      <router-view />
    </div>
    <the-footer />
  </div>
</template>
