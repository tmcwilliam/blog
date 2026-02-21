import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Hey, I'm Travis</h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Welcome to my corner of the internet. I'm a software engineer who loves
        building things for the web. This blog is where I share what I'm learning
        and experimenting with.
      </p>
      <p className="mt-4 text-lg text-muted-foreground">
        Check out my{' '}
        <Link to="/blog" className="underline underline-offset-4 hover:text-foreground">
          blog
        </Link>{' '}
        to see what I've been writing about lately.
      </p>
    </div>
  )
}
