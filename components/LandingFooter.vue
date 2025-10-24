<template>
    <div class="flex flex-col md:flex-row gap-10 bg-surface-200 dark:bg-primary-700 p-10 px-14 justify-between">
        <div class="flex flex-col items-start gap-x-32">
            <div class="w-[180px] py-4">
                <Logo />
            </div>
            <div class="flex flex-col bg-surface-200 dark:bg-primary-700 text-muted-color text-xs ">
                PT. Bank Perekonomian Rakyat Cahaya Fajar berizin dan diawasi oleh: <br />
                <strong>Otoritas Jasa Keuangan (OJK)</strong><br />
                <small>&copy; BPRcahayafajar {{ new Date().getFullYear() }}. All rights reserved.</small>
            </div>
        </div>

        <div class="flex flex-col gap-y-4">
          <div class="flex flex-col bg-surface-200 dark:bg-primary-700 text-muted-color text-xs ">
            <p>PT. Bank Perekonomian Rakyat Cahaya Fajar merupakan peserta penjaminan LPS.<br/>
            Maksimum nilai simpanan yang dijamin LPS per nasabah per bank adalah Rp 2 miliar<br/>
            Untuk mengetahui Tingkat Bunga Penjaminan LPS silahkan akses
              <a href="https://apps.lps.go.id/BankPesertaLPSRate" target="_blank" class="text-blue-500 underline">disini</a></p>

          </div>
            <span>folow us on</span>
            <div class="flex gap-2">
              <NuxtLink to="https://www.youtube.com/@bprcahayafajar8816">
                <Button size="small" severity="secondary" unstyled>
                    <Icon name="line-md:youtube" size="1.5em" class="text-primary" />
                </Button>
              </NuxtLink>
              <NuxtLink to="https://www.instagram.com/bprcahayafajar_/">
                <Button size="small" severity="secondary" unstyled>
                    <Icon name="line-md:instagram" size="1.3em" class="text-primary" />
                </Button>
              </NuxtLink>
              <NuxtLink to="https://www.instagram.com/bprcahayafajar_/">
                <Button size="small" severity="secondary" unstyled>
                    <Icon name="line-md:twitter-x" size="1.2em" class="text-primary" />
                </Button>
              </NuxtLink>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>

</script>

<style>

</style>
