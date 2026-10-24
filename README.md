# Mythological

A myth-inspired, offline-first music experience with a cinematic dark aesthetic and local audio library management.

## Overview

Mythological is a lightweight browser-based music player designed for personal listening, offline use, and a visually immersive experience. It stores tracks locally in the browser, supports drag-and-drop audio import, reads embedded metadata, and offers playlist and favorites workflows.

## Highlights

- Offline-first playback with browser storage
- Local music library management
- Drag-and-drop file import
- Embedded tag support for common audio formats
- Playlist and favorites system
- Responsive layout with a cinematic, mythic visual language
- Progressive Web App setup for installability

## Tech stack

- HTML
- CSS
- JavaScript
- IndexedDB for local persistence
- Service Worker for offline asset caching

## Run locally

You can run this project as a static site.

### Option 1: Local static server

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2: Open directly

You can also open `index.html` in a browser, though a local web server is recommended for a smoother experience and better offline behavior.

## Project structure

```text
Mythological/
├── index.html
├── manifest.json
├── sw.js
├── icon.png
├── README.md
└── docs/
    └── roadmap.md
```

## Notes

This project is already a strong static music-player foundation. The current focus is on making the experience feel more intentional, polished, and aligned with its mythological theme.

## Recommended next steps

- Refine branding and product identity across the UI
- Add mythology-inspired collections and curated categories
- Improve metadata-rich browsing and discovery
- Expand accessibility and keyboard experience
- Add stronger documentation and visual onboarding

## License

This project currently has no explicit license file. If you plan to share or grow it publicly, consider adding one such as MIT or Apache-2.0.
