// Cloudflare Worker to serve the website
import { CSS } from './style.css.js';
import { aboutContent } from './content/about.js';
import { workContent } from './content/work.js';
import { showsContent } from './content/shows.js';
import { writingContent } from './content/writing.js';
import { contactContent } from './content/contact.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    // Serve the main HTML page
    if (url.pathname === '/' || url.pathname === '/index.html') {
      const currentYear = new Date().getFullYear();
      const html = getHTML(currentYear);
      return new Response(html, {
        headers: {
          'Content-Type': 'text/html;charset=UTF-8',
        },
      });
    }
    
    // Serve CSS
    if (url.pathname === '/style.css') {
      return new Response(CSS, {
        headers: {
          'Content-Type': 'text/css',
        },
      });
    }
    
    // Serve favicon.ico - serve the SVG favicon instead
    if (url.pathname === '/favicon.ico') {
      if (env.ASSETS) {
        // Serve the SVG favicon when favicon.ico is requested
        try {
          const faviconRequest = new Request(new URL('/favicon.svg', request.url));
          return await env.ASSETS.fetch(faviconRequest);
        } catch (e) {
          // If SVG not found, return 204 No Content (standard for missing favicon)
          return new Response(null, { status: 204 });
        }
      }
      return new Response(null, { status: 204 });
    }
    
    // Check if this is a static asset request (images, documents, etc.)
    const staticExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico', '.pdf', '.txt'];
    const isStaticAsset = staticExtensions.some(ext => url.pathname.toLowerCase().endsWith(ext));
    
    if (isStaticAsset && env.ASSETS) {
      // Use the ASSETS binding to serve static files from public/
      return env.ASSETS.fetch(request);
    }
    
    // 404 for other unknown routes
    return new Response('Not Found', { status: 404 });
  },
};

function getHTML(currentYear) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Michaela - Comedian & Comedy Writer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="alternate icon" href="/favicon.ico">
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <header>
        <nav>
            <div class="nav-container">
                <h1 class="logo">It's Michaela</h1>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Work</a></li>
                    <li><a href="#shows">Shows</a></li>
                    <li><a href="#writing">Writing</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section id="hero" class="hero">
            <div class="container">
                <div class="headshot-container">
                    <div class="headshot-placeholder"></div>
                    <img src="/headshot.jpg" alt="Michaela" class="headshot" onerror="this.style.display='none';">
                </div>
                <h2 class="hero-title">Comedian & Comedy Writer</h2>
                <p class="hero-subtitle">Making people laugh, one joke at a time</p>
            </div>
        </section>

        <section id="about" class="section">
            <div class="container">
${aboutContent}
            </div>
        </section>

        <section id="work" class="section section-alt">
            <div class="container">
${workContent}
            </div>
        </section>

        <section id="shows" class="section section-alt">
            <div class="container">
${showsContent}
            </div>
        </section>

        <section id="writing" class="section">
            <div class="container">
${writingContent}
            </div>
        </section>

        <section id="contact" class="section section-alt">
            <div class="container">
${contactContent}
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; ${currentYear} Michaela. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;
}

const HEADSHOT_PLACEHOLDER = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#e8e8e0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b8b7a;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="200" height="200" rx="100" fill="url(#bgGradient)"/>
  <circle cx="100" cy="80" r="30" fill="#6a6a65" opacity="0.6"/>
  <path d="M 60 140 Q 60 120 80 120 L 120 120 Q 140 120 140 140 L 140 180 Q 140 190 130 190 L 70 190 Q 60 190 60 180 Z" fill="#6a6a65" opacity="0.6"/>
</svg>`;

