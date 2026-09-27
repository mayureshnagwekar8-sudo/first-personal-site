'use client'

import { useEffect, useState } from 'react'

const experiences = [
  ['2025', 'Technical Reviewer', 'IEEE DELCON 2025', 'Independently evaluated technical papers for correctness, methodological rigor, and clarity as part of the conference peer-review process.'],
  ['2025', 'AI/ML Intern · 6-Month Remote Training Program', 'TRL FutureX', 'Built end-to-end ML projects covering data preparation, model development, evaluation, and insight generation under expert mentorship.'],
  ['Jun–Jul 2021', 'Research Intern', 'National Institute of Technology Karnataka, Surathkal', 'Developed and optimized an ML model for cardiovascular disease detection, achieving 90% accuracy and deploying it on embedded hardware for low-latency inference.'],
]

const projects = [
  ['ML / CLOUD · JUL 2026', 'End-to-End ML & Cloud Deployment Pipeline', 'Automated training and prediction pipelines with feature transformation and hyperparameter tuning for real-time and batch inference.', 'Python · Scikit-learn · Docker · AWS · Azure · GitHub CI/CD'],
  ['RAG / LLM · MAY 2026', 'AI-Powered Document Intelligence Chatbot', 'RAG chatbot for airline support PDFs with extraction, chunking, semantic retrieval, streaming responses, chat history, and caching.', 'Python · LangChain · Streamlit · xAI Grok-4 · AWS EC2'],
  ['FPGA / HLS · APR 2026', 'FPGA Accelerator for MobileNetV2 using HLS', 'MobileNetV2 bottleneck accelerator with AXI PS–PL interfaces, loop pipelining, BRAM optimization, and DMA analysis.', 'Vitis HLS · Vivado · C++ · Python · PYNQ-ZU'],
]

const skillGroups = {
  'AI / ML': ['Python', 'Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy', 'EDA', 'LangChain', 'RAG', 'Prompt Engineering'],
  'Digital Design': ['Verilog HDL', 'RTL Design', 'FSM', 'STA', 'Testbench', 'Vivado', 'Vitis HLS', 'ModelSim'],
  Embedded: ['C/C++', 'Embedded C', 'ARM STM32', 'FPGA', 'RTOS', 'GPIO'],
  'Tools & Cloud': ['Linux', 'Git/GitHub', 'Docker', 'AWS', 'Azure', 'STM32CubeIDE', 'Keil', 'JTAG/SWD', 'Oscilloscope'],
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('show')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <main id="top">
      <nav><div className="wrap navin"><a className="brand" href="#top">MAYURESH<span>.</span></a><div className={`links ${menuOpen ? 'open' : ''}`}>{['about', 'experience', 'research', 'projects', 'skills', 'education', 'contact'].map((item) => <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item[0].toUpperCase() + item.slice(1)}</a>)}</div><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>Menu</button></div></nav>
      <div className="wrap">
        <section className="hero" style={{ borderTop: 0 }}><div className="reveal"><div className="eyebrow">AI/ML Research · Digital Design · FPGA · Embedded</div><h1>Mayuresh<br /><span>Nagwekar</span></h1><h2>Physics &amp; Engineering Subject-Matter Expert — AI/LLM Research</h2><p>M.Tech graduate in Embedded and Machine Learning Systems from NIT Warangal, with hands-on work across AI/ML, embedded systems, FPGA design, and signal processing.</p><div className="actions"><a className="btn primary" href="mailto:mayureshnagvekar9@gmail.com">Email Me ↗</a><a className="btn" href="https://www.linkedin.com/in/mayuresh-n-029610216" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="btn" href="#contact">Let&apos;s connect</a></div></div><div className="grid-art reveal"><div className="chip">AI · RTL · FPGA · EMBEDDED</div>{['n1','n2','n3','n4','n5'].map((n) => <i className={`node ${n}`} key={n} />)}{['t1','t2','t3'].map((n) => <i className={`trace ${n}`} key={n} />)}</div></section>
        <section id="about"><SectionHead number="01" title="About Me" /><div className="about reveal"><div><p>M.Tech graduate in Embedded and Machine Learning Systems from NIT Warangal with hands-on experience in AI/ML, embedded systems, FPGA design, and signal processing.</p><p>Experienced in AI benchmark evaluation, authoring hardware-domain agentic coding tasks, and validating technical and AI-generated content for correctness and rigor.</p><p>Published IEEE researcher and conference technical reviewer.</p></div><div className="terminal"><div><b>focus</b> = [&quot;AI/ML&quot;, &quot;Digital Design&quot;, &quot;FPGA&quot;, &quot;Embedded&quot;]</div><div><b>research</b> = &quot;Seismic signal denoising&quot;</div><div><b>hardware</b> = [&quot;Verilog&quot;, &quot;Vitis HLS&quot;, &quot;ARM STM32&quot;]</div><div><b>cloud</b> = [&quot;AWS&quot;, &quot;Azure&quot;, &quot;Docker&quot;]</div></div></div></section>
        <section id="experience"><SectionHead number="02" title="Experience" /><div className="timeline reveal">{experiences.map(([date, title, org, text]) => <div className="item" key={title}><div className="date">{date}</div><div><h3>{title}</h3><div className="org">{org}</div><p>{text}</p></div></div>)}</div></section>
        <section id="research"><SectionHead number="03" title="Research & Publications" /><div className="pub reveal"><h3>Seismic Random Noise Attenuation using Variational Quantum Denoising Technique — IEEE GRSL</h3><p>Developed a Quantum Fourier Transform (QFT) + variational optimization framework for adaptive seismic noise attenuation.</p></div></section>
        <section id="projects"><SectionHead number="04" title="Featured Projects" /><div className="cards reveal">{projects.map(([tag, title, text, stack]) => <article className="card" key={title}><span className="tag">{tag}</span><h3>{title}</h3><p>{text}</p><div className="stack">{stack}</div></article>)}</div></section>
        <section id="skills"><SectionHead number="05" title="Technical Skills" /><div className="skills reveal">{Object.entries(skillGroups).map(([group, skills]) => <div className="skillbox" key={group}><h3>{group}</h3><div className="chips">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>
        <section id="education"><SectionHead number="06" title="Education" /><div className="edu reveal"><div className="card"><div className="meta">2024 — 2026</div><h3>National Institute of Technology Warangal</h3><p>Master of Technology (M.Tech), Embedded and Machine Learning Systems</p><div className="stack">CGPA: 8.09 / 10 · Warangal, India</div></div><div className="card"><div className="meta">2014 — 2018</div><h3>Pillai College of Engineering</h3><p>Bachelor of Engineering (B.E.), Electronics Engineering</p><div className="stack">CGPA: 8.14 / 10 · Panvel, India</div></div></div><div className="certs reveal"><span>Data Analytics Bootcamp — Udemy (2026)</span><span>Generative AI — Udemy (2025)</span><span>Python Programming — NIELIT Calicut (2024)</span></div></section>
        <section id="contact"><div className="contact reveal"><div><div className="kicker">07 / Contact</div><h2>Let&apos;s build something technical.</h2><p>For research, AI/ML, digital design, FPGA, or embedded opportunities, connect by email or LinkedIn.</p></div><div className="contact-links"><a className="btn primary" href="mailto:mayureshnagvekar9@gmail.com">mayureshnagvekar9@gmail.com</a><a className="btn" href="https://www.linkedin.com/in/mayuresh-n-029610216" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>
        <footer>© 2026 Mayuresh Nagwekar · Built as a focused engineering portfolio.</footer>
      </div>
    </main>
  )
}

function SectionHead({ number, title }: { number: string; title: string }) { return <div className="section-head"><div><div className="kicker">{number} /</div><h2>{title}</h2></div></div> }
