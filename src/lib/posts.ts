import type { ComponentType } from 'react'

export interface PostFrontmatter {
  title: string
  date: string
  description: string
  tags?: string[]
}

export interface PostMeta extends PostFrontmatter {
  slug: string
}

const postModules = import.meta.glob<{
  frontmatter: PostFrontmatter
}>('../../content/posts/*.mdx', { eager: true })

const postContentModules = import.meta.glob<{
  frontmatter: PostFrontmatter
  default: ComponentType
}>('../../content/posts/*.mdx')

export function getAllPosts(): PostMeta[] {
  const posts = Object.entries(postModules).map(([filepath, mod]) => {
    const slug = filepath.split('/').pop()!.replace('.mdx', '')
    return {
      slug,
      ...mod.frontmatter,
    }
  })

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  )
}

export async function getPost(
  slug: string,
): Promise<{ frontmatter: PostFrontmatter; Content: ComponentType }> {
  const filepath = Object.keys(postContentModules).find((p) =>
    p.endsWith(`/${slug}.mdx`),
  )

  if (!filepath) {
    throw new Error(`Post not found: ${slug}`)
  }

  const mod = await postContentModules[filepath]()
  return {
    frontmatter: mod.frontmatter,
    Content: mod.default,
  }
}
