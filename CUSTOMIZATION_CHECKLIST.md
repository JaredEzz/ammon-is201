# Customization Checklist — for Ammon

Things to personally review, confirm, or tweak before you submit. Exact files/sections are noted.

## ⚠️ Must verify (do these first)
1. **Tableau loads & is interactive.** Open `scratch.html` (served over HTTP and again on the live
   GitHub Pages URL). Scroll to **"Paragliding by the Numbers — Reading the Weather."** Confirm the
   Tableau graph renders and you can hover/click it.
   - **If it shows an error or doesn't load:** open `scratch.html`, find the line
     `<param name="name" value="Weather_Good/WeatherStory" />` and replace the value with the
     assignment's preferred paragliding viz: `UKParaglidingXCLeague/Flightbrowser`
     (cross-country paragliding flights — the most on-theme option). Re-test on the live site.
     Do not submit with a broken embed.
   - *(Verified during build: the current weather viz has a live, rendered Tableau Public preview,
     so it should load. This is just a safety net.)*
2. **YouTube plays.** Same page, "Why the Red Bull X-Alps Fascinates Me" — confirm the video plays on the live site.
3. **Video plays.** "Watch my first flight" — confirm `first-flight.mp4` plays. (It was converted from your
   HEVC `.MOV` to browser-friendly H.264.)

## Photos (`assets/img/paragliding/`)
4. **Pick your favorite hero image.** The hero currently uses `scenic-2.jpg` (you + the pilot on the cliff).
   To change it, edit `scratch.css` → `.hero { ... url("assets/img/paragliding/scenic-2.jpg") ... }`.
5. **Review the gallery selection/order** (`scratch.html`, the three `<figure>` blocks under "My First Flight").
   You have 14 `flight-01..14.jpg` and 3 `scenic-1..3.jpg` to choose from.
6. **Confirm captions and alt text** are accurate to what's actually in each photo.

## Content
7. **Review the Grindelwald story** ("My First Flight") — I kept it factual and restrained; make it yours.
8. **Review the résumé** (`resume.html`) for phrasing. All content came from your PDF; nothing was invented.
   Confirm dates and the **German** language line (listed as conversational from your mission — adjust if you prefer).
9. **Decide about email.** Your email is currently omitted (LinkedIn is the only contact). Add it back only if you want it public.
10. **Review the app disclosure** (`app.html`, top banner + the "simulated in this demo" note) — confirm it
    describes how you actually use the real app.
11. **Choose the professional accent color.** It's deep navy (`--accent` in `css/professional-overrides.css`).

## Meaningful iterations you can make (so you can honestly say you iterated)
- **Photo selection & order** on the scratch page.
- **Color palette** — tweak the alpine palette tokens at the top of `scratch.css` (`:root`).
- **Paragliding learning milestones** — edit the nested list under "My Learning Progression."
- **App labels / risk thresholds** — adjust wording in `app.html`.
- **Professional summary wording** — `index.html` and `resume.html`.

## Final
12. **Test on another device** (phone) once it's live.
13. **Answer the self-grading questions honestly** using the guide at the end of `RUBRIC_AUDIT.md`.
