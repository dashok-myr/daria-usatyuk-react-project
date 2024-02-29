/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#103E72",
        yellow: "#F69C08",
        lime: "#238A5F",
      },
    },
  },
};
