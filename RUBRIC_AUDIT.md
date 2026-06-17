# Rubric Audit — IS 201 Final Web Project

Status legend: ✅ done & tested · ⚠️ done, needs your post-host verification · ⛔ not applicable

| Requirement | Status | File | Element / selector | How to test | Remaining user action |
|---|---|---|---|---|---|
| Professional appearance | ✅ | all | Bootstrap pages + custom scratch design | Open each page | Pick final accent color (optional) |
| Hosted-ready (static, GitHub Pages) | ✅ | all | No backend/build/db; relative links only | `python3 -m http.server` | Deploy (DEPLOYMENT.md) |
| No broken links | ✅ | all | 14 local links/assets scanned | Automated link scan passed | — |
| No broken images | ✅ | all | All `<img>` resolve 200 | Link scan | — |
| Complete résumé in HTML (not PDF) | ✅ | resume.html | `<section>` blocks | View source — no embedded PDF | Review phrasing |
| **Scratch built from blank HTML** | ✅ | scratch.html | whole file | View source | — |
| **No Bootstrap on scratch** | ✅ | scratch.html | only `scratch.css` linked | `grep -i bootstrap scratch.html` → 0 imports | — |
| Nested list (ol↔ul) | ✅ | scratch.html | `.progression` (`<ol>`→`<ul>`) | "My Learning Progression" | Edit milestones (optional) |
| Original (non-theme) image | ✅ | scratch.html | hero + gallery (Ammon's GoPro photos) | Visible on page | Pick favorites |
| Embedded YouTube video | ✅ | scratch.html | iframe `youtube-nocookie.com/embed/uniJBoBBb34` | Press play on live site | Confirm it plays |
| Functioning on-page anchor | ✅ | scratch.html | `href="#first-flight"`, `href="#top"` | Click "Read about my first flight" / Back-to-top | — |
| Custom background | ✅ | scratch.css | `body { background: linear-gradient(...) }` + hero image | Visible | — |
| Custom stylesheet (from scratch) | ✅ | scratch.css | whole file, commented | Linked & applied | — |
| Four+ styles | ✅ | scratch.css | 40+ rule sets | View file | — |
| Font-color style | ✅ | scratch.css | `body { color: var(--ink) }` etc. | View file | — |
| Font-family style | ✅ | scratch.css | `body { font-family: ... }` | View file | — |
| 3+ styled divs | ✅ | scratch.html | `.hero`, `.section`, `.card`, `.gallery`, `.tableau-wrap`, footer (18 matched) | Visible blocks | — |
| **Live interactive Tableau** | ⚠️ | scratch.html | `.tableau-wrap` object embed (`Weather_Good/WeatherStory`) | Load live site, hover/click | **Verify it renders; swap to fallback if not (see CUSTOMIZATION_CHECKLIST #1)** |
| Navigation to professional pages | ✅ | scratch.html | top `nav` + footer | Click links | — |
| Direct link to app | ✅ | scratch.html | `href="app.html"` (nav + footer) | Click | — |
| App: AI-collaboration concept | ✅ | app.html | demo banner | Read banner | — |
| App: interactive features | ✅ | app.html | deal select/compare/detail/simulated import | Click controls | — |
| App: public static version | ✅ | app.html | single file, no server/login | Loads offline | — |
| App: link from scratch page | ✅ | scratch.html | nav + footer → app.html | Click | — |
| App: honest demo disclosures | ✅ | app.html | banner + "simulated in this demo" label | Read | Confirm wording |
| Résumé contact privacy | ✅ | resume.html/index.html | LinkedIn only; no phone/email/address | View | Decide whether to add email |
| Graduate requirement | ⛔ | — | N/A — undergraduate student | — | Mark "not a graduate student" |

## Automated tests performed (over local HTTP)
- All 4 pages return HTTP 200; 14 unique local links/assets scanned → **0 broken**.
- `scratch.html`: **0 Bootstrap imports**; nested `<ol><ul>` present; 1 YouTube iframe; 1 `<video>`; Tableau object present; 18 styled-div class matches; 2 on-page anchors.
- No `href="#"` placeholders, no `Lorem ipsum`/`TODO`, no `file://`/`C:\`/`/Users/` paths.
- Résumé contains no embedded/linked PDF substitute.

## Manual tests still required (after hosting — can't be done headlessly)
Play the YouTube video, interact with the Tableau viz, play the personal flight video, and click through
the app on the **live HTTPS** URL and on a phone. See DEPLOYMENT.md checklist.

---

## Self-grading answer guide
Answer honestly, based on the **final, tested, hosted** site:

| Question | Recommended answer | Condition |
|---|---|---|
| Site hosted online? | **Yes** | only after you deploy and load the public URL |
| Aesthetic problems? | **Zero or very minor** | after a visual pass |
| Links | **Every link works** | confirmed by scan + your click-through |
| Images and videos | **All show correctly** | after you confirm video + images live |
| Résumé | **Complete and well organized** | — |
| Résumé format | **HTML** | — |
| Scratch page | **Created from a blank HTML file** | — |
| Scratch elements | **All required elements selected** | once Tableau is confirmed live |
| Custom stylesheet | **All applicable items selected** | — |
| Tableau | **Fully interactive** | **only after you confirm it loads & interacts** |
| Graduate page | **I am not a graduate student** | — |
| App description | **Interactive real-estate acquisition screening and comparison application** | — |
| App quality | **"Awesome"** only if you made meaningful personal iterations (photos, palette, milestones, wording); otherwise **"Pretty cool"** | be honest |

Do not mark a requirement complete if it still depends on a broken embed. The only item gating a perfect
audit is the **Tableau verification** above.
