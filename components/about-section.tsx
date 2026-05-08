import { useState } from "react"
import { CheckCircle, Zap, Target, ChevronDown, ChevronUp } from "lucide-react"

export function AboutSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const highlights = [
    {
      icon: <CheckCircle className="w-6 h-6 text-accent" />,
      text: "Automating repetitive tasks to save your team hours every week"
    },
    {
      icon: <Zap className="w-6 h-6 text-accent" />,
      text: "Creating AI solutions that work with your existing tools"
    },
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      text: "Delivering real business results with fast, clean implementation"
    }
  ]

  return (
    <section id="about" className="pt-[130px] md:pt-[50px] space-y-8 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent-foreground tracking-tight leading-tight animate-fade-in hover:scale-105 transition-transform duration-300 cursor-default">
          AI Automation Specialist
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Automating Business Workflows with AI
        </p>
      </div>
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        <div className="p-8 rounded-xl bg-gradient-to-br from-accent/15 via-primary/10 to-accent/5 border-2 border-accent/30 shadow-lg">
          <p className="text-xl lg:text-2xl font-semibold text-foreground leading-relaxed">
            <span className="text-accent font-bold">AI Automation Specialist</span> who helps businesses save time and money: <strong className="text-primary">finding repetitive tasks</strong>,{" "}
            <strong className="text-primary">creating smart automation solutions</strong>,{" "}
            <strong className="text-primary">setting up AI to handle the work</strong>, <strong className="text-primary">making sure everything works smoothly</strong>, and{" "}
            <strong className="text-primary">delivering real results you can see</strong>.
          </p>
        </div>

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          My diverse background includes an <span className="text-foreground font-medium">MSc in Management</span>, a{" "}
          <span className="text-foreground font-medium">Higher Diploma in Engineering</span>, professional
          AI Engineering and Development training with <span className="text-accent font-semibold">IBM</span>, and dedicated
          study under <span className="text-accent font-semibold">Andrew Ng</span>.
        </p>

        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
          With expertise in <span className="text-foreground font-medium">Customer Support Automation</span>,{" "}
          <span className="text-foreground font-medium">Booking System Automation</span>,{" "}
          <span className="text-foreground font-medium">Inventory Management</span>, and{" "}
          <span className="text-foreground font-medium">Analytics Automation</span>, I help businesses eliminate repetitive tasks and focus on what matters most - growing their business.
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
              My approach is simple: find tasks that waste your team's time and replace them with smart AI solutions. I focus on delivering practical automation that saves you money, frees up your team, and helps your business run more efficiently. <strong className="text-accent font-semibold">AI automation is inevitable</strong> - make the smart decision and be early on it. No technical complexity - just real business results.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
