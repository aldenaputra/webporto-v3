import { ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";
import { SocialIcon } from "./ui/social-icons";
export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="font-ui-mono text-sm">{profile.footer.signOff}</p>
          <p className="mt-1 text-sm text-[var(--text-muted)]">
            © {new Date().getFullYear()} {profile.footer.copyrightName}
          </p>
        </div>
        <div className="flex items-center gap-2">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              className="inline-flex size-9 items-center justify-center rounded-md text-[var(--text-muted)] hover:text-[var(--accent)]"
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
            >
              <SocialIcon icon={social.icon} />
            </a>
          ))}
          <a
            href="#hero"
            className="font-ui-mono ml-1 inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2 text-xs"
          >
            <ArrowUp aria-hidden="true" size={14} />
            Top
          </a>
        </div>
      </div>
    </footer>
  );
}
