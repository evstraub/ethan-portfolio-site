import ProjectCard from '@/components/ProjectCard'
import projects from '@/lib/projects'
import Link from 'next/link'


export default function Page() {
  return (
    <section className="stack-lg">
      <header className="hero">
        <h1 className="display">Hey, I’m Ethan. I build things.</h1>
        <p className="lead">React apps, C++ systems, a touch of game dev, and some practical AI.</p>
        <p className="now">Currently building: <strong>Portfolio v1</strong></p>
      </header>
      <section>
        <h2>Featured Projects</h2>
        <div className="grid-3">
          {projects.slice(0, 3).map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <p><Link href="/projects" className="link">See all projects →</Link></p>
      </section>
    </section>
  )
}
