# Deployment — GitHub Pages

This site is static and deploys to GitHub Pages from the repository root.

## Option A — GitHub CLI (fastest)
```bash
cd is201-final
git init
git add .
git commit -m "IS 201 final web project"
gh repo create ammon-is201 --public --source=. --remote=origin --push
# enable Pages on the main branch, root folder:
gh api -X POST repos/:owner/ammon-is201/pages -f "source[branch]=main" -f "source[path]=/" 2>/dev/null \
  || echo "Enable Pages in the repo Settings → Pages (Branch: main, Folder: / root)."
```

## Option B — GitHub website (no CLI)
1. Create a new **public** repository, e.g. `ammon-is201`.
2. Upload the entire contents of the `is201-final/` folder to the repo **root**
   (so `index.html`, `scratch.html`, etc. sit at the top level — *not* inside a subfolder).
3. Go to **Settings → Pages**.
4. Under "Build and deployment", set **Source: Deploy from a branch**, **Branch: `main`**, **Folder: `/ (root)`**, then **Save**.
5. Wait 1–2 minutes for the green "Your site is live" message.

## Expected URLs
```
Home:        https://USERNAME.github.io/ammon-is201/
Résumé:      https://USERNAME.github.io/ammon-is201/resume.html
Paragliding: https://USERNAME.github.io/ammon-is201/scratch.html   ← SUBMIT THIS ONE
App:         https://USERNAME.github.io/ammon-is201/app.html
```
The submitted URL must begin with `https://` (not `file:///`).

## After deploying — verify (required)
Open the **live** site and confirm:
- [ ] Every page loads and all navigation links work.
- [ ] All images and the personal video show/play.
- [ ] The **Red Bull X-Alps YouTube** video plays.
- [ ] The **Tableau** visualization loads and is **interactive** (hover/click). If it shows an error, see CUSTOMIZATION_CHECKLIST.md → "Tableau fallback".
- [ ] The RE Underwriter app works (deal select, compare, simulated import, detail view).
- [ ] No mixed-content or console errors (everything is HTTPS).

## Do NOT publish
- The original résumé PDF (`Ammon_Hasson_Gov_Resume_v5.pdf`) — keep it out of the repo.
- Any credentials, API keys, tokens, or private/Cloudflare URLs (none are present in these files).
- The large original photo/video files — only the web-optimized `assets/` versions belong in the repo.
- Backup folders or temporary files.
