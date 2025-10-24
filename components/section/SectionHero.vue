<template>
  <div class="flex w-full justify-center">
    <div
        :class="`flex bg-primary-50/10 bg-[url('/hero1.webp')] lg:h-dvh bg-cover md:bg-right w-[1366px]`">
      <div class="relative py-44 pb-20 md:py-[200px] p-10 md:ps-20 flex flex-col  gap-y-4  md:w-1/2">
        <!-- <span class="text-2xl md:text-5xl ">
            <div class="flex flex-col leading-tight font-semibold">
                <div class=" text-orange-500 font-bold p-2">Semangat Baru </div>
                <div class="text-white dark:text-white p-2">Dalam Usaha Anda</div>
            </div>
        </span> -->
        <!-- <span class="text-xs md:text-lg text-muted-color w-3/4 md:w-3/4 leading-normal">
            Kami menawarkan berbagai solusi untuk permasalahan anda mulai dari kredit dengan suku bunga yang
            kompetitif..
        </span> -->
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  src: String,
})
</script>
