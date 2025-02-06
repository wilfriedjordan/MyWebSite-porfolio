import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPurple: "#f5f3ff",
        primary: "#4d5055",
        secondary: "#6440FB",
        darkBackground: "#2B1C55",
        myGray: "#F7F8FB",
        myTextGray: "#afafaf",
        myPurpleText: "#6A7A99",
        textPojectList: "#767676",
        titleProjectList: "#343a40",
        LinkColor: "#140342",
        btnBackground: "#007bff",
      },
      boxShadow: {
        "custom-shadow": "40px 60px 150px 0px #3B267BB2",
      },
      screens: {
        "max-ssm": { max: "447px" }, // Crée un point de rupture max-width: 640px
        "max-sm": { max: "640px" }, // Crée un point de rupture max-width: 640px
        "max-mdd": { max: "850px" }, // Crée un point de rupture max-width: 870px
        "max-md": { max: "768px" }, // Crée un point de rupture max-width: 768px
        "max-lg": { max: "1024px" }, // Crée un point de rupture max-width: 1024px
        "max-xl": { max: "1280px" }, // Crée un point de rupture max-width: 1280px
      },
    },
  },
  plugins: [],
} satisfies Config;
