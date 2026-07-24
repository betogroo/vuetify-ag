<template>
  <v-container class="fill-height justify-center py-10">
    <v-responsive max-width="520">
      <!-- Counter Card -->
      <v-card
        elevation="8"
        rounded="xl"
        class="counter-card pa-6 text-center"
      >
        <div class="d-flex justify-center align-center mb-3">
          <v-chip color="primary" size="small" variant="flat" class="font-weight-semibold px-3">
            Contador Interativo
          </v-chip>
        </div>

        <h1 class="text-h4 font-weight-bold mb-1">
          Painel do Contador
        </h1>
        <p class="text-subtitle-2 text-medium-emphasis mb-6">
          Use os botões para alterar o valor ou alterne o tema na barra superior
        </p>

        <!-- Number Display Box -->
        <v-sheet
          rounded="lg"
          class="counter-display pa-8 mb-6 d-flex flex-column align-center justify-center elevation-1"
          :color="isDark ? 'surface-variant' : 'grey-lighten-4'"
        >
          <span class="text-caption text-uppercase text-medium-emphasis font-weight-bold mb-1">
            Valor Atual
          </span>
          <div
            class="counter-value font-weight-black text-h1 my-2"
            :class="counterColorClass"
          >
            {{ count }}
          </div>
        </v-sheet>

        <!-- Action Controls -->
        <div class="d-flex align-center justify-space-between ga-3">
          <v-btn
            size="x-large"
            color="error"
            variant="tonal"
            rounded="lg"
            class="flex-grow-1 font-weight-bold action-btn"
            prepend-icon="mdi-minus"
            @click="decrement"
          >
            Decrementar
          </v-btn>

          <v-btn
            icon="mdi-refresh"
            size="large"
            variant="outlined"
            color="grey"
            title="Reiniciar Contador"
            @click="reset"
          ></v-btn>

          <v-btn
            size="x-large"
            color="primary"
            variant="elevated"
            rounded="lg"
            class="flex-grow-1 font-weight-bold action-btn"
            append-icon="mdi-plus"
            @click="increment"
          >
            Incrementar
          </v-btn>
        </div>
      </v-card>

      <!-- Shortcut Banner -->
      <div class="mt-6 text-center">
        <v-btn
          to="/cards"
          variant="tonal"
          color="primary"
          rounded="pill"
          append-icon="mdi-arrow-right"
        >
          Explorar Galeria com 10 Cards Diferentes
        </v-btn>
      </div>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const count = ref(0)

const isDark = computed(() => theme.global.name.value === 'dark')

function increment() {
  count.value++
}

function decrement() {
  count.value--
}

function reset() {
  count.value = 0
}

const counterColorClass = computed(() => {
  if (count.value > 0) return 'text-success'
  if (count.value < 0) return 'text-error'
  return 'text-primary'
})
</script>

<style scoped>
.counter-card {
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.counter-card:hover {
  transform: translateY(-2px);
}

.counter-display {
  transition: all 0.3s ease;
}

.counter-value {
  transition: scale 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
  letter-spacing: -2px !important;
}

.action-btn {
  transition: transform 0.15s ease !important;
}

.action-btn:active {
  transform: scale(0.96);
}
</style>
