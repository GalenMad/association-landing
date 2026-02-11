<script setup lang="ts">
const route = useRoute()

const items = computed(() => [{
  label: 'Концепция',
  to: '/concept',
  active: route.path.startsWith('/concept')
}])
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
