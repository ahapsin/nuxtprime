<script lang="ts" setup>
const data = [{
    id: '1000',
    code: 'xxxxxxxxxx',
    name: 'xxxxxxxxx',
    description: 'Product Description',
    image: 'bamboo-watch.jpg',
    price: 65,
    category: 'xxxxxxxxxxxx',
    quantity: 99,
    inventoryStatus: 'INSTOCK',
}];
</script>

<template>
    <Title name="title">CKPN BPR Cahaya Fajar</Title>

    <div class="center p-0 ">
        <LandingHeader :headLess="false" class="sticky top-0 bg-primary " />
        <Tabs value="0">
            <TabList>
                <Tab value="0">CKPN (Migration)</Tab>
                <Tab value="1">PD Migration</Tab>
                <Tab value="2">LGD Expected Recoveries</Tab>
                <Tab value="3">LGD Collateral Shortfall</Tab>
            </TabList>
            <TabPanels class="!pb-20 ">
                <TabPanel value="0">
                    <div>
                        <div class="grid gap-2">
                            <Panel :toggleable="true" size="small" class="" header="Kelompok Kredit A">
                                <DataTable showGridlines :value="data" size="small">
                                    <Column field="code" header="Bucket
" sortable></Column>
                                    <Column field="name" header="Hari Tunggakan
" sortable style="width: 25%"></Column>
                                    <Column field="category" header=" Baki Debet posisi … 2024
                                        (EAD)" sortable style=" width: 25%"></Column>
                                    <Column field="quantity" header="PD
" sortable></Column>
                                    <Column field="quantity" header="LGD" sortable></Column>
                                    <Column field="quantity" header="Penurunan Nilai
" sortable></Column>
                                    <template #footer> Jumlah cadangan yang harus dibentuk/jumlah penurunan nilai
                                        =</template>
                                </DataTable>
                            </Panel>
                            <Panel :toggleable="true" size="small" class="" header="Kelompok Kredit B">
                                <DataTable showGridlines :value="data" size="small">
                                    <Column field="code" header="Bucket
" sortable></Column>
                                    <Column field="name" header="Hari Tunggakan
" sortable style="width: 25%"></Column>
                                    <Column field="category" header=" Baki Debet posisi … 2024
                                        (EAD)" sortable style=" width: 25%"></Column>
                                    <Column field="quantity" header="PD
" sortable></Column>
                                    <Column field="quantity" header="LGD" sortable></Column>
                                    <Column field="quantity" header="Penurunan Nilai
" sortable></Column>
                                    <template #footer> Jumlah cadangan yang harus dibentuk/jumlah penurunan nilai
                                        =</template>
                                </DataTable>
                            </Panel>
                            <Panel :toggleable="true" size="small" class="" header="Kelompok Kredit xxxx">
                                <DataTable showGridlines :value="data" size="small">
                                    <Column field="code" header="Bucket
" sortable></Column>
                                    <Column field="name" header="Hari Tunggakan
" sortable style="width: 25%"></Column>
                                    <Column field="category" header=" Baki Debet posisi … 2024
                                        (EAD)" sortable style=" width: 25%"></Column>
                                    <Column field="quantity" header="PD
" sortable></Column>
                                    <Column field="quantity" header="LGD" sortable></Column>
                                    <Column field="quantity" header="Penurunan Nilai
" sortable></Column>
                                    <template #footer> Jumlah cadangan yang harus dibentuk/jumlah penurunan nilai
                                        =</template>
                                </DataTable>
                            </Panel>

                            <Panel :toggleable="true" size="small" header="PERHITUNGAN PENURUNAN NILAI INDIVIDUAL">
                                <DataTable showGridlines :value="data" size="small">
                                    <Column field="code" header="Individual" sortable style="width: 25%"></Column>
                                    <Column field="name" header="Nilai Tercatat" sortable style="width: 25%"></Column>
                                    <Column field="category" header="PV dari arus kas" sortable style="width: 25%">
                                    </Column>
                                    <Column field="quantity" header="Penurunan Nilai" sortable style="width: 25%">
                                    </Column>
                                </DataTable>
                            </Panel>
                            <div class="bg-white rounded">
                                <DataTable :value="data" size="small" showGridlines class="bg-white rounded">
                                    <Column field="code" header="Kategori" sortable style="width: 25%"></Column>
                                    <Column field="name" header="Penurunan Nilai" sortable style="width: 25%"></Column>
                                </DataTable>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="1">
                    <div>
                        <div class="flex flex-col w-full gap-2">
                            <div class="py-4 text-xl text-orange-500">Posisi 31 Maret 2024</div>
                            <DataTable :value="data" size="small" showGridlines>
                                <Column field="code" header="Kualitas" sortable style="width: 25%">
                                </Column>
                                <Column field="name" header="Saldo Awal" sortable style="width: 50%"></Column>
                                <Column field="category" header="Kol 1" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 2" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 3" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 4" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 5" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Hapus Buku" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Pembayaran" sortable style="width: 25%">
                                </Column>

                                <Column field="name" header="TOTAL" sortable style="width: 25%">
                                </Column>

                                <template #footer>
                                    Jumlah cadangan yang harus dibentuk/jumlah penurunan nilai =
                                </template>
                            </DataTable>
                            <div class="py-4 text-xl text-orange-500">Posisi 30 April 2024</div>
                            <DataTable :value="data" size="small" showGridlines>
                                <Column field="code" header="Kualitas" sortable style="width: 25%">
                                </Column>
                                <Column field="name" header="Saldo Awal" sortable style="width: 50%"></Column>
                                <Column field="category" header="Kol 1" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 2" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 3" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 4" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 5" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Hapus Buku" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Pembayaran" sortable style="width: 25%">
                                </Column>

                                <Column field="name" header="TOTAL" sortable style="width: 25%">
                                </Column>

                                <template #footer>
                                    Jumlah cadangan yang harus dibentuk/jumlah penurunan nilai =
                                </template>
                            </DataTable>
                            <div class="py-4 text-xl text-orange-500">Posisi 31 Mei 2024</div>
                            <DataTable :value="data" size="small" showGridlines>
                                <Column field="code" header="Kualitas" sortable style="width: 25%">
                                </Column>
                                <Column field="name" header="Saldo Awal" sortable style="width: 50%"></Column>
                                <Column field="category" header="Kol 1" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 2" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 3" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 4" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Kol 5" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Hapus Buku" sortable style="width: 25%">
                                </Column>
                                <Column field="category" header="Pembayaran" sortable style="width: 25%">
                                </Column>

                                <Column field="name" header="TOTAL" sortable style="width: 25%">
                                </Column>

                                <template #footer>
                                    Jumlah cadangan yang harus dibentuk/jumlah penurunan nilai =
                                </template>
                            </DataTable>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="2">
                    <div>
                        <div class="flex flex-col w-full gap-2">
                            <Panel header="Catatan" class="!bg-orange-500">
                                <p class="m-0">
                                    DATA YANG DIGUNAKAN ADALAH DATA KREDIT MACET YANG TELAH MEMENUHI KRITERIA DEFAULT
                                    ATAU KREDIT HAPUS BUKU DENGAN PEMBAYARAN DARI CASH ATAU
                                </p>
                                <p class="m-0 ">
                                    Jika debitur telah diperhitungkan sebagai debitur "Kredit Macet Default" maka tidak
                                    lagi diperhitungkan sebagai Kredit Hapus Buku
                                </p>
                            </Panel>
                            <Panel size="small" class=" w-full" :toggleable="true"
                                header="Tahun Kredit Macet default atau Kredit Hapus Buku 2019">
                                <DataTable :value="data" size="small">
                                    <Column field="code" header="Nama Nasabah" sortable style="width: 25%"></Column>
                                    <Column field="name" header="Tahun Kredit Macet default atau Kredit Hapus Buku
" sortable style="width: 25%"></Column>
                                    <Column field="category" header="Balance Kredit Macet default atau Kredit Hapus Buku
" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 1" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 2" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 3" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 4" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 5" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 6" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Suku Bunga Efektif" sortable style="width: 25%">
                                    </Column>
                                    <Column field="quantity" header="NPV atas recovery" sortable style="width: 25%">
                                    </Column>
                                    <Column field="quantity" header="Jumlah Recovery" sortable style="width: 25%">
                                    </Column>
                                    <Column field="quantity" header="Recovery Rate" sortable style="width: 25%">
                                    </Column>
                                </DataTable>
                            </Panel>
                            <Panel size="small" class=" w-full" :toggleable="true"
                                header="Tahun Kredit Macet default atau Kredit Hapus Buku 2020">
                                <DataTable :value="data" size="small">
                                    <Column field="code" header="Nama Nasabah" sortable style="width: 25%"></Column>
                                    <Column field="name" header="Tahun Kredit Macet default atau Kredit Hapus Buku
" sortable style="width: 25%"></Column>
                                    <Column field="category" header="Balance Kredit Macet default atau Kredit Hapus Buku
" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 1" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 2" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 3" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 4" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 5" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Year 6" sortable style="width: 25%"></Column>
                                    <Column field="quantity" header="Suku Bunga Efektif" sortable style="width: 25%">
                                    </Column>
                                    <Column field="quantity" header="NPV atas recovery" sortable style="width: 25%">
                                    </Column>
                                    <Column field="quantity" header="Jumlah Recovery" sortable style="width: 25%">
                                    </Column>
                                    <Column field="quantity" header="Recovery Rate" sortable style="width: 25%">
                                    </Column>
                                </DataTable>
                            </Panel>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value="3">
                    <div>
                        <div class="flex flex-col w-full gap-2">
                            <Panel size="small" :toggleable="true"
                                header="Tahun Kredit Macet default atau Kredit Hapus Buku 2019">
                                <div class="flex overflow-auto">
                                    <DataTable :value="data" size="small">

                                        <Column field="code" header="Nomor Rekening kredit">
                                        </Column>
                                        <Column field="name" header="Baki debet/ outstanding kredit yg belum lunas
                                    " sortable></Column>
                                        <Column field="category" header="Nilai agunan yang dijaminkan
                                    " sortable></Column>
                                        <Column field="quantity" header="Tahun agunan diserahkan kpd bank/tahun hapus buku
                                    " sortable></Column>
                                        <Column field="quantity" header="Tahun eksekusi
                                    " sortable></Column>
                                        <Column field="quantity" header="Suku bunga efektif pada saat dihapus buku
                                    " sortable></Column>
                                        <Column field="quantity" header="Nilai agunan hasil eksekusi setelah dikurangi biaya-biaya
                                     dihapus buku
                                    " sortable></Column>
                                        <Column field="quantity" header="NPV Nilai agunan hasil eksekusi pada kolom H

                                    " sortable></Column>
                                        <Column field="quantity" header="shortfall (kerugian)


                                    " sortable></Column>
                                        <template #footer> In total there are
                                            products. </template>
                                    </DataTable>
                                </div>
                            </Panel>

                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>


    </div>
</template>
