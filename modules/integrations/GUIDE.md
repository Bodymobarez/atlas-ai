# Module — Integrations

**Paired agent:** `agents/INTEGRATIONS_AGENT.md`  
**Professor title:** Distinguished Professor of Systems Integration & Platform Connectivity

## Purpose

Connect the product to external systems using the right **connection type** and **platform** patterns — securely and reliably.

## Read in order

1. `CONNECTION_TYPES.md` — all connection kinds  
2. `PLATFORMS_CATALOG.md` — platforms by category  
3. `templates/INTEGRATION_MATRIX.template.md` → project `docs/integrations/MATRIX.md`  
4. Agent: `agents/INTEGRATIONS_AGENT.md`

## Always-on defaults

- Adapter behind a port  
- Webhook signature verify + idempotency + DLQ  
- OAuth 2.1 + PKCE when user-delegated  
- Secrets in vault/KMS — never in git  
- Tests with signature fixtures  
- Observability + runbooks  

## Activate when

- Build MVP needs Stripe/Slack/WhatsApp/SSO/…  
- Evolve change adds or modifies any external link  
- User asks “اربط مع …” / “integrate …”  

## Outputs

`docs/integrations/` matrix, auth models, reliability, per-platform briefs, then adapters after authorization.
