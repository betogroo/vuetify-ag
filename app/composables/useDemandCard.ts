import { ref, computed, toValue, type MaybeRefOrGetter } from 'vue'

export interface DemandItem {
  id: number | string
  name: string
  status: string
  color?: string
}

export interface DemandData {
  id?: number | string
  title: string
  category?: string
  totalItems: number
  completedItems: number
  disputeDate: string
  status: string
  statusColor?: string
  detailsUrl?: string
  items?: DemandItem[]
}

/**
 * Composable para gerenciar a lógica, porcentagem de progresso, cores de status
 * e controle de expansão de cards de demanda.
 */
export function useDemandCard(demandInput: MaybeRefOrGetter<DemandData>) {
  const isExpanded = ref(false)

  const demand = computed(() => toValue(demandInput))

  // Porcentagem calculada (ex: 44.4%)
  const progressPercentage = computed(() => {
    const d = demand.value
    if (!d || !d.totalItems || d.totalItems === 0) return 0
    return Math.round((d.completedItems / d.totalItems) * 1000) / 10
  })

  // Texto curto do progresso (ex: "4/9")
  const progressText = computed(() => {
    const d = demand.value
    if (!d) return '0/0'
    return `${d.completedItems}/${d.totalItems}`
  })

  // Mapeamento automático de cor baseado no status
  const computedStatusColor = computed(() => {
    const d = demand.value
    if (d?.statusColor) return d.statusColor
    const statusLower = (d?.status || '').toLowerCase()
    if (statusLower.includes('recurso')) return 'warning'
    if (statusLower.includes('conclu')) return 'success'
    if (statusLower.includes('análise') || statusLower.includes('analise')) return 'info'
    if (statusLower.includes('pendente')) return 'grey'
    return 'primary'
  })

  function toggleExpand() {
    isExpanded.value = !isExpanded.value
  }

  function getItemColor(status: string): string {
    const s = (status || '').toLowerCase()
    if (s.includes('conclu')) return 'success'
    if (s.includes('recurso')) return 'warning'
    if (s.includes('análise') || s.includes('analise')) return 'info'
    return 'grey'
  }

  return {
    isExpanded,
    demand,
    progressPercentage,
    progressText,
    computedStatusColor,
    toggleExpand,
    getItemColor
  }
}
