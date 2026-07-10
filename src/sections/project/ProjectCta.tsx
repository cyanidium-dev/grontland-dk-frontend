import { OpenQuoteButton } from "@/components/quote";
import { Container, Heading } from "@/components/ui";

export function ProjectCta() {
  return (
    <section className="bg-pine py-16 text-white xl:py-20">
      <Container className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <Heading as="h2" size="section" className="max-w-xl text-white">
          Diskuter dit projekt
        </Heading>
        <OpenQuoteButton variant="white" size="md" className="w-full sm:w-auto">
          Få et tilbud
        </OpenQuoteButton>
      </Container>
    </section>
  );
}
