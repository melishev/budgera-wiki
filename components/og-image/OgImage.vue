<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(defineProps<{ title?: string, description?: string, headline?: string }>(), {
  title: 'title',
  description: 'description',
})

const title = computed(() => (props.title || '').slice(0, 60))
</script>

<template>
  <div class="w-full h-full flex flex-col justify-center bg-white relative">
    <img src="/logo.svg" alt="budgera" class="size-20 rounded-[20px] mb-10 ml-25" />

    <div class="pl-25 pr-25">
      <p v-if="headline" class="uppercase text-2xl text-neutral-900 mb-4 font-bold">
        {{ headline }}
      </p>

      <h1 v-if="title" class="text-7xl font-bold mb-4 text-neutral-900">
        <span>{{ title }}</span>
      </h1>
    </div>
  </div>
</template>
