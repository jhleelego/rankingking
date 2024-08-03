import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'custom-md': '1000px',
      },
      colors: {
        signalRed: '#FF0000', // 신호등 붉은색
        signalYellow: '#FFFF00', // 신호등 노란색
        signalBlue: '#0000FF', // 신호등 푸른색
      },
    },
  },
  plugins: [],
}
export default config
