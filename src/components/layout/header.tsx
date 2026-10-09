import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <Link
          to="/"
          className="font-display text-xl italic text-foreground transition-colors hover:text-primary"
        >
          Travis McWilliam
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="border-b border-transparent pb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            activeProps={{ className: 'border-primary text-primary' }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="border-b border-transparent pb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            activeProps={{ className: 'border-primary text-primary' }}
          >
            Writing
          </Link>
          <Link
            to="/portfolio"
            className="border-b border-transparent pb-0.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            activeProps={{ className: 'border-primary text-primary' }}
          >
            Portfolio
          </Link>
        </nav>
      </div>
    </header>
  )
}
