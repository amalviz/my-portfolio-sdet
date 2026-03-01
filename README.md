# Portfolio – Amal Viswanath

TypeScript + React portfolio, built with Vite. Run locally with dev server or Docker; deploy static build to S3 via GitHub Actions.

## Run locally (development)

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Run production build locally

```bash
npm run build
npm run preview
```

Or with Docker (build + nginx):

```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
```

Open [http://localhost:8080](http://localhost:8080).

## Deploy to S3 with GitHub Actions

The workflow in `.github/workflows/deploy.yml` runs on push to `main` (and can be triggered manually). It builds the app and syncs the `dist/` output to an S3 bucket.

### 1. S3 bucket setup

- Create an S3 bucket and enable **static website hosting** (or use the bucket for website hosting).
- Attach a bucket policy so the site can be read (and optionally use CloudFront in front of the bucket).
- If using S3 website hosting, the site URL will be like:  
  `http://<bucket>.s3-website.<region>.amazonaws.com`

### 2. GitHub secrets and variables

In the repo: **Settings → Secrets and variables → Actions**.

**Secrets (required):**

| Secret                | Description                    |
|-----------------------|--------------------------------|
| `AWS_ACCESS_KEY_ID`   | IAM user access key for S3     |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key         |

**Variables (recommended):**

| Variable     | Description                    | Example    |
|-------------|---------------------------------|------------|
| `S3_BUCKET` | Name of the S3 bucket           | `my-portfolio` |
| `AWS_REGION`| AWS region of the bucket (optional) | `eu-west-2`   |

The workflow uses `vars.S3_BUCKET` and `vars.AWS_REGION` (default `eu-west-2` if not set).

### 3. IAM permissions

The user whose keys you put in secrets needs at least:

- `s3:PutObject`
- `s3:GetObject`
- `s3:DeleteObject`
- `s3:ListBucket`

on the target bucket (and prefix, if you use one).

### 4. Deploy

- Push to `main`, or
- **Actions → Build and Deploy to S3 → Run workflow**

After a successful run, the latest build is in your S3 bucket.

## Project structure

- `src/` – React app (components, data, styles)
- `src/data/portfolio.ts` – Portfolio content (edit to update your info)
- `public/` – Static assets
- `Dockerfile` – Multi-stage build: Node build, nginx serve
- `.github/workflows/deploy.yml` – Build and S3 sync

## Scripts

| Command         | Description              |
|----------------|--------------------------|
| `npm run dev`  | Start Vite dev server    |
| `npm run build`| TypeScript + Vite build   |
| `npm run preview` | Serve `dist/` locally |
| `npm run lint` | Run ESLint               |
