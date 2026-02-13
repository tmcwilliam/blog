import { createFileRoute } from '@tanstack/react-router'
import { getPost } from '@/lib/posts'
import { useState, useEffect, type ComponentType } from 'react'
import { mdxComponents } from '@/components/blog/mdx-components'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPostPage,
})

function BlogPostPage() {
  const { slug } = Route.useParams()
  const [Content, setContent] = useState<ComponentType | null>(null)
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
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <p className="mt-4 text-muted-foreground">
          The post you're looking for doesn't exist.
        </p>
      </div>
    )
  }

  if (!Content || !frontmatter) {
    return (
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <article>
        <header>
          <h1 className="text-4xl font-bold tracking-tight">
            {frontmatter.title}
          </h1>
          <p className="mt-2 text-muted-foreground">{frontmatter.date}</p>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-3 flex gap-2">
              {frontmatter.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </header>
        <Separator className="my-8" />
        <div className="prose prose-neutral max-w-none dark:prose-invert">
          <Content components={mdxComponents} />
        </div>
      </article>
    </div>
  )
}
