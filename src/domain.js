export const domain = {
    "kind": "retro",
    "title": "Campaign Retro Board",
    "purpose": "A purpose-built retro interface for a small-team retrospective board for learning what worked after each campaign.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Campaign experiments",
    "metricLabels": [
        "Learning Completeness",
        "Metric Integrity",
        "Next Experiment Readiness"
    ],
    "fields": [
        { "id": "campaign-window", "label": "Campaign window", "type": "text", "sample": "2026 Q2 launch sprint", "placeholder": "Enter campaign window" },
        { "id": "budget-spend", "label": "Budget spend", "type": "number", "sample": 750, "placeholder": "Enter budget spend" },
        { "id": "north-star-metric", "label": "North-star metric", "type": "text", "sample": "Qualified inquiries", "placeholder": "Enter north-star metric" },
        { "id": "review-cadence", "label": "Review cadence", "type": "text", "sample": "Weekly experiment council", "placeholder": "Enter review cadence" },
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Oak & Olive Cafe",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "campaigns with completed retrospectives",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Campaign goal recorded",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Retro report",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Campaign goal recorded",
        "Hypothesis written",
        "Baseline metric captured",
        "Result metric captured",
        "Evidence note attached",
        "Win/loss summary generated",
        "Lesson recorded",
        "Next experiment queued",
        "Experiment hypothesis recorded",
        "Metric delta calculated",
        "Reusable lesson tagged",
        "CSV schema validated",
        "Campaign workspace provisioned",
        "Experiment owner assigned",
        "Channel budget ledger reconciled",
        "Attribution confidence labeled",
        "Learning backlog prioritized",
        "Stakeholder readout generated",
        "Experiment template saved for reuse",
        "Portfolio benchmark updated",
    ],
    "artifacts": [
        "Retro report",
        "Metrics CSV",
        "Chapter lesson JSON",
        "Experiment portfolio dashboard",
        "Stakeholder readout deck outline",
        "Learning backlog export",
    ],
    "checks": [
        "Baseline and result required",
        "Dates required",
        "Concrete next action before complete",
        "Budget and date window must be present for paid campaigns",
        "Every learning needs evidence confidence",
        "Next experiment cannot ship without owner and metric",
    ],
    "sampleClient": "Oak & Olive Cafe",
    "modules": [
        { "name": "Experiment portfolio", "description": "Multi-campaign library of hypotheses, channels, audiences, budgets, outcomes, and reusable learnings." },
        { "name": "Attribution confidence grader", "description": "Labels each metric as direct, directional, anecdotal, or untrusted with evidence requirements." },
        { "name": "Learning backlog prioritizer", "description": "Ranks next experiments by upside, confidence, effort, cost, and dependency risk." },
        { "name": "Stakeholder readout builder", "description": "Auto-structures owner-facing wins, misses, metric deltas, decisions, and next sprint asks." },
        { "name": "Benchmark library", "description": "Captures historical performance by channel, segment, season, and offer for better future planning." },
        { "name": "Experiment template marketplace", "description": "Reusable campaign retro templates for events, launches, reactivation, fundraising, and local SEO pushes." }
    ],
    "saas": {
        "customerSegments": [
            "Student marketing pods running client campaigns",
            "Small businesses comparing campaign experiments",
            "Chapter mentors standardizing retrospectives",
            "Nonprofit program teams reporting outreach learnings"
        ],
        "pricingTiers": [
            "Free: one campaign retro and markdown export",
            "Growth: campaign portfolio, CSV imports, and stakeholder readouts",
            "Team: benchmarks, approvals, and recurring retro rituals",
            "Agency: cross-client learning library and white-label dashboards"
        ],
        "onboardingChecklist": [
            "Create campaign workspace",
            "Define north-star and guardrail metrics",
            "Import baseline and result evidence",
            "Assign experiment owner and stakeholder reviewer",
            "Schedule retro ritual and next-test review"
        ],
        "successMetrics": [
            "Every experiment has hypothesis, result, and evidence confidence",
            "At least one next action queued per campaign",
            "Metric delta calculated for primary KPI",
            "Stakeholder readout exported within retro window"
        ],
        "dashboards": [
            "Campaign experiment portfolio",
            "Metric delta and attribution quality",
            "Learning backlog priority board",
            "Stakeholder readout readiness"
        ],
        "dataModel": [
            "CampaignWorkspace",
            "Experiment",
            "MetricSnapshot",
            "AttributionLabel",
            "LessonCard",
            "NextTest",
            "StakeholderReadout",
            "BenchmarkRecord"
        ],
        "permissions": [
            "Campaign owner: experiment and result editing",
            "Analyst: metrics import and attribution labels",
            "Mentor: learning approval and portfolio review",
            "Stakeholder: readout-only access"
        ],
        "compliance": [
            "No unsupported causal claims without confidence label",
            "Budget/spend shown only in client-safe context",
            "Internal notes excluded from stakeholder export",
            "Metric source retained for each result"
        ],
        "lifecycle": [
            "Plan",
            "Launch",
            "Measure",
            "Retro",
            "Decide",
            "Queue",
            "Benchmark",
            "Repeat"
        ],
        "retentionSignals": [
            "Next test not scheduled",
            "Stale campaign without retro",
            "Learning cards reused in new plans",
            "Stakeholder readout downloaded"
        ],
        "exportChannels": [
            "Retro markdown",
            "Metrics CSV",
            "Lesson JSON",
            "Stakeholder readout outline",
            "Next-test backlog"
        ],
        "playbooks": [
            "Campaign hypothesis review",
            "Metric delta analysis workflow",
            "Reusable lesson publishing",
            "Next-test prioritization meeting"
        ],
        "automations": [
            "CSV schema validation",
            "Lift/drop calculation",
            "Lesson confidence scoring",
            "Next-test backlog generation"
        ],
        "revenueModel": "Team retro workspace with paid stakeholder dashboards and reusable lesson repositories",
        "integrationTargets": [
            "Google Sheets metrics",
            "Meta Ads reports",
            "Mailchimp campaign exports",
            "Notion lesson library"
        ]
    }
};
//# sourceMappingURL=domain.js.map