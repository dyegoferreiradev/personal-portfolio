import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { SectionHeading } from './section-heading'
import { GithubIcon } from './icons'

type Project = {
  title: string
  description: string
  goal: string
  discipline?: string
  tech: string[]
  repo: string
  image: string
}

const PROJECTS: Project[] = [
  {
    title: 'Intelligent Lesson Planner',
    description:
      'Sistema projetado para a automação e planejamento escolar.',
    goal:
      'Otimizar e reduzir o tempo dos professores na elaboração de planos de aula.',
    tech: [
      'TypeScript',
      'React',
      'Vite',
      'TailwindCSS',
      'Docker',
      'API Gemini',
    ],
    repo: 'https://github.com/dyegoferreiradev/api-planos-de-aula',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lessonplanner-hMC2dv2Cyk8IWJ55uNTb0NGYFJemma.jpeg',
  },
  {
    title: 'Pipeline de Dados: Mercado de Energia Elétrica (SAMP/ANEEL)',
    description:
      'Implementa e compara arquiteturas fundamentais de Engenharia de Dados — ETL Clássico (Python/Pandas) e ELT Moderno (SQL) — para processar, higienizar e modelar dados públicos do mercado e consumo de energia elétrica no Brasil.',
    goal:
      'O diferencial deste projeto é a implementação final de uma Modelagem Dimensional (Esquema Estrela), transformando uma grande volumetria de registros brutos em um Data Warehouse otimizado para análises de Inteligência de Negócios (BI).',
    discipline: 'Banco de Dados (BD)',
    tech: ['Python', 'Pandas', 'SQL', 'ETL', 'ELT', 'Data Warehouse'],
    repo: 'https://github.com/dyegoferreiradev/projeto-integracao-dados',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/datapipeline-XedzLchgEfd1Xr5KnTvqB0dMunErgk.png',
  },
]

function ProjectMedia({ title, image }: { title: string; image: string }) {
  return (
    <div className="overflow-hidden rounded-t-2xl border-b border-border bg-muted">
      <div className="flex items-center gap-2 border-b border-border/80 bg-background/90 px-4 py-2.5 backdrop-blur-sm">
        <span className="size-2 rounded-full bg-destructive/50" />
        <span className="size-2 rounded-full bg-accent/60" />
        <span className="size-2 rounded-full bg-primary/50" />
        <span className="ml-2 truncate font-mono text-[11px] text-muted-foreground">
          {title}
        </span>
      </div>
      <div className="relative h-44 w-full sm:h-52">
        <Image
          src={image}
          alt={`Captura de tela do projeto ${title}`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg hover:shadow-primary/10">
      <ProjectMedia title={project.title} image={project.image} />

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          {project.discipline && (
            <span className="mb-2 inline-block rounded-full bg-accent/15 px-2.5 py-1 font-mono text-[11px] text-accent-foreground">
              {project.discipline}
            </span>
          )}
          <h3 className="text-lg font-semibold leading-snug text-foreground">
            {project.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <p className="rounded-lg bg-muted px-3 py-2.5 text-sm leading-relaxed text-foreground">
          <span className="font-semibold text-primary">Objetivo: </span>
          {project.goal}
        </p>

        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-background px-2 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <a
          href={project.repo}
          target="_blank"
          rel="noreferrer noopener"
          className="mt-auto inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <GithubIcon className="size-4" />
          Ver repositório
          <ExternalLink className="size-3.5 text-muted-foreground" />
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  return (
    <section id="projetos" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="02." title="Projetos" />

        <div className="grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
