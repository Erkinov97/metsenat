<script setup>
import IconEye from "./icons/IconEye.vue";
import IconChewronRight from "./icons/IconChewronRight.vue";
import IocnChewronLeft from "./icons/IocnChewronLeft.vue";
</script>
<template>
  <div class="w-full mx-auto overflow-x-auto relative">
    <table class="w-full whitespace-nowrap">
      <thead
        class="uppercase text-left text-[#B1B1B8] font-normal text-[12px] leading-[14px]"
      >
        <tr class="text-center">
          <th scope="col" class="py-3 px-6">#</th>
          <th scope="col" class="py-3 px-6">f.i.sh.</th>
          <th scope="col" class="py-3 px-6">Tel.Raqami</th>
          <th scope="col" class="py-3 px-6">Homiylik summasi</th>
          <th scope="col" class="py-3 px-6">Sarflangan summa</th>
          <th scope="col" class="py-3 px-6">Sana</th>
          <th scope="col" class="py-3 px-6">Holati</th>
          <th scope="col" class="py-3 px-6">Amallar</th>
        </tr>
      </thead>
      <tbody v-for="item in 9" :key="item">
        <tr tabindex="0" class="bg-white text-center focus:outline-none h-16">
          <td class="pl-1.5 rounded-l-lg">
            <p class="text-base font-medium leading-none text-gray-700 mr-2">1</p>
          </td>
          <td class="pl-7.5">
            <p class="text-base font-medium leading-none text-gray-700 mr-2">
              Alimov Abror Xabibullayevich
            </p>
          </td>
          <td class="pl-4">
            <p class="text-sm leading-none text-gray-600 ml-2">+99899 973-72-60</p>
          </td>
          <td class="pl-4">
            <p class="text-sm leading-none text-gray-600 ml-2">30 000 000 UZS</p>
          </td>
          <td class="pl-4">
            <p class="text-sm leading-none text-gray-600 ml-2">0 UZS</p>
          </td>
          <td class="pl-4">
            <p class="text-sm leading-none text-gray-600 ml-2">15.01.2021</p>
          </td>
          <td class="pl-4">
            <p class="text-sm leading-none text-gray-600 ml-2">Yangi</p>
          </td>
          <td class="pl-4 rounded-r-lg">
            <button
              type="button"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              <IconEye />
            </button>
          </td>
        </tr>
        <tr class="h-4"></tr>
      </tbody>
    </table>

    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          <span class="font-medium">59</span>
          {{ " " }}
          tadan
          {{ " " }}
          <span class="font-medium">1</span>
          -
          <span class="font-medium">10</span>
          {{ " " }}
          ko‘rsatilmoqda
        </p>
      </div>
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-sm"
          aria-label="Pagination"
        >
          <a
            href="#"
            class="relative inline-flex items-center rounded-l-md border border-gray-300 bg-[#FFFFFF] px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            <IocnChewronLeft />
          </a>
          <a
            href="#"
            aria-current="page"
            class="relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
            >1</a
          >
          <a
            href="#"
            class="relative inline-flex items-center border border-gray-300 bg-[#FFFFFF] px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >2</a
          >
          <a
            href="#"
            class="relative hidden items-center border border-gray-300 bg-[#FFFFFF] px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >3</a
          >
          <span
            class="relative inline-flex items-center border border-gray-300 bg-[#FFFFFF] px-4 py-2 text-sm font-medium text-gray-700"
            >...</span
          >
          <a
            href="#"
            class="relative hidden items-center border border-gray-300 bg-[#FFFFFF] px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 md:inline-flex"
            >8</a
          >
          <a
            href="#"
            class="relative inline-flex items-center border border-gray-300 bg-[#FFFFFF] px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >9</a
          >
          <a
            href="#"
            class="relative inline-flex items-center border border-gray-300 bg-[#FFFFFF] px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >10</a
          >
          <a
            href="#"
            class="relative inline-flex items-center rounded-r-md border border-gray-300 bg-[#FFFFFF] px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
          >
            <IconChewronRight />
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
