import { defineConfig } from "windicss/helpers"

export default defineConfig({
  plugins: [require("windicss/plugin/typography")],
  safelist: ["bg-purple-500", "bg-yellow-300", "bg-red-400", "bg-gray-200"],
})
