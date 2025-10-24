<template>
    <div class="max-w-5xl mx-auto p-6 bg-white rounded-lg  space-y-6">
        <!-- Header -->
        <section class="text-center">
            <h1 class="text-2xl font-bold text-primary">Produk Tabungan Cahaya Fajar</h1>
            <p class="text-lg text-gray-600">PT. BPR CAHAYA FAJAR</p>
        </section>

        <!-- Informasi Umum -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Informasi Umum</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li>Jenis Produk: Tabungan</li>
                <li>Produk simpanan perorangan/badan hukum yang penyetorannya dapat dilakukan setiap saat
                    dan frekuensi penarikan tidak dibatasi sepanjang saldo mencukup</li>
            </ul>
        </section>

        <!-- Fitur Utama -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Fitur Utama</h2>
            <div class="grid grid-cols-1 gap-4 text-gray-700">
                <div>Setoran Awal: <strong>Rp. 10.000,-</strong>(Perorangan) dan RP. 25.000.- (Badan Usaha)</div>
                <div>Saldo Minimal: <strong>Rp. 10.000,-</strong></div>
                <div>Minimal setoran tunai elanjutnya: <strong>Rp. 10.000,-</strong></div>
                <div>Minimal Penarikan Tunai: <strong>Rp. 50.000,-</strong></div>
            </div>
            <div class="mt-4">
                <h3 class="font-medium text-gray-800">Bunga Tabungan:</h3>
                <table class="w-full mt-2 table-auto border border-gray-300 text-sm">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="border px-2 py-1">Nominal</th>
                            <th class="border px-2 py-1">Suku Bunga p.a</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border px-2 py-1">≤ Rp. 1.000.000,-</td>
                            <td class="border px-2 py-1">0.5%</td>
                        </tr>
                        <tr>
                            <td class="border px-2 py-1">&gt; Rp. 1.000.000,- s/d Rp. 1.00.000.000,-</td>
                            <td class="border px-2 py-1">1%</td>
                        </tr>
                        <tr>
                            <td class="border px-2 py-1">&gt; Rp. 100.000.000,- s/d Rp. 1.000.000.000,-</td>
                            <td class="border px-2 py-1">2%</td>
                        </tr>
                        <tr>
                            <td class="border px-2 py-1">&gt; Rp. 1.000.000.000,- s/d Rp. 2.500.000.000,-</td>
                            <td class="border px-2 py-1">3%</td>
                        </tr>
                        <tr>
                            <td class="border px-2 py-1">&gt; Rp. 2.500.000.000,-</td>
                            <td class="border px-2 py-1">4%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="mt-2 text-sm text-gray-600 italic">Tingkat Bunga Penjaminan LPS: <strong>6,25%</strong></p>
        </section>

        <!-- Biaya -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Biaya</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li>Biaya Administrasi: Rp.3.000,-</li>
                <li>Biaya Penutupan Rekening: Rp. 10.000,-</li>
                <li>Biaya Penggantian Buku Hilang/Rusak: Rp. 25.000,-</li>
            </ul>
        </section>

        <!-- Manfaat dan Risiko -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Manfaat</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-1">

                <li>Suku bunga menarik dan tinggi. Semakin besar saldo tabungan Anda, semakin besar bunganya.</li>
                <li>Mudah dalam pembukaan rekening dengan pelayanan yang cepat.</li>
                <li>Penyetoran tabungan dapat dilakukan dengan setoran tunai, transfer dari bank lain, dan
                    pemindahbukuan.</li>
                <li>Dijamin oleh Lembaga Penjamin Simpanan (LPS).</li>


            </ul>
        </section>
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Risiko</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-1">

                <li>Risiko perubahan suku bunga tabungan.</li>
                <li>Tidak dijaminnya tabungan Anda oleh LPS apabila:
                    <ul class="list-decimal ps-8">
                        <li>Suku bunga tabungan Anda melebihi tingkat bunga penjamin LPS.</li>
                        <li>Nominal simpanan Anda melebihi nominal penjaminan LPS.</li>
                    </ul>
                </li>
                <li>Penutupan rekening pasif oleh bank apabila 6 bulan berturut-turut saldo rekening di bawah
                    ketentuan.</li>

            </ul>
        </section>

        <!-- Syarat & Kontak -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Persyaratan dan Tata Cara</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li>Membawa kartu identitas (KTP/SIM/Paspor) beserta dokumen lainnya sesuai ketentuan produk.</li>
                <li>Mengisi formulir pembukaan rekening dan dokumen lainnya yang dibutuhkan Bank.</li>
                <li>Minimal setoran awal sesuai ketentuan.</li>
            </ul>

            <h3 class="font-medium text-gray-800 mt-4">Informasi Lebih Lanjut:</h3>
            <ul class="text-gray-700">
                <li>Telp: (0231) 248400 / 248600 / 248222</li>
                <li>Email: <a href="mailto:bprcahayafajar@yahoo.co.id"
                        class="text-primary underline">bprcahayafajar@yahoo.co.id</a></li>
                <li>Website: <a href="http://www.bprcahayafajar.co.id" target="_blank"
                        class="text-primary underline">www.bprcahayafajar.co.id</a></li>
            </ul>
        </section>
    </div>
</template>

<script setup>
// No logic needed for static info
</script>

<style scoped>
/* Optional: custom styles if needed */
</style>
