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
      <NuxtLink to="/">
        <UColorModeImage
          light="/logos/logo-v1-full_light.svg"
          dark="/logos/logo-v1-full_dark.svg"
          class="h-[52px]"
        />
      </NuxtLink>
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
        to="/#participation"
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
