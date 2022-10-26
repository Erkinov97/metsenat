<script setup>
import IconEye from "./icons/IconEye.vue";
import IconChewronRight from "./icons/IconChewronRight.vue";
import IocnChewronLeft from "./icons/IocnChewronLeft.vue";
</script>
<template>
  <div class="w-full mx-auto overflow-x-auto relative">
    <table class="w-full text-sm dark:text-gray-400">
      <thead
        class="uppercase text-left text-[#B1B1B8] font-normal text-[12px] leading-[14px]"
      >
        <tr>
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
      <tbody>
        <tr
          v-for="(item, index) in 9"
          :key="index"
          class="mb-3 bg-[#FFFFFF] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="rounded-l-lg py-[25px] px-6 font-medium text-gray-900 whitespace-nowrap dark:text-[#FFFFFF]"
          >
            {{ index + 1 }}
          </th>
          <td class="py-4 px-6">Alimov Abror Xabibullayevich</td>
          <td class="py-4 px-6">+99899 973-72-60</td>
          <td class="py-4 px-6">30 000 000 UZS</td>
          <td class="py-4 px-6">0 UZS</td>
          <td class="py-4 px-6">15.01.2021</td>
          <td class="py-4 px-6">Yangi</td>
          <th class="rounded-r-lg py-4 px-6">
            <button
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              <IconEye />
            </button>
          </th>
        </tr>
      </tbody>
    </table>
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          Showing
          {{ " " }}
          <span class="font-medium">1</span>
          {{ " " }}
          to
          {{ " " }}
          <span class="font-medium">10</span>
          {{ " " }}
          of
          {{ " " }}
          <span class="font-medium">97</span>
          {{ " " }}
          results
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
