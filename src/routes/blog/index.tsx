import { createFileRoute } from '@tanstack/react-router'
import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/blog/post-card'

export const Route = createFileRoute('/blog/')({
  component: BlogListPage,
})

function BlogListPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <div className="animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Writing
        </h1>
        <p className="mt-2 text-muted-foreground">
          Thoughts on software engineering and the web.
        </p>
      </div>

      <div
        className="animate-fade-up mt-10 border-t border-border"
        style={{ animationDelay: '80ms' }}
      >
        {posts.map((post, index) => (
          <PostCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </div>
  )
}
