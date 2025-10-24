<template>
    <div>
        <Title name="title">Tabungan BPR Cahaya Fajar</Title>
        <div>
        </div>
        <div class="p-20">
            
            <Fieldset>
                <template #legend>
                    <div class="flex items-center pl-2">
                        <span class="font-bold p-2">Tabungan</span>
                    </div>
                </template>
                <Tabs value="0">
                    <TabList>
                        <Tab value="0">Cahaya Fajar</Tab>
                        <Tab value="1">Ciremaiku</Tab>
                        <Tab value="2">TabunganKu</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel value="0">
                           <div class="pdf-container">
                                <TabunganCahayaFajar/>
                            </div>
                        </TabPanel>
                        <TabPanel value="1">
                           <div class="pdf-container">
                                <TabunganCiremaiku/>
                            </div>
                        </TabPanel>
                        <TabPanel value="2">
                            <div class="pdf-container">
                                <TabunganTabunganku/>
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
