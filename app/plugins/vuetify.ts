import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          dark: false,
          colors: {
            primary: '#6366F1',
            secondary: '#EC4899',
            accent: '#8B5CF6',
            background: '#F8FAFC',
            surface: '#FFFFFF',
            'surface-variant': '#F1F5F9',
            on_background: '#0F172A',
            on_surface: '#0F172A',
          }
        },
        dark: {
          dark: true,
          colors: {
            primary: '#818CF8',
            secondary: '#F472B6',
            accent: '#A78BFA',
            background: '#0F172A',
            surface: '#1E293B',
            'surface-variant': '#334155',
            on_background: '#F8FAFC',
            on_surface: '#F8FAFC',
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
