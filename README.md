# Portfolio_Website

=====================

## ID: `portfolio-website`

## Overview

---

This is a full-stack portfolio website built using React, Vite, and Express.js. The website allows users to view the developer's projects, certifications, and about page, and includes an admin dashboard for managing content.

## Features

---

- Modern responsive design with consistent card and form styling
- View all projects and certifications
- Project and certification detail pages
- Add, update, and delete projects and certifications (admin only)
- Upload project images (Cloudinary integration)
- Collaborator management for projects (add/remove with LinkedIn links)
- User authentication (signup, login, protected admin routes)
- Dashboard for admin content management
- About page and landing page
- 404 Not Found page for invalid routes
- Client-side routing with React Router
- Mobile-friendly and accessible UI

## Client-Side

---

- Built using React and Vite
- Uses React Router for client-side routing
- Includes pages for:
  - Landing Page
  - About Page
  - Projects Page
  - Certifications Page
  - Dashboard Page (with links to add projects and certifications)
  - Project Details Page
  - Certification Details Page
  - Login and Signup Pages
  - 404 Not Found Page
- Uses CSS for styling (with custom themes and responsive layouts)

## Server-Side

---

- Built using Express.js
- Uses Mongoose for MongoDB database interactions
- Includes routes for:
  - Projects (CRUD)
  - Certifications (CRUD)
  - Users (authentication)
  - Index (root route)
- Uses error handling middleware to catch and handle errors

## Database

---

- Uses MongoDB as the database
- Includes models for:
  - Users
  - Projects
  - Certifications

## Getting Started

---

1. Clone the repository
2. Install dependencies using `npm install` or `yarn install`
3. Start the server using `npm start` or `yarn start`
4. Start the client using `npm run dev` or `yarn dev`
5. Open the website in your browser at `http://localhost:3000`

## API Endpoints

---

- `/api/projects`: Get all projects
- `/api/certifications`: Get all certifications
- `/api/index`: Root route
- `/api/users`: User authentication routes

## Deployment Notes

---

- For static hosting (Netlify, Vercel, etc.), ensure SPA fallback is configured for React Router (see Vite and host documentation).
- Image uploads use Cloudinary; set up your Cloudinary credentials in environment variables.

## Contributing

---

Contributions are welcome! Please submit a pull request with your changes.

## License

---

This project is licensed under the MIT License. See the LICENSE file for details.
