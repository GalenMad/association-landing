<script setup lang="ts"></script>

<template>
  <USeparator
    icon="i-mdi-hops"
    class="h-px"
  />

  <UFooter :ui="{ top: 'border-b border-default' }">
    <template #left>
      <p class="text-sm text-muted">
        Ассоциация ПиВКО • © {{ new Date().getFullYear() }}
      </p>
    </template>
  </UFooter>
</template>
