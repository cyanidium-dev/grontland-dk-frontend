import { Container, Heading, Button, StarChip } from "@/components/ui";
import { QUOTE_FORM } from "@/constants/home";

const inputClass =
  "h-[50px] w-full rounded-[12px] border border-line bg-mist px-4 text-sm text-pine outline-none transition-colors placeholder:text-pine/40 focus:border-leaf";

/* SHELL — "Få et tilbud på dit projekt": final lead form. Pine band, heading
   column + white form card; reassurance facts as StarChips. View-only markup
   (no submit handling yet). */
export function QuoteForm() {
  return (
    <section className="bg-pine py-16 text-white xl:py-24">
      <Container>
        <div className="grid gap-12 xl:grid-cols-[1fr_1.3fr] xl:gap-16">
          <div>
            <Heading as="h2" size="section" className="text-white">
              {QUOTE_FORM.h2}
            </Heading>
            <p className="mt-5 max-w-md font-light leading-[1.35] text-white/75 xl:text-[17px]">
              {QUOTE_FORM.sub}
            </p>
            <ul className="mt-10 flex flex-col gap-3">
              {QUOTE_FORM.reassurance.map((item) => (
                <li key={item.label}>
                  <StarChip
                    text={`${item.label}: ${item.value}`}
                    boxVariant="light"
                    starVariant="leaf"
                    textSize="sm"
                  />
                </li>
              ))}
            </ul>
          </div>

          <form className="rounded-3xl bg-white p-8 text-pine">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">{QUOTE_FORM.fields.name}</span>
                <input type="text" className={inputClass} />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">{QUOTE_FORM.fields.phone}</span>
                <input type="tel" className={inputClass} />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">{QUOTE_FORM.fields.email}</span>
                <input type="email" className={inputClass} />
              </label>

              <fieldset className="sm:col-span-2">
                <legend className="mb-2 block text-sm font-semibold">{QUOTE_FORM.whoLabel}</legend>
                <div className="flex flex-wrap gap-3">
                  {QUOTE_FORM.whoOptions.map((option) => (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium text-pine/70 transition-colors has-checked:border-leaf has-checked:bg-leaf/10 has-checked:text-pine"
                    >
                      <input type="radio" name="who" value={option} className="accent-leaf" />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">{QUOTE_FORM.taskLabel}</span>
                <select className={inputClass} defaultValue="">
                  <option value="" disabled>
                    {QUOTE_FORM.taskPlaceholder}
                  </option>
                  {QUOTE_FORM.taskOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold">{QUOTE_FORM.message}</span>
                <textarea
                  rows={4}
                  className="w-full rounded-[12px] border border-line bg-mist px-4 py-3 text-sm text-pine outline-none transition-colors placeholder:text-pine/40 focus:border-leaf"
                />
              </label>

              <div className="sm:col-span-2">
                <span className="mb-1.5 block text-sm font-semibold">{QUOTE_FORM.upload}</span>
                <div className="flex h-20 items-center justify-center rounded-xl border border-dashed border-moss/40 bg-mist text-sm text-pine/50">
                  {QUOTE_FORM.uploadHint}
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Button type="submit" variant="leaf" className="w-full">
                {QUOTE_FORM.button}
              </Button>
            </div>
            <p className="mt-3 text-center text-xs text-pine/50">{QUOTE_FORM.micro}</p>
          </form>
        </div>
      </Container>
    </section>
  );
}
