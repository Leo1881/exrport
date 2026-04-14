# Experian Gold Report - Redesigned

A proof-of-concept redesign of the Experian Gold business credit report with improved hierarchy, layout, and Experian branding.

## Quick Start

**Option A – Browser (html2pdf.js)**
1. Run `npx serve` and open http://localhost:3000
2. Click **Export to PDF** or **Print to PDF** as needed

**Option B – Puppeteer (recommended for best PDF quality)**
1. `npm install`
2. `npm run generate-pdf`
3. Opens a local server, generates `Gold-Report.pdf` with full-bleed cover and 10mm top margin on page 2+

## Project Structure

```
report/
├── index.html          # Report template (loads data and renders)
├── styles.css          # Styling with Experian brand colors
├── data/
│   └── report-data.json   # Full structured data (for reference)
├── assets/
│   └── experian-logo.png  # Experian logo
└── README.md
```

## Data

The report data is embedded in `index.html` for the proof of concept. The full structured JSON is also available in `data/report-data.json` for reference or future API integration.

## Design

- **Colors**: Experian blue (#1a5f9e), purple accents, magenta highlights
- **Typography**: Clear hierarchy with section titles, subtitles, and body text
- **Layout**: Two-column address blocks, ratio cards, data tables, principal cards
- **Print**: Optimized for A4 PDF export with proper page breaks

## PDF Export

- **Export to PDF** (browser): Uses html2pdf.js – client-side, works in browser
- **Print to PDF** (browser): Uses `window.print()` – ToC links work in PDF
- **Puppeteer** (`npm run generate-pdf`): Headless Chrome – best quality, supports `@page :first` for full-bleed cover
