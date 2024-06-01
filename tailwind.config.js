/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        accent : {
          DEFAULT : '#4fd1c5',
        }
      },
      container : {
        center : true,
        padding : '2rem',
        screens: {
          sm: '100%', 
          md: '100%', 
          lg: '1024px', 
          xl: '1280px', 
          '2xl': '1536px',
        },
      }
    },
  },
  plugins: [],
}

