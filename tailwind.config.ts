import type { Config} from "tailwindcss"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,tx,jsx,tsx,mdx}",
        "./srt/app/**/*.{js,tx,jsx,tsx,mdx}",
    ],
    theme:{
        extend:{
            maxWidth: {
                'container' : '78rem'
            }
        },
    },
    plugins:[]
    ,
};

export default config;