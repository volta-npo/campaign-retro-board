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
        "Next experiment queued"
    ],
    "artifacts": [
        "Retro report",
        "Metrics CSV",
        "Chapter lesson JSON"
    ],
    "checks": [
        "Baseline and result required",
        "Dates required",
        "Concrete next action before complete"
    ],
    "sampleClient": "Oak & Olive Cafe"
};
//# sourceMappingURL=domain.js.map