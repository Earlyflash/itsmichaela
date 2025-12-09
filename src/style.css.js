// CSS file exported as a string for Cloudflare Workers
export const CSS = `/* Reset and base styles */
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
    position: relative;
    display: inline-block;
    width: 200px;
    height: 200px;
    margin-bottom: 2rem;
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

/* Work Section */
.work-links {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 700px;
}

.work-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 1.5rem;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    text-decoration: none;
    color: var(--color-text);
    transition: all 0.2s ease;
}

.work-link:hover {
    background-color: var(--color-bg-alt);
    border-color: var(--color-accent);
    transform: translateX(4px);
}

.work-link-title {
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--color-text);
}

.work-link-format {
    font-size: 0.85rem;
    color: var(--color-text-light);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 0.25rem 0.75rem;
    background-color: var(--color-bg-alt);
    border-radius: 3px;
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
}
`;

