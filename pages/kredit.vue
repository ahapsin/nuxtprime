<template>
    <div>
        <Title name="title">Kredit BPR Cahaya Fajar</Title>
        <div>
        </div>
        <div class="p-20">
            <Fieldset>
                <template #legend>
                    <div class="flex items-center pl-2">
                        <span class="font-bold p-2">Kredit Umum</span>
                    </div>
                </template>
                <Tabs value="0">
                    <TabList>
                        <Tab value="0">KAMA</Tab>
                        <Tab value="1">KAMU</Tab>

                        <Tab value="2">KJE</Tab>
                        <Tab value="3">KPMB</Tab>
                        <Tab value="4">KPM</Tab>
                        <Tab value="5">KR</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel value="0">
                            <div class="pdf-container">
                                <KreditKAMA />
                            </div>
                        </TabPanel>
                        <TabPanel value="1">
                            <div class="pdf-container">
                                <KreditKAMU />
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <div class="pdf-container">
                                <KreditEmas />
                            </div>
                        </TabPanel>
                        <TabPanel value="3">
                            <div class="pdf-container">
                                <KreditKPMB />
                            </div>
                        </TabPanel>
                        <TabPanel value="4">
                            <div class="pdf-container">
                               <KreditKPM/>
                            </div>
                        </TabPanel>
                        <TabPanel value="5">
                            <div class="pdf-container">
                                <KreditKR/>
                            </div>
                        </TabPanel>
                      
                    </TabPanels>
                </Tabs>
            </Fieldset>

        </div>
    </div>
</template>

<script lang="ts" setup>


definePageMeta({
    layout: 'landing'
})
</script>
