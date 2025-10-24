<template>
    <div class="card">
        <Menubar :model="items" style="border: 0; background-color: transparent;" class="font-medium">
            <template #item="{ item, props, hasSubmenu }">
                <a :href="item.path" class="flex items-center" v-bind="props.action" v-if="!hasSubmenu">
                    <span>{{ item.label }}</span>
                </a>
                <a v-else class="flex items-center" v-bind="props.action">
                    <span>{{ item.label }}{{ hasSubmenu.path }}</span>
                </a>
            </template>
        </Menubar>
    </div>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
    {
        label: 'Beranda',
        icon: 'pi pi-home',
        path: '/',
    },
    {
        label: 'Produk',
        icon: 'pi pi-search',
        path: '',
        items: [
            {
                label: 'Tabungan',
                icon: 'pi pi-bolt',
                path: '/tabungan',
            },
            {
                label: 'Deposito',
                icon: 'pi pi-server',
                path: '/deposito',
            },
            {
                label: 'Kredit',
                icon: 'pi pi-palette',
                path: '/kredit',
          
            }
        ]
    },
    {
        label: 'Tentang Kami',
        icon: 'pi pi-envelope',
        path: '/#visimisi',
        items: [
            {
                label: 'Visi Misi',
                icon: 'pi pi-bolt',
                path: '/#visimisi',
            },
            {
                label: 'Pengumuman',
                icon: 'pi pi-bolt',
                path: '/#pengumuman',
            },
            {
                label: 'Laporan Tahunan',
                icon: 'pi pi-server',
                path: '/#publikasi',
                items: [
                    {
                        label: '2024',
                        path: '/tahunan/2024',
                    },
                ]
            },
            {
                label: 'Laporan Publikasi',
                icon: 'pi pi-server',
                path: '/#publikasi',
                items: [
                    {
                        label: '2024',
                        path: '/publikasi/2024',
                    },
                    {
                        label: '2025',
                        path: '/publikasi/2025',
                    },
                ]
            },
            {
                label: 'Laporan Tata Kelola',
                icon: 'pi pi-server',
                path: '/#tatakelola',
                items: [
                    {
                        label: '2024',
                        path: '/tata_kelola/2024',
                    },
                ]
            },
            {
                label: 'Laporan Keberlanjutan',
                icon: 'pi pi-server',
                path: '/#publikasi',
                items: [
                    {
                        label: '2024',
                        path: '/keberlanjutan/2024',
                    },
                ]
            },
            {
                label: 'Laporan Penanganan Pengaduan',
                icon: 'pi pi-server',
                path: '/pengaduan',
                items: [
                    {
                        label: '2024',
                        path: '/pengaduan/2024',
                    },
                ]
            },
            {
                label: 'Piagam Audit Internal',
                icon: 'pi pi-server',
                path: '/laporan/piagam-audit-internal',
            },
            {
                label: 'Sertifikat',
                icon: 'pi pi-server',
                path: '#',
                 items: [
                    {
                        label: 'ISO-27001',
                        path: '/sertifikat/iso27001',
                    },
                ]
            },
        ]
    },
    {
        label: 'Kontak Kami',
        icon: 'pi pi-envelope',
        path: '/#contact',
        items: [
            {
                label: 'Layanan Perbankan',
                icon: 'pi pi-bolt',
                path: '/#contact',
            },
            {
                label: 'Pengaduan Nasabah',
                icon: 'pi pi-bolt',
                path: '/pengaduan-nasabah',
            },
            {
                label: 'Whistle blowing System (WBS)',
                icon: 'pi pi-server',
                path: '/wbs',
            }]
    },
    {
        label: 'Karir',
        icon: 'pi pi-home',
        path: '/karir',
    },
]);
</script>
