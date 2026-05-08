import { MessageCircle, Calendar, Package, MessageSquare, BarChart } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <MessageCircle className="w-8 h-8 text-accent" />,
      title: "Customer Support Bots",
      description: "Handle customer inquiries 24/7 without human intervention",
      benefit: "Never miss a customer question again"
    },
    {
      icon: <Calendar className="w-8 h-8 text-accent" />,
      title: "Booking Systems",
      description: "Automated reservations and scheduling that work around the clock",
      benefit: "Fill your schedule automatically"
    },
    {
      icon: <Package className="w-8 h-8 text-accent" />,
      title: "Inventory Management",
      description: "Track stock levels and reorder products automatically when needed",
      benefit: "Never run out of popular items"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-accent" />,
      title: "Feedback Collection",
      description: "Gather customer reviews and feedback automatically",
      benefit: "Understand what customers really think"
    },
    {
      icon: <BarChart className="w-8 h-8 text-accent" />,
      title: "Analytics & Reporting",
      description: "Generate business insights and reports without manual work",
      benefit: "Make decisions based on real data"
    }
  ]

  return (
    <section id="services" className="pt-[130px] md:pt-[50px] space-y-8 animate-fade-in">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-foreground tracking-tight">What I Automate</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Simple AI solutions that save time, reduce costs, and help your business run smoothly.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-6 rounded-xl bg-card border-2 border-border hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 rounded-full bg-accent/10 group-hover:bg-accent transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>
            </div>
            
            <p className="text-muted-foreground leading-relaxed mb-3">
              {service.description}
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-accent font-medium">
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              {service.benefit}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
        <div className="text-center space-y-3">
          <h3 className="text-xl font-semibold text-foreground">Don't see what you need?</h3>
          <p className="text-muted-foreground">
            I can automate any repetitive task in your business. Let's discuss your specific challenges.
          </p>
        </div>
      </div>
    </section>
  )
}
