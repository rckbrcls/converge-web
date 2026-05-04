# Converge Web

Converge Web is the public website for Converge, a native macOS Pomodoro app focused on keeping the timer on the desktop instead of on a phone.

This repository contains a single Next.js App Router application. It is responsible for the product landing page, screenshots, installation command, and the `/install` route that serves the shell installer used by the website.

## Current Status

The project is an active public web surface for the Converge desktop app. It is not the desktop app itself.

The current codebase does not include a database, authentication, user accounts, server-side business data, automated tests, CI/CD workflows, or a deployment provider configuration. Those should not be documented as existing project features unless they are added to the repository.

## Features

- Product landing page for Converge.
- Full-screen scrolling sections for hero, feature explanation, screenshots, desktop rationale, and download.
- Interactive hero background rendered through a client-side p5.js script loaded from cdnjs.
- Screenshot gallery backed by static images in `public/assets/`.
- Public installation command displayed with a copy button.
- `/install` route that serves `public/install.sh` as a shell script.
- Browser auto-translation protection through `app/layout.tsx`, including `lang="en"`, Google `notranslate` metadata, and `translate="no"` on the document body.

## Technology Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 App Router |
| UI runtime | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 with shadcn UI conventions |
| UI primitives | Local components in `components/ui/` |
| Icons | `lucide-react` |
| Animation | `motion` |
| Package manager | pnpm |
| Installer delivery | Next.js route handler serving `public/install.sh` |

## Project Structure

```text
converge-web/
|-- app/
|   |-- install/route.ts     # GET /install route that serves public/install.sh
|   |-- globals.css          # Tailwind, shadcn theme tokens, and global styles
|   |-- layout.tsx           # Root metadata, fonts, language, and translation controls
|   `-- page.tsx             # Landing page section composition
|-- components/
|   |-- landing/             # Product-specific landing page sections
|   `-- ui/                  # Reusable UI primitives
|-- lib/
|   `-- utils.ts             # Shared className utility
|-- public/
|   |-- assets/              # Product screenshots used by the landing page
|   `-- install.sh           # macOS installer script served by /install
|-- components.json          # shadcn configuration
|-- next.config.ts           # Next.js configuration
|-- package.json             # Scripts and dependencies
|-- pnpm-lock.yaml           # Locked dependency graph
|-- pnpm-workspace.yaml      # Single-package pnpm workspace metadata
`-- tsconfig.json            # TypeScript and Next.js compiler settings
```

## Main Application Flow

`app/page.tsx` composes the landing page from focused sections:

- `components/landing/HeroSection.tsx` renders the Converge brand, GitHub link, focus call-to-action, and interactive background.
- `components/landing/HowItWorksSection.tsx` describes the desktop app capabilities: timer, statistics, history, menu bar controls, notifications, and themes.
- `components/landing/ScreenshotsSection.tsx` displays the screenshot assets from `public/assets/pomodoro.png`, `public/assets/stats.png`, and `public/assets/history.png`.
- `components/landing/WhyDesktopSection.tsx` explains the desktop-first product decision and links to external research references.
- `components/landing/DownloadSection.tsx` shows the installation command and links to `https://github.com/polterware/converge`.

Shared section behavior, including parallax motion and full-screen layout, lives in `components/landing/ParallaxSection.tsx`.

## Installation Route

The site exposes one route handler beyond the landing page:

```text
GET /install
```

`app/install/route.ts` reads `public/install.sh` from disk and returns it with:

```http
Content-Type: text/x-shellscript
Content-Disposition: inline; filename=install.sh
```

If the script cannot be read, the route returns a JSON error with HTTP status `500`.

The download section displays this command:

```bash
curl -fsSL https://converge.polterware.com/install | bash
```

## Installer Behavior

`public/install.sh` is a macOS-oriented installer for the native Converge app. It:

- Queries GitHub Releases for `polterware/converge`.
- Installs the latest release by default.
- Supports `--version <version>` to install a specific release tag.
- Selects a `.zip` asset, preferring universal builds and then architecture-specific builds.
- Requires `python3` to parse GitHub API responses.
- Downloads the selected asset with `curl`.
- Validates the downloaded file size against the GitHub release asset size when available.
- Extracts the archive with `ditto`.
- Finds the first `.app` bundle in the extracted archive.
- Installs the app into `/Applications` when writable, otherwise into `~/Applications`.
- Removes an existing app bundle at the target path before copying the new one.
- Attempts to remove the `com.apple.quarantine` extended attribute after installation.

Because the public install command pipes a shell script into `bash`, any change to `public/install.sh` should be reviewed carefully before release.

## Prerequisites

For website development:

- Node.js compatible with Next.js 16.
- pnpm.

For the installer script itself:

- macOS.
- `curl`.
- `python3`.
- `ditto`.
- `stat`.
- `find`.
- Optional: `xattr`, used to remove quarantine metadata when available.

## Setup

Install dependencies:

```bash
pnpm install
```

No required environment variables were identified in the current codebase.

## Available Scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Starts the Next.js development server. |
| `pnpm build` | Creates a production Next.js build. |
| `pnpm start` | Starts the production server after a build. |
| `pnpm lint` | Runs ESLint. |

## Local Development

Start the development server with:

```bash
pnpm dev
```

Then open the local URL printed by Next.js.

The landing page is implemented in `app/page.tsx`. Most product-facing copy and section composition lives in `components/landing/`.

## Validation

Run linting with:

```bash
pnpm lint
```

No automated test script is currently defined in `package.json`. If test coverage is added later, document the exact command and the parts of the app it covers.

## Build

Create a production build with:

```bash
pnpm build
```

The repository does not currently include deployment-specific configuration or release scripts for the website.

## External Services and Network Usage

- The website links to `https://github.com/polterware/converge`.
- `public/install.sh` uses the GitHub Releases API for `polterware/converge`.
- `components/landing/VantaTrunkBackground.tsx` loads p5.js from `https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js`.
- `components/landing/WhyDesktopSection.tsx` links to external research references.

## Security Notes

- The website itself does not implement authentication, authorization, account management, or data persistence.
- The installer is the highest-risk surface because users execute it through `curl | bash`.
- Installer changes should avoid hidden side effects, keep shell behavior explicit, and preserve defensive checks around failed downloads, missing assets, invalid archives, and missing `.app` bundles.
- The script removes an existing installed app bundle at the target path before copying the new version. This is intentional installer behavior and should remain visible in the code.

## Project Boundaries

This repository should document only the public website and installer delivery surface. Desktop app internals belong in the Converge desktop repository, not here.

When updating this site, keep the landing page, screenshots, installation command, and GitHub release assumptions aligned with the actual Converge desktop app release process.

## License

TODO: not identified in the current codebase.
