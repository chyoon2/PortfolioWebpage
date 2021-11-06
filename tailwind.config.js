module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'className'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: "#103c50",
      }),
      backgroundImage: {
        insta:
          "url('https://www.howtogeek.com/wp-content/uploads/2020/04/Instagram-feed-on-browser.png?trim=1,1&bg-color=000&pad=1,1')",
      },
    },
  },
  variants: {},
  plugins: [],
};
