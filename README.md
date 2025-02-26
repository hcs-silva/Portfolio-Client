# Portfolio_Website

=====================

## ID: `portfolio-website`

## Overview

------------

This is a full-stack portfolio website built using React, Vite, and Express.js. The website allows users to view the developer's projects, certifications, and about page.

## Client-Side

---------------;

* Built using React and Vite
* Uses React Router for client-side routing
* Includes pages for:
  * Landing Page
  * About Page
  * Projects Page
  * Certifications Page
  * Dashboard Page (with links to add projects and certifications)
* Uses CSS for styling

## Server-Side

----------------;

* Built using Express.js
* Uses Mongoose for MongoDB database interactions
* Includes routes for:
  * Projects
  * Certifications
  * Index (root route)
* Uses error handling middleware to catch and handle errors

## Database

------------;

* Uses MongoDB as the database
* Includes models for:
  * Users
  * Projects
  * Certifications

## Getting Started

-------------------;

1. Clone the repository
2. Install dependencies using `npm install` or `yarn install`
3. Start the server using `npm start` or `yarn start`
4. Start the client using `npm run dev` or `yarn dev`
5. Open the website in your browser at `http://localhost:3000`

## API Endpoints

-----------------;

* `/api/projects`: Get all projects
* `/api/certifications`: Get all certifications
* `/api/index`: Root route

## Contributing

--------------;

Contributions are welcome! Please submit a pull request with your changes.

## License

----------;

This project is licensed under the MIT License. See the LICENSE file for details.
