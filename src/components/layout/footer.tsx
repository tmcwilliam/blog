export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-5">
        <span className="text-sm font-medium text-foreground">
          Travis McWilliam
        </span>
        <div className="flex items-center gap-5">
          <a
            href="https://linkedin.com/in/travismcwilliam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn ↗
          </a>
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
