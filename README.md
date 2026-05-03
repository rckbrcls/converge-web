# Converge Web

> **Status:** Active
> This project is currently maintained as the public web surface for Converge.

Landing and download site for Converge, a native macOS Pomodoro app built for focused work.

## Summary

- [What it is](#what-it-is)
- [Goals](#goals)
- [Page structure](#page-structure)
- [Project map](#project-map)
- [Current state](#current-state)
- [Working notes](#working-notes)

## What it is

`converge-web` is the public site that explains Converge and points users to the macOS download. It is separate from the native app so product marketing, screenshots, and install routing can evolve without touching the desktop codebase.

## Goals

- Present Converge as a calm desktop-first focus tool.
- Explain why a native macOS Pomodoro app is useful.
- Show screenshots and product flow.
- Expose a download route that can be backed by GitHub Releases or another DMG URL.

## Page structure

- Hero with interactive visual background.
- How-it-works section for the focus flow.
- Screenshots section for product proof.
- Desktop rationale section.
- Download section and install route.

## Project map

```text
converge-web/
├── app/                # Next.js routes, layout, and install route
├── components/landing/ # Hero, screenshots, download, and explanatory sections
├── components/ui/      # UI primitives
├── lib/                # Shared utilities
└── package.json
```

## Current state

The site is a focused Next.js landing page. It still needs `NEXT_PUBLIC_DMG_DOWNLOAD_URL` configured to make download buttons point at the right release artifact.

## Working notes

- Keep the site aligned with the native app in `converge/converge-desktop` or `converge-rckbrcls`.
- Do not describe unreleased desktop features as shipped.
- Keep the download URL externalized through environment configuration.
