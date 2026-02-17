import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#00475F',
          hover: '#003a4e',
          accent: '#0070A6',
          light: '#EFF3F5',
          muted: '#9CD5EC',
          dark: '#16262E',
        },
      },
    },
  },
  plugins: [],
};

export default config;
