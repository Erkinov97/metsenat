<script setup>
import TheHeader from "../components/TheHeader.vue";
import TheNavbar from "../components/TheNavbar.vue";
import TheTable from "../components/TheTable.vue";
</script>
<template>
  <TheHeader />
  <TheNavbar />

  <main class="max-w-[1400px] w-full mx-auto px-[120px]">
    <TheTable class="md:mt-12"/>
  </main>
</template>
