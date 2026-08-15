import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'

const SOCIAL_LINKS = [
  {
    href: 'https://github.com/dyegoferreiradev',
    label: 'GitHub',
    icon: GithubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/dyego-ferreira/',
    label: 'LinkedIn',
    icon: LinkedinIcon,
  },
  {
    href: 'mailto:dyegos141@gmail.com',
    label: 'E-mail',
    icon: Mail,
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">{'<'}</span>
          Dyego Ferreira da Silva
          <span className="text-primary">{'/>'}</span>
        </p>

        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={social.label}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          CIn-UFPE · Desenvolvimento de Software (CIN0136-SI)
        </p>
      </div>
    </footer>
  )
}
