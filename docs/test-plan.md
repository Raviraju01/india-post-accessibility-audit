# Accessibility Test Plan

## Lighthouse on India Post
1. Open https://www.indiapost.gov.in/ in desktop Chrome.
2. Open DevTools → Lighthouse.
3. Select Navigation, Desktop and Accessibility; generate the report.
4. Save a screenshot showing the tested URL, date and score.
5. Open each failed audit and record the affected element and suggested fix.
6. Do not treat a score as WCAG certification.

## Keyboard-only pass
1. Reload the page and do not use the mouse.
2. Press Tab from the top; record the focus sequence.
3. Confirm all interactive controls are reachable and focus is clearly visible.
4. Use Shift+Tab to move backward; Enter for links and Space for buttons.
5. Check menus and dialogs for keyboard operation and sensible focus return.
6. Record traps, skipped controls, unexpected order or invisible focus.

## Screen-reader pass
Use NVDA with Firefox/Chrome on Windows, or TalkBack with Chrome on Android.
- Confirm page title and language.
- Navigate by landmarks and headings.
- Inspect navigation and service-card link names.
- Check informative and decorative image alternatives.
- Check whether the fraud alert is announced appropriately.
- On relevant service forms, verify labels, instructions and error announcements.

## Evidence record
For each confirmed issue record URL, date/time, browser/device, assistive technology, steps, expected and actual results, screenshot filename, WCAG criterion, severity and retest status.
