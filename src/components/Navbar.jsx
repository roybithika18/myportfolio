import React from "react";
import { Button } from "./ui/Button";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#" style={{display:"flex",alignItems:"center",gap:10,fontWeight:800}}>
          <div className="icon-circle" style={{width:36,height:36,fontWeight:800}}>BR</div>
          <span style={{color:"var(--blue-700)"}}>Bithika Roy</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
          <a href="#contact"><Button>Get In Touch</Button></a>
        </nav>
      </div>
    </header>
  );
}
