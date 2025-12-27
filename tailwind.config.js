/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#030014", // Deep Void
          light: "#0F0728",   // Lighter Void
          dark: "#000000",
        },
        secondary: {
          DEFAULT: "#00F0FF", // Neon Cyan
          hover: "#00C8D6",
          dim: "rgba(0, 240, 255, 0.1)",
        },
        accent: {
          DEFAULT: "#BC13FE", // Neon Purple
          glow: "#D568FF",
          dim: "rgba(188, 19, 254, 0.1)",
        },
        surface: {
          DEFAULT: "#0F0728", // Card Background
          light: "#1A103C",
          dark: "#050210",
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Enforcing Poppins as the main font
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neon-cyan': '0 0 5px theme("colors.secondary.DEFAULT"), 0 0 20px theme("colors.secondary.dim")',
        'neon-purple': '0 0 5px theme("colors.accent.DEFAULT"), 0 0 20px theme("colors.accent.dim")',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-glow': '0 0 15px rgba(0, 240, 255, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-tech': 'linear-gradient(135deg, #00F0FF 0%, #BC13FE 100%)',
        'gradient-dark': 'linear-gradient(to bottom, #030014, #0F0728)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}
