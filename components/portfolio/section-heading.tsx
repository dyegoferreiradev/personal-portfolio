export function SectionHeading({
  index,
  title,
}: {
  index: string
  title: string
}) {
  return (
    <div className="mb-10 flex items-baseline gap-3 sm:mb-14">
      <span className="font-mono text-sm text-primary">{index}</span>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <span className="ml-2 hidden h-px flex-1 bg-border sm:block" aria-hidden="true" />
    </div>
  )
}
