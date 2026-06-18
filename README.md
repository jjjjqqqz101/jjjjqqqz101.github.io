# Academic Homepage for GitHub Pages

This is a lightweight academic personal homepage inspired by
[AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io). It keeps the
academic information architecture of AcadHomepage while staying as a plain
static site: no Ruby, Jekyll, build step, or package manager is required.

## What Is Included

- Responsive profile sidebar
- Research interests
- Recent news
- Selected publications with client-side filters
- Selected projects
- Experience, education, service, talks, and awards
- SEO metadata and JSON-LD person schema
- Light/dark theme toggle
- GitHub Pages-ready static files

## Files

- `index.html`: page content and metadata
- `styles.css`: responsive academic homepage styling
- `script.js`: theme toggle, current year, publication filters
- `assets/profile-portrait.svg`: replaceable portrait placeholder
- `assets/resume-placeholder.txt`: replace with your real CV or resume
- `.nojekyll`: tells GitHub Pages to serve files as-is

## Personalize First

Search for these placeholders and replace them:

- `jqz`
- `jjjjqqqz101`
- `jjjjqqqzforwork@gmail.com`
- `YOUR_GOOGLE_SCHOLAR_ID`
- `Your University or Lab`
- publication titles, project titles, experience, and news entries

Replace `assets/profile-portrait.svg` with your real portrait if you have one.
If you use a file such as `assets/profile.jpg`, update the `src` and Open Graph
image path in `index.html`.

## Local Preview

You can open `index.html` directly in a browser. For a closer GitHub Pages-like
preview, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish to GitHub Pages

1. Create a GitHub repository named `YOUR_GITHUB_USERNAME.github.io`.
2. Put these files in the repository root.
3. Commit and push to the `main` branch.
4. Open the repository on GitHub.
5. Go to `Settings` -> `Pages`.
6. Under `Build and deployment`, choose `Deploy from a branch`.
7. Select branch `main` and folder `/root`, then save.
8. Your homepage will be available at:

```text
https://YOUR_GITHUB_USERNAME.github.io/
```

## Optional AcadHomepage Features to Add Later

AcadHomepage supports Google Scholar citation crawling through GitHub Actions,
Google Analytics, favicon generation, and richer Jekyll layouts. This static
version intentionally does not include those moving parts. If you later need
automatic citation updates, migrate publication data into a small JSON file or
switch to the full AcadHomepage Jekyll template.
