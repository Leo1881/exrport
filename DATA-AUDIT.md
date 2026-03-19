# Report Data Population Audit

Comparison of data displayed in Design 1 (baseline), Design 2, and Design 3.

All three designs use the same `REPORT_DATA` source. This audit identifies fields/sections that are **missing** or **abbreviated** in Designs 2 and 3 compared to Design 1.

---

## Design 2 – Missing or Abbreviated Data

| Section | Field | Design 1 | Design 2 |
|---------|-------|---------|---------|
| **Contact Details** | vatNote | ✓ | ✗ Missing |
| **Address** | physical.country, postal.country | ✓ | ✗ Missing |
| **Branches** | country | ✓ | ✗ Missing |
| **Operations** | agenciesHeld | ✓ | ✗ Missing |
| **Premises** | occupationNote | ✓ | ✗ Missing |
| **Financial Info** | dateObtained, reportingCurrency | ✓ | ✗ Missing |
| **Company Benchmark** | industryOverview.sicCode (subtitle) | ✓ | ✗ Missing |
| **Active Principals** | currentBusinessInterests, propertiesAndBonds | ✓ | ✗ Abbreviated |
| **Non-Active Principals** | idNumber, dateOfBirth columns | ✓ | ✗ Fewer columns |
| **Trade Ref Summary** | Range, Years Known columns | ✓ | ✗ Fewer columns |

---

## Design 3 – Missing or Abbreviated Data

| Section | Field | Design 1 | Design 3 |
|---------|-------|---------|---------|
| **Address** | additionalComments | ✓ | ✗ Missing |
| **Address** | physical.country, postal.country | ✓ | ✗ Missing |
| **Branches** | province, country | ✓ | ✗ Missing |
| **Corporate Structure** | associateCompany, subsidiaryCompany | ✓ | ✗ Missing |
| **Active Principals** | dateOfBirth, currentBusinessInterests, propertiesAndBonds | ✓ | ✗ Abbreviated |
| **Operations** | agenciesHeld, importExport, fleet | ✓ | ✗ Missing |
| **Staff** | salaried, wages, salariedPaymentDay, wagesPaymentDay | ✓ | ✗ Abbreviated (total + B-BBEE only) |
| **Premises** | location, occupationNote | ✓ | ✗ Missing |
| **Premises** | propertiesAndBonds | ✓ | ✗ Missing |
| **Financial Info** | dateObtained, reportingCurrency | ✓ | ✗ Missing |
| **Financial Info** | acidTestRatio, preTaxProfitMargin | ✓ | ✗ Missing |
| **Contracts** | notes | ✓ | ✗ Missing |
| **Risk Grade** | score, maxScore, model | ✓ | ✗ Abbreviated (riskLevel + interpretation only) |
| **Trade References** | Full comments | ✓ | ✗ Truncated to 80 chars |
| **Trade Ref Summary** | Range, Years Known columns | ✓ | ✗ Fewer columns |
| **Company Benchmark** | industryOverview.sicCode (subtitle) | ✓ | ✗ Missing |
| **Contact Details** | vatNote | ✓ | ✓ Present |

---

## Summary

- **Design 1**: Full data set (baseline).
- **Design 2**: ✓ All data now included.
- **Design 3**: ✓ All data now included.

If you want Designs 2 and 3 to match Design 1’s data coverage, these gaps can be filled in the render functions.
