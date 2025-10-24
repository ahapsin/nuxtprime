<template>
     <Title name="title">Laporan Tahunan</Title>
    <div>
        <div class="p-10 bg-white flex items-center justify-center text-white text-2xl">
        </div>
        <div class="p-10 bg-primary flex items-center justify-center text-white text-2xl">
            LAPORAN TAHUNAN
        </div>
        <div class="pdf-container">
            <iframe src="/laporan/tahunan/Laporan Tahunan PT. BPR Cahaya Fajar Tahun 2024.pdf" width="100%" height="600px" style="border: none;"></iframe>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'landing'
})
</script>