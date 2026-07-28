# Code Review Checklist — AI Features

- [ ] Use case and success definition still match Product docs  
- [ ] Grounding/permissions prevent data leakage across tenants/users  
- [ ] Eval thresholds referenced; golden set updated if behavior changes  
- [ ] Safety filters / prompt-injection mitigations present  
- [ ] Human fallback / degradation path when model fails  
- [ ] Cost and latency budgets respected (token limits, timeouts)  
- [ ] Logging/redaction policy followed for prompts and outputs  
- [ ] Feature flagged for risky rollouts when required  
- [ ] No unconstrained tool loops  
- [ ] Documentation of known failure modes updated  
