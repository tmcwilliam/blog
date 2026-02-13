import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex max-w-3xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-lg font-semibold">
          Travis
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link
            to="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: 'text-foreground' }}
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-muted-foreground transition-colors hover:text-foreground"
            activeProps={{ className: 'text-foreground' }}
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  )
}
