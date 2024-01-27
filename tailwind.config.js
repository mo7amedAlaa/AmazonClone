/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        container: '1440px',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        titleFont: 'Roboto',
        bodyFont: 'Poppins',
      },
      colors: {
        amazon_blue: '#131921',
        amazon_light: '#232F3E',
        amazon_yellow: '#febd69',
        whiteText: '#ffffff',
        lightText: '#ccc',
        quantity_box: '#F0F2F2',
        footerBottom: '#131A22',
      },
    },
  },
  plugins: [],
};
