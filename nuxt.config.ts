/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { transformerDirectives, transformerVariantGroup } from "unocss";

export default defineNuxtConfig({
    devServer: {
        port: 3000,
    },
    modules: [
        "@nuxtjs/google-fonts",
        "@vueuse/nuxt",
        "@unocss/nuxt",
        "@pinia/nuxt",
    ],
    unocss: {
        // presets
        preflight: true,
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        transformers: [transformerDirectives(), transformerVariantGroup()],
        // core options
        shortcuts: [],
        rules: [
            [
                /^text-(.*)$/,
                ([, c], { theme }) => {
                    //@ts-ignore
                    if (theme.colors[c]) {
                        return {
                            //@ts-ignore
                            color: theme.colors[c],
                        };
                    }
                },
            ],
        ],

        theme: {
            colors: {
                neutral: "rgba(var(--neutral))",
                mainAccent: "rgba(var(--mainAccent))",
                main: "rgba(var(--main))",
                mainWeakAnti: "rgba(var(--mainWeakAnti))",
                antiMain: "rgba(var(--antiMain))",
                antiMainAccent: "rgba(var(--antiMainAccent))",
                btnMain: "rgba(var(--btnMain))",
                btnMainLight: "rgba(var(--btnMainLight))",
                badgeMain: "rgba(var(--badgeMain))",
                badgeMainLight: "rgba(var(--badgeMainLight))",
                btnSec: "rgba(var(--btnSec))",
                btnSecLight: "rgba(var(--btnSecLight))",
            },
        },
    },
    // buildModules: ["@nuxtjs/google-fonts"],
    css: [
        "@/assets/styles/palette.scss",
        "@/assets/styles/global.scss",
        "@/assets/styles/cyber.scss",
        "@/assets/styles/animation.scss",
    ],
    googleFonts: {
        display: "swap",
        families: {
            Orbitron: [100, 400],
            Inter: [100, 300],
            Lato: [100, 300],
            Raleway: {
                wght: [100, 400],
            },
        },
    },

    hooks: {
        "vite:extendConfig": function (config: any, { isServer }: any) {
            if (isServer) {
                // Workaround for netlify issue
                // https://github.com/nuxt/framework/issues/6204
                config.build.rollupOptions.output.inlineDynamicImports = true;
            }
        },
    },
});
