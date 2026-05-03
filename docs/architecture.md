# Architecture

## Overview

`converge-web` is a Next.js App Router landing and download site for the native Converge macOS app.

## Components

- `app/`: root layout, home page, and install route.
- `components/landing/`: hero, screenshots, download, and explanatory sections.
- `components/ui/`: reusable UI primitives.
- `lib/`: shared utilities.

## Data Flow

1. The landing page presents product copy and screenshots.
2. The install route resolves a DMG URL from environment configuration, GitHub Releases, or Supabase Storage according to the existing template.
3. Download CTAs use that route or configured direct URL.

## Trade-offs

- Separating the site from the desktop app lets release and marketing copy evolve independently.
- Download reliability depends on correct release environment variables.
