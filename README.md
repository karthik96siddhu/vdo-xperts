# VDO XPERTS Angular Application

Angular single-page website for VDO XPERTS wedding video editing and post-production services.

## Run locally

Prerequisites: Node.js 20.19+, 22.12+, or 24+.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The contact form submits JSON to `http://localhost:8080/api/inquiries`. Update the endpoint in `src/app/inquiry.service.ts` when the backend is hosted.

## Build

```bash
npm run build
```

The production output is written to `dist/vdo-xperts`.
