# Code Review Checklist — Backend

- [ ] Domain invariants preserved  
- [ ] Transactions/idempotency correct for money/booking-like ops  
- [ ] AuthZ enforced on every new operation  
- [ ] Input validation and explicit error model  
- [ ] DB access aligns with access patterns / indexes  
- [ ] Migrations follow expand/contract + rollback notes  
- [ ] External calls: timeouts, retries, backoff, no infinite loops  
- [ ] Structured logging with correlation ids; PII redacted  
- [ ] Metrics/traces for critical path  
- [ ] Tests: unit for logic + integration for persistence/adapters  
- [ ] API contract conformance (no silent breaking changes)  
