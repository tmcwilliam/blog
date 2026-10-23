import { statusLabels, type Project } from '@/lib/projects'

export function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b border-border py-6 -mx-4 px-4 transition-colors hover:bg-card"
    >
      <div className="flex items-start gap-4">
        <span className="w-5 shrink-0 pt-px font-display text-sm italic text-muted-foreground">
          {String(index + 1).padStart(2, '0')}
        </span>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-16 w-24 shrink-0 rounded-sm border border-border object-cover"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-4">
            <h2 className="font-medium text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h2>
            {project.status && (
              <span className="shrink-0 text-xs text-muted-foreground">
                {statusLabels[project.status]}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.description}
          </p>
          {project.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
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
    </a>
  )
}
