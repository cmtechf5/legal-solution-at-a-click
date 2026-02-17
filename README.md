# Legal Solution At A Click - Corporate Website

A modern, responsive React-based Single Page Application (SPA) for Legal Solution At A Click.

## Features

- 🎨 Modern, professional design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast loading with Vite
- 🚀 Ready for deployment on Render.com
- 📧 Contact information with clickable links
- 💬 WhatsApp integration
- 🎯 Smooth scrolling navigation

## Tech Stack

- React 18
- Vite
- CSS3 (Custom CSS with modern design)
- React Router (for navigation)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Deployment on Render.com

### Step 1: Push to GitHub

1. Initialize git repository (if not already):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Create a new repository on GitHub

3. Push to GitHub:
```bash
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Render

1. Go to [Render.com](https://render.com) and sign up/login
2. Click "New +" → "Static Site"
3. Connect your GitHub account and select the repository
4. Configure the build settings:
   - **Name:** legal-solution-at-a-click (or your preferred name)
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
5. Click "Create Static Site"
6. Render will automatically deploy your site

### Important: Client-Side Routing

Since this is a SPA, you need to configure a rewrite rule in Render:

1. Go to your Static Site settings in Render
2. Navigate to "Redirects/Rewrites" tab
3. Add a rewrite rule:
   - **Source Path:** `/*`
   - **Destination Path:** `/index.html`
   - **Action:** `Rewrite`

This ensures all routes are handled by React Router.

## Project Structure

```
legal-solution-at-a-click/
├── public/
│   ├── LOGO.png
│   └── Profile.png
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Business Information

- **Business Name:** Legal Solution At A Click
- **Address:** Flat no 06, Jairaj Hsg Society, Kasaba Peth, Pune 411011
- **Email:** legalsolutionataclick@gmail.com
- **Phone:** +91 7507155537 / +91 9130041234
- **WhatsApp:** +91 9130041234
- **License:** Shop Act Registered

## License

© 2024 Legal Solution At A Click. All rights reserved.
