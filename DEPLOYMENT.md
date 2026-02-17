# Deployment Checklist for Render.com

## Quick Start Guide

### 1. Install Dependencies Locally (Optional - for testing)
```bash
npm install
npm run dev
```

### 2. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Legal Solution At A Click website"
```

### 3. Create GitHub Repository
1. Go to GitHub.com
2. Create a new repository (e.g., `legal-solution-at-a-click`)
3. **DO NOT** initialize with README, .gitignore, or license (we already have these)

### 4. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/legal-solution-at-a-click.git
git branch -M main
git push -u origin main
```

### 5. Deploy on Render.com

1. **Sign up/Login** at [render.com](https://render.com)

2. **Create New Static Site:**
   - Click "New +" → "Static Site"
   - Connect your GitHub account
   - Select your repository: `legal-solution-at-a-click`

3. **Configure Build Settings:**
   - **Name:** `legal-solution-at-a-click` (or your preferred name)
   - **Branch:** `main`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Environment:** `Static Site`

4. **Add Rewrite Rule (IMPORTANT for SPA):**
   - Go to your Static Site settings
   - Click on "Redirects/Rewrites" tab
   - Click "Add Rule"
   - Configure:
     - **Source Path:** `/*`
     - **Destination Path:** `/index.html`
     - **Action:** `Rewrite`
   - Click "Save"

5. **Deploy:**
   - Click "Create Static Site"
   - Render will automatically build and deploy
   - Your site will be available at: `https://your-site-name.onrender.com`

### 6. Custom Domain (Optional)
- Go to your Static Site settings
- Click "Custom Domains"
- Add your custom domain
- Follow DNS configuration instructions

## Important Notes

✅ **Build Command:** `npm install && npm run build`  
✅ **Publish Directory:** `dist` (Vite outputs to `dist` folder)  
✅ **Rewrite Rule:** Required for React Router to work properly  
✅ **Auto-Deploy:** Enabled by default - every push to main branch triggers a new deployment

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Verify Node.js version (Render uses Node 18+ by default)

### 404 Errors on Routes
- Make sure the rewrite rule is configured correctly
- Verify the rule is: `/*` → `/index.html` with `Rewrite` action

### Images Not Loading
- Ensure images are in the `public` folder
- Use paths like `/LOGO.png` (starting with `/`)

## Support

For Render-specific issues, check:
- [Render Documentation](https://render.com/docs)
- [Static Sites Guide](https://render.com/docs/static-sites)
