import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-sm font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 72 50"
            fill="none"
            aria-hidden="true"
            className="text-primary h-[18px] w-auto"
          >
            <polyline
              points="8,8 28,25 8,42"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
            <rect x="36" y="34" width="28" height="7" fill="currentColor" />
          </svg>
          Travis McWilliam
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: 'text-foreground' }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: 'text-foreground' }}
          >
            Writing
          </Link>
        </nav>
      </div>
    </header>
  )
}
