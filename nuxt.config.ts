// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-medusa', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],

    image: {
        domains: ['medusa-public-images.s3.eu-west-1.amazonaws.com']
    }
})
