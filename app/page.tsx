import Link from "next/link";
import {
  BadgeCheck,
  CalendarCheck,
  Gem,
  HeartHandshake,
  Leaf,
  Mail,
  Phone,
  Sparkles,
  Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Botanical } from "@/components/botanical";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";

type Treatment = {
  name: string;
  description: string;
  meta: string;
  icon: LucideIcon;
};

const treatments: Treatment[] = [
  {
    name: "Radiance Facial",
    description:
      "A brightening facial that lifts dullness with vitamin C, gentle enzymes and a cooling sculpting massage.",
    meta: "60 min · from $120",
    icon: Sparkles,
  },
  {
    name: "Swedish Massage",
    description:
      "A full-body relaxation massage with warm oil to release tension and quiet a busy mind.",
    meta: "60 min · from $110",
    icon: Waves,
  },
  {
    name: "Aromatherapy Ritual",
    description:
      "A slow, custom-blended oil ritual chosen for your mood, from grounding cedar to bright citrus.",
    meta: "75 min · from $140",
    icon: Leaf,
  },
  {
    name: "Hot Stone Therapy",
    description:
      "Smooth basalt stones melt deep tension along the back and shoulders for whole-body calm.",
    meta: "75 min · from $150",
    icon: Gem,
  },
];

const reasons: Treatment[] = [
  {
    name: "Licensed therapists",
    description:
      "Every therapist is certified and hand-picked for a warm, unhurried touch.",
    meta: "",
    icon: BadgeCheck,
  },
  {
    name: "Calm by design",
    description:
      "A light, quiet studio with private rooms and no rush between treatments.",
    meta: "",
    icon: HeartHandshake,
  },
  {
    name: "Thoughtful products",
    description:
      "Clean, cruelty-free formulas chosen for sensitive skin and lasting results.",
    meta: "",
    icon: Leaf,
  },
  {
    name: "Easy booking",
    description:
      "Reserve by phone or email and we confirm your visit within the hour.",
    meta: "",
    icon: CalendarCheck,
  },
];

const cardShadow = "shadow-[0_18px_44px_-26px_rgba(131,24,67,0.4)]";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <section
          aria-labelledby="hero-heading"
          className="relative overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="drift absolute -left-24 top-10 size-72 rounded-full bg-secondary/50 blur-3xl" />
            <div className="drift-slow absolute -right-16 top-40 size-80 rounded-full bg-accent/20 blur-3xl" />
          </div>

          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-20">
            <div className="space-y-6">
              <p className="rise font-sans text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Serenity Spa · Miami
              </p>
              <h1
                id="hero-heading"
                className="rise rise-1 max-w-xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[4.25rem]"
              >
                A quiet place to
                <span className="text-primary"> reset</span>.
              </h1>
              <p className="rise rise-2 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Serenity Spa is a calm, light-filled studio for expert facials,
                massage and aromatherapy rituals — designed around rest, not
                rush.
              </p>
              <div className="rise rise-3 flex flex-wrap items-center gap-3">
                <Link
                  href="/#booking"
                  className={buttonVariants({ size: "lg" })}
                >
                  Book now
                </Link>
                <Link
                  href="/#treatments"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Explore treatments
                </Link>
              </div>
              <p className="rise rise-4 text-sm font-medium text-muted-foreground">
                Open Tue–Sun · By appointment · 128 Palm Court, Miami
              </p>
            </div>

            <div className="rise rise-2 relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                className={`relative rounded-[2.5rem] border border-border bg-card/70 p-4 ${cardShadow}`}
              >
                <Botanical className="h-auto w-full" />
              </div>
            </div>
          </div>
        </section>

        <section
          id="treatments"
          aria-labelledby="treatments-heading"
          className="scroll-mt-20 border-t border-border/70 bg-card/60"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <div className="max-w-2xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Signature treatments
              </p>
              <h2
                id="treatments-heading"
                className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Treatments that leave you lighter
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Each visit begins with a short consultation, so your therapist
                can adapt pressure, products and pace to how you feel today.
              </p>
            </div>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {treatments.map(({ name, description, meta, icon: Icon }) => (
                <li
                  key={name}
                  className={`flex h-full flex-col gap-4 rounded-[var(--radius)] border border-border bg-card p-6 ${cardShadow}`}
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-secondary/40 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {name}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {description}
                    </p>
                  </div>
                  <p className="mt-auto text-sm font-semibold text-primary">
                    {meta}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="why"
          aria-labelledby="why-heading"
          className="scroll-mt-20 border-t border-border/70"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                Why Serenity
              </p>
              <h2
                id="why-heading"
                className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Care you can feel from the first minute
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                We keep the studio small on purpose. Fewer guests, longer
                appointments and a team that remembers how you like to rest.
              </p>
            </div>

            <ul className="grid gap-6 sm:grid-cols-2">
              {reasons.map(({ name, description, icon: Icon }) => (
                <li key={name} className="space-y-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon aria-hidden="true" className="size-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {name}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="booking"
          aria-labelledby="booking-heading"
          className="scroll-mt-20 border-t border-border/70"
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
            <div
              className={`rounded-[2rem] border border-border bg-card p-8 sm:p-12 ${cardShadow}`}
            >
              <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="space-y-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                    Book your visit
                  </p>
                  <h2
                    id="booking-heading"
                    className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
                  >
                    Reserve your time to unwind
                  </h2>
                  <p className="max-w-lg text-base leading-relaxed text-muted-foreground">
                    Tell us the treatment and a time that suits you. Call or
                    email us and we will confirm your appointment within the
                    hour.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="tel:+13055550134"
                      className={buttonVariants({ size: "lg" })}
                    >
                      <Phone aria-hidden="true" className="size-5" />
                      Call to book
                    </a>
                    <a
                      href="mailto:hello@serenityspa.example?subject=Booking%20request"
                      className={buttonVariants({
                        variant: "outline",
                        size: "lg",
                      })}
                    >
                      <Mail aria-hidden="true" className="size-5" />
                      Email us
                    </a>
                  </div>
                </div>

                <dl className="grid gap-5 rounded-[var(--radius)] bg-muted p-6 text-sm sm:grid-cols-2 lg:grid-cols-1">
                  <div>
                    <dt className="font-semibold text-foreground">Call</dt>
                    <dd>
                      <a
                        className="text-muted-foreground transition-colors hover:text-primary"
                        href="tel:+13055550134"
                      >
                        +1 (305) 555-0134
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Email</dt>
                    <dd>
                      <a
                        className="text-muted-foreground transition-colors hover:text-primary"
                        href="mailto:hello@serenityspa.example"
                      >
                        hello@serenityspa.example
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Studio</dt>
                    <dd className="text-muted-foreground">
                      128 Palm Court, Suite 2
                      <br />
                      Miami, FL 33130
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Hours</dt>
                    <dd className="text-muted-foreground">
                      Tue–Fri 10am–8pm
                      <br />
                      Sat–Sun 9am–6pm · Closed Mon
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
