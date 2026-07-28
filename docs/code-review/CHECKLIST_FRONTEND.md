# Code Review Checklist — Frontend

- [ ] Journey states: loading / empty / error / success  
- [ ] Uses Design System components/tokens (or justified exception)  
- [ ] Strings via i18n when multi-locale in scope  
- [ ] Focus order and visible focus for new interactive elements  
- [ ] Forms: labels, errors associated, submit disabled rules clear  
- [ ] No secrets or long-lived tokens in unsafe storage vs Security baseline  
- [ ] API errors mapped to user-safe messages  
- [ ] Analytics events match product metrics dictionary (no PII leaks)  
- [ ] Performance: avoid unnecessary re-renders/huge bundles on critical routes  
- [ ] Tests for critical UI logic / interactions as per Test policy  
