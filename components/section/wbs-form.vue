<template>
    <div class="flex">
        <div class="flex w-full items-center justify-center">
            <img src="/public/wbs.jpg" />
        </div>
        <div class="w-full p-10">
            <span class="text-xl">WBS - Whistle Blower System</span>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                    <label for="username">Nama Pelapor</label>
                    <InputText id="username" v-model="formData.nama" aria-describedby="username-help"
                        placeholder="Nama Anda" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="username">Nomor Telepon</label>
                    <InputText id="username" v-model="formData.no_telp" aria-describedby="username-help"
                        placeholder="Nomor Telepon  / whatsapp yang bisa dihubungi" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="username">Tanggal Kejadian</label>
                    <DatePicker v-model="formData.tgl" placeholder="tanggal kejadian" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="username">Jenis aduan</label>
                    <Select v-model="formData.jenis" :options="jenis" optionLabel="name" placeholder="pilih jenis aduan"
                        class="w-full md:w-56" />
                </div>
                <div class="flex flex-col gap-2">
                    <label for="username">Penjelasan / Keterangan</label>
                    <Textarea v-model="formData.keterangan" rows="5" cols="30" />
                </div>
                <div class="flex flex-col gap-2 justify-start">
                    <label for="username">Bukti</label>
                    <FileUpload ref="fileupload" mode="basic" name="demo[]" url="/api/upload" accept="image/*"
                        :maxFileSize="1000000" @upload="onUpload" />
                </div>
                <div class="flex flex-col gap-2">
                    <Button>Kirim</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const formData = ref({
    nama: null,
});

const jenis = ref([
    { name: 'Permasalahan terkait produk tabungan' },
    { name: 'Permasalahan terkait produk deposito' },
    { name: 'Permasalahan terkait produk kredit' },
    { name: 'Permasalahan Lainnya' },
]);
</script>
