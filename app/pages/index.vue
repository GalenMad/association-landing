<script setup lang="ts">
import type { BlogPostProps } from '@nuxt/ui'

const { data: page } = await useAsyncData('index', () => queryCollection('home').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const posts = ref<BlogPostProps[]>([
  {
    title: 'Модель участия и минимальные требования',
    description: `Зафиксировать типы участия: кооператив, рабочий участник, сторонник, партнёр.
    Отдельно описать минимальные требования к прозрачности,
    ответственности, базовой проверке и входу в сеть.`,
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    badge: {
      label: 'Работа в процессе',
      color: 'primary',
      variant: 'solid'
    }
  },
  {
    title: 'Система метрик и публичной отчётности',
    description: `Зафиксировать регулярные метрики: число активных кооперативов,
    объём сделок и совместных проектов,
    качество разбора споров, базовую устойчивость участников сети.`,
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    badge: {
      label: 'В очереди'
    }
  },
  {
    title: 'Минимальный пакет документов',
    description: `Подготовить черновики устава, правил участия, базового соглашения сети, порядка принятия решений,
    регламента рабочих групп и минимального набора типовых документов для пилота.`,
    image: 'https://nuxt.com/assets/blog/nuxt-icon/cover.png',
    badge: {
      label: 'В очереди'
    }
  }
])

useSeoMeta({
  title: page.value.seo?.title || page.value.title,
  ogTitle: page.value.seo?.title || page.value.title,
  description: page.value.seo?.description || page.value.description,
  ogDescription: page.value.seo?.description || page.value.description
})
</script>

<template>
  <div
    v-if="page"
    class="relative"
  >
    <div class="hidden lg:block">
      <UColorModeImage
        light="/images/light/line-1.svg"
        dark="/images/dark/line-1.svg"
        class="absolute pointer-events-none pb-10 left-0 top-0 object-cover h-[650px]"
      />
    </div>

    <UPageHero
      :description="page.hero.description"
      :headline="page.hero.headline"
      :links="page.hero.links"
      :ui="{
        container: 'md:pt-18 lg:pt-20',
        title: 'max-w-1xl mx-auto hero-title'
      }"
    >
      <template #top>
        <HeroBackground />
      </template>

      <template #title>
        <MDC
          :value="page.hero.title"
          unwrap="p"
        />
      </template>
    </UPageHero>

    <USeparator
      :ui="{
        border: 'border-primary/30',
        icon: 'size-8'
      }"
      class="lg:hidden"
      icon="line-md:chevron-small-triple-down"
    />

    <UPageSection
      :description="page.section.description"
      :features="page.section.features"
      orientation="horizontal"
      :ui="{
        container: 'lg:px-8 2xl:px-20 mx-0 max-w-none md:mr-10',
        features: 'gap-0'
      }"
      reverse
    >
      <template #title>
        <MDC
          :value="page.section.title"
          class="sm:*:leading-11"
        />
      </template>
      <div class="hidden lg:block">
        <UColorModeImage
          v-if="page.section.image"
          :light="page.section.image?.light"
          :dark="page.section.image?.dark"
          :alt="page.section.title"
          class="size-full"
        />
      </div>
    </UPageSection>

    <USeparator
      :ui="{ border: 'border-primary/30' }"
      icon="i-lucide-hop"
    />

    <UPageSection
      id="steps"
      :description="page.steps.description"
      class="relative overflow-hidden"
    >
      <template #title>
        <MDC :value="page.steps.title" />
      </template>

      <template #features>
        <UPageCard
          v-for="(step, index) in page.steps.items"
          :key="index"
          class="group"
          :ui="{ container: 'p-4 sm:p-4', title: 'flex items-center gap-1' }"
        >
          <UColorModeImage
            v-if="step.image"
            :light="step.image?.light"
            :dark="step.image?.dark"
            :alt="step.title"
            class="size-full"
          />

          <div class="flex flex-col gap-2 mt-auto">
            <span class="text-lg font-semibold">
              {{ step.title }}
            </span>
            <span class="text-sm text-muted">
              {{ step.description }}
            </span>
          </div>
        </UPageCard>
      </template>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="roadmap"
      icon="i-lucide-flag"
      :ui="{
        leadingIcon: 'mr-[12px] mt-[8px]'
      }"
      title="Маршрут развития"
      description="Ключевые этапы запуска и развития ассоциации на ближайший период"
      class="relative overflow-hidden"
    >
      <template #headline>
        <UColorModeImage
          light="/images/light/line-3.svg"
          dark="/images/dark/line-3.svg"
          class="absolute -top-10 sm:top-0 right-1/2 h-24"
        />
      </template>
      <div class="absolute rounded-full -left-10 top-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />
      <div class="absolute rounded-full -right-10 -bottom-10 size-[300px] z-10 bg-primary opacity-30 blur-[200px]" />

      <div class="grid grid-cols-1 lg:gap-12 lg:grid-cols-2 w-full">
        <div
          class="order-2 lg:order-1"
        >
          <h3 class="text-lg font-semibold tracking-tight text-highlighted sm:text-xl mb-[3rem]">
            Задачи текущего этапа
          </h3>
          <UBlogPosts
            orientation="vertical"
            :posts="posts"
          />
        </div>

        <div class="order-1 flex flex-col items-center lg:order-2 lg:items-start">
          <OurTimeline />
        </div>
      </div>
    </UPageSection>

    <USeparator :ui="{ border: 'border-primary/30' }" />

    <UPageSection
      id="pricing"
      class="overflow-hidden"
      :title="page.pricing.title"
      :description="page.pricing.description"
      :ui="{ title: 'text-left @container relative', description: 'text-left' }"
    >
      <template #title>
        <MDC :value="page.pricing.title" />

        <div class="hidden @min-[1120px]:block">
          <UColorModeImage
            light="/images/light/line-4.svg"
            dark="/images/dark/line-4.svg"
            class="absolute top-0 right-0 size-full transform translate-x-[60%]"
          />
        </div>
      </template>

      <UPricingPlans scale>
        <UPricingPlan
          v-for="(plan, index) in page.pricing.plans"
          :key="index"
          :title="plan.title"
          :description="plan.description"
          :price="plan.price"
          :billing-period="plan.billing_period"
          :billing-cycle="plan.billing_cycle"
          :highlight="plan.highlight"
          :scale="plan.highlight"
          variant="soft"
          :features="plan.features"
          :button="plan.button"
        />
      </UPricingPlans>
      <UCard variant="subtle">
        <template #header>
          <div class="text-highlighted text-2xl sm:text-3xl text-pretty font-semibold mb-2">
            Для сочувствующих
          </div>
          <div class="text-muted text-base text-pretty mt-2">
            Для тех, кто разделяет идею ассоциации и хочет помочь её запуску деньгами. <br>
            Такая поддержка не менее важна для нас, она ускоряет развитие общей инфраструктуры
          </div>
        </template>

        <template #footer>
          <Placeholder class="h-8" />
        </template>
      </UCard>
    </UPageSection>
  </div>
</template>

<style>
  @media(max-width: 450px) {
    .hero-title {
      font-size: 2.4rem;
    }
  }
</style>
