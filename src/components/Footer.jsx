import React from "react";

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container" style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
        <div>© {new Date().getFullYear()} Bithika Roy</div>
        <div>Built with React + Vite</div>
      </div>
    </footer>
  );
}
