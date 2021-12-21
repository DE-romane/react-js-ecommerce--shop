module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    maxWidth: {
      sp: "7rem",
    },
    fontSize: {
      s: ["8px", "12px"],
      sm: ["14px", "20px"],
      base: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["1.25rem", "1.75rem"],
      xll: ["2rem", "3rem"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
  ],
  corePlugins: {
    // ...
    overflow: false,
  },
};
