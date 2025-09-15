 Week7 Assignment — Multi-page Website

 Project overview
Simple multi-page website (Home, About, Services, Contact) demonstrating:
  - Responsive layout (HTML/CSS)
  - CSS transitions & keyframe animations
  - JavaScript interactivity (menu toggle, animation trigger, form validation)
  - Clean code organization and comments

 Structure
  - `index.html`, `about.html`, `services.html`, `contact.html`
  - `css/styles.css` — shared styles, responsive rules, animations
  - `js/main.js` — shared JavaScript: functions, nav toggle, form validation
  - `images/` — place images here

 How to run locally
  1. Clone or download the repo.
  2. Open `index.html` in a web browser (no server required for static site).
  3. For local testing of relative links across pages, use a local server (recommended):
     - Python 3: `python -m http.server 8000`
     - Then visit: `http://localhost:8000`

 Deployment
Option A — GitHub Pages (static)
  1. Push the repo to GitHub.
  2. In repo Settings → Pages, choose branch `main` (or `master`) and root folder `/`.
  3. Save — your site will be published at `https://<username>.github.io/<repo>/`.

 Option B — Netlify
  1. Create a Netlify account.
  2. Connect GitHub and choose this repo.
  3. For a static site, no build command is needed; publish directory is `/`.
  4. Deploy — Netlify gives a live URL and automatic redeploys on push.

Git commands (example)
```bash
git init
git add .
git commit -m "Add week7 multi-page site"
git remote add origin https://github.com/YOUR_USERNAME/week7-assignment.git
git branch -M main
git push -u origin main
