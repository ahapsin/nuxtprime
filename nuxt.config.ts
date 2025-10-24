import Aura from "@primevue/themes/aura";
import {definePreset} from "@primevue/themes";
// https://nuxt.com/docs/api/configuration/nuxt-config
const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            DEFAULT: "#213B94",
            50: "#889DE4",
            100: "#778FE1",
            200: "#5674D9",
            300: "#3558D2",
            400: "#2848B5",
            500: "#213B94",
            600: "#172966",
            700: "#0D1638",
            800: "#02040A",
            900: "#000000",
            950: "#000000",
        },
        secondary: {
            DEFAULT: "#FF6600",
            50: "#FFD4B8",
            100: "#FFC8A3",
            200: "#FFAF7A",
            300: "#FF9752",
            400: "#FF7E29",
            500: "#FF6600",
            600: "#C75000",
            700: "#8F3900",
            800: "#572300",
            900: "#1F0C00",
            950: "#030100",
        },
    },
});
export default defineNuxtConfig({
    modules: [
        "@primevue/nuxt-module",
        "@pinia/nuxt",
        "@nuxt/icon",
        "@nuxt/image",
        "@vueuse/nuxt",
    ],
    primevue: {
        options: {
            theme: {
                preset: MyPreset,
            },
        },
    },
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    compatibilityDate: "2024-11-01",
    devtools: {enabled: true},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    css: ["~/assets/styles/base.css"],
    runtimeConfig: {
        public: {
            apiBase: "https://asdasdas.com",
        }
    }
});
