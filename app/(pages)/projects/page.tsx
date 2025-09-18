import ProjectCard from '../../components/ProjectCard'
import projects from '../../lib/projects'

export default function Page() {
  return (
    <section className="stack-lg">
      <h1>Projects</h1>
      <div className="filters">
        <span className="chip">All</span>
        <span className="chip">React</span>
        <span className="chip">C++</span>
        <span className="chip">Game</span>
        <span className="chip">AI</span>
      </div>
      <div className="grid-3">
        {projects.map(p => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  )
}
