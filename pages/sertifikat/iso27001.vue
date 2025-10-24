<template>
     <Title name="title">ISO-27001:2022</Title>
    <div>
        <div class="p-10 bg-white flex items-center justify-center text-white text-2xl">
        </div>
        <div class="p-10 bg-primary flex items-center justify-center text-white text-2xl">
           ISO-27001:2022
        </div>
        <div class="pdf-container">
            <iframe src="/laporan/ISO27001.pdf" width="100%" height="600px" style="border: none;"></iframe>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'landing'
})
</script>