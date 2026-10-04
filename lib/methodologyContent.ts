export const PIPELINE_STAGES = [
  { title: "Biomedical Data", body: "Collect drug, disease and related biomedical data from sources to be selected." },
  { title: "Preprocessing", body: "Clean, harmonize and split the data for training and evaluation." },
  { title: "Feature / Representation Generation", body: "Build input representations. The approach is not yet finalized." },
  { title: "Drug–Disease Prediction", body: "Score potential associations between drugs and diseases." },
  { title: "Confidence Calibration", body: "Adjust confidence scores so they better match observed outcomes." },
  { title: "Distribution Shift Evaluation", body: "Evaluate behavior under temporal and phylogenetic shift." },
  { title: "Reliability Assessment", body: "Summarize how far each prediction can be trusted." },
  { title: "Prediction for Further Validation", body: "Pass prioritized candidates on for experimental and clinical validation." },
] as const;

export const CONCEPTS = [
  { title: "Drug Repurposing", body: "Identifying potential new uses for drugs that already exist." },
  { title: "Confidence Calibration", body: "Checking that a stated confidence of, say, 80% corresponds to being right about 80% of the time." },
  { title: "Temporal Distribution Shift", body: "Reliability changes when a model is evaluated on data from a later period than it was trained on." },
  { title: "Phylogenetic Distribution Shift", body: "Reliability changes when evaluation involves biological groups that differ from the training group. The exact setup is still to be defined." },
  { title: "Uncertainty / Reliability", body: "Communicating how much a prediction should be trusted, alongside the prediction itself." },
  { title: "Abstention or low-confidence flagging", body: "A possible future behavior in which low-confidence predictions are flagged instead of reported. It is not implemented." },
] as const;
