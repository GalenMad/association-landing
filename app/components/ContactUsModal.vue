<script setup lang="ts">
const props = defineProps<{
  email: string
}>()

const tooltipOpen = ref(false)
const copied = ref(false)

let timeoutId: ReturnType<typeof setTimeout> | undefined

async function copyEmail() {
  await navigator.clipboard.writeText(props.email)

  copied.value = true
  tooltipOpen.value = true

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    copied.value = false
  }, 1400)
}
</script>

<template>
  <UModal
    title="Написать нам"
    description="Мы постараемся ответить вам в ближайшее время"
  >
    <slot />
    <template #body>
      <div class="w-[360px] mx-auto flex gap-6 flex-col">
        <UTooltip
          v-model:open="tooltipOpen"
          :text="copied ? 'Почта скопирована' : 'Скопировать почту'"
          :delay-duration="0"
        >
          <button
            type="button"
            :class="[
              'text-xl',
              'underline',
              'underline-offset-4',
              'decoration-dotted',
              'hover:text-primary',
              'transition-colors',
              'inline',
              'mx-auto',
              'mb-[16px]'
            ]"
            @click="copyEmail"
          >
            {{ email }}
          </button>
        </UTooltip>

        <UButton
          :to="`mailto:${email}`"
          icon="i-lucide-mail"
          label="Открыть почтовый клиент"
          color="primary"
          variant="solid"
          block
        />
      </div>
    </template>
  </UModal>
</template>
