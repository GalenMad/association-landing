<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('home').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const policyLink = computed(() => page.value?.contactData.policyLink)
</script>

<template>
  <USeparator
    icon="i-lucide-hop"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #left>
      <p class="text-sm text-muted">
        Ассоциация ПиВКО • © {{ new Date().getFullYear() }} • <a
          :href="policyLink"
          target="_blank"
          rel="noopener noreferrer"
        >Политика конфиденциальности</a>
      </p>
    </template>
  </UFooter>
</template>
