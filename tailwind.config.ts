import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
       "gotham-black": "gotham-black",
       "gotham-bold": "gotham-bold",
       "gotham-book": "gotham-book",
       "gotham-light": "gotham-light",
    },
    colors: {
      'dark-grey': '#333333',
      'light-grey': '#808080',
      'yellow': '#FFB612',
      'red': '#dc0a17',
      'green': '#2FC022',
    },
  },
  plugins: [],
};
export default config;
