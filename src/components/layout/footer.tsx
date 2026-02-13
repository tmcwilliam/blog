export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-3xl px-4 py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Travis. All rights reserved.
      </div>
    </footer>
  )
}
