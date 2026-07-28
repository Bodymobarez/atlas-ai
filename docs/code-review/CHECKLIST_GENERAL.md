# Code Review Checklist — General

Use on every product change after G8.

## Correctness

- [ ] Matches acceptance criteria / FR IDs  
- [ ] Edge cases and error paths handled  
- [ ] No silent failure / swallowed exceptions  

## Architecture

- [ ] Respects module boundaries / ADRs  
- [ ] No new cross-domain coupling without ADR  

## Security

- [ ] AuthN/AuthZ correct for new operations  
- [ ] Input validated at boundaries  
- [ ] No secrets committed; logs redacted  

## Tests

- [ ] Behavioral change has tests  
- [ ] Negative cases for sensitive operations  

## Performance

- [ ] No obvious N+1 / unbounded work on critical paths  
- [ ] Budgets considered  

## Accessibility (user-facing)

- [ ] Keyboard/focus/name/role basics preserved  
- [ ] Contrast and meaningful errors  

## Localization

- [ ] New UI/server strings externalized if i18n in scope  
- [ ] No sentence concatenation  

## Ops & Docs

- [ ] Metrics/logs/traces adequate  
- [ ] Migrations/rollback notes if schema changes  
- [ ] Docs/runbooks updated when behavior changes  

## Cost

- [ ] New AI/third-party/hot-path costs noted  
