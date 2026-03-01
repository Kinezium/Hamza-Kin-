<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1DFHo_ZW0zP6ZcgkKDdKT-jUQLwBYlZHp

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## SPA Deployment (BrowserRouter)

This app uses clean URLs (`/page`) and needs a SPA fallback to `index.html` in production.

- Nginx:
   ```nginx
   location / {
      try_files $uri $uri/ /index.html;
   }
   ```

- Static hosting with `serve`:
   ```bash
   npx serve dist --single --config serve.json
   ```

- Optional safety fallback (generate static route copies after build):
   ```bash
   npm run build:fallbacks
   ```
