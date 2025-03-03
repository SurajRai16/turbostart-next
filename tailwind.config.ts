import type { Config } from "tailwindcss";

const plugin = require("tailwindcss/plugin");

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
  },
  plugins: [
    plugin(function ({ addComponents }: any) {
      addComponents({
        ".btn-white-rounded": {
          padding: ".75rem  1.5rem",
          borderRadius: "9999px",
          // fontSize: "18px",
          fontWeight: "700",
          backgroundColor: "#000",
          color: "#a3aad0",
          border: "solid 1px #a3aad0",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#000",
            border: "none",
            // boxShadow: "3px 3px 15px #33e2ffa6, -3px -3px 15px #c341ffa6",
          },
        },
      });
    }),
  ],
};
export default config;
