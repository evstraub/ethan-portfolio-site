import Link from 'next/link'

type Project = {
  title: string
  summary: string
  slug: string
  tags: string[]
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="tags">
        {project.tags.map(t => <span className="tag" key={t}>{t}</span>)}
      </div>
      <Link href={`/projects#${project.slug}`} className="btn">View</Link>
    </article>
  )
}
