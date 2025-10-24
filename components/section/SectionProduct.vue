<script lang="ts" setup>

</script>

<template>
    <div class="flex bg-primary-50/5 dark:bg-primary-600 ">
        <div class="-mt-10 md:-mt-20 md:p-10 justify-center shadow-lg items-center bg-white dark:bg-primary-700 rounded-2xl mx-5 md:mx-20 animate-duration-1000 animate-ease-in-out"
            v-animateonscroll="{ enterClass: 'animate-scalein' }">
            <div class="grid grid-cols-2  p-10 w-full items-center">
                <div>
                    <span class="text-primary dark:text-white dark:text-white">PRODUK LAYANAN</span><br />
                    <span class="text-md md:text-4xl text-orange-500 font-semibold">
                        Pengalaman baru dalam mengembangkan <br />usaha anda
                    </span>
                </div>
                <div class="text-xs md:text-lg text-muted-color">
                    Kami percaya bahwa setiap usaha memiliki potensi untuk berkembang, dan kami ada untuk membantu Anda
                    mencapainya
                </div>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4  p-10 w-full">
                <div>
                    <Icon name="solar:banknote-2-line-duotone" size="3em" class="text-orange-500" />
                    <div>
                        <span class="text-xl text-primary dark:text-white"><strong>Tabungan</strong></span><br>
                        <span class="text-muted-color">
                            Buka Tabungan Sekarang, <br />Raih Manfaatnya! 💸
                        </span>
                    </div>
                </div>
                <div>
                    <Icon name="carbon:crop-growth" size="3em" class="text-orange-500" />
                    <div>
                        <span class="text-xl text-primary dark:text-white"><strong>Deposito</strong></span><br>
                        <span class="text-muted-color">
                            Dapatkan Keuntungan Lebih <br />dengan Deposito Kami! 💰
                        </span>
                    </div>
                </div>
                <div>
                    <Icon name="mdi:hand-coin-outline" size="3em" class="text-orange-500" />
                    <div>
                        <span class="text-xl text-primary dark:text-white"><strong>Kredit</strong></span><br>
                        <span class="text-muted-color">
                            Kredit Mudah dengan <br> Suku Bunga Kompetitif! 💳
                        </span>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="postcss" scoped>

</style>
