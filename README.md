# Converge Web

> **Status:** Active
> This project is currently maintained as the public web surface for Converge.

Landing and download site for Converge, a native macOS Pomodoro app built for focused work.

## Summary

- Next.js public website for Converge, the native macOS Pomodoro app.
- Solves product explanation, download routing, install command presentation, screenshots, and marketing/support copy.
- Main stack: Next.js, React, TypeScript, landing-page sections, public assets, and project metadata.
- Current status: active web companion to the desktop app.
- Technical value: keeps download and product-copy concerns separate from the SwiftUI desktop app.

## Overview

`converge-web` is the public site that explains Converge and points users to the macOS download. It is separate from the native app so product marketing, screenshots, and install routing can evolve without touching the desktop codebase.

## Motivation

- Present Converge as a calm desktop-first focus tool.
- Explain why a native macOS Pomodoro app is useful.
- Show screenshots and product flow.
- Expose a download route that can be backed by GitHub Releases or another DMG URL.

## Features

- Hero with interactive visual background.
- How-it-works section for the focus flow.
- Screenshots section for product proof.
- Desktop rationale section.
- Download section and install route.

## Project Structure

```text
converge-web/
├── app/                # Next.js routes, layout, and install route
├── components/landing/ # Hero, screenshots, download, and explanatory sections
├── components/ui/      # UI primitives
├── lib/                # Shared utilities
└── package.json
```

## Current Status

The site is a focused Next.js landing page. It still needs `NEXT_PUBLIC_DMG_DOWNLOAD_URL` configured to make download buttons point at the right release artifact.

## Known Limitations

- Keep the site aligned with the native app in `converge/converge-desktop` or `converge-rckbrcls`.
- Do not describe unreleased desktop features as shipped.
- Keep the download URL externalized through environment configuration.
