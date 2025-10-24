<template>
    <Title name="title">Laporan Publikasi 2024</Title>
    <div>
        <div class="p-10 bg-white flex items-center justify-center text-white text-2xl">
        </div>
        <Accordion value="0">
            <AccordionPanel value="0">
                <AccordionHeader> LAPORAN PUBLIKASI PERIODE DESEMBER 2024</AccordionHeader>
                <AccordionContent>
                    <div class="pdf-container">
                        <iframe src="/laporan/publikasi/publikasi_2024.pdf" width="100%" height="600px"
                            style="border: none;"></iframe>
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