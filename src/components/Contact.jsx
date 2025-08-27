import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/Button";

export default function Contact(){
  const formRef = useRef(null);
  const [status,setStatus] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try{
      // Use your .env.local values
      const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("sent");
      formRef.current.reset();
    }catch(err){
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-sub">Have a project or opportunity? Let’s talk.</p>

        <div className="grid grid-2">
          <div className="card">
            <div className="card-content">
              <form ref={formRef} onSubmit={onSubmit}>
                <div style={{display:"grid", gap:14}}>
                  <input className="input" name="from_name" placeholder="Your name" required />
                  <input className="input" type="email" name="reply_to" placeholder="Your email" required />
                  <input className="input" name="subject" placeholder="Subject" />
                  <textarea className="textarea" name="message" placeholder="Message" required />
                  <Button type="submit" disabled={status==="loading"}>
                    {status==="loading" ? "Sending..." : "Send Message"}
                  </Button>
                  {status==="sent"  && <div className="badge" style="background:#e7ffe9;color:#107f2e">Message sent!</div>}
                  {status==="error" && <div className="badge" style="background:#ffeaea;color:#9b1c1c">Failed. Try again.</div>}
                </div>
              </form>
            </div>
          </div>

          <div className="gradient-card card-content">
            <strong>Direct Contact</strong>
            <ul className="feature-list" style={{marginTop:8}}>
              <li>Email: <a href="mailto:roybithika188@gmail.com">roybithika188@gmail.com</a></li>
              <li>Phone: <a href="tel:+919065837404">+91 9065837404</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/bithikaroy" target="_blank">linkedin.com/in/bithikaroy</a></li>
              <li>GitHub: <a href="https://github.com/roybithika18" target="_blank">github.com/roybithika18</a></li>
            </ul>
          </div>
        </div>

        <div style={{textAlign:"center", marginTop:36}}>
          <h3 style={{marginBottom:8}}>Interested in My Work?</h3>
          <p className="section-sub" style={{margin:"0 auto",maxWidth:720}}>
            I’m excited to take on new challenges and create innovative solutions.
            Let’s discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
