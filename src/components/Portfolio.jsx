import React from "react";
import { Card, CardContent } from "./ui/card";
import { MessageSquare, Home, Users2, CloudRain } from "lucide-react";
import { Button } from "./ui/Button";

const projects = [
  {
    title: "Real-Time Chat App",
    icon: MessageSquare,
    tag: "Full-Stack",
    stack: ["MERN", "Socket.IO", "JWT", "Real-time"],
    features: ["Auth (JWT)", "Group & private chat", "Online status", "Notifications"],
    demo: "#", source: "#",
  },
  {
    title: "Real Estate Platform",
    icon: Home,
    tag: "Full-Stack",
    stack: ["MERN", "OAuth", "CRUD", "Search/Filters"],
    features: ["OAuth login", "Property CRUD", "Advanced filters", "Responsive UI"],
    demo: "#", source: "#",
  },
  {
    title: "Employee Management System",
    icon: Users2,
    tag: "Backend",
    stack: ["Java", "Servlets/JSP", "Oracle SQL", "JDBC"],
    features: ["Role-based access", "Payroll basics", "Search", "Attendance"],
    demo: "#", source: "#",
  },
  {
    title: "Rainfall Prediction (SVM)",
    icon: CloudRain,
    tag: "AI/ML",
    stack: ["Python", "scikit-learn", "Pandas", "NumPy"],
    features: ["SVM model", "Data preprocessing", "Evaluation metrics", "Visualization"],
    demo: "#", source: "#",
  },
];

export default function Portfolio(){
  return (
    <section id="portfolio" className="section">
      <div className="container" >
        <h2 className="section-title">Portfolio</h2>
        <p className="section-sub">Some projects I’ve worked on recently</p>

        <div className="grid grid-2">
          {projects.map(p => {
            const Icon = p.icon;
            return (
              <Card key={p.title} className="gradient-card">
                <CardContent>
                  <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:10}}>
                    <div className="icon-circle"><Icon size={26}/></div>
                    <div style={{display:"flex",gap:10,alignItems:"center"}}>
                      <h3 style={{margin:0}}>{p.title}</h3>
                      <span className="badge">{p.tag}</span>
                    </div>
                  </div>

                  <div style={{display:"flex",gap:8,flexWrap:"wrap",margin:"8px 0 10px"}}>
                    {p.stack.map(s => (
                      <span key={s} className="badge" style={{background:"#eef3ff"}}>{s}</span>
                    ))}
                  </div>

                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20}}>
                    <div>
                      <strong>Key Features</strong>
                      <ul className="feature-list">
                        {p.features.map(f => <li key={f}>• {f}</li>)}
                      </ul>
                    </div>
                    <div style={{alignSelf:"end",display:"flex",gap:12,flexWrap:"wrap"}}>
                      <a href={p.demo} target="_blank" rel="noreferrer"><Button>🔗 Live Demo</Button></a>
                      <a href={p.source} target="_blank" rel="noreferrer"><Button variant="ghost">🗂️ Source Code</Button></a>
                    </div>
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
