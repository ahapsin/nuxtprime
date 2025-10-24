<template>
    <div class="max-w-5xl mx-auto p-6 bg-white rounded-lg space-y-6">
        <!-- Header -->
        <section class="text-center">
            <h1 class="text-2xl font-bold text-primary">Deposito Cahaya Fajar</h1>
            <p class="text-lg text-gray-600">PT. BPR CAHAYA FAJAR</p>
        </section>

        <!-- Informasi Umum -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Informasi Umum</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li>Nama Produk: <strong>DEPOSITO CAHAYA FAJAR</strong></li>
                <li>Mata Uang: <strong>Rupiah</strong></li>
                <li>Jenis Produk: <strong>Deposito Berjangka</strong></li>
                <li>Deskripsi: Produk simpanan berjangka sesuai dengan kesepakatan pada saat penempatan.</li>
            </ul>
        </section>

        <!-- Fitur Utama -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Fitur Utama</h2>
            <div class="grid grid-cols-2 gap-4 text-gray-700">
                <div>Deposito Minimal: <strong>Rp. 1.000.000,-</strong></div>
                <div>Suku Bunga*: <strong>4.00% s/d 6.25% per tahun</strong></div>
                <div>Pajak Bunga: <strong>20%</strong></div>
                <div>Jangka Waktu: <strong>1, 3, 6, 12, dan 18 bulan</strong></div>
                <div>Tingkat Bunga Penjaminan**: <strong>6,25%</strong></div>
            </div>
            <p class="mt-2 text-sm italic text-gray-500">* Berlaku pada tanggal dokumen ini diterbitkan</p>
            <p class="text-sm italic text-gray-500">** Tingkat bunga penjaminan LPS yang berlaku pada tanggal dokumen
                ini diterbitkan</p>
        </section>

        <!-- Biaya -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Biaya</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li>Administrasi Break: <strong>Rp. 25.000,-</strong></li>
                <li>Biaya Materai: <strong>Sesuai ketentuan</strong></li>
                <li>Penempatan dan Pencairan: <strong>Rp. 10.000,-</strong></li>
                <li>Biaya Penggantian Bilyet Hilang/Rusak: <strong>Rp. 25.000,-</strong></li>
            </ul>
        </section>

        <!-- Manfaat dan Risiko -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Manfaat dan Risiko</h2>
            <h3 class="font-medium text-gray-800">Manfaat:</h3>
            <ul class="list-disc list-inside text-gray-700 mb-4">
                <li>Suku bunga menarik dan tinggi.</li>
                <li>Mudah dalam pembukaan rekening dengan pelayanan yang cepat.</li>
                <li>Penempatan deposito dapat dilakukan dengan setor tunai, transfer antar bank lain, dan
                    pemindahbukuan.</li>
                <li>Deposito dapat diperpanjang secara otomatis melalui metode ARO (Automatic Roll Over).</li>
                <li>Dapat dijadikan sebagai jaminan kredit (back to back).</li>
                <li>Dijamin oleh Lembaga Penjamin Simpanan (LPS).</li>
            </ul>
            <h3 class="font-medium text-gray-800">Risiko:</h3>
            <ul class="list-disc list-inside text-gray-700">
                <li>Risiko perubahan suku bunga deposito.</li>
                <li>Tidak dijamin oleh LPS apabila:</li>
                <ul class="ml-5 list-disc">
                    <li>Suku bunga melebihi tingkat bunga penjamin LPS.</li>
                    <li>Nominal simpanan melebihi nominal penjaminan LPS.</li>
                </ul>
            </ul>
        </section>

        <!-- Persyaratan dan Kontak -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Persyaratan dan Tata Cara</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li>Membawa kartu identitas (KTP/SIM/Passport) beserta dokumen lainnya sesuai ketentuan produk.</li>
                <li>Mengisi formulir pembukaan rekening dan dokumen lainnya yang dibutuhkan Bank.</li>
                <li>Setelah disetujui dan diproses, PT. BPR Cahaya Fajar akan menerbitkan Bilyet Deposito.</li>
            </ul>

            <h3 class="font-medium text-gray-800 mt-4">Informasi & Kontak:</h3>
            <ul class="text-gray-700">
                <li>Telepon: (0231) 248049 / 248060 / 248222</li>
                <li>Email: <a href="mailto:bprcahayafajar@yahoo.com"
                        class="text-primary underline">bprcahayafajar@yahoo.com</a></li>
                <li>Website: <a href="http://www.bprcahayafajar.co.id" target="_blank"
                        class="text-primary underline">www.bprcahayafajar.co.id</a></li>
            </ul>
        </section>
    </div>
</template>

<script setup>
// No dynamic logic needed
</script>

<style scoped>
/* Tambahkan kelas 'text-primary' di Tailwind config jika belum ada */
</style>
