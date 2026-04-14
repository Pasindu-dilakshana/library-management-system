/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui"]
      },
      colors: {
        primary: {
          50: "#ecfeff",
          100: "#cffafe",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e"
        },
        ink: {
          50: "#f8fafc",
          100: "#f1f5f9",
          800: "#1e293b",
          900: "#0f172a"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(15, 23, 42, 0.08)"
      },
      backgroundImage: {
        "hero-mesh":
          "radial-gradient(circle at top left, rgba(20,184,166,0.22), transparent 35%), radial-gradient(circle at top right, rgba(59,130,246,0.18), transparent 30%), linear-gradient(135deg, rgba(248,250,252,1), rgba(236,254,255,0.9))"
      }
    }
  },
  plugins: []
};
