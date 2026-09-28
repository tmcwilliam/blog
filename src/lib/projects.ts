export interface Project {
  title: string
  description: string
  tags: string[]
  url: string
  status?: 'in-progress'
}

export const projects: Project[] = [
  {
    title: 'Empower Hardware',
    description:
      'Marketing and product-catalog site for a family-owned industrial hardware distributor in Wood Dale, IL.',
    tags: ['React', 'Vite', 'Vercel'],
    url: 'https://empower-chi.vercel.app/',
    status: 'in-progress',
  },
]
