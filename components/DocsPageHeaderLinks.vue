<script setup lang="ts">
defineOgImageComponent('OgImage')
  
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('docs').path(route.path).first()
})
</script>

<template>
  <div class="flex w-full items-center gap-5">
    <UUser
      v-for="author in page.meta.authors"
      :key="author.name"
      :name="author.name"
      :avatar="{
        src: author.avatar.src,
        icon: 'i-lucide-user',
      }"
      :to="author?.to"
      target="_blank"
    />
  </div>
</template>
