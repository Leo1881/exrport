# Experian Gold Report - Redesigned

A proof-of-concept redesign of the Experian Gold business credit report with improved hierarchy, layout, and Experian branding.

## Quick Start

1. Open `index.html` in your browser (double-click or drag into browser window).
2. Click **Export to PDF** to open the print dialog.
3. Choose "Save as PDF" as the destination and save.

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

## Future Enhancements

- Load data from API or JSON file
- Add more sections (KISS, Industry Overview, Overall Performance)
- PDF generation via Puppeteer for server-side export
