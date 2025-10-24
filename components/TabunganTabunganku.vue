<template>
    <div class="max-w-5xl mx-auto p-6 bg-white rounded-lg space-y-6">
        <!-- Header -->
        <section class="text-center">
            <h1 class="text-2xl font-bold text-primary">Produk TabunganKu</h1>
            <p class="text-lg text-gray-600">PT. BPR CAHAYA FAJAR</p>
        </section>

        <!-- Informasi Umum -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Informasi Umum</h2>
            <ul class="list-disc list-inside text-gray-700 space-y-1">
                <li>Nama Produk: <strong>TabunganKu</strong></li>
                <li>Mata Uang: <strong>Rupiah</strong></li>
                <li>Jenis Produk: <strong>Tabungan</strong></li>
                <li>Deskripsi: Produk simpanan perorangan yang penyetorannya dapat dilakukan setiap saat dan frekuensi
                    penarikan tidak dibatasi sepanjang saldo mencukupi.</li>
            </ul>
        </section>

        <!-- Fitur Utama -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Fitur Utama</h2>
            <div class="grid grid-cols-2 gap-4 text-gray-700">
                <div>Setoran Awal: <strong>Rp. 10.000,-</strong></div>
                <div>Saldo Minimal: <strong>Rp. 10.000,-</strong></div>
                <div>Setoran Selanjutnya: <strong>Tidak ada batasan</strong></div>
                <div>Minimal Penarikan Tunai: <strong>Rp. 50.000,-</strong></div>
            </div>

            <!-- Tabel Bunga -->
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
                            <td class="border px-2 py-1">≤ Rp. 100.000.000,-</td>
                            <td class="border px-2 py-1">0.5%</td>
                        </tr>
                        <tr>
                            <td class="border px-2 py-1">&gt; Rp. 100.000.000,- s/d Rp. 2.000.000.000,-</td>
                            <td class="border px-2 py-1">1%</td>
                        </tr>
                        <tr>
                            <td class="border px-2 py-1">&gt; Rp. 2.000.000.000,- s/d Rp. 4.000.000.000,-</td>
                            <td class="border px-2 py-1">2%</td>
                        </tr>
                        <tr>
                            <td class="border px-2 py-1">&gt; Rp. 4.000.000.000,- s/d Rp. 5.000.000.000,-</td>
                            <td class="border px-2 py-1">3%</td>
                        </tr>
                        <tr>
                            <td class="border px-2 py-1">&gt; Rp. 5.000.000.000,-</td>
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
                <li>Biaya Administrasi: Tidak ada</li>
                <li>Biaya Penutupan Rekening: Rp. 5.000,-</li>
                <li>Biaya Administrasi Rekening Pasif: Rp. 1.000,- / bulan</li>
            </ul>
        </section>

        <!-- Manfaat dan Risiko -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Manfaat dan Risiko</h2>
            <h3 class="font-medium text-gray-800">Manfaat:</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
                <li>Suku bunga menarik dan tinggi. Semakin besar saldo tabungan Anda, semakin besar bunganya.</li>
                <li>Mudah dalam pembukaan rekening dengan pelayanan yang cepat.</li>
                <li>Penyetoran tabungan dapat dilakukan dengan setoran tunai, transfer dari bank lain, dan
                    pemindahbukuan.</li>
                <li>Dijamin oleh Lembaga Penjamin Simpanan (LPS).</li>
            </ol>
            <h3 class="font-medium text-gray-800 mt-6">Risiko:</h3>
            <ul class="list-disc list-inside text-gray-700">
                <ol class="list-decimal list-inside space-y-2 text-gray-700">
                    <li>Risiko perubahan suku bunga tabungan.</li>

                    <li>
                        Tidak dijaminnya tabungan Anda oleh LPS apabila:
                        <ul class="list-disc list-inside ml-5 mt-1 space-y-1">
                            <li>Suku bunga tabungan Anda melebihi tingkat bunga penjamin LPS.</li>
                            <li>Nominal simpanan Anda melebihi nominal penjaminan LPS.</li>
                        </ul>
                    </li>

                    <li>Penutupan rekening pasif oleh bank apabila 6 bulan berturut-turut saldo rekening di bawah
                        ketentuan.</li>
                </ol>

            </ul>
        </section>

        <!-- Syarat & Kontak -->
        <section>
            <h2 class="text-xl font-semibold text-primary mb-2">Persyaratan dan Tata Cara</h2>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
                <li>Membawa kartu identitas (KTP/SIM) beserta dokumen lainnya sesuai ketentuan produk.</li>
                <li>Mengisi formulir pembukaan rekening dan dokumen lainnya yang dibutuhkan Bank.</li>
                <li>Minimal setoran awal sesuai ketentuan.</li>
            </ol>


            <h3 class="font-medium text-gray-800 mt-4">Informasi & Kontak:</h3>
            <ul class="text-gray-700">
                <li>Telepon: (0231) 248400 / 248600 / 248222</li>
                <li>Email: <a href="mailto:bprcahayafajar@yahoo.com"
                        class="text-primary underline">bprcahayafajar@yahoo.com</a></li>
                <li>Website: <a href="http://www.bprcahayafajar.co.id" target="_blank"
                        class="text-primary underline">www.bprcahayafajar.co.id</a></li>
            </ul>
        </section>
    </div>
</template>

<script setup>
// Static component — no JS logic needed
</script>

<style scoped>
/* Optional: Add .text-primary in Tailwind config if needed */
</style>
