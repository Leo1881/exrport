# Experian Gold Report – Benchmark

**Date:** March 2026  
**Purpose:** Baseline of completed work. Use this to verify future changes don't break existing features.

---

## How to Run

```bash
npx serve
# Open http://localhost:3000 in browser
# PDF export requires a local server (file:// won't work)
```

---

## Design 2 (Dashboard) – Primary Design

Design 2 is the main design. All features below apply to it unless noted.

### 1. Cover Page

- **Full-bleed background image** – `assets/cover-background.png` covers the full first page
- **No margin on page 1** – Cover extends into top margin via `margin: -22mm -12mm -12mm -12mm` (PDF export)
- **Content:** Experian logo, company name, Gold Report, KIM number, report date
- **CSS:** `body.pdf-export .report.design-2 .d2-cover`

### 2. Table of Contents

- **Own page** with card layout
- **Hyperlinks** to sections – `href="#sec-xxx"` (e.g. `#sec-assessment`)

### 3. Section Order

- Trade Reference Summary and Company Benchmark are **before the footer** (last two sections)
- **ToC order:** Summary, Media and Press Release, Photos, Financial Statement, SWOT, then Trade Reference Summary, Company Benchmark

### 4. Financial Information

- **Tables** for:
  - Row 1: Turnover FY 2024 | Cash | Debtors | Creditors
  - Row 2: Current | Acid Test | Gross Profit | Pre-Tax | Solvency
- **Fixed column widths** – `table-layout: fixed`, 65% / 35% split
- **CSS:** `.d2-fin-table`

### 5. Risk Grade

- **Banner layout** – horizontal gradient (blue to purple)
- **Left:** Score (e.g. 65) + "out of 100"
- **Right:** Risk level, model, interpretation

### 6. Financial Statement Tables

- **Profit and Loss** and **Balance Sheet** tables
- **Fixed column widths** – `table-layout: fixed`, 65% / 35% split
- **CSS:** `.d2-fin-table`

### 7. Assessment Card

- **Light purple background** – `rgba(92, 77, 158, 0.08)`
- **Purple left border** – 4px solid
- **CSS:** `.d2-card#sec-assessment`

### 8. PDF Export

- **Top margin:** 10mm on all pages except page 1 (cover)
- **Margin:** `[10, 0, 0, 0]` in html2pdf options
- **Page breaks:** Sections do not split across pages (`page-break-inside: avoid` on `.d2-card`)
- **Cover:** Full bleed on page 1 (no margin)

### 9. Card Spacing

- **20px** between cards/sections
- **CSS:** `margin-bottom: 20px` on `.d2-card`

---

## Verification Checklist

Before considering any change complete, verify:

| # | Check | How to Verify |
|---|-------|---------------|
| 1 | Cover image full bleed | Export PDF, page 1 has no white border around image |
| 2 | Top margin on pages 2+ | Export PDF, cards on new pages have space above them |
| 3 | No sections split across pages | Export PDF, each card starts on a new page if it would overflow |
| 4 | Financial Information tables | Two tables with correct layout and fixed column widths |
| 5 | Risk Grade banner | Blue-to-purple gradient, score left, description right |
| 6 | Assessment card | Light purple background, purple left border |
| 7 | Trade Reference Summary & Company Benchmark | Before footer, last two sections |
| 8 | PDF export works | Export PDF completes without error (requires `npx serve`) |
| 9 | Table of Contents links | All links present and point to correct sections |

---

## Key Files

| File | Purpose |
|------|---------|
| `index.html` | Report data, render logic, PDF export |
| `styles.css` | All styling, PDF export overrides |
| `assets/cover-background.png` | Cover page background |
| `assets/experian-logo.png` | Logo |

---

## Known Limitations

- **Internal PDF links:** ToC links in html2pdf Export open in browser. Use **Print to PDF** (Ctrl/Cmd+P) and choose "Save as PDF" – Chrome preserves internal links within the PDF.
- **PDF background:** Grey background was attempted but removed; margin area is white
- **PDF export:** Requires local server (e.g. `npx serve`)

---

## Reference Snapshot

To capture a reference PDF after changes:

1. Run `npx serve`
2. Open http://localhost:3000
3. Select Design 2 – Dashboard
4. Export to PDF
5. Save as `BENCHMARK-Gold-Report-YYYY-MM-DD.pdf` in project root

Compare new exports against this reference to catch regressions.
