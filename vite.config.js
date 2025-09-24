import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // Make sure it matches package.json

export default defineConfig({
  plugins: [react()],
  base: '/ecommerce/', // ✅ This must match your Tomcat context
});
