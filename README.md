# jqz (Zhang Jinquan) Academic Homepage

This repository powers [https://jjjjqqqz101.github.io/](https://jjjjqqqz101.github.io/),
an academic homepage for jqz (Zhang Jinquan), a master's student at Shenzhen
University. The current layout follows the academic homepage style of
[liuhankai.github.io](https://liuhankai.github.io/): sticky top navigation,
left profile sidebar, and paper-box publication entries. It remains a
lightweight static GitHub Pages site: no Ruby, Jekyll, build step, or package
manager is required.

## Current Content

- Profile photo and contact links
- Shenzhen University master's student profile
- Research interests in robot learning, VLA, WAM, post-training, and fine-tuning
- IROS 2026 accepted paper project: Structure-Aware Robust Fine-Tuning
- Aloha Pi0.5 LeRobot featured project
- AcademicPages-style news, selected publications, selected projects, and experiences
- SEO metadata and JSON-LD person schema

## Files

- `index.html`: page content and metadata
- `styles.css`: responsive AcademicPages-style homepage styling
- `script.js`: current year rendering
- `assets/jqz.png`: profile photo
- `assets/sarf-fig2.png`: rendered figure for the IROS 2026 paper project
- `assets/aloha.png`: Aloha Pi0.5 LeRobot project image
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
- Add PDF, arXiv, code, and BibTeX links for the IROS 2026 paper when public.
- Add Google Scholar, ORCID, or DBLP links after those profiles are available.
