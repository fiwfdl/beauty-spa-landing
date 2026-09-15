import type { CSSProperties } from "react";
import { Button } from "@/components/ui/button";

const revealStyle = (delayMs: number) =>
  ({ "--d": `${delayMs}ms` }) as CSSProperties;

const services = [
  {
    title: "Signature Facial",
    body: "A deep-clean and hydration ritual with gentle exfoliation, a mask, and a relaxing face, neck, and shoulder massage.",
    meta: "60 min · from $95",
  },
  {
    title: "Relaxation Massage",
    body: "Flowing, full-body pressure with warm oils to release tension and quiet a busy mind. Add aromatherapy on request.",
    meta: "60 min · from $110",
  },
  {
    title: "Body Renewal",
    body: "A full-body scrub, wrap, and moisturizing finish that leaves skin soft, smooth, and luminous from head to toe.",
    meta: "75 min · from $130",
  },
  {
    title: "Brows & Lashes",
    body: "Shaping, tinting, and lash lifts that frame your eyes with natural, low-maintenance definition.",
    meta: "45 min · from $65",
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-20 focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-10 border-b border-border bg-[var(--header-bg)] backdrop-blur-md">
        <div className="mx-auto flex max-w-wrap items-center justify-between gap-4 px-6 py-3">
          <a
            className="inline-flex items-center gap-3 text-foreground no-underline"
            href="#top"
            aria-label="Serenity Spa home"
          >
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" focusable="false" className="size-[1.55rem]">
                <path className="mark-line" d="M20 31C13 27 9 21 8 13c7 2 12 7 12 18Z" />
                <path className="mark-line" d="M20 31c7-4 11-10 12-18-7 2-12 7-12 18Z" />
                <path className="mark-line" d="M20 32C16 25 16 17 20 9c4 8 4 16 0 23Z" />
                <path className="mark-line" d="M12 34q8 4 16 0" />
              </svg>
            </span>
            <span className="hidden font-display text-[1.125rem] font-medium sm:inline">
              Serenity Spa
            </span>
          </a>

          <nav aria-label="Primary">
            <ul className="flex list-none gap-5 p-0 text-[0.98rem] font-medium">
              <li>
                <a className="text-muted-foreground no-underline hover:text-primary" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="text-muted-foreground no-underline hover:text-primary" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="text-muted-foreground no-underline hover:text-primary" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <Button asChild variant="primary" size="default" className="hidden md:inline-flex">
            <a href="tel:+15551234567">Book now</a>
          </Button>
        </div>
      </header>

      <main id="main">
        <section
          id="top"
          aria-labelledby="hero-title"
          className="relative overflow-hidden bg-[radial-gradient(1100px_460px_at_78%_-12%,var(--cream-100),transparent_62%),radial-gradient(700px_380px_at_6%_108%,var(--cream-100),transparent_60%),var(--background)] py-16 md:py-24"
        >
          <div className="mx-auto grid max-w-wrap items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-[40rem]">
              <p className="eyebrow reveal" style={revealStyle(0)}>
                Beauty &amp; wellness studio
              </p>
              <h1 id="hero-title" className="reveal" style={revealStyle(90)}>
                Restore your glow, one quiet hour at a time.
              </h1>
              <p
                className="reveal max-w-[34rem] text-[1.125rem] font-light text-muted-foreground"
                style={revealStyle(180)}
              >
                Serenity Spa blends time-honored rituals with modern skincare to help you
                slow down, unwind, and leave feeling like yourself again.
              </p>
              <div className="reveal my-8 flex flex-wrap gap-4" style={revealStyle(270)}>
                <Button asChild variant="primary" size="default">
                  <a href="#contact">Book a visit</a>
                </Button>
                <Button asChild variant="ghost" size="default">
                  <a href="#services">Explore services</a>
                </Button>
              </div>
              <dl
                className="reveal grid grid-cols-1 gap-5 border-t border-border pt-6 sm:grid-cols-3"
                style={revealStyle(360)}
              >
                <div>
                  <dt className="font-display text-[1.5rem] font-medium text-primary">
                    15 years
                  </dt>
                  <dd className="mt-2 text-[0.9rem] leading-snug text-muted-foreground">
                    Caring for our neighborhood
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[1.5rem] font-medium text-primary">
                    4.9 / 5
                  </dt>
                  <dd className="mt-2 text-[0.9rem] leading-snug text-muted-foreground">
                    Average guest rating
                  </dd>
                </div>
                <div>
                  <dt className="font-display text-[1.5rem] font-medium text-primary">
                    100%
                  </dt>
                  <dd className="mt-2 text-[0.9rem] leading-snug text-muted-foreground">
                    Cruelty-free products
                  </dd>
                </div>
              </dl>
            </div>

            <div
              className="reveal relative grid place-items-center py-4 max-md:order-first"
              style={revealStyle(300)}
            >
              <span className="hero-art-glow" aria-hidden="true" />
              <svg
                className="relative h-auto w-[min(100%,380px)] max-md:w-[min(100%,300px)]"
                viewBox="0 0 420 520"
                role="img"
                aria-labelledby="hero-art-title"
              >
                <title id="hero-art-title">
                  Line illustration of a lotus flower rising above still water, framed by a
                  crescent of leaves and a soft halo
                </title>
                <circle className="art-halo" cx="210" cy="158" r="80" />
                <path className="art-leaf" d="M210 330C120 300 70 220 66 150c84 26 130 100 144 180Z" />
                <path className="art-leaf" d="M210 330c90-30 140-110 144-180-84 26-130 100-144 180Z" />
                <path className="art-petal" d="M210 342c-60-60-78-145-72-202 58 38 86 120 72 202Z" />
                <path className="art-petal" d="M210 342c60-60 78-145 72-202-58 38-86 120-72 202Z" />
                <path className="art-petal art-petal--core" d="M210 350c-28-70-24-168 0-230 24 62 28 160 0 230Z" />
                <path className="art-stem" d="M210 350v26" />
                <path className="art-water" d="M70 380q140 30 280 0" />
                <path className="art-water" d="M96 410q114 26 228 0" />
              </svg>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20" id="services" aria-labelledby="services-title">
          <div className="mx-auto max-w-wrap px-6">
            <p className="eyebrow">What we offer</p>
            <h2 id="services-title">Treatments tailored to you</h2>
            <p className="mb-8 max-w-[40rem] text-[1.125rem] font-light text-muted-foreground">
              Every visit begins with a short consultation so we can match the ritual to
              your skin, your mood, and your day.
            </p>
            <ul className="grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <li
                  key={service.title}
                  className="card-accent reveal relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-gold-300 hover:shadow-lift"
                  style={revealStyle(index * 80)}
                >
                  <h3>{service.title}</h3>
                  <p className="mb-3 text-muted-foreground">{service.body}</p>
                  <p className="m-0 font-semibold tracking-[0.02em] text-primary">
                    {service.meta}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          className="bg-[var(--surface-alt)] py-16 md:py-20"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="mx-auto grid max-w-wrap items-center gap-12 px-6 md:grid-cols-[1.15fr_0.85fr]">
            <div className="reveal" style={revealStyle(0)}>
              <p className="eyebrow">Our story</p>
              <h2 id="about-title">A calm corner of the city</h2>
              <p>
                Serenity Spa was founded on a simple idea: everyone deserves a quiet place
                to breathe. Our therapists are licensed, endlessly curious, and trained to
                listen before they treat.
              </p>
              <p>
                We use thoughtfully sourced, cruelty-free products and keep our treatment
                rooms warm, dim, and unhurried. No upselling, no rush — just care.
              </p>
              <ul className="check-list mt-4 list-none p-0">
                <li>Licensed, experienced therapists</li>
                <li>Clean, hypoallergenic product lines</li>
                <li>Private treatment rooms and quiet lounge</li>
              </ul>
            </div>

            <div
              className="about-panel reveal relative flex min-h-[380px] flex-col justify-between gap-6 overflow-hidden rounded-lg p-7 text-primary-foreground shadow-soft"
              style={revealStyle(120)}
            >
              <svg
                className="about-sprig mt-3 h-auto w-44 self-center"
                viewBox="0 0 240 120"
                aria-hidden="true"
                focusable="false"
              >
                <path className="art-stem" d="M120 116V14" />
                <path className="art-leaf" d="M120 100C94 96 76 78 72 52c28 6 46 24 48 48Z" />
                <path className="art-leaf" d="M120 100c26-4 44-22 48-48-28 6-46 24-48 48Z" />
                <path className="art-leaf" d="M120 62c-20-4-32-18-34-38 22 6 34 20 34 38Z" />
                <path className="art-leaf" d="M120 62c20-4 32-18 34-38-22 6-34 20-34 38Z" />
                <path className="art-water" d="M60 112q60 14 120 0" />
              </svg>
              <p className="m-0 font-display text-[clamp(2.6rem,6vw,4.4rem)] font-medium tracking-[-0.02em] text-gold-300">
                Serenity
              </p>
              <p className="m-0 text-[1.125rem] font-light text-cream-100">
                Warm rooms, soft light, unhurried care.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20" id="contact" aria-labelledby="contact-title">
          <div className="mx-auto grid max-w-wrap items-start gap-12 px-6 md:grid-cols-2">
            <div>
              <p className="eyebrow">Visit us</p>
              <h2 id="contact-title">Book your appointment</h2>
              <p className="mb-8 max-w-[40rem] text-[1.125rem] font-light text-muted-foreground">
                Call, email, or drop by. We will find a time that fits your week.
              </p>
              <Button asChild variant="primary" size="default">
                <a href="tel:+15551234567">Call (555) 123-4567</a>
              </Button>
            </div>

            <dl className="m-0 grid gap-5">
              <div>
                <dt className="mb-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-primary">
                  Address
                </dt>
                <dd className="m-0 text-muted-foreground">
                  128 Willow Lane, Suite 2
                  <br />
                  Riverside, CA 92501
                </dd>
              </div>
              <div>
                <dt className="mb-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-primary">
                  Phone
                </dt>
                <dd className="m-0 text-muted-foreground">
                  <a href="tel:+15551234567">(555) 123-4567</a>
                </dd>
              </div>
              <div>
                <dt className="mb-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-primary">
                  Email
                </dt>
                <dd className="m-0 text-muted-foreground">
                  <a href="mailto:hello@serenityspa.example">hello@serenityspa.example</a>
                </dd>
              </div>
              <div>
                <dt className="mb-2 text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-primary">
                  Hours
                </dt>
                <dd className="m-0 text-muted-foreground">
                  Tue–Fri: 9am – 7pm
                  <br />
                  Sat: 10am – 5pm
                  <br />
                  Sun–Mon: Closed
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="bg-primary py-8 text-primary-foreground">
        <div className="mx-auto flex max-w-wrap flex-wrap items-baseline justify-between gap-3 px-6">
          <p className="m-0 font-display text-[1.125rem] font-medium">Serenity Spa</p>
          <p className="m-0 text-gold-300">Restore, renew, glow.</p>
          <p className="m-0 w-full text-[0.82rem] text-pink-200">
            © 2026 Serenity Spa. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
