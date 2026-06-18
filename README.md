# jqz Academic Homepage

This repository powers [https://jjjjqqqz101.github.io/](https://jjjjqqqz101.github.io/),
an academic homepage for jqz, a master's student at Shenzhen University. The
site is inspired by [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io),
but it is intentionally implemented as a lightweight static GitHub Pages site:
no Ruby, Jekyll, build step, or package manager is required.

## Current Content

- Profile photo and contact links
- Shenzhen University master's student profile
- Research interests in real-robot learning systems
- Aloha Pi0.5 LeRobot featured project
- Technical outputs, experience, and stack summary
- SEO metadata and JSON-LD person schema
- Light/dark theme toggle

## Files

- `index.html`: page content and metadata
- `styles.css`: responsive academic homepage styling
- `script.js`: current year and color theme toggle
- `assets/jqz.png`: profile photo
- `assets/resume-placeholder.txt`: replace with a real CV or resume when ready
- `.nojekyll`: tells GitHub Pages to serve files as-is

## Local Preview

You can open `index.html` directly in a browser. For a closer GitHub Pages-like
preview, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

The repository is already configured for GitHub Pages:

```bash
git add .
git commit -m "Update homepage"
git push origin main
```

GitHub Pages publishes from the `main` branch root to:

```text
https://jjjjqqqz101.github.io/
```

## Future Updates

- Replace `assets/resume-placeholder.txt` with a real CV.
- Add Google Scholar, ORCID, or DBLP links after those profiles are available.
- Add formal publications when papers or preprints are ready.
