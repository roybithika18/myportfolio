import React from "react";
import profile from "@/assets/bithika-profile.jpg";
import { Button } from "./ui/Button";

export default function Hero(){
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({behavior:"smooth"});

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="badge">Web Developer • MERN • Java</span>
          <h1>Hi, I’m <span style={{color:"var(--blue-700)"}}>Bithika Roy</span></h1>
          <p>
            B.Tech (IT) — Asansol Engineering College (2021–2025). I build clean,
            performant web apps using React, Node/Express, MongoDB, and Java. Basic AI/ML too.
          </p>
          <div className="cta">
            <Button onClick={() => scrollTo("portfolio")}>View Portfolio</Button>
            <Button variant="ghost" onClick={() => scrollTo("contact")}>Contact Me</Button>
          </div>
        </div>

        <div className="profile-wrap">
          <div className="profile-bg"></div>
          <img className="profile-img" src={profile} alt="Bithika Roy" />
        </div>
      </div>
    </section>
  );
}
