export const config = {
  "number": 27,
  "slug": "campaign-retro-board",
  "title": "Campaign Retro Board",
  "category": "Marketing & Content",
  "tagline": "A small-team retrospective board for learning what worked after each campaign.",
  "persona": "Marketing pods managing growth experiments.",
  "gap": "Students often execute campaigns but do not preserve learnings for the next pod or chapter.",
  "niche": "Continuous improvement for student-led marketing work.",
  "metric": "campaigns with completed retrospectives",
  "modules": [
    "Hypothesis tracker",
    "Results capture",
    "Lesson library",
    "Next experiment queue"
  ],
  "theme": {
    "accent": "#db2777",
    "accent2": "#f9a8d4",
    "emoji": "\ud83d\udce3",
    "metricLabel": "Content readiness",
    "workflow": [
      "Capture owner voice",
      "Generate channel-ready assets",
      "Review for local fit",
      "Export approved content"
    ],
    "privacy": "Do not publish quotes, photos, or testimonials without explicit owner/client approval."
  },
  "statuses": [
    "not-started",
    "blocked",
    "in-progress",
    "ready",
    "approved"
  ],
  "criteria": [
    {
      "id": "hypothesis-tracker",
      "label": "Hypothesis tracker",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify hypothesis tracker with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "results-capture",
      "label": "Results capture",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify results capture with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "lesson-library",
      "label": "Lesson library",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify lesson library with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "next-experiment-queue",
      "label": "Next experiment queue",
      "weight": 15,
      "defaultStatus": "not-started",
      "guidance": "Implement and verify next experiment queue with evidence that a Volta student pod, mentor, and owner can understand."
    },
    {
      "id": "evidence-quality",
      "label": "Evidence quality",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
    },
    {
      "id": "owner-handoff",
      "label": "Owner handoff",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Make the output understandable and maintainable by a nontechnical owner."
    },
    {
      "id": "mission-alignment",
      "label": "Mission alignment",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
    },
    {
      "id": "qa-safety",
      "label": "QA and safety",
      "weight": 10,
      "defaultStatus": "not-started",
      "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
    }
  ],
  "templates": {
    "actions": [
      "Run a real Volta scenario for Campaign Retro Board and capture baseline evidence.",
      "Complete the hypothesis tracker workflow with owner-safe notes.",
      "Resolve all blocked rubric items and add evidence for every ready item.",
      "Export the handoff packet and review it with a mentor before client use."
    ]
  },
  "sample": {
    "clientName": "Oak & Olive Cafe",
    "chapter": "Dallas",
    "studentLead": "Volta Student Lead",
    "notes": "Neighborhood marketing project with owner-approved content assets. Campaign Retro Board sample.",
    "evidencePrefix": "Campaign Retro Board",
    "evidence": [
      "Discovery call notes captured with owner confirmation.",
      "Public digital footprint reviewed and summarized.",
      "Mentor QA comments attached before handoff."
    ]
  }
};
