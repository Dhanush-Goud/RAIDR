"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Disclaimer } from "@/components/ui/Disclaimer";
import { Input } from "@/components/ui/Input";
import { ErrorState, LoadingState } from "@/components/ui/States";
import { SAMPLE_DISEASES, SAMPLE_DRUGS } from "@/lib/constants";
import { saveLastResult } from "@/lib/resultStore";
import { predictionService } from "@/services/predictionService";

type FieldErrors = { drug?: string; disease?: string };
type Status = "idle" | "loading" | "error";

export function PredictionForm() {
  const router = useRouter();
  const [drug, setDrug] = useState("");
  const [disease, setDisease] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const validate = (): FieldErrors => ({
    drug: drug.trim() ? undefined : "Enter or select a drug.",
    disease: disease.trim() ? undefined : "Enter or select a disease.",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (nextErrors.drug || nextErrors.disease) return;

    setStatus("loading");
    try {
      const result = await predictionService.predict({ drug: drug.trim(), disease: disease.trim() });
      saveLastResult(result);
      router.push("/results");
    } catch {
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="max-w-2xl space-y-5">
      <Card>
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <Input id="drug" label="Drug" placeholder="Search or select a drug" options={SAMPLE_DRUGS} value={drug} error={errors.drug} disabled={isLoading} onChange={(e) => setDrug(e.target.value)} />
          <Input id="disease" label="Disease" placeholder="Search or select a disease" options={SAMPLE_DISEASES} value={disease} error={errors.disease} disabled={isLoading} onChange={(e) => setDisease(e.target.value)} />
          <Button type="submit" disabled={isLoading}>
            <Search className="h-4 w-4" aria-hidden="true" />
            Analyze Association
          </Button>
        </form>
      </Card>
      {isLoading && <LoadingState message="Analyzing association..." />}
      {status === "error" && <ErrorState message="Unable to retrieve prediction. Please try again." />}
      <Disclaimer>Sample drugs and diseases are for demonstration only and do not represent validated therapeutic relationships.</Disclaimer>
    </div>
  );
}
