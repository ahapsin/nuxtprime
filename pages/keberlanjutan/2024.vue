<template>
     <Title name="title">Laporan Keberlanjutan</Title>
    <div>
        <div class="p-10 bg-white flex items-center justify-center text-white text-2xl">
        </div>
        <div class="p-10 bg-primary flex items-center justify-center text-white text-2xl">
            LAPORAN KEBERLANJUTAN
        </div>
        <div class="pdf-container">
            <iframe src="/laporan/keberlanjutan/Laporan Keberlanjutan Tahun 2024.pdf" width="100%" height="600px" style="border: none;"></iframe>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'landing'
})
</script>