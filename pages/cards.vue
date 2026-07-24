<template>
  <v-container class="py-10">
    <!-- Header Page Title -->
    <div class="text-center mb-10">
      <v-chip color="primary" variant="tonal" size="large" class="font-weight-bold mb-3">
        Showcase de Componentes
      </v-chip>
      <h1 class="text-h3 font-weight-black mb-2">
        Galeria de 10 Tipos de Cards
      </h1>
      <p class="text-subtitle-1 text-medium-emphasis max-width-600 mx-auto">
        Exemplos de cartões interativos criados com Vuetify 3 no Nuxt 3, cobrindo perfis, e-commerce, finanças, mídia e widgets.
      </p>
    </div>

    <!-- Cards Grid Container -->
    <v-row class="match-height">
      
      <!-- CARD 1: Perfil de Usuário -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 overflow-hidden card-hover">
          <div class="profile-header bg-gradient-primary pa-6 text-center position-relative">
            <v-avatar size="88" elevation="4" class="profile-avatar border-white">
              <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="Avatar"></v-img>
            </v-avatar>
          </div>
          <v-card-text class="text-center pt-10">
            <h3 class="text-h6 font-weight-bold mb-0">Carlos Oliveira</h3>
            <span class="text-caption text-primary font-weight-semibold">@carlos_dev</span>
            <p class="text-body-2 text-medium-emphasis mt-2 mb-4">
              Desenvolvedor Full Stack apaixonado por Vue.js, Nuxt e design de interfaces modernas.
            </p>
            
            <div class="d-flex justify-space-around py-3 rounded-lg bg-surface-variant mb-4">
              <div>
                <div class="text-h6 font-weight-bold">142</div>
                <div class="text-caption text-medium-emphasis">Projetos</div>
              </div>
              <v-divider vertical></v-divider>
              <div>
                <div class="text-h6 font-weight-bold">12.8k</div>
                <div class="text-caption text-medium-emphasis">Seguidores</div>
              </div>
              <v-divider vertical></v-divider>
              <div>
                <div class="text-h6 font-weight-bold">489</div>
                <div class="text-caption text-medium-emphasis">Seguindo</div>
              </div>
            </div>

            <div class="d-flex ga-2">
              <v-btn
                block
                :color="isFollowing ? 'secondary' : 'primary'"
                variant="elevated"
                rounded="lg"
                @click="isFollowing = !isFollowing"
              >
                {{ isFollowing ? 'Seguindo' : 'Seguir' }}
              </v-btn>
              <v-btn icon="mdi-email-outline" variant="tonal" rounded="lg" color="primary"></v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- CARD 2: Métricas / KPI Dashboard -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 pa-5 card-hover d-flex flex-column justify-space-between">
          <div>
            <div class="d-flex justify-space-between align-center mb-4">
              <v-avatar color="success" variant="tonal" size="48" rounded="lg">
                <v-icon icon="mdi-chart-line-variant" size="28"></v-icon>
              </v-avatar>
              <v-chip color="success" size="small" variant="flat" prepend-icon="mdi-arrow-up-bold">
                +24.5%
              </v-chip>
            </div>

            <span class="text-caption text-uppercase text-medium-emphasis font-weight-bold">
              Receita Mensal Recorrente
            </span>
            <h2 class="text-h3 font-weight-black my-1 text-success">
              R$ 84.520
            </h2>
            <p class="text-body-2 text-medium-emphasis">
              Comparado a R$ 67.900 no mês passado
            </p>
          </div>

          <div class="mt-4">
            <div class="d-flex justify-space-between text-caption font-weight-bold mb-1">
              <span>Meta do Trimestre</span>
              <span>84.5%</span>
            </div>
            <v-progress-linear
              model-value="84.5"
              color="success"
              height="8"
              rounded
            ></v-progress-linear>
          </div>
        </v-card>
      </v-col>

      <!-- CARD 3: E-commerce / Produto -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 card-hover overflow-hidden d-flex flex-column">
          <div class="position-relative">
            <v-img
              src="/product_headphone.jpg"
              height="200"
              cover
            ></v-img>
            <v-chip
              color="error"
              size="small"
              variant="flat"
              class="position-absolute top-0 right-0 ma-3 font-weight-bold"
            >
              -30% OFF
            </v-chip>
          </div>

          <v-card-text class="flex-grow-1 d-flex flex-column justify-space-between">
            <div>
              <div class="d-flex align-center ga-2 mb-1">
                <v-rating
                  v-model="productRating"
                  color="amber"
                  density="compact"
                  half-increments
                  readonly
                  size="small"
                ></v-rating>
                <span class="text-caption text-medium-emphasis">(4.9/5)</span>
              </div>
              <h3 class="text-h6 font-weight-bold mb-2 line-clamp-1">
                Headphone Wireless Noise Cancelling Pro
              </h3>
              <p class="text-body-2 text-medium-emphasis line-clamp-2 mb-3">
                Cancelamento ativo de ruído inteligente, autonomia de 40 horas e áudio de altíssima fidelidade.
              </p>
            </div>

            <div>
              <div class="d-flex align-baseline ga-2 mb-3">
                <span class="text-h5 font-weight-black text-primary">R$ 699,00</span>
                <span class="text-body-2 text-medium-emphasis text-decoration-line-through">R$ 999,00</span>
              </div>
              <v-btn
                block
                color="primary"
                prepend-icon="mdi-cart-plus"
                rounded="lg"
                size="large"
              >
                Adicionar ao Carrinho
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- CARD 4: Plano de Assinatura / Pricing -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 pa-6 card-hover border-primary d-flex flex-column justify-space-between">
          <div>
            <div class="d-flex justify-space-between align-center mb-2">
              <h3 class="text-h5 font-weight-bold">Plano Pro</h3>
              <v-chip color="primary" variant="flat" size="small">Mais Popular</v-chip>
            </div>
            <p class="text-body-2 text-medium-emphasis mb-4">Perfeito para desenvolvedores e pequenas equipes.</p>

            <div class="d-flex align-baseline mb-6">
              <span class="text-h3 font-weight-black">R$ 79</span>
              <span class="text-body-2 text-medium-emphasis ml-1">/ mês</span>
            </div>

            <v-list density="compact" class="bg-transparent pa-0">
              <v-list-item
                v-for="(feature, index) in pricingFeatures"
                :key="index"
                class="px-0"
              >
                <template #prepend>
                  <v-icon icon="mdi-check-circle" color="success" size="small" class="mr-2"></v-icon>
                </template>
                <v-list-item-title class="text-body-2">{{ feature }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </div>

          <v-btn
            block
            color="primary"
            variant="elevated"
            size="large"
            rounded="lg"
            class="mt-6"
          >
            Assinar Agora
          </v-btn>
        </v-card>
      </v-col>

      <!-- CARD 5: Artigo / Blog Media -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 card-hover overflow-hidden d-flex flex-column">
          <v-img src="/blog_nature_cover.jpg" height="180" cover></v-img>
          <v-card-text class="flex-grow-1 d-flex flex-column justify-space-between">
            <div>
              <div class="d-flex align-center justify-space-between text-caption text-medium-emphasis mb-2">
                <v-chip color="accent" size="x-small" variant="tonal" class="font-weight-bold">TECNOLOGIA</v-chip>
                <span>5 min de leitura</span>
              </div>
              <h3 class="text-h6 font-weight-bold mb-2">
                Construindo Interfaces Modernas com Nuxt 3 e Vuetify
              </h3>
              <p class="text-body-2 text-medium-emphasis mb-4 line-clamp-2">
                Descubra como combinar o poder do ecossistema Vue 3 para criar aplicações rápidas e acessíveis.
              </p>
            </div>

            <div class="d-flex align-center justify-space-between pt-2 border-t">
              <div class="d-flex align-center ga-2">
                <v-avatar size="32">
                  <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
                </v-avatar>
                <span class="text-caption font-weight-bold">Ana Silva</span>
              </div>
              <v-btn icon="mdi-bookmark-outline" variant="text" size="small" color="grey"></v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- CARD 6: Music Player Card -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 pa-5 card-hover bg-surface-variant d-flex flex-column justify-space-between">
          <div class="d-flex ga-4 align-center mb-4">
            <v-avatar size="72" rounded="lg" elevation="3">
              <v-img src="https://cdn.vuetifyjs.com/images/cards/halkyon.jpg" cover></v-img>
            </v-avatar>
            <div>
              <h3 class="text-subtitle-1 font-weight-bold mb-0">Cyberpunk Neon Night</h3>
              <span class="text-caption text-medium-emphasis">Synthwave Dreams</span>
            </div>
          </div>

          <div>
            <v-slider
              v-model="audioProgress"
              color="primary"
              track-color="grey"
              hide-details
              class="mb-1"
            ></v-slider>
            <div class="d-flex justify-space-between text-caption text-medium-emphasis mb-3">
              <span>1:42</span>
              <span>3:45</span>
            </div>

            <div class="d-flex align-center justify-center ga-3">
              <v-btn icon="mdi-skip-previous" variant="text" color="primary"></v-btn>
              <v-btn
                :icon="isPlaying ? 'mdi-pause' : 'mdi-play'"
                size="large"
                color="primary"
                variant="elevated"
                @click="isPlaying = !isPlaying"
              ></v-btn>
              <v-btn icon="mdi-skip-next" variant="text" color="primary"></v-btn>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- CARD 7: Widget de Clima / Weather -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 pa-5 card-hover bg-gradient-weather text-white d-flex flex-column justify-space-between">
          <div>
            <div class="d-flex justify-space-between align-start">
              <div>
                <h3 class="text-h5 font-weight-bold">São Paulo</h3>
                <span class="text-caption opacity-80">Ensolarado com nuvens</span>
              </div>
              <v-icon icon="mdi-weather-partly-cloudy" size="48" color="amber-lighten-2"></v-icon>
            </div>

            <div class="text-h2 font-weight-black my-4">
              26°C
            </div>
          </div>

          <div class="d-flex justify-space-between text-caption border-t pt-3 border-white-20">
            <div>
              <v-icon icon="mdi-water-percent" class="mr-1"></v-icon>
              Umidade: 62%
            </div>
            <div>
              <v-icon icon="mdi-weather-windy" class="mr-1"></v-icon>
              Vento: 14 km/h
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- CARD 8: Gerenciador de Tarefas / Checklist -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 pa-5 card-hover d-flex flex-column justify-space-between">
          <div>
            <div class="d-flex justify-space-between align-center mb-3">
              <h3 class="text-subtitle-1 font-weight-bold">Sprint de Lançamento</h3>
              <v-chip size="x-small" color="warning" variant="flat">Em Progresso</v-chip>
            </div>

            <v-list density="compact" class="bg-transparent">
              <v-list-item
                v-for="(task, index) in tasks"
                :key="index"
                class="px-0"
              >
                <template #prepend>
                  <v-checkbox-btn v-model="task.done" color="primary"></v-checkbox-btn>
                </template>
                <v-list-item-title :class="{ 'text-decoration-line-through text-medium-emphasis': task.done }">
                  {{ task.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </div>

          <div class="d-flex align-center justify-space-between border-t pt-3">
            <span class="text-caption text-medium-emphasis">Equipe responsável</span>
            <div class="d-flex ga-1">
              <v-avatar size="24" color="primary">B</v-avatar>
              <v-avatar size="24" color="secondary">A</v-avatar>
              <v-avatar size="24" color="accent">M</v-avatar>
            </div>
          </div>
        </v-card>
      </v-col>

      <!-- CARD 9: Alerta / Notificação Interativa -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 pa-5 card-hover border-warning d-flex flex-column justify-space-between">
          <div>
            <div class="d-flex align-center ga-3 mb-3">
              <v-avatar color="warning" variant="tonal" size="40">
                <v-icon icon="mdi-alert-circle-outline"></v-icon>
              </v-avatar>
              <div>
                <h3 class="text-subtitle-1 font-weight-bold mb-0">Atualização Necessária</h3>
                <span class="text-caption text-medium-emphasis">Sistema v2.4 disponível</span>
              </div>
            </div>
            <p class="text-body-2 text-medium-emphasis">
              Uma nova versão contendo melhorias de segurança e desempenho está pronta para ser instalada.
            </p>
          </div>

          <div class="d-flex ga-2 mt-4">
            <v-btn block color="warning" variant="flat" rounded="lg">Atualizar Agora</v-btn>
            <v-btn icon="mdi-close" variant="tonal" rounded="lg" color="grey"></v-btn>
          </div>
        </v-card>
      </v-col>

      <!-- CARD 10: Cartão de Crédito Fintech (Glassmorphism Metal) -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="8" rounded="xl" class="h-100 pa-6 card-hover credit-card text-white d-flex flex-column justify-space-between">
          <div class="d-flex justify-space-between align-center">
            <span class="font-weight-black tracking-widest text-h6">NEXUS BANK</span>
            <v-icon icon="mdi-nfc" size="28" class="opacity-80"></v-icon>
          </div>

          <div class="my-6">
            <v-icon icon="mdi-chip" size="36" color="amber-lighten-3" class="mb-2"></v-icon>
            <div class="text-h5 font-weight-bold tracking-widest">
              •••• •••• •••• 8842
            </div>
          </div>

          <div class="d-flex justify-space-between align-end">
            <div>
              <div class="text-caption opacity-70">TITULAR</div>
              <div class="font-weight-bold text-subtitle-2">BETO FINANÇAS</div>
            </div>
            <div>
              <div class="text-caption opacity-70">VALIDADE</div>
              <div class="font-weight-bold text-subtitle-2">12/29</div>
            </div>
            <div class="d-flex">
              <v-avatar color="red-darken-1" size="24" class="mr-n2"></v-avatar>
              <v-avatar color="amber-darken-1" size="24"></v-avatar>
            </div>
          </div>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const isFollowing = ref(false)
const productRating = ref(4.9)
const audioProgress = ref(40)
const isPlaying = ref(false)

const pricingFeatures = [
  'Projetos ilimitados',
  'Suporte prioritário 24/7',
  'Acesso completo às APIs',
  'Relatórios de Analytics avançados'
]

const tasks = ref([
  { title: 'Configurar Nuxt 3 e Vuetify', done: true },
  { title: 'Criar componentes de Cards', done: true },
  { title: 'Testar alternador de tema', done: false }
])
</script>

<style scoped>
.card-hover {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.card-hover:hover {
  transform: translateY(-4px);
}

.bg-gradient-primary {
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
}

.bg-gradient-weather {
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
}

.border-white-20 {
  border-color: rgba(255, 255, 255, 0.2) !important;
}

.credit-card {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%);
  position: relative;
  overflow: hidden;
}

.credit-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%);
  pointer-events: none;
}

.profile-avatar {
  border: 4px solid var(--v-theme-surface);
  margin-bottom: -44px;
}

.tracking-widest {
  letter-spacing: 3px !important;
}

.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
