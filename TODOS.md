# TODOS

## Review

### Enforce PHI/clinical-text blocking in intake

**What:** Add server-side and client-side validation that blocks patient-identifying or clinical-detail free-text submissions.

**Why:** Reduce compliance risk and remove manual review burden from the intake path.

**Context:** Current decision (`3.4C`) allows free text and relies on downstream manual review; this can fail silently at higher lead volume.

**Effort:** M
**Priority:** P1
**Depends on:** MVP intake API live with sample submission telemetry

### Add sync-failure operations visibility

**What:** Add a lightweight operational view or daily report for CRM/calendar sync failures and replay status.

**Why:** Ensure failed async sync items are discovered quickly and replayed without lead loss.

**Context:** Architecture uses durable write + async sync with retries; without visibility, backlog failures can persist unnoticed.

**Effort:** S/M
**Priority:** P2
**Depends on:** Queue and sync status fields available

### Replace temporary landing-page CTA placeholders before publish

**What:** Replace `href="#"` and in-page placeholder CTA links in `index.html` with real destinations for demo booking and protocol overview download.

**Why:** Ensure CTA behavior matches user expectations and avoids non-functional conversion actions in production.

**Context:** Current links are intentionally temporary placeholders and were accepted during review; this must be completed before launch.

**Effort:** S
**Priority:** P1
**Depends on:** Final demo URL and approved protocol overview asset URL

## Completed

### Add claims review checklist gate before publish

**What:** Created and added required `CLAIMS_REVIEW_CHECKLIST.md` for pre-publish claim review.

**Why:** Prevent inconsistent manual legal/regulatory review and reduce claim drift risk.

**Context:** Moves claim review from ad hoc process to a required release gate.

**Effort:** S
**Priority:** P1
**Depends on:** None
