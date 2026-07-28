# Implementation Authorization

**PROJECT:**  
**PLAN_VERSION:**  
**AUTHORIZED_BY:** MASTER_AGENT  
**HUMAN_APPROVER:**  
**TIMESTAMP:**  

## Scope Authorized

List MVP slices / FR IDs allowed:

-

## Forbidden

- Anything outside scope without Change Control + gate reopen  
- Disabling tests, security scanners, or a11y checks without waiver  

## Must Comply

- Tests mandatory for behavioral changes  
- Security controls from `docs/security/BASELINE.md`  
- Performance budgets from `docs/performance/BUDGETS.md`  
- Accessibility target from `docs/accessibility/TARGET.md`  
- Localization architecture from `docs/localization/I18N_ARCHITECTURE.md` (if applicable)  
- Documentation updates for user/ops-facing changes  

## Revoke If

- Scope creep without gate  
- Critical unknown discovered that invalidates architecture/MVP  
- Unmitigated Critical security regression  

AUTHORIZATION_STATE: AUTHORIZED_IMPLEMENTATION
