# RAIDR — Reliable AI Framework for Drug Repurposing under Phylogenetic and Temporal Distribution Shift

## 1. Project overview
A frontend-first research platform for exploring potential drug–disease associations together with a reliability assessment. **No machine-learning model, backend or real dataset is connected yet.** All predictions and charts come from clearly labelled mock data (Demo Mode).

## 2. Features
- Home, Prediction, Results, Reliability, Methodology and About pages
- Prediction form with validation, loading, error and empty states
- Calibration, temporal-shift and phylogenetic-shift visualizations (illustrative demo data)
- Light and dark themes, responsive layout, keyboard and screen-reader support
- Service layer that switches from mock to a real API through one environment variable

## 3. Tech stack
Next.js 15 (App Router), TypeScript (strict), Tailwind CSS 3, Recharts, Lucide React, ESLint.

## 4. Project structure
```
app/            Routes (/, /prediction, /results, /reliability, /methodology, /about)
components/     layout, home, prediction, results, reliability, ui (reusable)
services/       api.ts, predictionService.ts, mockPredictionService.ts,
                reliabilityService.ts, mockReliabilityService.ts
types/          prediction.ts, reliability.ts, api.ts
lib/            constants.ts, utils.ts, resultStore.ts, aboutContent.ts, methodologyContent.ts
```

## 5–8. Local setup, commands
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (runs type check and lint)
npm run start    # serve the production build
```
No Python, database, API key or external service is needed.

## 6. Environment variables
Copy `.env.example` to `.env.local`:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_API_BASE_URL` | Public base URL of the future FastAPI backend. Empty = Demo Mode. |

`NEXT_PUBLIC_*` values are visible in the browser. Never put secrets or API keys in this project. Credentials belong on the backend.

## 9. Deploy to Vercel
1. Push this folder to a GitHub repository.
2. In Vercel choose **Add New → Project** and import the repository. The Next.js preset is detected automatically.
3. (Optional) Add `NEXT_PUBLIC_API_BASE_URL` under **Settings → Environment Variables**.
4. Click **Deploy**.

## 10. Mock mode
When `NEXT_PUBLIC_API_BASE_URL` is empty, `services/predictionService.ts` uses `services/mockPredictionService.ts`, and the navbar shows a **Demo Mode** badge. With a URL set, the badge reads **Research Prototype**. Mock values are deterministic per drug/disease pair and live only in the `mock*` service files.

## 11. Connect FastAPI later
`services/predictionService.ts` already contains `apiPredictionService`, which calls `POST {NEXT_PUBLIC_API_BASE_URL}/api/v1/predictions` with `{ "drug", "disease" }` and expects `{ prediction, raw_score, calibrated_score, reliability, explanation, model_version? }` (see `types/api.ts`). Enable CORS for your frontend origin on the backend.

## 12. Replace the mock service
Set `NEXT_PUBLIC_API_BASE_URL`; the UI calls only `predictionService.predict(...)`, so no component changes are needed. For reliability data, replace the body of `getReliability()` in `services/reliabilityService.ts` with a real request returning `ReliabilityResult`.

## 13. Where to add ML integration
- Prediction output: `types/prediction.ts` and `services/predictionService.ts`
- Calibration, temporal and phylogenetic results: `types/reliability.ts` and `services/reliabilityService.ts`
- Explanations: the `explanation` field, rendered on the Results page

## 14. Roadmap
1. Frontend UI
2. FastAPI backend
3. Real biomedical datasets
4. Drug–disease prediction model
5. Confidence calibration
6. Temporal distribution-shift evaluation
7. Phylogenetic distribution-shift evaluation
8. Real-time prediction integration
9. Model monitoring and evaluation

## Disclaimer
This platform is intended for research and educational purposes. Computational predictions are not medical advice and require further validation.
