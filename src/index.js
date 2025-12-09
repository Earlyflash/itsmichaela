// Cloudflare Worker to serve the website
import { CSS } from './style.css.js';
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Serve the main HTML page
    if (url.pathname === '/' || url.pathname === '/index.html') {
      return new Response(HTML, {
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
    
    // Check if this is a static asset request (images, etc.)
    const staticExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.ico', '.pdf'];
    const isStaticAsset = staticExtensions.some(ext => url.pathname.toLowerCase().endsWith(ext));
    
    if (isStaticAsset) {
      // Use Workers Sites asset handler to serve static files from public/
      try {
        return await getAssetFromKV(
          {
            request,
            waitUntil: ctx.waitUntil.bind(ctx),
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
          }
        );
      } catch (e) {
        // If asset not found, return 404
        return new Response('Not Found', { status: 404 });
      }
    }
    
    // 404 for other unknown routes
    return new Response('Not Found', { status: 404 });
  },
};

const CURRENT_YEAR = new Date().getFullYear();

const HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Michaela - Comedian & Comedy Writer</title>
    <link rel="stylesheet" href="/style.css">
</head>
<body>
    <header>
        <nav>
            <div class="nav-container">
                <h1 class="logo">It's Michaela</h1>
                <ul class="nav-links">
                    <li><a href="#about">About</a></li>
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
                <h2>About</h2>
                <p>Michaela is a comedian and comedy writer known for her sharp wit and unique perspective on everyday life. With a background in [your background], she brings fresh humor to the stage and page.</p>
            </div>
        </section>

        <section id="shows" class="section section-alt">
            <div class="container">
                <h2>Live Shows</h2>
                <p>Check back soon for upcoming performances and comedy shows.</p>
                <!-- Add upcoming shows here -->
            </div>
        </section>

        <section id="writing" class="section">
            <div class="container">
                <h2>Writing</h2>
                <p>Michaela's comedy writing has been featured in various publications and projects. Her work combines observational humor with clever wordplay.</p>
                <!-- Add writing credits/portfolio here -->
            </div>
        </section>

        <section id="contact" class="section section-alt">
            <div class="container">
                <h2>Contact</h2>
                <p>For bookings, collaborations, or just to say hello:</p>
                <p class="contact-email">Email: <a href="mailto:hello@itsmichaela.com">hello@itsmichaela.com</a></p>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; ${CURRENT_YEAR} Michaela. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

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

