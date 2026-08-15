import Image from 'next/image'

export function Portrait() {
  return (
    <div className="relative size-20 shrink-0 sm:size-28 lg:size-32">
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-full bg-primary/30 blur-2xl"
      />
      <div className="relative size-full overflow-hidden rounded-full ring-1 ring-primary/40 ring-offset-2 ring-offset-background">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-QrGsq0mDrVMvyc9WMYEfJXNj9Ucag2.jpeg"
          alt="Foto de Dyego Ferreira da Silva"
          fill
          sizes="128px"
          priority
          className="object-cover object-[50%_38%] contrast-[1.05]"
          style={{
            maskImage:
              'radial-gradient(circle at 50% 45%, black 55%, transparent 82%)',
            WebkitMaskImage:
              'radial-gradient(circle at 50% 45%, black 55%, transparent 82%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-primary/35 via-transparent to-transparent mix-blend-color"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-full shadow-[inset_0_0_18px_rgba(0,0,0,0.55)]"
        />
      </div>
    </div>
  )
}
