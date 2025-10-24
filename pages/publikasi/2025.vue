<template>
    <Title name="title">Laporan Publikasi 2025</Title>
    <div>
        <div class="p-10 bg-white flex items-center justify-center text-white text-2xl">
        </div>
        <Accordion value="0">
            <AccordionPanel value="1">
                <AccordionHeader> LAPORAN PUBLIKASI PERIODE MARET 2025</AccordionHeader>
                <AccordionContent>
                    <div class="pdf-container">
                        <iframe src="/laporan/publikasi/maret_2025.pdf" width="100%" height="600px"
                            style="border: none;"></iframe>
                    </div>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader> LAPORAN PUBLIKASI PERIODE JUNI 2025</AccordionHeader>
                <AccordionContent>
                    <div class="pdf-container">
                        <iframe src="/laporan/publikasi/juni_2025.pdf" width="100%" height="600px"
                            style="border: none;"></iframe>
                    </div>
                </AccordionContent>
            </AccordionPanel>
            <AccordionPanel value="2">
                <AccordionHeader> LAPORAN PUBLIKASI PERIODE SEPTEMBER 2025</AccordionHeader>
                <AccordionContent>
                    <div class="pdf-container">
                        <iframe src="/laporan/publikasi/publikasi_september_2025.pdf" width="100%" height="600px"
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