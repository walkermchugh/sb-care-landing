# TODOS

## Review

### Add claims review checklist gate before publish

**What:** Create and require a `CLAIMS_REVIEW_CHECKLIST.md` before any landing-page publish.

**Why:** Prevent inconsistent manual legal/regulatory review and reduce claim drift risk.

**Context:** Current plan keeps manual ad hoc claims review (`2.4B`) while the page includes regulated claim areas; this introduces preventable release risk.

**Effort:** S
**Priority:** P1
**Depends on:** None

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

## Completed

