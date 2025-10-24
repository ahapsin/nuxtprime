<template>
    <div>
        <Title name="title">BPR Cahaya Fajar</Title>
        <div>
            <SectionHero src="hero1.webp"/>
            <SectionProduct />
        </div>
        <SectionAbout />
        <SectionKomisaris />
        <SectionOffice />
    </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'landing'
})
</script>
