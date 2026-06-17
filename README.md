# Ammon Hasson — IS 201 Final Web Project

A four-page, fully static personal/professional website, built to run directly on **GitHub Pages**
(plain HTML, CSS, JavaScript, and Bootstrap 5 — no build system, no backend, no database).

## Pages
| File | Purpose |
|---|---|
| `index.html` | Professional Bootstrap homepage / portfolio. |
| `resume.html` | Complete résumé written directly in HTML. |
| `scratch.html` | Paragliding page — hand-built from a blank file with a **from-scratch** stylesheet (no Bootstrap). **This is the URL submitted for the assignment.** |
| `app.html` | Public, self-contained version of the *RE Underwriter* real-estate screening app. |

## Local preview
This site must be viewed over HTTP (not `file://`) so the Tableau/YouTube embeds and relative paths work:

```bash
cd is201-final
python3 -m http.server 8000
# then open http://localhost:8000/
```

## File structure
```
is201-final/
├── index.html  resume.html  scratch.html  app.html
├── scratch.css                     # custom, from-scratch (scratch page only)
├── css/  bootstrap.min.css  professional-overrides.css
├── js/   bootstrap.bundle.min.js  professional.js
├── assets/
│   ├── img/paragliding/            # Ammon's GoPro + scenic photos (web-optimized)
│   └── video/  first-flight.mp4 + poster
├── README.md  DEPLOYMENT.md  RUBRIC_AUDIT.md  CUSTOMIZATION_CHECKLIST.md
```

## Deployment
See **DEPLOYMENT.md**. In short: push this folder to a public GitHub repo and enable Pages
(main branch, root). The submitted URL is `https://USERNAME.github.io/REPO/scratch.html`.

## Third-party attribution
- **Bootstrap 5.3.3** (MIT) — used for the professional pages (`index.html`, `resume.html`) and bundled locally in `css/` and `js/`. The scratch page does **not** use Bootstrap.
- **Tableau Public** — embedded interactive visualization on the scratch page (see embed notes below).
- **YouTube** — official Red Bull X-Alps video embedded on the scratch page.

## Embed notes
- **YouTube:** Red Bull X-Alps video `uniJBoBBb34`, via the privacy-friendly `youtube-nocookie.com` responsive iframe.
- **Tableau:** a live, interactive weather/wind visualization (relevant to paragliding conditions), embedded with the official Tableau Public embed code in a responsive wrapper. **Verify it renders after hosting** (see CUSTOMIZATION_CHECKLIST.md) — a paragliding-specific fallback is documented there.

## Privacy note
Ammon's street address, phone number, and personal email are intentionally **omitted**. The only
contact mechanism is his public LinkedIn profile. The original résumé PDF is **not** published.

## App data note
All deals and figures shown in `app.html` are **fictional sample data**. RE Underwriter is presented
as an interactive academic demonstration — it is not connected to live listing services and performs
no live AI extraction in this public version.
