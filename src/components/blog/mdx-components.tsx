import type { ComponentPropsWithoutRef } from 'react'

export const mdxComponents = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="mt-8 text-3xl font-bold tracking-tight" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="mt-8 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="mt-6 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="mt-4 leading-7" {...props} />
  ),
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="mt-4 list-disc pl-6 leading-7" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="mt-4 list-decimal pl-6 leading-7" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="mt-2" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<'a'>) => (
    <a
      className="underline underline-offset-4 hover:text-primary"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote
      className="mt-4 border-l-4 border-border pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code
      className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props: ComponentPropsWithoutRef<'pre'>) => (
    <pre
      className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 font-mono text-sm"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="my-8 border-border" {...props} />
  ),
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <table className="mt-4 w-full border-collapse" {...props} />
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th
      className="border border-border px-4 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td className="border border-border px-4 py-2" {...props} />
  ),
}
