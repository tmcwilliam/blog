export interface Project {
  title: string
  description: string
  tags: string[]
  url: string
  status?: 'in-progress' | 'beta'
}

export const statusLabels: Record<NonNullable<Project['status']>, string> = {
  'in-progress': 'In Progress',
  beta: 'Beta',
}

export const projects: Project[] = [
  {
    title: 'Team Carpool',
    description:
      'Fair, self-running carpool scheduling for youth sports teams — syncs with the team calendar and builds the season’s driving rotation automatically.',
    tags: ['Next.js', 'TypeScript', 'Postgres'],
    url: 'https://teamcarpool.app/',
    status: 'beta',
  },
  {
    title: 'Empower Hardware',
    description:
      'Marketing and product-catalog site for a family-owned industrial hardware distributor in Wood Dale, IL.',
    tags: ['React', 'Vite', 'Vercel'],
    url: 'https://empower-chi.vercel.app/',
    status: 'in-progress',
  },
]
