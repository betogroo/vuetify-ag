<template>
  <v-container class="py-10">
    <!-- Header Title -->
    <div class="text-center mb-10">
      <v-chip color="primary" variant="tonal" size="large" class="font-weight-bold mb-3">
        Formulário de Cadastro
      </v-chip>
      <h1 class="text-h3 font-weight-black mb-2">
        Registro de Demanda Judicial
      </h1>
      <p class="text-subtitle-1 text-medium-emphasis max-width-600 mx-auto">
        Preencha os dados abaixo para cadastrar uma nova demanda no sistema.
      </p>
    </div>

    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="8" rounded="xl" class="pa-6 pa-md-8 form-card">
          <v-form ref="formRef" v-model="isFormValid" @submit.prevent="submitForm">
            
            <!-- CAMPO 1: Nome da demanda -->
            <v-text-field
              v-model="formData.demandName"
              label="Nome da Demanda"
              placeholder="Ex: Disputa Contratual Fornecedor X"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-file-document-edit-outline"
              :rules="[rules.required]"
              class="mb-4"
              clearable
            ></v-text-field>

            <!-- CAMPO 2: Número do processo -->
            <v-text-field
              v-model="formData.processNumber"
              label="Número do Processo"
              placeholder="Ex: 0001234-56.2026.8.26.0100"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-card-text-outline"
              :rules="[rules.required]"
              class="mb-4"
              clearable
            ></v-text-field>

            <!-- CAMPO 3: Data da disputa com Date Picker -->
            <v-menu v-model="menuDatePicker" :close-on-content-click="false" transition="scale-transition">
              <template #activator="{ props }">
                <v-text-field
                  :model-value="formattedDisputeDate"
                  label="Data da Disputa"
                  placeholder="Selecione a data"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-calendar-range"
                  readonly
                  v-bind="props"
                  :rules="[rules.required]"
                  class="mb-4"
                  clearable
                  @click:clear="formData.disputeDate = null"
                ></v-text-field>
              </template>

              <v-card min-width="300" rounded="lg" elevation="10">
                <v-date-picker
                  v-model="formData.disputeDate"
                  color="primary"
                  title="Selecione a Data da Disputa"
                  @update:model-value="menuDatePicker = false"
                ></v-date-picker>
              </v-card>
            </v-menu>

            <!-- CAMPO 4: Tipo do processo (Select com índice numérico e 2 linhas) -->
            <v-select
              v-model="formData.processType"
              :items="processTypeOptions"
              item-value="id"
              label="Tipo do Processo"
              placeholder="Selecione o tipo de processo"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-gavel"
              :rules="[rules.required]"
              class="mb-6"
              return-object
            >
              <!-- Template para os itens na lista suspensa (Duas linhas) -->
              <template #item="{ item, props }">
                <v-list-item v-bind="props" lines="two" class="py-2">
                  <template #title>
                    <span class="font-weight-bold text-primary mr-1">{{ item.raw.id }}.</span>
                    <span class="font-weight-bold">{{ item.raw.title }}</span>
                  </template>
                  <template #subtitle>
                    <span class="text-caption text-medium-emphasis">{{ item.raw.description }}</span>
                  </template>
                </v-list-item>
              </template>

              <!-- Template para a opção selecionada no campo -->
              <template #selection="{ item }">
                <span class="text-body-1">
                  <strong class="text-primary">{{ item.raw.id }}.</strong> {{ item.raw.title }}
                </span>
              </template>
            </v-select>

            <!-- Botões de Ação -->
            <div class="d-flex ga-3">
              <v-btn
                type="button"
                variant="outlined"
                color="grey-darken-1"
                size="large"
                rounded="lg"
                class="flex-1-0"
                prepend-icon="mdi-refresh"
                @click="resetForm"
              >
                Limpar
              </v-btn>

              <v-btn
                type="submit"
                color="primary"
                variant="elevated"
                size="large"
                rounded="lg"
                class="flex-1-0 font-weight-bold"
                prepend-icon="mdi-check-circle-outline"
                :disabled="!isFormValid"
              >
                Cadastrar Demanda
              </v-btn>
            </div>

          </v-form>
        </v-card>
      </v-col>
    </v-row>

    <!-- Resumo dos Dados Cadastrados (Card de Sucesso) -->
    <v-row justify="center" v-if="submittedData" class="mt-8">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="6" color="success-subtle" rounded="xl" class="pa-6 border-success">
          <div class="d-flex align-center ga-3 mb-4">
            <v-avatar color="success" size="40">
              <v-icon icon="mdi-check-all" color="white"></v-icon>
            </v-avatar>
            <div>
              <h3 class="text-h6 font-weight-bold">Demanda Cadastrada com Sucesso!</h3>
              <p class="text-caption text-medium-emphasis">Confira o resumo das informações abaixo:</p>
            </div>
          </div>

          <v-divider class="mb-4"></v-divider>

          <v-list class="bg-transparent pa-0" density="compact">
            <v-list-item class="px-0">
              <template #prepend><v-icon icon="mdi-file-document-outline" color="primary" class="mr-2"></v-icon></template>
              <v-list-item-title class="font-weight-bold">Nome da Demanda:</v-list-item-title>
              <v-list-item-subtitle class="text-body-1">{{ submittedData.demandName }}</v-list-item-subtitle>
            </v-list-item>

            <v-list-item class="px-0">
              <template #prepend><v-icon icon="mdi-card-text-outline" color="primary" class="mr-2"></v-icon></template>
              <v-list-item-title class="font-weight-bold">Número do Processo:</v-list-item-title>
              <v-list-item-subtitle class="text-body-1">{{ submittedData.processNumber }}</v-list-item-subtitle>
            </v-list-item>

            <v-list-item class="px-0">
              <template #prepend><v-icon icon="mdi-calendar" color="primary" class="mr-2"></v-icon></template>
              <v-list-item-title class="font-weight-bold">Data da Disputa:</v-list-item-title>
              <v-list-item-subtitle class="text-body-1">{{ submittedData.formattedDate }}</v-list-item-subtitle>
            </v-list-item>

            <v-list-item class="px-0">
              <template #prepend><v-icon icon="mdi-gavel" color="primary" class="mr-2"></v-icon></template>
              <v-list-item-title class="font-weight-bold">Tipo do Processo:</v-list-item-title>
              <v-list-item-subtitle class="text-body-1">
                <strong>{{ submittedData.processType.id }}. {{ submittedData.processType.title }}</strong> — {{ submittedData.processType.description }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>

    <!-- Snackbar de Notificação -->
    <v-snackbar v-model="snackbar.show" color="success" rounded="pill" location="bottom right">
      {{ snackbar.text }}
      <template #actions>
        <v-btn variant="text" icon="mdi-close" @click="snackbar.show = false"></v-btn>
      </template>
    </v-snackbar>

  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'

const formRef = ref(null)
const isFormValid = ref(false)
const menuDatePicker = ref(false)
const submittedData = ref(null)

const snackbar = ref({
  show: false,
  text: ''
})

const formData = ref({
  demandName: '',
  processNumber: '',
  disputeDate: null,
  processType: null
})

// Opções para o v-select (com índice numérico e descrição para exibir em 2 linhas)
const processTypeOptions = [
  {
    id: 1,
    title: 'Processo Cível',
    description: 'Disputas contratuais, cobranças, indenizações e responsabilidade civil.'
  },
  {
    id: 2,
    title: 'Processo Trabalhista',
    description: 'Reclamações trabalhistas, rescisões indiretas e acordos de funcionários.'
  },
  {
    id: 3,
    title: 'Processo Tributário',
    description: 'Contestações de impostos, execuções fiscais e restituições.'
  },
  {
    id: 4,
    title: 'Processo Administrativo',
    description: 'Defesas perante órgãos públicos, licitações e agências reguladoras.'
  },
  {
    id: 5,
    title: 'Processo Societário / Empresarial',
    description: 'Reorganização societária, fusões, aquisições e conflito entre sócios.'
  }
]

// Validações
const rules = {
  required: value => !!value || 'Este campo é obrigatório'
}

// Formatação amigável da Data
const formattedDisputeDate = computed(() => {
  if (!formData.value.disputeDate) return ''
  const dateObj = new Date(formData.value.disputeDate)
  if (isNaN(dateObj)) return ''
  return dateObj.toLocaleDateString('pt-BR', { timeZone: 'UTC' })
})

function submitForm() {
  if (!isFormValid.value) return

  submittedData.value = {
    demandName: formData.value.demandName,
    processNumber: formData.value.processNumber,
    disputeDate: formData.value.disputeDate,
    formattedDate: formattedDisputeDate.value,
    processType: formData.value.processType
  }

  snackbar.value = {
    show: true,
    text: 'Formulário enviado e demanda cadastrada com sucesso!'
  }
}

function resetForm() {
  if (formRef.value) {
    formRef.value.reset()
  }
  formData.value = {
    demandName: '',
    processNumber: '',
    disputeDate: null,
    processType: null
  }
  submittedData.value = null
}
</script>

<style scoped>
.max-width-600 {
  max-width: 600px;
}

.form-card {
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: var(--v-theme-surface);
}

.border-success {
  border: 1px solid rgba(76, 175, 80, 0.3);
}
</style>
