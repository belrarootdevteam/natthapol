// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        {
          name: 'description',
          content: 'ประธานสภาเด็กแล้วเยาวชน เขต ภาษีเจริญ'
        }
      ]
    }
  }
})
