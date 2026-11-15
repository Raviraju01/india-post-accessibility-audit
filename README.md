# India Post Accessibility Baseline & Repository Architecture Audit

**Target:** India Post, Department of Posts — https://www.indiapost.gov.in/  
**Review date:** 30 October 2026

> **Audit limitation:** This is a preliminary desk review. A Lighthouse run (mobile preset, 14 Nov 2026, score 97) is recorded in docs/evidence. DOM/accessibility-tree inspection and the keyboard-only pass have not been executed here; a partial TalkBack screen-reader pass is recorded in docs/evidence/talkback-notes.md. WEB-001 to WEB-005 are verification leads and WEB-006 and WEB-007 are automated findings; none is a confirmed WCAG failure. Do not claim WCAG conformance until you complete `docs/test-plan.md` and replace provisional evidence with screenshots/results.

## Included
- `docs/accessibility-audit.csv`: seven records using the supplied worksheet columns.
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

## Results summary
- Demo site: accessible service directory with skip link, labelled search and a live result count. The automated axe-core test passes on the demo (`npm test`).
- Lighthouse on India Post (mobile preset, 14 Nov 2026): accessibility score 97/100. Two automated findings are recorded as WEB-006 and WEB-007 in `docs/accessibility-audit.csv`. A desktop run was blocked by the server (HTTP 403).
- TalkBack pass on the India Post homepage: notes in `docs/evidence/talkback-notes.md`.
- Not yet done: keyboard-only pass. Five leads (WEB-001 to WEB-005) remain unconfirmed, and no WCAG conformance is claimed.
