import { ButtonLink } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function NotFound() {
  return (
    <>
      <SectionHeader as="h1" title="Page not found" description="The page you requested does not exist." />
      <ButtonLink href="/" className="mt-6">Back to home</ButtonLink>
    </>
  );
}
