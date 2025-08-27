import React from "react";
import { Card, CardContent } from "./ui/Card";
import { Palette, Smartphone, Zap, Server, Layers, Shield } from "lucide-react";

const services = [
  {
    title: "UI/UX Implementation",
    icon: Palette,
    points: ["Design to Code", "Modern UI/UX", "Accessibility", "Animations"],
  },
  {
    title: "Responsive Web Design",
    icon: Smartphone,
    points: ["Mobile-first", "Cross-browser", "SEO-friendly", "Fast loading"],
  },
  {
    title: "Performance Optimization",
    icon: Zap,
    points: ["Code splitting", "Caching", "Core Web Vitals", "Best practices"],
  },
  {
    title: "Backend Development",
    icon: Server,
    points: ["REST APIs", "Auth systems", "DB Design", "Performance tuning"],
  },
  {
    title: "Full-Stack Applications",
    icon: Layers,
    points: ["MERN stack", "Real-time features", "Scalable", "Integrations"],
  },
  {
    title: "Security Basics",
    icon: Shield,
    points: ["OAuth/JWT", "Input validation", "HTTPS", "Sanitization"],
  },
];

export default function Services(){
  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-sub">What I can help you build and deliver</p>

        <div className="grid grid-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.title} className="gradient-card">
                <CardContent>
                  <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:10}}>
                    <div className="icon-circle"><Icon size={26}/></div>
                    <h3 style={{margin:0}}>{s.title}</h3>
                  </div>
                  <ul className="feature-list">
                    {s.points.map(p => <li key={p}>• {p}</li>)}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
