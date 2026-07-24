<template>
  <v-container class="py-10">
    <!-- Header Page Title -->
    <div class="text-center mb-10">
      <v-chip color="primary" variant="tonal" size="large" class="font-weight-bold mb-3">
        Showcase de Componentes
      </v-chip>
      <h1 class="text-h3 font-weight-black mb-2">
        Galeria de 10 Tipos de Listas (v-list)
      </h1>
      <p class="text-subtitle-1 text-medium-emphasis max-width-600 mx-auto">
        Exemplos práticos e interativos construídos com Vuetify 3 no Nuxt 3 utilizando v-list, v-list-item, v-list-group, v-list-subheader e slots avançados.
      </p>
    </div>

    <v-row class="match-height">
      
      <!-- EXEMPLO 1: Central de Notificações -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 list-card overflow-hidden">
          <v-card-item class="bg-primary-subtle border-b">
            <template #prepend>
              <v-avatar color="primary" variant="flat" size="40">
                <v-icon icon="mdi-bell-ring-outline"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="font-weight-bold text-subtitle-1">Central de Notificações</v-card-title>
            <v-card-subtitle>Avisos recentes e alertas</v-card-subtitle>
          </v-card-item>

          <v-list lines="two" class="py-0">
            <v-list-subheader class="font-weight-bold text-uppercase text-caption">Hoje</v-list-subheader>

            <v-list-item
              v-for="(notification, index) in notifications"
              :key="index"
              :value="notification"
              class="px-4 py-2 border-b-subtle"
            >
              <template #prepend>
                <v-avatar :color="notification.color" variant="tonal" size="40">
                  <v-icon :icon="notification.icon"></v-icon>
                </v-avatar>
              </template>

              <v-list-item-title class="font-weight-semibold text-body-2">
                {{ notification.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-caption">
                {{ notification.description }}
              </v-list-item-subtitle>

              <template #append>
                <div class="d-flex flex-column align-end">
                  <span class="text-caption text-medium-emphasis">{{ notification.time }}</span>
                  <v-chip v-if="notification.unread" color="error" size="x-small" variant="flat" class="mt-1">Nova</v-chip>
                </div>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- EXEMPLO 2: Menu Navegação Aninhado (v-list-group) -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 list-card overflow-hidden">
          <v-card-item class="bg-primary-subtle border-b">
            <template #prepend>
              <v-avatar color="secondary" variant="flat" size="40">
                <v-icon icon="mdi-file-tree-outline"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="font-weight-bold text-subtitle-1">Menu Aninhado (v-list-group)</v-card-title>
            <v-card-subtitle>Categorias e subníveis expansíveis</v-card-subtitle>
          </v-card-item>

          <v-list v-model:opened="openGroups" class="py-0">
            <v-list-group value="ecommerce">
              <template #activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-shopping-outline" title="E-Commerce"></v-list-item>
              </template>

              <v-list-item prepend-icon="mdi-package-variant" title="Produtos" value="products">
                <template #append><v-chip size="x-small" color="primary">124</v-chip></template>
              </v-list-item>
              <v-list-item prepend-icon="mdi-cart-outline" title="Pedidos" value="orders"></v-list-item>
              <v-list-item prepend-icon="mdi-account-group" title="Clientes" value="customers"></v-list-item>
            </v-list-group>

            <v-divider></v-divider>

            <v-list-group value="settings">
              <template #activator="{ props }">
                <v-list-item v-bind="props" prepend-icon="mdi-cog-outline" title="Configurações"></v-list-item>
              </template>

              <v-list-item prepend-icon="mdi-lock-outline" title="Segurança" value="security"></v-list-item>
              <v-list-item prepend-icon="mdi-palette-outline" title="Aparência" value="appearance"></v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-col>

      <!-- EXEMPLO 3: Lista de Contatos com Status & Ações Rápidas -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 list-card overflow-hidden">
          <v-card-item class="bg-primary-subtle border-b">
            <template #prepend>
              <v-avatar color="info" variant="flat" size="40">
                <v-icon icon="mdi-account-box-multiple-outline"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="font-weight-bold text-subtitle-1">Lista de Contatos</v-card-title>
            <v-card-subtitle>Status de presença e atalhos</v-card-subtitle>
          </v-card-item>

          <v-list class="py-0">
            <v-list-item
              v-for="contact in contacts"
              :key="contact.id"
              class="px-4 py-2 border-b-subtle"
            >
              <template #prepend>
                <v-badge
                  dot
                  location="bottom right"
                  offset-x="3"
                  offset-y="3"
                  :color="contact.online ? 'success' : 'grey'"
                >
                  <v-avatar size="44">
                    <v-img :src="contact.avatar" :alt="contact.name"></v-img>
                  </v-avatar>
                </v-badge>
              </template>

              <v-list-item-title class="font-weight-bold text-body-2">{{ contact.name }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption">{{ contact.role }}</v-list-item-subtitle>

              <template #append>
                <div class="d-flex ga-1">
                  <v-btn icon="mdi-phone-outline" variant="text" size="small" color="primary"></v-btn>
                  <v-btn icon="mdi-email-outline" variant="text" size="small" color="info"></v-btn>
                </div>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- EXEMPLO 4: Checklist Interativa de Tarefas (To-Do) -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 list-card overflow-hidden">
          <v-card-item class="bg-primary-subtle border-b">
            <template #prepend>
              <v-avatar color="success" variant="flat" size="40">
                <v-icon icon="mdi-checkbox-marked-circle-outline"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="font-weight-bold text-subtitle-1">Checklist de Tarefas</v-card-title>
            <v-card-subtitle>
              {{ completedTasksCount }} de {{ tasks.length }} concluídas
            </v-card-subtitle>
          </v-card-item>

          <v-progress-linear
            :model-value="(completedTasksCount / tasks.length) * 100"
            color="success"
            height="4"
          ></v-progress-linear>

          <v-list class="py-0">
            <v-list-item
              v-for="task in tasks"
              :key="task.id"
              @click="task.done = !task.done"
              class="px-4 py-2 border-b-subtle"
            >
              <template #prepend>
                <v-checkbox-btn v-model="task.done" color="success"></v-checkbox-btn>
              </template>

              <v-list-item-title :class="{ 'text-decoration-line-through text-medium-emphasis': task.done }" class="font-weight-semibold text-body-2">
                {{ task.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-caption">
                Prioridade: <v-chip size="x-small" :color="task.priorityColor" variant="tonal">{{ task.priority }}</v-chip>
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- EXEMPLO 5: Chat Inbox com Mensagens Não Lidas -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 list-card overflow-hidden">
          <v-card-item class="bg-primary-subtle border-b">
            <template #prepend>
              <v-avatar color="deep-purple" variant="flat" size="40">
                <v-icon icon="mdi-message-text-outline"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="font-weight-bold text-subtitle-1">Caixa de Mensagens</v-card-title>
            <v-card-subtitle>Conversas mais recentes</v-card-subtitle>
          </v-card-item>

          <v-list lines="two" class="py-0">
            <v-list-item
              v-for="chat in chats"
              :key="chat.id"
              class="px-4 py-2 border-b-subtle"
            >
              <template #prepend>
                <v-avatar size="44">
                  <v-img :src="chat.avatar"></v-img>
                </v-avatar>
              </template>

              <v-list-item-title class="d-flex justify-space-between align-center">
                <span class="font-weight-bold text-body-2">{{ chat.sender }}</span>
                <span class="text-caption text-medium-emphasis">{{ chat.time }}</span>
              </v-list-item-title>
              <v-list-item-subtitle class="text-caption text-truncate">
                {{ chat.lastMessage }}
              </v-list-item-subtitle>

              <template #append>
                <v-badge v-if="chat.unreadCount > 0" :content="chat.unreadCount" color="primary" class="ml-2"></v-badge>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- EXEMPLO 6: Configurações do Sistema (Switches) -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 list-card overflow-hidden">
          <v-card-item class="bg-primary-subtle border-b">
            <template #prepend>
              <v-avatar color="warning" variant="flat" size="40">
                <v-icon icon="mdi-tune-variant"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="font-weight-bold text-subtitle-1">Preferências do Sistema</v-card-title>
            <v-card-subtitle>Opções de notificação e privacidade</v-card-subtitle>
          </v-card-item>

          <v-list lines="two" class="py-0">
            <v-list-item
              v-for="setting in settings"
              :key="setting.id"
              class="px-4 py-2 border-b-subtle"
            >
              <template #prepend>
                <v-avatar color="grey-lighten-3" size="36">
                  <v-icon :icon="setting.icon" color="grey-darken-2" size="20"></v-icon>
                </v-avatar>
              </template>

              <v-list-item-title class="font-weight-bold text-body-2">{{ setting.title }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption">{{ setting.subtitle }}</v-list-item-subtitle>

              <template #append>
                <v-switch v-model="setting.value" color="primary" hide-details density="compact"></v-switch>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- EXEMPLO 7: Playlist de Músicas (Mídia) -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 list-card overflow-hidden">
          <v-card-item class="bg-primary-subtle border-b">
            <template #prepend>
              <v-avatar color="pink" variant="flat" size="40">
                <v-icon icon="mdi-music-note-outline"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="font-weight-bold text-subtitle-1">Playlist Recomendada</v-card-title>
            <v-card-subtitle>Tocando agora: Chill Vibes</v-card-subtitle>
          </v-card-item>

          <v-list class="py-0">
            <v-list-item
              v-for="(track, index) in playlist"
              :key="track.id"
              :active="currentTrackId === track.id"
              color="pink"
              @click="currentTrackId = track.id"
              class="px-4 py-2 border-b-subtle"
            >
              <template #prepend>
                <v-btn
                  icon
                  variant="text"
                  size="small"
                  :color="currentTrackId === track.id ? 'pink' : 'default'"
                >
                  <v-icon :icon="currentTrackId === track.id ? 'mdi-pause' : 'mdi-play'"></v-icon>
                </v-btn>
              </template>

              <v-list-item-title class="font-weight-bold text-body-2">{{ track.title }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption">{{ track.artist }}</v-list-item-subtitle>

              <template #append>
                <div class="d-flex align-center ga-2">
                  <span class="text-caption text-medium-emphasis">{{ track.duration }}</span>
                  <v-btn
                    icon="mdi-heart-outline"
                    variant="text"
                    size="small"
                    :color="track.liked ? 'pink' : 'grey'"
                    @click.stop="track.liked = !track.liked"
                  ></v-btn>
                </div>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- EXEMPLO 8: Extrato Bancário / Transações -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 list-card overflow-hidden">
          <v-card-item class="bg-primary-subtle border-b">
            <template #prepend>
              <v-avatar color="teal" variant="flat" size="40">
                <v-icon icon="mdi-bank-outline"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="font-weight-bold text-subtitle-1">Extrato Financeiro</v-card-title>
            <v-card-subtitle>Movimentações recentes da conta</v-card-subtitle>
          </v-card-item>

          <v-list lines="two" class="py-0">
            <v-list-item
              v-for="tx in transactions"
              :key="tx.id"
              class="px-4 py-2 border-b-subtle"
            >
              <template #prepend>
                <v-avatar :color="tx.type === 'income' ? 'success-lighten-4' : 'error-lighten-4'" size="40">
                  <v-icon
                    :icon="tx.type === 'income' ? 'mdi-arrow-down-left' : 'mdi-arrow-up-right'"
                    :color="tx.type === 'income' ? 'success' : 'error'"
                  ></v-icon>
                </v-avatar>
              </template>

              <v-list-item-title class="font-weight-bold text-body-2">{{ tx.title }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption">{{ tx.category }} • {{ tx.date }}</v-list-item-subtitle>

              <template #append>
                <span
                  class="font-weight-black text-body-2"
                  :class="tx.type === 'income' ? 'text-success' : 'text-error'"
                >
                  {{ tx.type === 'income' ? '+' : '-' }} R$ {{ tx.amount.toFixed(2) }}
                </span>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- EXEMPLO 9: Gerenciador de Arquivos com Seleção -->
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="6" rounded="xl" class="h-100 list-card overflow-hidden">
          <v-card-item class="bg-primary-subtle border-b">
            <template #prepend>
              <v-avatar color="indigo" variant="flat" size="40">
                <v-icon icon="mdi-folder-google-drive"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="font-weight-bold text-subtitle-1">Gerenciador de Arquivos</v-card-title>
            <v-card-subtitle>Documentos da equipe</v-card-subtitle>
          </v-card-item>

          <v-list select-strategy="multi" v-model:selected="selectedFiles" class="py-0">
            <v-list-item
              v-for="file in files"
              :key="file.id"
              :value="file.id"
              class="px-4 py-2 border-b-subtle"
            >
              <template #prepend="{ isSelected }">
                <v-list-item-action start>
                  <v-checkbox-btn :model-value="isSelected"></v-checkbox-btn>
                </v-list-item-action>
                <v-avatar :color="file.color" variant="tonal" size="36">
                  <v-icon :icon="file.icon" size="20"></v-icon>
                </v-avatar>
              </template>

              <v-list-item-title class="font-weight-bold text-body-2 ml-2">{{ file.name }}</v-list-item-title>
              <v-list-item-subtitle class="text-caption ml-2">{{ file.size }} • {{ file.updated }}</v-list-item-subtitle>

              <template #append>
                <v-btn icon="mdi-download-outline" variant="text" size="small" color="primary"></v-btn>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <!-- EXEMPLO 10: Ranking / Leaderboard Gamificado -->
      <v-col cols="12" md="12" lg="8" class="mx-auto mt-4">
        <v-card elevation="6" rounded="xl" class="list-card overflow-hidden">
          <v-card-item class="bg-primary-subtle border-b">
            <template #prepend>
              <v-avatar color="amber-darken-2" variant="flat" size="40">
                <v-icon icon="mdi-trophy-outline"></v-icon>
              </v-avatar>
            </template>
            <v-card-title class="font-weight-bold text-subtitle-1">Leaderboard da Equipe (Ranking de Produtividade)</v-card-title>
            <v-card-subtitle>Top colaboradores do mês</v-card-subtitle>
          </v-card-item>

          <v-list class="py-0">
            <v-list-item
              v-for="(member, rank) in leaderboard"
              :key="member.id"
              class="px-6 py-3 border-b-subtle"
            >
              <template #prepend>
                <div class="d-flex align-center mr-4" style="width: 36px">
                  <v-icon v-if="rank === 0" icon="mdi-trophy" color="amber-darken-1" size="28"></v-icon>
                  <v-icon v-else-if="rank === 1" icon="mdi-trophy" color="grey-lighten-1" size="26"></v-icon>
                  <v-icon v-else-if="rank === 2" icon="mdi-trophy" color="amber-darken-4" size="24"></v-icon>
                  <span v-else class="text-h6 font-weight-black text-medium-emphasis pl-2">#{{ rank + 1 }}</span>
                </div>

                <v-avatar size="44" class="mr-3">
                  <v-img :src="member.avatar"></v-img>
                </v-avatar>
              </template>

              <v-list-item-title class="font-weight-bold text-body-1">
                {{ member.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-caption">
                {{ member.role }} • {{ member.completedTasks }} tarefas entregues
              </v-list-item-subtitle>

              <template #append>
                <div class="d-flex align-center ga-4">
                  <div class="d-none d-sm-block text-right" style="width: 140px">
                    <v-progress-linear :model-value="member.scoreProgress" color="primary" height="6" rounded></v-progress-linear>
                  </div>
                  <v-chip color="primary" variant="flat" class="font-weight-bold">
                    {{ member.score }} pts
                  </v-chip>
                </div>
              </template>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

// 1. Notificações
const notifications = ref([
  { title: 'Novo seguidor', description: 'Ana Silva começou a te seguir', time: '5m atrás', icon: 'mdi-account-plus', color: 'primary', unread: true },
  { title: 'Deploy concluído', description: 'Produção atualizada com v2.4', time: '1h atrás', icon: 'mdi-check-decagram', color: 'success', unread: true },
  { title: 'Alerta de Servidor', description: 'Uso de CPU atingiu 85%', time: '3h atrás', icon: 'mdi-alert-circle', color: 'warning', unread: false },
])

// 2. Grupos
const openGroups = ref(['ecommerce'])

// 3. Contatos
const contacts = ref([
  { id: 1, name: 'Lucas Mendes', role: 'UX Designer', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', online: true },
  { id: 2, name: 'Fernanda Rocha', role: 'Product Owner', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', online: true },
  { id: 3, name: 'Gabriel Souza', role: 'DevOps Engineer', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', online: false },
])

// 4. Checklist / Tarefas
const tasks = ref([
  { id: 1, title: 'Revisar pull request do Nuxt 3', done: true, priority: 'Alta', priorityColor: 'error' },
  { id: 2, title: 'Atualizar componentes Vuetify para v3.7', done: false, priority: 'Média', priorityColor: 'warning' },
  { id: 3, title: 'Criar testes automatizados para v-list', done: false, priority: 'Baixa', priorityColor: 'info' },
])

const completedTasksCount = computed(() => tasks.value.filter(t => t.done).length)

// 5. Chats
const chats = ref([
  { id: 1, sender: 'Mariana Lima', lastMessage: 'Você viu os novos layouts do Figma?', time: '14:32', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg', unreadCount: 2 },
  { id: 2, sender: 'Roberto Alves', lastMessage: 'Reunião confirmada para amanhã às 10h.', time: '11:15', avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', unreadCount: 0 },
])

// 6. Settings
const settings = ref([
  { id: 1, title: 'Notificações Push', subtitle: 'Receber alertas em tempo real no navegador', icon: 'mdi-bell-outline', value: true },
  { id: 2, title: 'Autenticação de 2 Fatores', subtitle: 'Aumentar a segurança da conta', icon: 'mdi-shield-check-outline', value: true },
  { id: 3, title: 'Modo de Alta Performance', subtitle: 'Reduzir animações da interface', icon: 'mdi-lightning-bolt-outline', value: false },
])

// 7. Playlist
const currentTrackId = ref(1)
const playlist = ref([
  { id: 1, title: 'Midnight City Beats', artist: 'Lo-Fi Chill', duration: '3:45', liked: true },
  { id: 2, title: 'Vue & Synthwave', artist: 'Code Symphony', duration: '4:12', liked: false },
  { id: 3, title: 'Acoustic Coding Session', artist: 'Indie Devs', duration: '2:58', liked: true },
])

// 8. Transações
const transactions = ref([
  { id: 1, title: 'Pagamento de Freelance', category: 'Receita', date: '24 Jul', amount: 3500.00, type: 'income' },
  { id: 2, title: 'Assinatura Cloud Server', category: 'Infraestrutura', date: '22 Jul', amount: 149.90, type: 'expense' },
  { id: 3, title: 'Supermercado Central', category: 'Alimentação', date: '20 Jul', amount: 320.50, type: 'expense' },
])

// 9. Arquivos
const selectedFiles = ref([1])
const files = ref([
  { id: 1, name: 'relatorio_trimestral.pdf', size: '4.2 MB', updated: 'Ontem', icon: 'mdi-file-pdf-box', color: 'red' },
  { id: 2, name: 'design_system_v2.fig', size: '18.5 MB', updated: '23 Jul', icon: 'mdi-vector-square', color: 'purple' },
  { id: 3, name: 'dados_exportados.xlsx', size: '1.1 MB', updated: '21 Jul', icon: 'mdi-file-excel-box', color: 'green' },
])

// 10. Leaderboard
const leaderboard = ref([
  { id: 1, name: 'Camila Torres', role: 'Senior Tech Lead', completedTasks: 48, score: 2940, scoreProgress: 95, avatar: 'https://cdn.vuetifyjs.com/images/john.jpg' },
  { id: 2, name: 'Henrique Vasconcelos', role: 'Backend Engineer', completedTasks: 42, score: 2610, scoreProgress: 85, avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
  { id: 3, name: 'Juliana Costa', role: 'Frontend Developer', completedTasks: 39, score: 2420, scoreProgress: 78, avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
  { id: 4, name: 'Bruno Castro', role: 'QA Analyst', completedTasks: 31, score: 1950, scoreProgress: 60, avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
])
</script>

<style scoped>
.max-width-600 {
  max-width: 600px;
}
.list-card {
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.list-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12) !important;
}
.border-b {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}
.border-b-subtle {
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}
</style>
