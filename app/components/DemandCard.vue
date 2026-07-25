<template>
  <v-card
    elevation="6"
    rounded="xl"
    :class="['h-100 card-hover d-flex flex-column justify-space-between pa-1', `border-${cardColor}`]"
  >
    <v-card-text>
      <!-- Cabeçalho com Chip, Título, Data e Progresso Circular -->
      <div class="d-flex align-center justify-space-between mb-4">
        <div>
          <v-chip :color="cardColor" size="x-small" variant="tonal" class="font-weight-bold mb-1">
            {{ demandData.category || 'DISPUTA' }}
          </v-chip>
          <h3 class="text-h6 font-weight-black mb-0">{{ demandData.title }}</h3>
          <span class="text-caption text-medium-emphasis">
            Data da Disputa: {{ demandData.disputeDate }}
          </span>
        </div>

        <v-progress-circular
          :model-value="progressPercentage"
          :size="58"
          :width="6"
          :color="cardColor"
          class="font-weight-bold text-caption"
        >
          {{ progressText }}
        </v-progress-circular>
      </div>

      <v-divider class="mb-3"></v-divider>

      <!-- Matriz de Indicadores (Total, Concluídos, Status) -->
      <div class="d-flex justify-space-around text-center py-2 bg-surface-variant rounded-lg">
        <div>
          <div class="text-caption text-medium-emphasis">Total</div>
          <div class="text-subtitle-1 font-weight-black">{{ demandData.totalItems }}</div>
        </div>
        <v-divider vertical></v-divider>
        <div>
          <div class="text-caption text-medium-emphasis">Concluídos</div>
          <div class="text-subtitle-1 font-weight-black text-success">{{ demandData.completedItems }}</div>
        </div>
        <v-divider vertical></v-divider>
        <div>
          <div class="text-caption text-medium-emphasis">Status</div>
          <div :class="['text-caption font-weight-bold', `text-${cardColor}`]">
            {{ shortStatus }}
          </div>
        </div>
      </div>
    </v-card-text>

    <!-- Rodapé de Ações & Lista Expansível -->
    <v-card-actions class="px-4 pb-4 pt-0 d-flex flex-column ga-2">
      <div class="d-flex ga-2 w-100">
        <v-btn
          :to="demandData.detailsUrl || '/form'"
          :color="cardColor"
          variant="elevated"
          rounded="lg"
          class="flex-grow-1 font-weight-bold"
          @click="$emit('click:details', demandData)"
        >
          Ir para os Detalhes
        </v-btn>

        <v-btn
          v-if="demandData.items && demandData.items.length > 0"
          icon="mdi-format-list-checks"
          variant="tonal"
          :color="cardColor"
          rounded="lg"
          :class="{ 'rotate-180': isExpanded }"
          @click="toggleExpand"
          title="Expandir Lista de Produtos"
        ></v-btn>
      </div>

      <!-- Transição Expansível da Lista de Produtos -->
      <v-expand-transition>
        <div v-show="isExpanded" class="w-100 mt-2">
          <v-divider class="mb-2"></v-divider>

          <div class="d-flex justify-space-between align-center mb-2">
            <span class="text-caption font-weight-bold">Lista de Produtos ({{ demandData.items?.length || 0 }}):</span>
            <span class="text-caption text-medium-emphasis">{{ progressPercentage }}% concluído</span>
          </div>

          <v-list density="compact" class="bg-surface rounded-lg pa-0 overflow-y-auto" max-height="220">
            <v-list-item
              v-for="item in demandData.items"
              :key="item.id"
              class="px-2 py-1 border-b-subtle"
            >
              <template #prepend>
                <v-icon
                  :icon="item.status === 'Concluído' ? 'mdi-check-circle' : 'mdi-clock-outline'"
                  :color="getItemColor(item.status)"
                  size="small"
                  class="mr-1"
                ></v-icon>
              </template>

              <v-list-item-title class="text-caption font-weight-semibold">
                {{ item.name }}
              </v-list-item-title>

              <template #append>
                <span class="text-caption font-weight-bold" :class="`text-${getItemColor(item.status)}`">
                  {{ item.status }}
                </span>
              </template>
            </v-list-item>
          </v-list>
        </div>
      </v-expand-transition>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { computed } from 'vue'
import { useDemandCard, type DemandData } from '~/composables/useDemandCard'

const props = defineProps({
  demand: {
    type: Object,
    default: null
  },
  // Fallbacks individuais para props avulsas se o objeto demand não for passado
  title: { type: String, default: 'Material de Escritório' },
  totalItems: { type: Number, default: 9 },
  completedItems: { type: Number, default: 4 },
  disputeDate: { type: String, default: '16/08/2026' },
  status: { type: String, default: 'Em fase de recursos' },
  category: { type: String, default: 'DISPUTA' },
  detailsUrl: { type: String, default: '/form' },
  items: { type: Array, default: () => [] },
  color: { type: String, default: '' }
})

defineEmits(['click:details'])

// Monta o objeto de dados unificado
const demandData = computed<DemandData>(() => {
  if (props.demand) {
    return {
      title: props.demand.title || props.title,
      category: props.demand.category || props.category,
      totalItems: props.demand.totalItems ?? props.totalItems,
      completedItems: props.demand.completedItems ?? props.completedItems,
      disputeDate: props.demand.disputeDate || props.disputeDate,
      status: props.demand.status || props.status,
      statusColor: props.demand.statusColor,
      detailsUrl: props.demand.detailsUrl || props.detailsUrl,
      items: props.demand.items || props.items
    }
  }
  return {
    title: props.title,
    category: props.category,
    totalItems: props.totalItems,
    completedItems: props.completedItems,
    disputeDate: props.disputeDate,
    status: props.status,
    detailsUrl: props.detailsUrl,
    items: props.items
  }
})

// Utiliza o composable reutilizável
const {
  isExpanded,
  progressPercentage,
  progressText,
  computedStatusColor,
  toggleExpand,
  getItemColor
} = useDemandCard(demandData)

// Cor final do card (prop color sobresscreve ou usa a do composable)
const cardColor = computed(() => props.color || computedStatusColor.value)

// Resumo curto do status para a caixa de métricas
const shortStatus = computed(() => {
  const s = demandData.value.status || ''
  if (s.toLowerCase().includes('recurso')) return 'Recursos'
  if (s.toLowerCase().includes('conclu')) return 'Concluído'
  if (s.toLowerCase().includes('análise')) return 'Em Análise'
  return s
})
</script>

<style scoped>
.card-hover {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12) !important;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.border-b-subtle {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
