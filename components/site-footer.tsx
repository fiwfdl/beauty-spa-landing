import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div className="space-y-3">
          <p className="font-display text-lg font-semibold text-foreground">
            Serenity Spa
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            A quiet studio for skin and body therapies in Miami. Open Tuesday to
            Sunday, by appointment.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm font-semibold text-foreground">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                className="text-muted-foreground transition-colors hover:text-primary"
                href="/#treatments"
              >
                Treatments
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground transition-colors hover:text-primary"
                href="/#why"
              >
                Why Serenity
              </Link>
            </li>
            <li>
              <Link
                className="text-muted-foreground transition-colors hover:text-primary"
                href="/#booking"
              >
                Book a visit
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="text-sm font-semibold text-foreground">Visit &amp; contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li className="flex items-start gap-2 text-muted-foreground">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>128 Palm Court, Suite 2, Miami, FL 33130</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone aria-hidden="true" className="size-4 shrink-0 text-primary" />
              <a
                className="text-muted-foreground transition-colors hover:text-primary"
                href="tel:+13055550134"
              >
                +1 (305) 555-0134
              </a>
            </li>
            <li>
              <a
                className="text-muted-foreground transition-colors hover:text-primary"
                href="mailto:hello@serenityspa.example"
              >
                hello@serenityspa.example
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          © {year} Serenity Spa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
