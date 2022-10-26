<script setup>
import { RouterLink } from "vue-router";
import IconLogout from "./icons/IconLogout.vue";
import IconPro from "./icons/IconPro.vue";
import IconUser from "./icons/IconUser.vue";
import { useAuthStore } from "../stores/useAuthStore";
const authStore = useAuthStore();
function logOut() {
  authStore.logOut();
}
</script>

<template>
  <header
    class="w-full flex justify-between items-center drop-shadow-[0_25px_40px_rgba(0,0,0,0.03)]"
  >
    <RouterLink to="/">
      <IconPro class="max-w-[172.4px] w-full" />
    </RouterLink>
    <div class="flex items-center">
      <div
        class="w-full max-w-[133px] bg-[#f1f1f3] flex justify-between items-center pl-5 pt-1 pb-1 pr-1 rounded-md"
      >
        <span class="font-bold text-[13px] mr-6">Shohrux</span>
        <div class="w-8 h-8 rounded bg-[#00AE69] pt-2 px-[5px]">
          <IconUser class="w-full h-full" />
        </div>
      </div>
      <button type="button" class="ml-10" @click="logOut">
        <IconLogout class="w-8 h-8" />
      </button>
    </div>
  </header>
</template>
