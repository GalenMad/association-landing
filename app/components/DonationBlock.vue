<script setup lang="ts">
const copiedKey = ref<string | null>(null)

interface DonationLink {
  title: string
  description: string
  href: string
  icon?: string
  primaryColor?: string
}

interface CryptoWallet {
  key: string
  title: string
  address: string
  icon?: string
}

defineProps<{
  donationLinks: DonationLink[]
  cryptoWallets: CryptoWallet[]
}>()

async function copyAddress(key: string, address: string) {
  await navigator.clipboard.writeText(address)

  copiedKey.value = key

  setTimeout(() => {
    if (copiedKey.value === key) {
      copiedKey.value = null
    }
  }, 1400)
}
</script>

<template>
  <article class="grid gap-3 sm:grid-cols-2 mb-4">
    <a
      v-for="link in donationLinks"
      :key="link.title"
      :href="link.href"
      target="_blank"
      rel="noopener noreferrer"
      class="group rounded-xl border border-default p-4 transition hover:border-primary hover:bg-elevated"
      :class="link.primaryColor ? `bg-${link.primaryColor}-300 text-black hover:bg-${link.primaryColor}-300/90` : 'bg-muted'"
    >
      <div class="flex items-center gap-3">
        <UIcon
          :name="link.icon ?? 'lucide:credit-card'"
          :class="link.primaryColor ? '' : 'text-primary'"
          class="size-10 shrink-0"
        />

        <div class="min-w-0">
          <div class="font-medium">
            {{ link.title }}
          </div>

          <div
            class="text-sm"
            :class="link.primaryColor ? 'text-black/80' : 'text-muted'"
          >
            {{ link.description }}
          </div>
        </div>
      </div>
    </a>
  </article>

  <article class="space-y-3">
    <h3 class="text-sm font-medium text-muted">
      Криптокошельки
    </h3>

    <div class="space-y-2">
      <div
        v-for="wallet in cryptoWallets"
        :key="wallet.key"
        class="flex items-center justify-between gap-3 rounded-xl border border-default bg-muted px-4 py-3"
      >
        <div class="flex min-w-0 items-center gap-3">
          <div class="flex size-9 shrink-0 items-center justify-center rounded-full bg-elevated">
            <UIcon
              :name="wallet.icon ?? 'material-symbols:wallet'"
              class="size-8"
            />
          </div>

          <div class="min-w-0">
            <div class="text-sm font-medium">
              {{ wallet.title }}
            </div>

            <code class="block truncate text-xs text-muted">
              {{ wallet.address }}
            </code>
          </div>
        </div>

        <UTooltip
          :text="copiedKey === wallet.key ? 'Скопировано' : 'Скопировать'"
          :delay-duration="0"
        >
          <UButton
            icon="i-lucide-copy"
            color="neutral"
            variant="ghost"
            size="sm"
            :aria-label="`Скопировать адрес ${wallet.title}`"
            @click="copyAddress(wallet.key, wallet.address)"
          />
        </UTooltip>
      </div>
    </div>
  </article>
</template>
