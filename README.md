# Netgear Solution Static Website

## Overview

This is a static website for Netgear Solution, built using React.js and Tailwind CSS. The website showcases the company's services, process, and contact information.

## Features

- Responsive and modern UI
- Google Sheets integration to fetch and display data dynamically
- Web3Forms integration for form submissions
- Modular and reusable React components

## Technologies Used

- **React.js** - For building the UI components
- **Tailwind CSS** - For styling the website
- **Google Sheets API** - To fetch and display data
- **Web3Forms** - To handle form submissions
- **Vite** - For fast development and optimized build

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Rohits906/Assessment-Project.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Assessment-Project
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Folder Structure

```
/netgear-solution-website
│-- /src
│   │-- /components
│   │   │-- Header.tsx
│   │   │-- Hero.tsx
│   │   │-- About.tsx
│   │   │-- Services.tsx
│   │   │-- WhyUs.tsx
│   │   │-- Process.tsx
│   │   │-- Contact.tsx
│   │-- /lib
│   │   │-- sheets.ts (handles Google Sheets API integration)
│   │-- App.tsx (Main application file)
│   │-- main.tsx
│   │-- style.css
│-- index.html
│-- package.json
│-- vite.config.js
```

## Web3Forms Integration

This project uses Web3Forms to handle form submissions securely. The contact form submits user details to Web3Forms, which then sends an email notification with the submitted data.

## Deployment

This static site is deployed on:

- **Vercel**

To build for production:

```sh
npm run build
```
