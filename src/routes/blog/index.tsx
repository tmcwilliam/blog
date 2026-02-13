import { createFileRoute } from '@tanstack/react-router'
import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/blog/post-card'

export const Route = createFileRoute('/blog/')({
  component: BlogListPage,
})

function BlogListPage() {
  const posts = getAllPosts()

  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Thoughts, experiments, and things I've learned.
      </p>
      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
