# Portfolio CV site

A single-page CV you can host for free on **GitHub Pages**. No build step — just HTML, CSS, and a little JavaScript.

## Edit your CV

Open **`content.js`** and change the text, dates, links, and lists. Save and refresh the browser.

## Preview locally

Open `index.html` in your browser, or run a tiny static server:

```bash
cd ~/Projects/portfolio
python3 -m http.server 8080
```

Then visit [http://localhost:8080](http://localhost:8080).

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `portfolio`).
2. Push this folder to the repo (you need [Git](https://git-scm.com/) and Xcode Command Line Tools on macOS if `git` is not installed yet).
3. On GitHub: **Settings → Pages → Build and deployment → Source**: deploy from branch **`main`**, folder **`/ (root)`**.
4. After a minute, your site will be at `https://<username>.github.io/portfolio/` (or your custom domain if you add one).

### First-time git push (after tools are installed)

```bash
cd ~/Projects/portfolio
git init
git add .
git commit -m "Add CV portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

## Customize colors

Edit the color variables at the top of **`styles.css`** (`--coral`, `--sky`, `--violet`, etc.).

## File overview

| File         | Purpose                          |
| ------------ | -------------------------------- |
| `content.js` | All CV content (edit this)       |
| `index.html` | Page structure                   |
| `styles.css` | Layout and colors                |
| `main.js`    | Renders `content.js` into the page |
