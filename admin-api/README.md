# LTM Admin API (Secure Backend)

## 1) Setup

```bash
cd admin-api
npm install
copy .env.example .env
```

Edit `.env` values:
- `ADMIN_USER`
- `ADMIN_PASSWORD`
- `JWT_SECRET`
- `CORS_ORIGIN`

## 2) Run

```bash
npm run dev
```

API base URL: `http://localhost:8787`

## 3) Connect frontend dashboard

Create/modify frontend `.env` (project root):

```env
VITE_ADMIN_API_URL=http://localhost:8787
```

Restart Vite dev server.

## 4) Endpoints

- `POST /api/auth/login` -> returns JWT token
- `GET /api/config` -> protected
- `PUT /api/config` -> protected
- `POST /api/upload` -> protected (multipart field name: `file`)
- `GET /uploads/<filename>` -> serves uploaded images

## Security notes
- Password is hashed with bcrypt on save.
- JWT expires after 8h.
- Use HTTPS in production.
- Change default `.env` credentials immediately.
