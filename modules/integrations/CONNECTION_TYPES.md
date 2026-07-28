# Atlas AI — Connection Types (جميع أنواع الربط)

**Version:** 1.0.0  
**Owner:** Integrations Agent  
Use this to pick **how** to connect — then pick the platform from `PLATFORMS_CATALOG.md`.

---

## Quick chooser

| Need | Prefer |
|------|--------|
| User logs in with Google/Microsoft | **OAuth 2.1 / OIDC** |
| Server talks to SaaS API | **REST + API key** or **OAuth client credentials** |
| Provider pushes events to you | **Inbound webhook** (+ verify signature) |
| You notify another system | **Outbound webhook** or **Queue/Event bus** |
| Realtime UI updates | **WebSocket** or **SSE** |
| AI tool calling / Cursor tools | **MCP** |
| Mobile deep open | **App Links / Universal Links / Custom scheme** |
| Enterprise SSO | **SAML 2.0** (+ optional **SCIM**) |
| Bulk/historical sync | **Batch/ETL** or **CDC** |
| No-code glue | **iPaaS** (Zapier/n8n) — not for core ledger |

---

## 1. Synchronous HTTP APIs

### 1.1 REST / JSON

- **When:** CRUD, most SaaS APIs  
- **Auth:** Bearer, API key header, HMAC  
- **Must:** timeouts, retries (safe methods / idempotent writes), typed errors  
- **Atlas docs:** `docs/integrations/platforms/{slug}.md`

### 1.2 GraphQL

- **When:** flexible queries, GitHub/Shopify-style APIs  
- **Watch:** query cost limits, persisted queries if required  

### 1.3 gRPC / Connect

- **When:** internal high-perf service-to-service  
- **Auth:** mTLS or JWT  

### 1.4 SOAP / XML legacy

- **When:** banks, government, old ERPs  
- **Pattern:** anti-corruption layer + strict schema  

---

## 2. Auth & identity connections

### 2.1 OAuth 2.1 + PKCE (authorization code)

- User-delegated access (Google Drive, Slack user token, …)  
- Exact redirect URI, refresh rotation, scoped least privilege  

### 2.2 OIDC

- Sign-in (“Login with X”) — identity layer on OAuth  

### 2.3 Client credentials

- Machine-to-machine (M2M) — no user present  

### 2.4 API keys / Personal access tokens

- Simple server integrations  
- Store hashed/encrypted; rotate; never in frontend  

### 2.5 mTLS

- High-trust B2B / banking  

### 2.6 SAML 2.0

- Enterprise SSO  

### 2.7 SCIM 2.0

- User provisioning from IdP  

### 2.8 Signed URL / HMAC query

- Temporary access to files/webhooks  

---

## 3. Event-driven connections

### 3.1 Inbound webhooks

- Verify signature on **raw body**  
- Dedupe `event_id`  
- Return 2xx quickly; process async  
- Replay tooling  

### 3.2 Outbound webhooks (your product → customer)

- Signing secret per tenant  
- Delivery attempts + DLQ  
- Versioned payloads  

### 3.3 Message queues / buses

- SQS, Pub/Sub, Service Bus, Kafka, RabbitMQ, NATS  
- At-least-once → idempotent consumers  

### 3.4 CDC (Change Data Capture)

- Debezium / provider streams for DB sync  

### 3.5 WebSocket

- Bidirectional realtime (chat, collab, trading)  

### 3.6 SSE (Server-Sent Events)

- One-way server→client streams  

---

## 4. AI & agent connections

### 4.1 MCP (Model Context Protocol)

- Tools/resources for Cursor, Claude, custom agents  
- Auth per server; never expose prod write tools without gates  

### 4.2 LLM provider APIs

- OpenAI / Anthropic / Azure OpenAI / Gemini / local  
- Timeouts, token budgets, redaction, eval hooks (AI Agent)  

### 4.3 Embedding / vector DB

- Pinecone, pgvector, Weaviate, etc.  

### 4.4 Speech / Vision / OCR APIs

- Async jobs + webhook callbacks when long-running  

---

## 5. Data & file connections

### 5.1 Direct database (only if you own it)

- Prefer app APIs; raw DB cross-service is a last resort  

### 5.2 SFTP / FTPS / AS2

- Classic B2B file exchange  

### 5.3 Object storage

- S3 / GCS / Azure Blob — presigned uploads  

### 5.4 Email inbound/outbound

- SMTP/API send; inbound parse (SendGrid/Mailgun/Postmark inbound)  

### 5.5 Spreadsheet / CSV sync

- Google Sheets API, Excel Graph — treat as brittle UI-of-data  

---

## 6. Client & device connections

### 6.1 Mobile push

- FCM / APNs  

### 6.2 Deep links

- Universal Links (iOS) / App Links (Android) / custom schemes  

### 6.3 SDK embed

- Native SDK in host app (payments, maps, analytics)  

### 6.4 iframe / JS widget

- CSP, clickjacking, postMessage allowlists  

### 6.5 Capacitor / RN bridges

- Device capabilities behind permissions  

---

## 7. Commerce & money rails

### 7.1 PSP / Checkout redirect or embedded Elements

- Stripe, Adyen, PayPal, local PSPs  
- Prefer hosted/embedded PCI-minimizing patterns  

### 7.2 Webhooks for payment state

- Source of truth = provider events + your ledger  

### 7.3 Open banking / rails

- Region-specific; compliance first  

---

## 8. Communications

### 8.1 WhatsApp Cloud API / Business

### 8.2 SMS / Voice (Twilio, MessageBird, …)

### 8.3 Slack / Teams / Discord bots

### 8.4 Email transactional  

Always: opt-in, rate limits, template i18n, delivery webhooks.

---

## 9. iPaaS & automation

### 9.1 Zapier / Make / n8n

- Great for ops glue  
- **Not** for core booking/money without an owned adapter underneath  

### 9.2 Custom workflow engine

- Temporal / Inngest / Trigger.dev — for durable sagas  

---

## 10. Network & edge

### 10.1 Reverse proxy / API gateway

### 10.2 VPN / Private Link / VPC peering

### 10.3 Cloudflare Workers / edge fetch

### 10.4 DNS / webhooks allowlisting / mutual IP allow lists  

---

## Decision record (per integration)

```markdown
Platform:
Connection type(s):
Auth:
Direction: inbound | outbound | bidirectional
Sync model: request/response | webhook | poll | stream
Idempotency:
Failure mode:
Secrets location:
Sandbox strategy:
Owner agent: INTEGRATIONS + …
```

— End of Connection Types —
