<script setup lang="ts">
const nuxtApp = useNuxtApp()
const { activeHeadings, updateHeadings } = useScrollspy()

const items = computed(() => [{
  label: 'Концепция',
  to: '#',
  active: activeHeadings.value.includes('features') && !activeHeadings.value.includes('pricing')
}, {
  label: 'Юридические штучки',
  to: '#',
  active: activeHeadings.value.includes('pricing')
}, {
  label: 'Новости',
  to: '#',
  active: activeHeadings.value.includes('testimonials') && !activeHeadings.value.includes('pricing')
}])

nuxtApp.hooks.hookOnce('page:finish', () => {
  updateHeadings([
    document.querySelector('#features'),
    document.querySelector('#pricing'),
    document.querySelector('#testimonials')
  ].filter(Boolean) as Element[])
})
</script>

<template>
  <UHeader>
    <template #left>
      <h2 class="flex content-center">
        <span class="text-primary">П</span>и<span class="text-primary">ВКО</span>&nbsp;<span class="iconify i-lucide:beer shrink-0 size-5" />
      </h2>
    </template>

    <template #right>
      <UNavigationMenu
        :items="items"
        variant="link"
        class="hidden lg:block"
      />

      <UButton
        label="Присоединиться"
        variant="subtle"
        class="hidden lg:block"
      />

      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu
        :items="items"
        orientation="vertical"
        class="-mx-2.5"
      />
      <UButton
        class="mt-4"
        label="Присоединиться"
        variant="subtle"
        block
      />
    </template>
  </UHeader>
</template>
