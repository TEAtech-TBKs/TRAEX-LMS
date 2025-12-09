/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'rgba(0, 1, 26, 1)',
        'background': 'rgba(248, 248, 255, 1)',
        'primary': 'rgba(5, 13, 251, 1)',
        'secondary': 'rgba(253, 136, 116, 1)',
        'accent': 'rgba(252, 221, 74, 1)',
      },
      fontSize: {
        'course-details-heading-small' : ['13px', '18px'],
        'course-details-heading-large' : ['18px', '22px'],
        'home-heading-small' : ['28px', '34px'],
        'home-heading-large' : ['48px', '56px'],
        'default': ['15px', '21pxy']
      },
      gridTemplateColumns:{
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      }, 
      spacing: {
        'section-height' : '500px',
      },
      maxWidth: {
        'course-card' : '424px',
      },
      boxShadow: {
        'custom-card' : '0 4px 15px 2px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}