# Atlas AI — Platforms Catalog (كتالوج المنصات)

**Version:** 1.0.0  
**Owner:** Integrations Agent  
Pick a platform → pick connection type(s) from `CONNECTION_TYPES.md` → fill `templates/INTEGRATION_MATRIX.template.md`.

> Not every API on Earth — **category coverage + representative platforms**. Add rows as projects need them.

---

## How to use

1. Find category  
2. Note default connection types  
3. Create `docs/integrations/platforms/{slug}.md` for anything beyond trivial  
4. Security + reliability checklist from Integrations Agent  

---

## 1. Identity & access

| Platform | Typical connection | Notes |
|----------|-------------------|-------|
| Auth0 | OIDC / OAuth / SAML | CIAM |
| Okta | OIDC / SAML / SCIM | Enterprise |
| Microsoft Entra ID (Azure AD) | OIDC / SAML / Graph / SCIM | M365 ecosystem |
| Google Identity / Workspace | OIDC / OAuth / Admin SDK | Login + Drive/Calendar |
| Apple Sign In | OAuth/OIDC | Mobile-heavy |
| Keycloak | OIDC / SAML | Self-hosted |
| Cognito | OIDC / hosted UI | AWS |
| Firebase Auth | SDK + token verify | Mobile/web |
| Clerk / Supabase Auth / Firebase | SDK / JWT | Fast product auth |

**Default types:** OIDC, OAuth 2.1+PKCE, SAML, SCIM, JWT verify  

---

## 2. Cloud & infrastructure

| Platform | Typical connection |
|----------|-------------------|
| AWS | SDK, IAM roles, SQS/SNS/EventBridge, S3, Lambda URLs |
| GCP | ADC, Pub/Sub, GCS, Cloud Functions |
| Azure | Managed Identity, Service Bus, Blob, Functions |
| Cloudflare | Workers, R2, Queues, Webhooks, DNS API |
| Vercel / Netlify | Deploy hooks, env, serverless |
| DigitalOcean / Hetzner | API + SSH/IaC |
| Terraform Cloud / Pulumi | API + VCS webhooks |
| Docker Hub / GHCR | Registry auth |

**Default types:** SDK, REST, webhooks, queues, mTLS/private link when needed  

---

## 3. Source control & DevOps

| Platform | Typical connection |
|----------|-------------------|
| GitHub | REST/GraphQL, Apps, webhooks, OAuth, Checks API |
| GitLab | REST, webhooks, OAuth |
| Bitbucket | REST, webhooks |
| Azure DevOps | REST, service hooks |
| CircleCI / Jenkins / Buildkite | API + webhooks |
| SonarCloud | API + PR decoration |

---

## 4. Payments & fintech

| Platform | Typical connection |
|----------|-------------------|
| Stripe | REST + webhooks + Checkout/Elements |
| Adyen | API + webhooks |
| PayPal / Braintree | REST + webhooks |
| Square | API + webhooks |
| Checkout.com / Mollie / Paddle / LemonSqueezy | REST + webhooks |
| Tap / Paymob / Moyasar / HyperPay | Regional PSPs — REST + webhooks |
| Wise / banking APIs | OAuth + webhooks (compliance-heavy) |

**Default types:** REST + **inbound webhooks** (source of truth) + idempotency  

---

## 5. Communications

| Platform | Typical connection |
|----------|-------------------|
| Twilio | REST + status callbacks |
| MessageBird / Vonage | REST + webhooks |
| WhatsApp Cloud API | Graph API + webhooks |
| Telegram Bot API | Webhooks / long poll |
| Slack | OAuth + Events API + webhooks + Bolt SDK |
| Microsoft Teams | Bot Framework + Graph |
| Discord | Bot gateway / webhooks |
| SendGrid / Postmark / SES / Mailgun / Resend | API + inbound parse webhooks |
| Intercom / Zendesk / Freshdesk | REST + webhooks |
| Crisp / Tawk | Widget + webhooks |

---

## 6. Productivity & collaboration

| Platform | Typical connection |
|----------|-------------------|
| Google Workspace (Gmail/Drive/Calendar/Sheets) | OAuth + REST/push |
| Microsoft 365 / Graph | OAuth + Graph + change notifications |
| Notion | OAuth + REST |
| Airtable | REST + webhooks |
| Asana / Jira / Linear / Trello / Monday | REST + webhooks |
| Confluence | REST |
| Dropbox / Box | OAuth + webhooks |
| Zoom / Google Meet APIs | OAuth + webhooks |

---

## 7. CRM / sales / marketing

| Platform | Typical connection |
|----------|-------------------|
| Salesforce | OAuth + REST/Bulk + Platform Events |
| HubSpot | OAuth + REST + webhooks |
| Pipedrive / Zoho CRM | REST + webhooks |
| Segment / RudderStack | Server + client sources |
| Mixpanel / Amplitude / PostHog | REST / SDK |
| Mailchimp / Braze / Customer.io | REST + webhooks |
| Meta Ads / Google Ads | OAuth + APIs |

---

## 8. E-commerce & marketplaces

| Platform | Typical connection |
|----------|-------------------|
| Shopify | OAuth + Admin/Storefront + webhooks |
| WooCommerce | REST + webhooks |
| Magento | REST/OAuth |
| Amazon SP-API | OAuth + SQS notifications |
| Noon / regional marketplaces | Partner APIs (varies) |
| Salla / Zid | Regional commerce APIs |

---

## 9. Maps, travel, logistics

| Platform | Typical connection |
|----------|-------------------|
| Google Maps / Places / Routes | API keys + quotas |
| Mapbox | Tokens + APIs |
| Here / OpenStreetMap / Nominatim | REST |
| Amadeus / Sabre / Travelport | GDS/NDC — SOAP/REST + sessions |
| Duffel / Travel APIs | REST + webhooks |
| Shippo / EasyPost / Aramex / SMSA | REST + tracking webhooks |

---

## 10. Data, analytics, warehouses

| Platform | Typical connection |
|----------|-------------------|
| Postgres / MySQL / SQL Server | Drivers (owned DBs only) |
| MongoDB Atlas | Drivers + Triggers |
| Redis / Upstash | TCP/REST |
| BigQuery / Snowflake / Redshift | Service accounts + loaders |
| Elasticsearch / OpenSearch | REST |
| Kafka / Redpanda | Protocols + Connect |
| Fivetran / Airbyte | Managed sync |
| Metabase / Looker / Power BI | Embed / API |

---

## 11. AI / ML platforms

| Platform | Typical connection |
|----------|-------------------|
| OpenAI | REST + optional webhooks/tools |
| Anthropic | REST |
| Azure OpenAI | REST + Entra auth |
| Google Gemini / Vertex | REST/ADC |
| AWS Bedrock | SDK |
| Hugging Face | REST |
| Replicate / fal.ai / Runway | REST + webhooks |
| LangSmith / Helicone | Observability APIs |
| Pinecone / Weaviate / Qdrant / pgvector | REST/SDK |
| **MCP servers** | MCP stdio/SSE/HTTP — tools/resources |

---

## 12. Automation / iPaaS

| Platform | Typical connection |
|----------|-------------------|
| Zapier | REST Hooks + OAuth |
| Make (Integromat) | Webhooks + HTTP |
| n8n | Webhooks + credentials |
| Workato / Tray | Enterprise iPaaS |
| Temporal / Inngest / Trigger.dev | Durable workflows SDK |

---

## 13. Security & secrets

| Platform | Typical connection |
|----------|-------------------|
| HashiCorp Vault / AWS Secrets Manager / GCP Secret Manager / Azure Key Vault | SDK |
| Snyk / Dependabot / GitHub Advanced Security | webhooks + API |
| PagerDuty / Opsgenie | Events API + webhooks |

---

## 14. Mobile & device

| Platform | Typical connection |
|----------|-------------------|
| Apple APNs | HTTP/2 cert or token |
| Firebase Cloud Messaging | SDK + HTTP v1 |
| RevenueCat / Store APIs | REST + webhooks |
| Branch / AppsFlyer / Adjust | SDK + S2S |
| Expo / EAS | API + webhooks |

---

## 15. Government / regional (examples)

| Platform | Notes |
|----------|-------|
| UAE Pass / national IDs | OIDC-like / partner docs |
| Local tax/e-invoicing | Often SOAP/REST + certificates |
| Telecom SMS aggregators | REST + DLR callbacks |

Always verify current official docs per country.

---

## Matrix stub (copy per project)

See `templates/INTEGRATION_MATRIX.template.md`.

— End of Platforms Catalog —
