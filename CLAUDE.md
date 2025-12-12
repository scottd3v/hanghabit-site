# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for **Hang Habit**, a dead hang tracker iOS/watchOS app. This is a simple Next.js 15 static site deployed to Cloudflare Pages.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

### Cloudflare Pages Deployment

The site uses `@cloudflare/next-on-pages` with `wrangler.toml` configured for Cloudflare Pages. The `nodejs_compat` compatibility flag is enabled.

## Architecture

- **Framework:** Next.js 15 with App Router, React 19
- **Styling:** Tailwind CSS 4 with CSS custom properties for theming
- **Fonts:** DM Sans (body) and DM Serif Display (serif accents) via `next/font`

### File Structure

```
src/app/
├── layout.tsx     # Root layout with fonts, metadata, JSON-LD schema
├── page.tsx       # Homepage - hero, features grid, poem, footer
├── globals.css    # Theme variables, glass morphism, animations
├── privacy/       # Privacy policy page
└── support/       # Support/FAQ page
```

### Theming

Dark theme only. Colors defined as CSS custom properties in `globals.css`:
- `--background`, `--text-primary`, `--text-secondary`, `--text-muted`
- `--accent-coral`, `--accent-teal`, `--accent-gold`
- `--glass-bg`, `--glass-border` for glassmorphism effect

### Key Patterns

- Inline `style={{ color: "var(--text-primary)" }}` used throughout for theming
- `.glass` utility class for card backgrounds
- SEO configured: Open Graph, Twitter cards, JSON-LD schema for SoftwareApplication
- Path alias `@/*` maps to `./src/*`
