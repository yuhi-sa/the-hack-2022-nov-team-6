/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        base: '#b2c4dd',
        link: '#51cbda',
        bg: '#0f172a',
        // NOTE: 必要になった時のための primary カラーセット
        // primary: {
        //   100: '#E0D8CC', // 使用: text-primary-100, bg-primary-100
        //   200: '#C1B199',
        //   light: '#A38A66',
        //   300: '#A38A66',
        //   400: '#846333',
        //   DEFAULT: '#653C00',
        //   500: '#653C00',
        //   600: '#513000',
        //   dark: '#3D2400',
        //   700: '#3D2400',
        //   800: '#281800',
        //   900: '#140C00',
        // },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Liberation Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
