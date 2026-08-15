import { GraduationCap, Target, Terminal } from 'lucide-react'
import { SectionHeading } from './section-heading'

const SKILLS = [
  'JavaScript',
  'TypeScript',
  'React',
  'Node.js',
  'PostgreSQL',
  'Docker',
  'C/C++',
  'Python',
]

export function About() {
  return (
    <section id="sobre" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01." title="Sobre" />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Trajetória acadêmica
                </h3>
                <p className="mt-1.5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Graduando em Sistemas de Informação no Centro de
                  Informática (CIn-UFPE), com experiência prévia como monitor
                  de Sistemas Operacionais — atuando com foco em C/C++,
                  revisão de código (code review) e debugging de baixo
                  nível.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                <Target className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">
                  Objetivos profissionais
                </h3>
                <p className="mt-1.5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Atuar como Engenheiro de Software, desenvolvendo soluções
                  completas e de alto impacto para os usuários — unindo
                  arquitetura sólida, boas práticas e atenção à experiência
                  de quem usa o produto.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <Terminal className="size-4" />
              stack --list
            </div>
            <div className="flex flex-wrap content-start gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-background px-3.5 py-2 text-sm font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="mt-6 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">
              Ferramentas e linguagens que uso no dia a dia, do back-end ao
              front-end, passando por banco de dados e infraestrutura.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
