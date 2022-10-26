<script setup>
import { RouterLink } from "vue-router";
import IconFilter from "./icons/IconFilter.vue";
</script>
<template>
  <nav class="w-full mx-auto bg-[#FFFFFF] px-[120px] flex justify-between items-center py-6">
    <ul
      class="max-w-[579px] w-full flex items-center rounded-md border-2 bg-[#FFFFFF] border-[#E0E7FF] uppercase text-[12px] tracking-[1.125px] leading-[12px]"
    >
      <li class="w-1/3">
        <RouterLink
          class="w-full font-medium inline-block text-center py-[14px] text-[rgba(51, 102, 255, 0.6)]"
          to="/"
          >Dashboard</RouterLink
        >
      </li>
      <li class="w-1/3 border-x-2 border-x-[#DDE3FB]">
        <RouterLink
          class="w-full font-medium inline-block text-center py-[14px] text-[rgba(51, 102, 255, 0.6)]"
          to="sponsors"
          >Homiylar</RouterLink
        >
      </li>
      <li class="w-1/3">
        <RouterLink
          class="w-full font-medium inline-block text-center py-[14px] text-[rgba(51, 102, 255, 0.6)]"
          to="students"
          >Talabalar</RouterLink
        >
      </li>
    </ul>
    <div>
      <form class="flex items-center justify-center gap-5">
        <label for="voice-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="text-[#B1B1B8] bg-[#E8E8E8] rounded-[5px] font-normal focus:outline-none block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-[#FFFFFF] dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Izlash"
          />
        </div>
        <button
          type="button"
          class="max-w-[123px] w-full rounded-[5px] flex gap-[10px] items-center justify-center py-3 bg-[#EDF1FD]"
        >
          <IconFilter />
          Filter
        </button>
      </form>
    </div>
  </nav>
</template>
