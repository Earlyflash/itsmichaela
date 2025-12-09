# itsmichaela

A simple, clean website for comedian and comedy writer Michaela, hosted on Cloudflare Workers.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run locally for development:
```bash
npm run dev
```

3. Deploy to Cloudflare Workers:
```bash
npm run deploy
```

## Configuration

The site is configured in `wrangler.toml`. To deploy to `itsmichaela.com`, make sure your Cloudflare account has the domain configured and update the worker route accordingly.

## Features

- Simple, clean design with muted colors
- Responsive layout
- Sections for:
  - About
  - Live Shows
  - Writing
  - Contact

## Customization

Edit `src/index.js` to customize the HTML content and styling. The CSS is embedded in the worker for simplicity, but can be extracted to a separate file if needed.