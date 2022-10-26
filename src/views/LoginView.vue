<script setup>
import IconCommunity from "../components/icons/IconCommunity.vue";
import IconCaptcha from "../components/icons/IconCaptcha.vue";
import { useAuthStore } from "../stores/useAuthStore";
import { ref } from "vue";
import router from "../router";
const authStore = useAuthStore();

let checked = ref(false);
const user = ref({
  username: "",
  password: "",
});
function onSubmit() {
  if (checked.value) {
    authStore.logIn(user.value);
    router.push("/");
  }
}
</script>

<template>
  <div class="w-full h-screen pt-12">
    <div class="w-full max-w-[380px] mx-auto">
      <IconCommunity class="mx-auto mb-[46px]" />
      <form
        @submit.prevent="onSubmit"
        class="max-w-sm bg-[#FFFFFF] w-full rounded p-[32px]"
      >
        <h1 class="mb-[44px] text-[#28293D] text-lg font-bold">Kirish</h1>
        <div class="mb-[22px]">
          <label
            class="block text-[#1D1D1F] uppercase font-medium text-xs mb-[8px]"
            for="username"
          >
            LOGIN
          </label>
          <input
            class="bg-[#e0e7ff33] rounded-md w-full border py-[12px] px-[15.5px] border-[#E0E7FF] leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="adm8904"
            v-model="user.username"
          />
        </div>
        <div class="mb-[22px]">
          <label
            class="block text-[#1D1D1F] uppercase font-medium text-xs mb-[8px]"
            for="password"
          >
            PAROL
          </label>
          <input
            class="bg-[#e0e7ff33] rounded-md w-full border py-[12px] px-[15.5px] border-[#E0E7FF] leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="••••••••••"
            v-model="user.password"
          />
        </div>
        <div
          class="w-full mb-[22.5px] border-[#E0E7FF] rounded bg-[#FAFAFA] p-2.5 flex items-center justify-between"
        >
          <div class="flex items-center">
            <input
              v-model="checked"
              id="link-checkbox"
              type="checkbox"
              class="w-6 h-6 border-2 border-[#C1C1C1] text-blue-600 bg-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              class="ml-3.5 text-sm font-normal text-black dark:text-gray-300"
              >I’m not a robot
            </label>
          </div>
          <IconCaptcha />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="w-full bg-[#2E5BFF] hover:bg-blue-700 text-[#FFFFFF] font-bold pt-[14px] pb-[15px] text-center rounded-md focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Kirish
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
