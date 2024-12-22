/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transformOrigin: {
        gpu: "translate3d(0,0,0)",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover", "focus", "group-hover"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
