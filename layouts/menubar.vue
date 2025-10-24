<template>
    <div class="w-screen h-screen">
        <div class="flex flex-col gap-2 bg-slate-100 h-[calc(100%-62px)] overflow-auto">
            <!-- <div class="p-4 text-center sticky -top-1 bg-main text-white">{{layoutCustomProps}}
            </div> -->

            <!-- <div v-for="i in 40" class="bg-white rounded-lg p-4">
                    <div class="flex justify-between">
                        <div class="flex gap-2 items-center">
                            <div class="w-10 h-10 rounded-full bg-main items-center justify-center flex text-white">A
                            </div>
                            <div>item {{ i }}</div>
                        </div>
                        <div></div>
                    </div>
                </div> -->
            <slot />
        </div>
        <div class="flex justify-around h-[62px] w-full fixed bottom-0">
            <div class=" p-2" v-for="menu in listMenu" @click="$emit('tap', menu)">
                <div
                    class="rounded-xl transition-opacity animate-ease-out flex items-center w-full h-full p-2 hover:bg-purple-100">
                    {{ menu }}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
useHead({
    title: 'My App',
    meta: [
        { name: 'theme-color', content: 'oklch(0.438 0.218 303.724)' }
    ],
    bodyAttrs: {
        class: 'test'
    },
    script: [{ innerHTML: 'console.log(\'Hello world\')' }]
})

const listMenu = ['HOME', 'REPORT', 'KARTU', 'AKUN'];
const layoutCustomProps = useAttrs();
const selectedMenu = ref();
const menuSelect = (e) => { selectedMenu.value = e };

</script>
<style scooped>
.bg-main {
    @apply bg-purple-800
}
</style>
