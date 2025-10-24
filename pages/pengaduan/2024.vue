<template>
    <Title name="title">LAPORAN PUBLIKASI PENANGANAN PENGADUAN 2024</Title>
    <div>
        <div class="p-10 bg-white flex items-center justify-center text-white text-2xl">
        </div>
        <Accordion value="0">
            <AccordionPanel value="0">
                <AccordionHeader> LAPORAN PUBLIKASI PENANGANAN PENGADUAN PERIODE JANUARI S/D DESEMBER 2024
                </AccordionHeader>
                <AccordionContent>
                    <div class="pdf-container">
                        <iframe src="/laporan/penagananpengaduan/PUBLIKASI PENANGANAN PENGADUAN.pdf" width="100%"
                            height="600px" style="border: none;"></iframe>
                    </div>
                </AccordionContent>
            </AccordionPanel>
        </Accordion>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'landing'
})
</script>