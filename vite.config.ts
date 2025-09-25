import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Désactiver les preloads automatiques pour éviter les warnings
        experimentalMinChunkSize: 1000,
        manualChunks: (id) => {
          // Regrouper les dépendances node_modules dans un chunk séparé
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
}));
