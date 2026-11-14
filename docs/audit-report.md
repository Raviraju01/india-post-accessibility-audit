# Accessibility Baseline Audit Report

## Executive summary
The selected public service website is India Post. Its homepage exposes shipment tracking, mail products, savings schemes, postal insurance, grievance management and related service portals.

Five review leads are recorded in `accessibility-audit.csv`. They are derived from publicly indexed homepage content and require direct browser verification. Text extraction alone cannot establish keyboard focus behavior, accessible names, semantic structure, live-region behavior or screen-reader output.

## Scope
- Target: https://www.indiapost.gov.in/
- Included: homepage navigation, offering cards, page structure, fraud alert and service links.
- Excluded: authenticated workflows, payment flows, tracking results, mobile app and third-party portals.

## Prioritized review list
| ID | Area | Priority | Required verification |
|---|---|---|---|
| WEB-001 | Navigation and focus order | Medium | Tab sequence and visible focus |
| WEB-002 | Offering cards | Medium | Accessible names, image alternatives |
| WEB-003 | Language and structure | Medium | DOM language, landmarks, headings |
| WEB-004 | Fraud alert | Low | Static/dynamic behavior, announcements |
| WEB-005 | External links | Low | Destination and new-tab behavior |

## Evidence to capture before submission
1. Lighthouse Accessibility report screenshot showing URL and score.
2. Keyboard-only screenshot/video showing focus in navigation and a service link.
3. Accessibility-tree or screen-reader evidence for a service card and alert.

Save evidence under `docs/evidence/` and update the CSV with exact reproduction steps, browser/device, date, result and screenshot filename.

## Limitations
Lighthouse (mobile preset, 14 Nov 2026) scored 97 out of 100 on the homepage; a desktop-preset run was blocked by the server (HTTP 403). The score is not WCAG certification. Automated tools detect only a subset of accessibility barriers. Manual keyboard and assistive-technology testing is mandatory. Final WCAG mapping and severity must be confirmed against reproduced issues.

## Lighthouse result (mobile preset)
- URL: https://www.indiapost.gov.in/
- Run: 2026-11-14T15:49:36Z, Lighthouse accessibility category, mobile preset
- Score: 97/100. Failed audits: label-content-name-mismatch (1 element) and target-size (7 elements), recorded as WEB-006 and WEB-007.
- A desktop-preset run returned HTTP 403 and was discarded.
- Report file: docs/evidence/lighthouse-indiapost.html
- Keyboard-only and screen-reader passes: not yet completed.
