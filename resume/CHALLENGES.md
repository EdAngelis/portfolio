# Technical Challenges / Case Studies

Reusable, real, specific technical challenge stories for AI interview chatbots, behavioral questions, and "describe a challenge" screening prompts. Only add entries here with facts confirmed directly by Ed — never invent details. Check here before asking Ed again for a similar story.

## Evoy / Manusis4 — AWS Infrastructure Refactor (Aug 2022 – Oct 2024)

**Context:** IoT device platform managing 10,000+ devices and their assets (see RESUME-LINKEDIM.md). Ed led architecture decisions on AWS.

**The challenge:** The great challenge was to refactor all the infrastructure on AWS, without downtime and without losing data.

**AWS services used:** Elastic Beanstalk, Lambda, EventBridge, Route 53, EC2, API Gateway, CloudWatch, SQS.

**Database:** MongoDB, hosted on MongoDB Atlas.

**Device communication:** Devices' data was fetched via HTTP requests and webhooks from the service middleware (not MQTT).

**Migration/consistency approach:** Bidirectional synchronization between the old and new infrastructure during the parallel migration, to keep data consistent on both sides until cutover.

**Sync implementation detail:** Since device data was fetched via HTTP requests, both the old and new systems polled data from the same source. Ed wrote a merge script afterward to deduplicate and reconcile the data between both environments (polling + post-hoc merge/dedup script, not an event log or message queue).

**Divergence monitoring:** A recurring script searched for divergences between the old and new environments. Plan was to run both infrastructures in parallel for an extended period until confident enough to fully cut over.

**Rollback plan:** Simply point the domain in Route 53 back to the former infrastructure.

**Notes for future use:** This is the core challenge story for this role. If an interviewer/AI asks for more specifics beyond what's captured here, ask Ed directly rather than inventing details — then record the additional detail in this entry.
