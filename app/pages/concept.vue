<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui'

const { data: concept } = await useAsyncData('concept', () =>
  queryCollection('concept').path('/concept').first()
)

const { data: page } = await useAsyncData('index', () => queryCollection('home').first())

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

useSeoMeta({
  title: 'Концепция ассоциации',
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description
})

const items = computed(() => [
  {
    label: 'Стать участником',
    to: '/#participation',
    icon: 'i-lucide-rocket',
    trailing: true
  },
  {
    label: 'Посмотреть карту развития',
    to: '/#roadmap',
    icon: 'i-lucide-flag',
    trailing: true
  }
] satisfies ButtonProps[])

const contactUsButton = {
  label: 'Написать нам',
  icon: 'i-lucide-mail',
  trailing: true,
  color: 'neutral',
  variant: 'subtle'
} satisfies ButtonProps
</script>

<template>
  <div
    v-if="page"
  >
    <UPageSection
      description="Правила. Сервисы. Взаимопомощь"
      icon="i-lucide-hop"
      :ui="{
        container: 'lg:px-0 2xl:px-20 mx-0 max-w-none md:mr-10',
        features: 'gap-0'
      }"
    >
      <template #title>
        <MDC
          value="Концепция ассоциации кооперативов ПиВКО"
          class="sm:*:leading-11"
        />
      </template>
    </UPageSection>
    <UPageBody
      class="lg:px-0 px-8 mx-auto max-w-[960px]"
    >
      <ContentRenderer
        v-if="concept"
        :value="concept"
      />
    </UPageBody>
    <UPageCTA
      :links="items"
      variant="naked"
      class="overflow-hidden @container"
    >
      <template #title>
        <MDC value="Готовы поверить в кооперацию?" />

        <div class="@max-[1280px]:hidden">
          <UColorModeImage
            light="/images/light/line-6.svg"
            dark="/images/dark/line-6.svg"
            class="absolute left-10 -top-10 sm:top-0 h-full"
          />
          <UColorModeImage
            light="/images/light/line-7.svg"
            dark="/images/dark/line-7.svg"
            class="absolute right-0 bottom-0 h-full"
          />
        </div>
      </template>
      <template #links>
        <UButton
          v-for="item, index in items"
          :key="index"
          v-bind="item"
        />
        <ContactUsModal>
          <UButton
            v-bind="contactUsButton"
            @click.prevent
          />
        </ContactUsModal>
      </template>

      <LazyStarsBg />
    </UPageCTA>
  </div>
</template>
