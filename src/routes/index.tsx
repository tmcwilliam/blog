import { createFileRoute, Link } from '@tanstack/react-router'
import { getAllPosts } from '@/lib/posts'
import { projects, statusLabels } from '@/lib/projects'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3)
  const featuredProjects = projects.slice(0, 1)

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <div className="animate-fade-up grid grid-cols-1 gap-8 sm:grid-cols-[1.5fr_1px_1fr] sm:items-start">
        <div>
          <h1 className="font-display text-4xl italic leading-[1.05] text-foreground sm:text-5xl">
            Staff software engineer.
          </h1>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            I build for the web — AI-assisted tooling, product engineering,
            and the occasional small-business site. Currently taking on new
            work.
          </p>
        </div>

        <div className="hidden bg-border sm:block" />

        <div className="flex flex-row gap-5 sm:flex-col sm:gap-3.5 sm:pt-1">
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            Open to opportunities
          </span>
          <Link
            to="/portfolio"
            className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            View portfolio →
          </Link>
          <a
            href="https://linkedin.com/in/travismcwilliam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      {/* ─── Recent Writing ───────────────────────────────────────── */}
      {recentPosts.length > 0 && (
        <div
          className="animate-fade-up mt-16"
          style={{ animationDelay: '100ms' }}
        >
          <div className="mb-1 flex items-baseline justify-between">
            <span className="font-display text-xl italic text-foreground">
              Recent writing
            </span>
            <Link
              to="/blog"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              All posts →
            </Link>
          </div>
          <div className="border-t border-border">
            {recentPosts.map((post, index) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex gap-4 border-b border-border py-5 -mx-4 px-4 transition-colors hover:bg-card"
              >
                <span className="w-5 shrink-0 pt-px font-display text-sm italic text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ─── Selected Work ────────────────────────────────────────── */}
      {featuredProjects.length > 0 && (
        <div
          className="animate-fade-up mt-16"
          style={{ animationDelay: '140ms' }}
        >
          <div className="mb-1 flex items-baseline justify-between">
            <span className="font-display text-xl italic text-foreground">
              Selected work
            </span>
            <Link
              to="/portfolio"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Full portfolio →
            </Link>
          </div>
          <div className="border-t border-border">
            {featuredProjects.map((project, index) => (
              <a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 border-b border-border py-5 -mx-4 px-4 transition-colors hover:bg-card"
              >
                <span className="w-5 shrink-0 pt-px font-display text-sm italic text-muted-foreground">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    {project.status && (
                      <span className="shrink-0 text-xs text-muted-foreground">
                        {statusLabels[project.status]}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 truncate text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
