module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "error-red": "#FF3333",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("flowbite/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
