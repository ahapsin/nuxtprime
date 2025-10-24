<template>
    <div class="card overflow-x-auto">
        <OrganizationChart :value="data" collapsible>
            <template #person="slotProps">
                <div class="flex flex-col">
                    <div class="flex flex-col items-center">
                        <img :alt="slotProps.node.data.name" :src="slotProps.node.data.image" class="mb-4 w-12 h-12" />
                        <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                        <span>{{ slotProps.node.data.title }}</span>
                    </div>
                </div>
            </template>
            <template #default="slotProps">
                <a :href="slotProps.node.link"><span :class="slotProps.node.link ? 'text-blue-500':''">{{ slotProps.node.label }}</span></a>
            </template>
        </OrganizationChart>
    </div>
</template>

<script setup>
import { ref } from "vue";

const data = ref({
    key: '0',
    type: 'person',
    data: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/2048px-User_icon_2.svg.png',
        name: 'Nasabah / Perwakilannya',
    },
    children: [
        {
            key: '0_0',
            label:'LISAN',
            styleClass: '!bg-green-100 text-red rounded-xl',
            children: [
                {
                    label: 'Telepon Ke Kantor BPR CAHAYA FAJAR',
                },
            ]
        }, {
            key: '0_1',
            label: 'TERTULIS',
            styleClass: '!bg-blue-100 text-red rounded-xl',
            children: [
                {
                    label: 'langsung Datang ke Kantor, tidak langsung email / website',
                },
            ]
        }, {
            key: '0_2',
            label: 'WEB APP OJK',
            styleClass: '!bg-red-100 text-red rounded-xl',
            children: [
                {
                    label: 'www.kontak157.ojk.go.id',
                    link:'https://kontak157.ojk.go.id/APPKPublicPortal/',
                },
            ]
        },


    ]
});
</script>
