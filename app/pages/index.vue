<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryCollection('home').first())
if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const list = [
  {
    title: 'Модель участия',
    description: `
      Описать, кто и как может входить в Ассоциацию: кооператив, физлицо-сторонник, рабочая группа, инициатор.
      Зафиксировать формат участия для каждой роли
    `,
    icon: 'lucide:pencil-ruler',
    badge: 'Роли и статусы'
  },
  {
    title: 'Независимая инфраструктура',
    description: `
      Создаём свою минимальную инфру, чтобы Ассоциация могла координироваться и поддерживать связь независимо от внешних платформ и сбоев
    `,
    icon: 'lucide:brain-circuit',
    badge: 'Техническая часть'
  },
  {
    title: 'Правила прозрачности и ответственности',
    description: `
      Зафиксировать, какие обязательства участник берёт на себя перед Ассоциацией и другими участниками
    `,
    icon: 'lucide:brain-circuit',
    badge: 'Общие обязательства'
  },
  {
    title: 'Минимальный пакет документов',
    description: `
      Подготовить минимальный комплект правил, положений, форм и порядков, который нужен для входа в Ассоциацию и работы в пилоте
    `,
    icon: 'lucide:landmark',
    badge: 'Регламенты и формы'
  }
]

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
          <h3 class="text-2xl sm:text-3xl lg:text-3xl text-pretty tracking-tight font-bold text-highlighted text-center mb-[3rem]">
            Задачи текущего этапа
          </h3>
          <div class="grid grid-cols-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:sm:grid-cols-2 gap-6">
            <UCard
              v-for="item, index in list"
              :key="index"
              variant="subtle"
            >
              <UBadge
                class="mb-[1rem]"
                color="neutral"
                variant="outline"
              >
                {{ item.badge }}
              </UBadge>
              <div class="text-xl text-pretty font-semibold text-highlighted mb-[1rem]">
                <UIcon
                  :name="item.icon"
                  class="size-5 align-middle"
                />
                {{ item.title }}
              </div>
              <div class="text-base text-pretty text-muted">
                {{ item.description }}
              </div>
            </UCard>
          </div>
        </div>

        <div class="order-1 flex flex-col items-center lg:order-2 lg:items-start mb-[3rem] lg:mb-0">
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
