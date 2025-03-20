import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue"; //add this line
// import PrimeUI from 'tailwindcss-primeui';
// import tailwindcss from '@tailwindcss-primeui'

export default defineConfig({
    plugins: [
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
        laravel({
            input: "resources/js/admin.js",
            refresh: true,
        }),

        tailwindcss(),
    ],
    build: {
        chunkSizeWarningLimit: 2000,
    },
});
