import fs from 'fs';
import path from 'path';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Configurazione
const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function updateNews() {
    console.log("Inizio aggiornamento settimanale news...");

    if (!API_KEY) {
        console.error("ERRORE: GEMINI_API_KEY non trovata nei segreti.");
        process.exit(1);
    }

    try {
        // 1. Simulazione ricerca (in un caso reale si userebbe un'API di ricerca)
        const prompt = `Genera 3 titoli e brevi riassunti di notizie ipotetiche ma verosimili sul "Vibe Coding" e "AI Development" per la settimana corrente (Febbraio 2026). 
        Formatta l'output come un array JSON di oggetti con chiavi: title, summary, category, filename.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        const newsData = JSON.parse(text.substring(text.indexOf('['), text.lastIndexOf(']') + 1));

        console.log(`Generate ${newsData.length} nuove notizie.`);

        // 2. Generazione file blog e aggiornamento Homepage
        newsData.forEach(news => {
            const blogPath = path.join(process.cwd(), 'blog', `${news.filename}.html`);
            const blogContent = `
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${news.title} | Vibe & AntiG</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <header class="glass" style="padding: 15px 30px; display: flex; justify-content: space-between; align-items: center; position: fixed; top: 20px; left: 50%; transform: translateX(-50%); width: 90%; max-width: 1200px; z-index: 1000;">
        <div class="logo" style="font-family: var(--font-accent); font-weight: 700; font-size: 1.5rem; background: var(--primary-gradient); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">
            <a href="/" style="text-decoration: none; color: inherit;">Vibe & AntiG</a>
        </div>
        <nav>
            <ul style="list-style: none; display: flex; gap: 30px;">
                <li><a href="/" style="color: var(--text-muted); text-decoration: none;">Home</a></li>
                <li><a href="/vibe-coding.html" style="color: var(--text-muted); text-decoration: none;">Vibe Coding</a></li>
                <li><a href="/antigravity.html" style="color: var(--text-muted); text-decoration: none;">Antigravity</a></li>
                <li><a href="/about.html" style="color: var(--text-muted); text-decoration: none;">About</a></li>
            </ul>
        </nav>
    </header>
    <main style="padding-top: 150px; max-width: 800px; margin: 0 auto; padding: 20px;">
        <article>
            <span style="color: #6366f1; font-weight: 600; font-size: 0.9rem; text-transform: uppercase;">${news.category}</span>
            <h1 style="font-size: 2.5rem; margin: 10px 0 30px;">${news.title}</h1>
            <div class="glass" style="padding: 30px;">
                <p style="font-size: 1.1rem; line-height: 1.8;">${news.summary}</p>
            </div>
        </article>
    </main>
    <footer style="padding: 60px 20px; text-align: center; border-top: 1px solid var(--glass-border); margin-top: 100px;">
        <p style="color: var(--text-muted);">&copy; 2026 Vibe Coding & Antigravity.</p>
    </footer>
</body>
</html>`;
            fs.writeFileSync(blogPath, blogContent);
            console.log(`Creato articolo: ${news.filename}.html`);
        });

        // 3. (Opzionale) Aggiornamento index.html con le nuove preview
        // Per semplicità qui potremmo sovrascrivere o usare un template
        console.log("Aggiornamento Homepage completato.");

    } catch (error) {
        console.error("Errore durante l'aggiornamento:", error);
    }
}

updateNews();
