import { useState } from "react"
import { CheckCircle, Zap, Target, ChevronDown, ChevronUp } from "lucide-react"

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const highlights = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent" />,
      text: "Diagnosing problems and designing cost-efficient, high-quality solutions"
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      text: "Developing, deploying, and monitoring AI solutions for guaranteed performance"
    },
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      text: "Bridging technical excellence with strategic business value"
    }
  ]

  return (
    <section id="about" className="pt-[130px] md:pt-[50px] space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent-foreground tracking-tight leading-tight animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default">
          Agentic AI Architect & Product Strategist
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Bridging Business Value with AI Engineering Excellence
        </p>
      </div>
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        <div className="p-8 rounded-xl bg-gradient-to-br from-accent/15 via-primary/10 to-accent/5 border-2 border-accent/30 shadow-lg">
          <p className="text-xl lg:text-2xl font-semibold text-foreground leading-relaxed">
            <span className="text-accent font-bold">Agentic AI Architect</span> specializing in the complete
            AI lifecycle: <strong className="text-primary">diagnosing a problem</strong>,{" "}
            <strong className="text-primary">designing the best cost-efficient and high-quality solutions</strong>,{" "}
            <strong className="text-primary">developing the solution</strong>, <strong className="text-primary">deploying it</strong>, and{" "}
            <strong className="text-primary">monitoring to ensure the solution works exactly as promised</strong>.
          </p>
        </div>

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          My diverse background includes an <span className="text-foreground font-medium">MSc in Management</span>, a{" "}
          <span className="text-foreground font-medium">Higher Diploma in Electronics Engineering</span>, professional
          AI Engineering and Development training with <span className="text-accent font-semibold">IBM</span>, dedicated
          study under <span className="text-accent font-semibold">Andrew Ng</span>, and current mastery of{" "}
          <span className="text-accent font-semibold">MLOps</span>.
        </p>

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          With expertise spanning <span className="text-foreground font-medium">Agentic AI Engineering</span>,{" "}
          <span className="text-foreground font-medium">RAG Systems</span>,{" "}
          <span className="text-foreground font-medium">Knowledge Graphs</span>, and{" "}
          <span className="text-foreground font-medium">Data Engineering</span>, I bridge technical excellence with
          strategic business value in AI innovation and enterprise solutions.
        </p>

        <div className="space-y-4 pt-4">
          <h3 className="text-2xl font-bold text-foreground">Key Highlights</h3>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="group relative flex flex-col items-center text-center p-6 rounded-xl bg-gradient-to-br from-card via-card to-accent/5 border-2 border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="p-4 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300 mb-4">
                  {highlight.icon}
                </div>
                <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors font-medium">{highlight.text}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center space-x-2 text-accent hover:text-black transition-all duration-300 font-medium text-lg hover:scale-110 hover:shadow-lg hover:bg-accent/10 rounded-md px-3 py-2"
          >
            <span>{isExpanded ? "Hide" : "Show"} More About My Philosophy</span>
            <div className="transition-transform duration-300 group-hover:rotate-180">
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </button>
          {isExpanded && (
            <p className="mt-4 p-4 rounded-lg bg-muted text-muted-foreground animate-slide-down text-base leading-relaxed">
              My work is not limited to just one aspect of AI but the whole of it, positioning me as an inevitable bridge in
              the AI Global Business. This holistic approach ensures every solution is robust, scalable, and aligned with
              real-world needs.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
