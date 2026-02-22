import { createFileRoute, Link } from '@tanstack/react-router'
import { getPost } from '@/lib/posts'
import { useState, useEffect } from 'react'
import type { MDXContent } from 'mdx/types'
import { mdxComponents } from '@/components/blog/mdx-components'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
})

function BlogPostPage() {
  const { slug } = Route.useParams()
  const [Content, setContent] = useState<MDXContent | null>(null)
  const [frontmatter, setFrontmatter] = useState<{
    title: string
    date: string
    description: string
    tags?: string[]
  } | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getPost(slug)
      .then((post) => {
        setContent(() => post.Content)
        setFrontmatter(post.frontmatter)
      })
      .catch(() => {
        setError('Post not found')
      })
  }, [slug])

  if (error) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-14">
        <Link
          to="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Writing
        </Link>
        <h1 className="mt-10 text-2xl font-bold">Post not found</h1>
        <p className="mt-3 text-muted-foreground">
          The post you're looking for doesn't exist.
        </p>
      </div>
    )
  }

  if (!Content || !frontmatter) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-14">
        <p className="text-sm text-muted-foreground">Loading...</p>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <Link
        to="/blog"
        className="animate-fade-in text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Writing
      </Link>

      <article className="animate-fade-up mt-10" style={{ animationDelay: '60ms' }}>
        <header>
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
            <span>{frontmatter.date}</span>
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <>
                <span>·</span>
                {frontmatter.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </>
            )}
          </div>
          <h1 className="mt-3 text-2xl font-bold leading-snug text-foreground md:text-3xl">
            {frontmatter.title}
          </h1>
        </header>

        <div className="mt-8 border-t border-border" />

        <div className="mt-8">
          <Content components={mdxComponents} />
        </div>
      </article>

      <div className="mt-14 border-t border-border pt-6">
        <Link
          to="/blog"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to Writing
        </Link>
      </div>
    </div>
  )
}
