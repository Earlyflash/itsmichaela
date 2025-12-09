// Cloudflare Worker to serve the website
export default {
  async fetch(request) {
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
    
    // Serve headshot placeholder image
    if (url.pathname === '/headshot.jpg') {
      return new Response(HEADSHOT_PLACEHOLDER, {
        headers: {
          'Content-Type': 'image/svg+xml',
        },
      });
    }
    
    // 404 for other paths
    return new Response('Not Found', { status: 404 });
  },
};

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
            <p>&copy; ${new Date().getFullYear()} Michaela. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>`;

const CSS = `/* Reset and base styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --color-bg: #f5f5f0;
    --color-bg-alt: #e8e8e0;
    --color-text: #3a3a35;
    --color-text-light: #6a6a65;
    --color-accent: #8b8b7a;
    --color-border: #d0d0c8;
    --max-width: 1200px;
    --spacing: 2rem;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    line-height: 1.6;
    color: var(--color-text);
    background-color: var(--color-bg);
}

.container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 var(--spacing);
}

/* Header and Navigation */
header {
    background-color: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    position: sticky;
    top: 0;
    z-index: 100;
}

.nav-container {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 1rem var(--spacing);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--color-text);
    letter-spacing: -0.5px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: var(--color-text-light);
    text-decoration: none;
    font-size: 0.95rem;
    transition: color 0.2s ease;
}

.nav-links a:hover {
    color: var(--color-text);
}

/* Hero Section */
.hero {
    padding: 6rem var(--spacing);
    text-align: center;
    background: linear-gradient(135deg, var(--color-bg) 0%, var(--color-bg-alt) 100%);
}

.headshot-container {
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
}

.headshot-container {
    position: relative;
    display: inline-block;
    width: 200px;
    height: 200px;
}

.headshot {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--color-border);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: block;
    position: relative;
    z-index: 1;
    background: transparent;
}

.headshot-placeholder {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--color-bg-alt) 0%, var(--color-accent) 100%);
    border: 3px solid var(--color-border);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
}

.headshot-placeholder::after {
    content: '📷';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
    opacity: 0.5;
}

.hero-title {
    font-size: 3rem;
    font-weight: 300;
    color: var(--color-text);
    margin-bottom: 1rem;
    letter-spacing: -1px;
}

.hero-subtitle {
    font-size: 1.25rem;
    color: var(--color-text-light);
    font-weight: 300;
}

/* Sections */
.section {
    padding: 4rem var(--spacing);
}

.section-alt {
    background-color: var(--color-bg-alt);
}

.section h2 {
    font-size: 2rem;
    font-weight: 400;
    color: var(--color-text);
    margin-bottom: 1.5rem;
    letter-spacing: -0.5px;
}

.section p {
    font-size: 1.1rem;
    color: var(--color-text-light);
    line-height: 1.8;
    max-width: 700px;
}

.section p + p {
    margin-top: 1rem;
}

/* Contact Section */
.contact-email {
    margin-top: 1.5rem;
}

.contact-email a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.2s ease;
}

.contact-email a:hover {
    color: var(--color-text);
    text-decoration: underline;
}

/* Footer */
footer {
    background-color: var(--color-bg-alt);
    border-top: 1px solid var(--color-border);
    padding: 2rem var(--spacing);
    text-align: center;
}

footer p {
    color: var(--color-text-light);
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-links {
        gap: 1.5rem;
    }

    .hero {
        padding: 4rem var(--spacing);
    }

    .headshot,
    .headshot-placeholder {
        width: 150px;
        height: 150px;
    }

    .headshot-placeholder::after {
        font-size: 2.5rem;
    }

    .hero-title {
        font-size: 2rem;
    }

    .hero-subtitle {
        font-size: 1.1rem;
    }

    .section {
        padding: 3rem var(--spacing);
    }

    .section h2 {
        font-size: 1.75rem;
    }
}`;

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

