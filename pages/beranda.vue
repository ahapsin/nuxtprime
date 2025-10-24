<template>
    <NuxtLayout name="menubar">

    </NuxtLayout>
</template>
<script setup>
import Home from "./ckpn.vue";
const route = useRoute()
const selectedMenu = ref();
const selectMenu = (e) => { selectedMenu.value = e }
</script>
