# Deployment

## Overview

The repository is a standard Next.js site with a download route for Converge releases.

## Environment Variables

See `.env.example` for:

- `NEXT_PUBLIC_DMG_DOWNLOAD_URL`
- `GITHUB_REPO`
- `GITHUB_TOKEN`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_BUCKET_NAME`

## Build

```bash
pnpm build
```

## Start

```bash
pnpm start
```

## Notes

Confirm the release source before publishing the download page.
