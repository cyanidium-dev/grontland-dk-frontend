import { getLocale } from "next-intl/server";

import { Container, Heading } from "@/components/ui";
import type { Project } from "@/constants/projects";
import { ui } from "@/lib/i18n/copy";

/* "Om projektet" — pine contrast band (same layout family as the b2b
   capabilities block): the write-up on the left, the project facts as a
   stat list on the right. */
export async function ProjectAbout({ project }: { project: Project }) {
  const t = ui(await getLocale());
  const hasFacts = project.facts && project.facts.length > 0;

  return (
    <section className="bg-pine py-16 text-white xl:py-24">
      <Container>
        <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-16">
          <div className="min-w-0 xl:max-w-[560px]">
            <Heading as="h2" size="section" className="text-white">
              {t.projectAboutH2}
            </Heading>
            <p className="mt-6 font-light leading-relaxed text-white/90 xl:text-[18px]">
              {project.task}
            </p>

            {project.work.length > 0 ? (
              <>
                <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.35px] text-leaf">
                  {t.projectWorkH3}
                </h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 font-light leading-relaxed text-white/80">
                  {project.work.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          {hasFacts ? (
            <ul className="grid w-full flex-1 gap-3 sm:grid-cols-2 xl:content-start">
              {project.facts!.map((fact) => (
                <li
                  key={fact.label}
                  className="rounded-2xl border border-line bg-white px-5 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.35px] text-moss">
                    {fact.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-pine">{fact.value}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
