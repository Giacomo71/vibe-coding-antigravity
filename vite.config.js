import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    base: './',
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
                antigravity: resolve(__dirname, 'antigravity.html'),
                'vibe-coding': resolve(__dirname, 'vibe-coding.html'),
                'blog-5-tool': resolve(__dirname, 'blog/5-tool-iniziare.html'),
                'blog-ai-potenzia': resolve(__dirname, 'blog/ai-potenzia-dev.html'),
                'blog-antigravity-attrito': resolve(__dirname, 'blog/antigravity-attrito.html'),
                'blog-benvenuti': resolve(__dirname, 'blog/benvenuti-vibe-coding.html'),
                'blog-enterprise': resolve(__dirname, 'blog/enterprise-vibe-coding-2026.html'),
                'blog-futuro': resolve(__dirname, 'blog/futuro-programmazione.html'),
                'blog-openai-macos': resolve(__dirname, 'blog/openai-codex-macos-app.html'),
                'blog-sicurezza': resolve(__dirname, 'blog/sicurezza-vibe-coding.html')
            }
        }
    }
})
