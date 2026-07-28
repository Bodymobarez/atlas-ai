# Code Review Checklist — Security

- [ ] Threat model impact considered for the change  
- [ ] Authentication boundaries respected  
- [ ] Authorization checked server-side (not only UI hide)  
- [ ] Least privilege for new roles/scopes  
- [ ] Injection classes reviewed (SQL/NoSQL/command/XSS/SSRF) as applicable  
- [ ] CSRF protections intact for cookie/session flows  
- [ ] Secrets not in repo, logs, or client bundles  
- [ ] PII minimized; redaction in logs/traces  
- [ ] File upload / URL fetch constraints if touched  
- [ ] Dependency changes reviewed  
- [ ] AI features: prompt-injection and tool-abuse considered  
- [ ] Security tests or negative cases added for sensitive ops  
