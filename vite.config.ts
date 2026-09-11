import tailwindcss from '@tailwindcss/vite';
import vinext from 'vinext';
import { nitro } from 'nitro/vite';
import { defineConfig } from 'vite';

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === 'seatbelt';

export default defineConfig(({ command }) => ({
  server: isCodexSeatbeltSandbox
    ? { watch: { useFsEvents: false, usePolling: true } }
    : undefined,
  // Nitro replaces dev runners; let Vinext own development request handling.
  plugins: [tailwindcss(), vinext(), ...(command === 'build' ? [nitro()] : [])],
}));
