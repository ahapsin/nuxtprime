<template>
    <div class="flex">
        <div class="h-screen border-r w-1/5">
            <div class="w-full border-b items-center p-2">
                <div class="flex justify-between h-10 items-center p-4">
                    <div class="w-3/4 ">
                        <logo />
                    </div>
                    <div class=" text-muted-color">
                        <Icon name="mynaui:panel-left-close-solid" size="1.2rem"/>
                    </div>
                </div>
            </div>
            <div class="p-4">Sidemenu</div>
        </div>
        <div class=" h-screen w-full overflow-auto">
            <div class="sticky top-0 border-b bg-surface-0 h-14 justify-between items-center flex">
                <MainNavbar />
            </div>
            <div class="bg-secondary p-4">
                <slot />
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
