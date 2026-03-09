# Portfolio Website Client

Frontend client for the portfolio platform, built with React + Vite.

## Overview

This repository contains the public portfolio experience and the authenticated admin UI for managing projects and certifications.

Main capabilities:

- Responsive landing, about, projects, and certifications pages
- Authentication flow (signup/login/logout)
- Admin-only dashboard and content management routes
- Project image uploads through Cloudinary
- Route guards for admin access
- SEO static assets (`robots.txt`, `sitemap.xml`)

## Tech Stack

- React 18
- Vite 6
- React Router
- Axios
- Sass (SCSS architecture under `src/sass`)
- Flowbite React + React Icons

## Prerequisites

- Node.js 18+
- A running backend API (default expected at `http://localhost:5005`)

## Environment Variables

Create a `.env` file at the project root:

```env
VITE_BACKEND_URL=http://localhost:5005
```

If not set, the app falls back to `http://localhost:5005`.

## Install and Run

```bash
npm install
npm run dev
```

Vite default local URL is typically `http://localhost:5173`.

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production bundle
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint
- `npm run sass:build`: Compile `src/sass/main.scss` to `src/Styles/App.css`
- `npm run sass:watch`: Watch and compile SCSS continuously

## Route Map

Public routes:

- `/`
- `/about`
- `/all-projects`
- `/certifications`
- `/login`
- `/signup`

Authenticated non-admin route:

- `/home`

Admin-only routes:

- `/dashboard`
- `/add-project`
- `/add-certification`
- `/update-certification`
- `/projects/update-project/:projectId`
- `/dashboard/all-certifications`

Dynamic public route:

- `/projects/project-detail/:projectId`

Fallback route:

- `*` (Not Found)

## Styling

- Source styles are organized in `src/sass/` and imported via `src/sass/main.scss`.
- Generated CSS output target is `src/Styles/App.css` for environments using the Sass watcher/build scripts.

## Deployment Notes

- This project is configured for SPA routing on static hosts.
- `public/_redirects` handles client-side route fallback on Netlify.
- `public/robots.txt` and `public/sitemap.xml` are included for crawlability.

## Related Backend

This client expects a separate backend service that provides:

- Auth endpoints (`/users/...`)
- Projects endpoints (`/projects/...`)
- Certifications endpoints (`/certifications/...`)

## License

MIT
