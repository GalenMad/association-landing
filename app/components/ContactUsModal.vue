<template>
  <UModal
    title="Написать нам"
  >
    <slot />
    <template #body>
      <div class="w-[360px] mx-auto flex gap-6 flex-col">
        <UFormField label="Представьтесь">
          <UInput
            placeholder="Имя или организация"
            class="w-full"
            color="neutral"
            variant="subtle"
            outline="primary"
          />
        </UFormField>
        <UFormField label="Ваш контакт">
          <UInput
            placeholder="Укажите контакт для обратной связи"
            class="w-full"
            color="neutral"
            variant="subtle"
            outline="primary"
          />
        </UFormField>
        <UFormField label="Ваше сообщение">
          <UTextarea
            class="w-full"
            color="neutral"
            variant="subtle"
            :rows="8"
          />
        </UFormField>
        <UButton
          class="w-[200px] mx-auto text-center justify-center"
          size="xl"
          label="Отправить"
        />
      </div>
    </template>
  </UModal>
</template>
