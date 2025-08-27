import React from "react";
import { Card, CardContent } from "./ui/Card";
import { Code, Database, GitBranch, Brain } from "lucide-react";

const skills = [
  { name: "Java", icon: Code, level: 90 },
  { name: "JavaScript", icon: Code, level: 85 },
  { name: "React.js", icon: Code, level: 80 },
  { name: "HTML/CSS", icon: Code, level: 95 },
  { name: "Oracle SQL", icon: Database, level: 85 },
  { name: "Git", icon: GitBranch, level: 80 },
  { name: "AI/ML (Basics)", icon: Brain, level: 70 },
];

export default function About(){
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-sub">
          B.Tech in Information Technology — Asansol Engineering College (2021–2025).
          Hands-on with Java, web technologies, Oracle SQL, Git, and basic AI/ML.
        </p>

        <div className="grid grid-3">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <Card key={s.name} className="gradient-card">
                <CardContent>
                  <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:12}}>
                    <div className="icon-circle"><Icon size={26}/></div>
                    <div>
                      <div style={{fontWeight:700}}>{s.name}</div>
                      <div style={{color:"var(--muted)",fontSize:13}}>{s.level}% proficiency</div>
                    </div>
                  </div>
                  <div style={{height:8,background:"#eef3ff",borderRadius:999}}>
                    <div style={{
                      width:`${s.level}%`, height:8, borderRadius:999,
                      background:"linear-gradient(90deg, var(--blue-700), var(--blue-400))"
                    }} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
