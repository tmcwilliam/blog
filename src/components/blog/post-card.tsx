import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { PostMeta } from '@/lib/posts'

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link to="/blog/$slug" params={{ slug: post.slug }}>
      <Card className="transition-colors hover:bg-muted/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">{post.title}</CardTitle>
            <span className="text-sm text-muted-foreground">{post.date}</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{post.description}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="mt-3 flex gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
