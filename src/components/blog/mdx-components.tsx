import type { ComponentPropsWithoutRef } from 'react'

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1
      className="mt-10 text-xl font-bold leading-snug text-foreground"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2
      className="mt-10 text-lg font-bold leading-snug text-foreground"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3
      className="mt-8 text-base font-bold leading-snug text-foreground"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="mt-5 leading-[1.8] text-foreground/80" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul
      className="mt-5 list-disc pl-5 space-y-1.5 leading-[1.8] text-foreground/80 marker:text-primary"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol
      className="mt-5 list-decimal pl-5 space-y-1.5 leading-[1.8] text-foreground/80"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="leading-[1.8]" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a
      className="text-primary underline underline-offset-4 transition-colors hover:text-foreground"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="mt-6 border-l-2 border-primary pl-5 text-muted-foreground"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code
      className="rounded-sm bg-muted px-1.5 py-0.5 font-mono text-[0.85em] text-primary"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className="mt-6 overflow-x-auto rounded-sm border border-border bg-card p-4 font-mono text-sm leading-relaxed"
      {...props}
    />
  ),
  img: (props: ComponentPropsWithoutRef<'img'>) => (
    <img className="mt-8 w-full rounded-sm" {...props} />
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="my-10 border-border" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <table className="mt-6 w-full border-collapse text-sm" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th
      className="border border-border px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td className="border border-border px-4 py-3 text-foreground/80" {...props} />
  ),
}
