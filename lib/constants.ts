export const SITE = {
  name: "RAIDR",
  fullName: "Reliable AI for Drug Repurposing",
  title: "Reliable AI Framework for Drug Repurposing",
  projectTitle: "Reliable AI Framework for Drug Repurposing under Phylogenetic and Temporal Distribution Shift",
  description:
    "An AI research platform for drug–disease association prediction and reliability evaluation under distribution shift.",
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/prediction", label: "Prediction" },
  { href: "/reliability", label: "Reliability" },
  { href: "/methodology", label: "Methodology" },
  { href: "/about", label: "About" },
] as const;

export const DEMO_DISCLAIMER =
  "Demo prediction for research visualization. Model outputs require experimental and clinical validation.";

export const MEDICAL_DISCLAIMER =
  "This platform is intended for research and educational purposes. Computational predictions are not medical advice and require further validation.";

/** Sample entries for the demo form only. They do not represent validated therapeutic relationships. */
export const SAMPLE_DRUGS = [
  "Metformin",
  "Aspirin",
  "Atorvastatin",
  "Sildenafil",
  "Thalidomide",
  "Dexamethasone",
  "Hydroxychloroquine",
  "Ibuprofen",
];

export const SAMPLE_DISEASES = [
  "Alzheimer's disease",
  "Type 2 diabetes",
  "Parkinson's disease",
  "Breast cancer",
  "Rheumatoid arthritis",
  "Asthma",
  "Multiple sclerosis",
  "Pulmonary fibrosis",
];
