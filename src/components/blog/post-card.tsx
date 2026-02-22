import { Link } from '@tanstack/react-router'
import type { PostMeta } from '@/lib/posts'

export function PostCard({ post, index }: { post: PostMeta; index: number }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group block border-b border-border py-6 -mx-4 px-4 transition-colors hover:bg-card"
    >
      <div className="flex items-start gap-4">
        <span className="w-5 shrink-0 pt-px font-mono text-xs text-muted-foreground/40">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-medium text-foreground transition-colors group-hover:text-primary">
              {post.title}
            </h2>
            <span className="shrink-0 text-xs text-muted-foreground">
              {post.date}
            </span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {post.description}
          </p>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-border px-1.5 py-0.5 text-xs text-muted-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
