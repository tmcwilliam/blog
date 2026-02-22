import { createFileRoute, Link } from '@tanstack/react-router'
import { getAllPosts } from '@/lib/posts'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3)

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      {/* ─── Intro ────────────────────────────────────────────────── */}
      <div className="animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Travis McWilliam
        </h1>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          Software engineer. I write about building for the web, things I'm
          learning, and whatever I'm experimenting with.
        </p>
        <div className="mt-5 flex items-center gap-5">
          <Link
            to="/blog"
            className="text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            Writing →
          </Link>
          <a
            href="https://linkedin.com/in/travismcwilliam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* ─── Recent Writing ───────────────────────────────────────── */}
      {recentPosts.length > 0 && (
        <div
          className="animate-fade-up mt-14"
          style={{ animationDelay: '100ms' }}
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Recent Writing
            </span>
            <Link
              to="/blog"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              All posts →
            </Link>
          </div>
          <div className="border-t border-border">
            {recentPosts.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group block border-b border-border py-5 transition-colors hover:bg-card -mx-4 px-4"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <p className="mt-1 truncate text-sm text-muted-foreground">
                  {post.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
