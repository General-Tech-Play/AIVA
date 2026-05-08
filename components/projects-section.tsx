import { ProjectCard } from "./project-card"
import projectsData from "@/data/projects.json"

export function ProjectsSection() {
  return (
    <section id="projects" className="pt-[130px] md:pt-[50px] space-y-8">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-foreground tracking-tight">AI Automation Projects</h2>
        <p className="text-muted-foreground leading-relaxed">
          Business workflow automation solutions and AI-powered systems that eliminate repetitive tasks,{" "}
          <span className="text-accent font-semibold">streamline operations</span>,{" "}
          <span className="text-accent font-semibold">reduce costs</span>, and{" "}
          <span className="text-accent font-semibold">drive measurable ROI</span>.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            fullDescription={project.fullDescription}
            technology_tags={project.technology_tags}
            link={project.link}
            linkType={project.linkType as "github" | "kaggle" | "website"}
            index={index}
            status={project.status}
            buttonText={project.buttonText}
            image={project.image}
          />
        ))}
      </div>
    </section>
  )
}
