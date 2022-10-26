<script setup>
import IconAsked from "../components/icons/IconAsked.vue";
import IconPayedVue from "../components/icons/IconPayed.vue";
import IconPayment from "../components/icons/IconPayment.vue";
import TheHeader from "../components/TheHeader.vue";
import TheNavbar from "../components/TheNavbar.vue";
</script>

<template>
  <TheHeader />
  <TheNavbar />
  <main class="max-w-[1400px] w-full mx-auto px-[120px]">
    <div class="flex items-center gap-7 md:mt-12 mb-6">
      <div class="w-1/3 flex items-center gap-4 bg-white py-6 px-6">
        <IconPayedVue />
        <div>
          <span class="font-normal text-[12px] leading-3 text-[#7A7A9D]"
            >Jami to‘langan summa</span
          >
          <br />
          <p class="flex items-center gap-1.5">
            <span class="text-[#2E384D] font-bold text-[20px] leading-5">1 684 325 000</span>
            <span class="text-[20px] leading-5 font-bold text-[#B2B7C1]">UZS</span>
          </p>
        </div>
      </div>
      <div class="w-1/3 flex items-center gap-4 bg-white py-6 px-6">
        <IconAsked />
        <div>
          <span class="font-normal text-[12px] leading-3 text-[#7A7A9D]"
            >Jami so‘ralgan summa</span
          >
          <br />
          <p class="flex items-center gap-1.5">
            <span class="text-[#2E384D] font-bold text-[20px] leading-5">1 684 325 000</span>
            <span class="text-[20px] leading-5 font-bold text-[#B2B7C1]">UZS</span>
          </p>
        </div>
      </div>
      <div class="w-1/3 flex items-center gap-4 bg-white py-6 px-6">
        <IconPayment />
        <div>
          <span class="font-normal text-[12px] leading-3 text-[#7A7A9D]"
            >To‘lanishi kerak summa</span
          >
          <br />
          <p class="flex items-center gap-1.5">
            <span class="text-[#2E384D] font-bold text-[20px] leading-5">1 684 325 000</span>
            <span class="text-[20px] leading-5 font-bold text-[#B2B7C1]">UZS</span>
          </p>
        </div>
      </div>
    </div>
    <div></div>
  </main>
</template>
