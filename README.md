# India Post Accessibility Baseline & Repository Architecture Audit

**Target:** India Post, Department of Posts — https://www.indiapost.gov.in/  
**Review date:** 30 October 2026

> **Audit limitation:** This is a preliminary desk review. A live Lighthouse run, DOM/accessibility-tree inspection, keyboard-only pass and screen-reader pass have not been executed here. The five worksheet entries are verification leads, not confirmed WCAG failures. Do not claim a Lighthouse score or WCAG conformance until you complete `docs/test-plan.md` and replace provisional evidence with screenshots/results.

## Included
- `docs/accessibility-audit.csv`: five records using the supplied worksheet columns.
- `docs/audit-report.md`: scope, findings and limitations.
- `docs/test-plan.md`: Lighthouse, keyboard and screen-reader procedure.
- `docs/architecture.md`: boundaries, tree and vertical slice.
- `client/`: semantic accessible service-directory prototype.
- `server/`: Express API.
- `tests/`: axe-core automated test starter.

## Setup
Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm test
npm run audit
```

The local Lighthouse command audits the prototype, not India Post. To audit India Post, follow the Chrome procedure in `docs/test-plan.md`.
