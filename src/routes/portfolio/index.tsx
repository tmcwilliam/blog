import { createFileRoute } from '@tanstack/react-router'
import { projects } from '@/lib/projects'
import { ProjectCard } from '@/components/portfolio/project-card'

export const Route = createFileRoute('/portfolio/')({
  component: PortfolioListPage,
})

function PortfolioListPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-14">
      <div className="animate-fade-up">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Portfolio
        </h1>
        <p className="mt-2 text-muted-foreground">
          A selection of projects I've built.
        </p>
      </div>

      <div
        className="animate-fade-up mt-10 border-t border-border"
        style={{ animationDelay: '80ms' }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.url} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}
