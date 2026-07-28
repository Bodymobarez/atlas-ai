# Atlas AI Module — Test

**Paired agent:** `agents/TEST_AGENT.md`  
**Purpose:** Operational playbook for test design, automation, and CI requirements.

## When to use

Load this module when Master Agent activates the paired agent, or when you need the operational checklist for this domain.

## Artifact paths

Primary artifacts live under `docs/` in the matching domain folder. Follow the paired agent's Outputs Checklist exactly.

## Always-on defaults

- Evidence before decisions
- No product code before Implementation Authorization
- Tests mandatory for implementation work
- Security, performance, accessibility, localization, and documentation considered in every change that touches this domain

## Entry checklist

1. Read activation brief from Master
2. Read upstream artifacts listed in the agent file
3. Produce outputs to the specified paths
4. Return DoD + risks to Master

## Exit checklist

- [ ] Agent Definition of Done satisfied
- [ ] Handoff note written if required
- [ ] STATUS.md updated by Master
- [ ] No unauthorized product code introduced

## Related

- Agent: `agents/TEST_AGENT.md`
- Gates: `gates/`
- Workflows: `workflows/`
