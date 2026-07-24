<template>
  <v-app>
    <!-- Main Header Bar -->
    <v-app-bar
      elevation="1"
      class="px-4"
      :color="isDark ? 'surface' : 'white'"
    >
      <template #prepend>
        <v-avatar color="primary" variant="tonal" class="mr-3" size="40">
          <v-icon icon="mdi-vuetify" color="primary"></v-icon>
        </v-avatar>
      </template>

      <v-app-bar-title class="font-weight-bold tracking-tight">
        Nuxt 4 <span class="text-primary">+ Vuetify 3</span>
      </v-app-bar-title>

      <!-- Navigation Links -->
      <div class="d-flex ga-2 ml-4">
        <v-btn
          to="/"
          variant="text"
          rounded="pill"
          prepend-icon="mdi-counter"
          active-class="text-primary font-weight-bold"
        >
          Contador
        </v-btn>

        <v-btn
          to="/cards"
          variant="text"
          rounded="pill"
          prepend-icon="mdi-view-dashboard-variant"
          active-class="text-primary font-weight-bold"
        >
          Galeria de Cards
        </v-btn>

        <v-btn
          to="/lists"
          variant="text"
          rounded="pill"
          prepend-icon="mdi-format-list-bulleted-square"
          active-class="text-primary font-weight-bold"
        >
          Galeria de Listas
        </v-btn>

        <v-btn
          to="/form"
          variant="text"
          rounded="pill"
          prepend-icon="mdi-form-select"
          active-class="text-primary font-weight-bold"
        >
          Formulário
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <!-- Theme Switch Button -->
      <v-btn
        icon
        variant="tonal"
        :color="isDark ? 'amber-lighten-2' : 'indigo-darken-1'"
        @click="toggleTheme"
        :title="isDark ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro'"
        aria-label="Alternar Tema"
        class="theme-toggle-btn"
      >
        <v-icon :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"></v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main class="main-content-bg">
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const isDark = computed(() => theme.global.name.value === 'dark')

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>

<style>
body {
  font-family: 'Plus Jakarta Sans', sans-serif !important;
}

.main-content-bg {
  background: radial-gradient(circle at top center, rgba(99, 102, 241, 0.06), transparent 70%);
  min-height: 100vh;
}

.theme-toggle-btn {
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.theme-toggle-btn:hover {
  transform: rotate(15deg);
}
</style>
