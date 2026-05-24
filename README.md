# Ethiopian_Orthodox_Tewahedo_Trivia
# 🕊 Ethiopian Orthodox Trivia — Setup & Sharing Guide
## Dallas AGA — Children of Light Curriculum

---

## STEP 1 — Host the HTML File for Free (GitHub Pages)

> This gives you a real web link students can click.

1. Go to **https://github.com** and create a FREE account (takes 2 minutes)
2. Click the **"+"** icon → **New repository**
3. Name it: `eotc-trivia`
4. Set it to **Public** → click **Create repository**
5. Click **"uploading an existing file"**
6. Upload your `eotc_trivia_embed.html` file
7. **RENAME the file to `index.html`** before or after uploading
8. Click **Commit changes**
9. Go to **Settings** (top tabs) → scroll to **Pages** (left sidebar)
10. Under "Branch" select **main** → click **Save**
11. Wait 1–2 minutes → your live link appears:
    ```
    https://YOUR-USERNAME.github.io/eotc-trivia
    ```
12. ✅ Share this link with your students!

---

## STEP 2 — Embed in Google Sites

1. Go to **https://sites.google.com** and open your class site
2. Click the page where you want the trivia
3. Click **Insert** (right sidebar) → **Embed**
4. Choose **"By URL"** tab
5. Paste your GitHub Pages link:
   ```
   https://YOUR-USERNAME.github.io/eotc-trivia
   ```
6. Click **Insert**
7. Resize the embed box — make it **tall** (at least 700px) so the quiz fits
8. Click **Publish** (top right)
9. ✅ Students can now play directly on your Google Site!

---

## STEP 3 — Share With Students

**Option A — Share the Google Site page link**
- Copy the URL of your Google Site page
- Share via Google Classroom, email, or message

**Option B — Share the direct GitHub link**
- Share: `https://YOUR-USERNAME.github.io/eotc-trivia`
- Students open it on any phone, tablet, or computer
- No login required

---

## TEACHER / ADMIN PANEL

- On the home screen, scroll to the bottom and click **"🔒 Teacher / Admin"**
- Enter PIN: **`1234`**  ← you can change this inside the HTML file
- You'll see:
  - 📋 **All Scores** — every student, sortable, with remove button
  - 📊 **Breakdown** — rank tiers + progress bars per student
  - 📚 **Topics** — all 28 questions by category
  - ⚙️ **Manage** — export scores as text, reset leaderboard

---

## HOW TO CHANGE THE ADMIN PIN

1. Open `eotc_trivia_embed.html` in any text editor (Notepad, TextEdit, VS Code)
2. Find this line near the top of the `<script>` section:
   ```
   const ADMIN_PIN="1234";
   ```
3. Change `1234` to whatever PIN you want, e.g.:
   ```
   const ADMIN_PIN="7890";
   ```
4. Save the file and re-upload to GitHub

---

## IMPORTANT NOTES

⚠️ **Scores are saved per browser/device** using localStorage.
- If a student plays on their phone, their score saves on that phone's browser
- If they switch browsers or clear cache, scores reset for them
- The leaderboard only shows scores from the **same browser** on the **same device**

✅ **For a shared classroom leaderboard**, the best setup is:
- Use a **single shared classroom computer or tablet** where all students play
- OR project the leaderboard from your teacher computer after each student finishes

---

## QUICK REFERENCE

| Item | Detail |
|------|--------|
| Total Questions | 28 |
| Admin PIN | 1234 (changeable) |
| Scoring | Best score per student kept |
| Ranks | Pillar / Scholar / Growing / Keep Studying |
| Works on | Any browser — Chrome, Safari, Edge, Firefox |
| Mobile friendly | ✅ Yes |

---

*Glory to God — Dallas AGA Children of Light Curriculum*
