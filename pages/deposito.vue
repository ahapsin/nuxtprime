<template>
    <div>
        <Title name="title">Tabungan BPR Cahaya Fajar</Title>
        <div>
        </div>
        <div class="p-20">
            <Fieldset>
                <template #legend>
                    <div class="flex items-center pl-2">
                        <span class="font-bold p-2">Deposito</span>
                    </div>
                </template>
            
                    <DepositoUmum/>
               
            </Fieldset>

        </div>
    </div>
</template>

<script lang="ts" setup>

definePageMeta({
    layout: 'landing'
})
</script>
