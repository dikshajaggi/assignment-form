/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      dark: {
        1: "#1C1F2E"
      },
      btn: "#0E78F9",
      submitBtn: "#0BDA51"
    }
  },
};
export const plugins = [];