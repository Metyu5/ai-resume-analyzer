<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# AI Resume Analyzer (Frontend)

Next.js 16 frontend for AI Resume Analyzer. Connects to Laravel API at `../ai-resume-analyzer-api/`.

## Quick Reference

```bash
# Dev server
npm run dev          # http://localhost:3000

# Build
npm run build

# Lint
npm run lint
```

## Environment

- `.env.local` — `NEXT_PUBLIC_API_URL=http://localhost:8000/api`
- No auth required yet (optional Sanctum bearer token)

## API Integration

- `services/api.ts` — Axios instance (base URL from env)
- `services/analyze.ts` — `analyzeResume({ file, jobDescription })`
- `hooks/useAnalyzeResume.ts` — React Query mutation hook
- `types/analyze.ts` — Shared TypeScript interfaces

## Architecture

- `providers/QueryProvider.tsx` — React Query provider (wraps app in layout.tsx)
- `app/analyze/page.tsx` — Main analysis page (upload → loading → result)
- `components/analyze/` — Upload, Loading, ScoreCircle, AnalysisCard

## Key Notes

- Uses `@tanstack/react-query` for server state (provider in layout.tsx)
- Uses `axios` for HTTP requests
- UI in Indonesian (Bahasa Indonesia)
- Analysis results include: score, findings, missingKeywords, suggestions
