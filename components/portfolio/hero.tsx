import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubIcon, LinkedinIcon } from './icons'
import { Portrait } from './portrait'

const INTERESTS = [
  'Arquitetura de Software',
  'Desenvolvimento Web',
  'APIs REST',
]

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

function CodeCard() {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5">
      <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-3">
        <span className="size-2.5 rounded-full bg-destructive/60" />
        <span className="size-2.5 rounded-full bg-accent/70" />
        <span className="size-2.5 rounded-full bg-primary/60" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">
          dyego.dev
        </span>
      </div>
      <pre className="overflow-x-auto px-5 py-6 font-mono text-[13px] leading-relaxed">
        <code>
          <span className="text-primary">const</span>{' '}
          <span className="text-foreground">dev</span> = {'{'}
          {'\n'}
          {'  '}nome:{' '}
          <span className="text-accent">
            &apos;Dyego Ferreira&apos;
          </span>
          ,{'\n'}
          {'  '}papel:{' '}
          <span className="text-accent">
            &apos;Full-Stack Developer&apos;
          </span>
          ,{'\n'}
          {'  '}instituicao:{' '}
          <span className="text-accent">&apos;CIn-UFPE&apos;</span>,{'\n'}
          {'  '}foco: [<span className="text-accent">&apos;APIs REST&apos;</span>,{' '}
          <span className="text-accent">&apos;arquitetura&apos;</span>],
          {'\n'}
          {'  '}disponivel:{' '}
          <span className="text-primary">true</span>,{'\n'}
          {'}'};
        </code>
      </pre>
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-0">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <Portrait />
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-xs uppercase tracking-widest text-primary">
                Olá, eu sou
              </span>
              <h1 className="text-balance text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Dyego Ferreira{' '}
                <span className="whitespace-nowrap">da Silva</span>
              </h1>
            </div>
          </div>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Desenvolvedor{' '}
            <span className="font-semibold text-foreground">Full-Stack</span>{' '}
            com foco em aplicações escaláveis e eficientes. Estudante do
            CIn-UFPE — este projeto faz parte da disciplina de Desenvolvimento
            de Software (CIN0136-SI).
          </p>

          <ul className="flex flex-wrap gap-2">
            {INTERESTS.map((interest) => (
              <li
                key={interest}
                className="rounded-full bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
              >
                {interest}
              </li>
            ))}
          </ul>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={social.label}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <social.icon className="size-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CodeCard />
        </div>
      </div>
    </section>
  )
}
