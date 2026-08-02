const Arrow = () => <span aria-hidden="true">↗</span>;

const projects = [
  { name: "FoundationHand", tag: "ACTIVE RESEARCH", text: "A foundation model for human hand pose estimation across diverse datasets, viewpoints, and interactions.", href: "https://github.com/RobotReplica/FoundationHand" },
  { name: "Data Atlas", tag: "12 DATASETS", text: "A unified visual layer across real, rendered, egocentric, and hand-object interaction benchmarks.", href: "https://github.com/RobotReplica/FoundationHand#datasets" },
  { name: "Open Benchmarks", tag: "COMING NEXT", text: "Reproducible evaluation protocols for hand understanding that travels from people to robots.", href: "https://github.com/RobotReplica" },
];

const frames = [
  { src: "/freihand.png", label: "FREIHAND", note: "IN-THE-WILD" },
  { src: "/hocap.png", label: "HO-CAP", note: "HAND + OBJECT" },
  { src: "/arctic.png", label: "ARCTIC", note: "BIMANUAL" },
  { src: "/dexycb.png", label: "DEXYCB", note: "MULTI-VIEW" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="RobotReplica home"><i />ROBOT<span>REPLICA</span></a>
        <div className="navLinks">
          <a href="#research">Research</a><a href="#projects">Projects</a><a href="#about">About</a>
        </div>
        <a className="githubLink" href="https://github.com/RobotReplica">GitHub <Arrow /></a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span>OPEN ROBOTICS RESEARCH</span><span>EST. 2026</span></div>
        <h1>Teaching machines<br />the shape of<br /><em>human skill.</em></h1>
        <div className="heroBottom">
          <p>We build open foundation models that help robots see, understand, and reproduce the dexterity of the human hand.</p>
          <a className="roundButton" href="#projects" aria-label="Explore our work">EXPLORE<br />OUR WORK <b>↓</b></a>
        </div>
        <div className="handField" aria-hidden="true">
          <div className="orbit o1" /><div className="orbit o2" /><div className="orbit o3" />
          <div className="palm" />
          {[0,1,2,3,4].map((n) => <div className={`finger f${n}`} key={n}><i /><i /><i /><i /></div>)}
          <span className="datum d1">X 0.481</span><span className="datum d2">Y 0.227</span><span className="datum d3">Z 0.814</span>
        </div>
      </section>

      <section className="manifesto" id="about">
        <div className="shell manifestoGrid">
          <p className="sectionLabel">01 — MISSION</p>
          <div>
            <h2>Hands are where intelligence<br />meets the <em>physical world.</em></h2>
            <div className="missionCopy"><p>Human hands encode a lifetime of adaptable skill. We are building the perception layer that lets machines learn from it.</p><p>Our research connects human pose, object interaction, and robotic embodiment—openly, reproducibly, and at scale.</p></div>
          </div>
        </div>
      </section>

      <section className="research shell" id="research">
        <div className="sectionHead"><p className="sectionLabel">02 — DATA ATLAS</p><p>One model. Many worlds.<br />A shared language for hands.</p></div>
        <div className="frameGrid">
          {frames.map((frame, i) => <figure key={frame.label} className={i === 1 ? "raised" : ""}><div className="imageWrap"><img src={frame.src} alt={`${frame.label} dataset visualization`} /></div><figcaption><b>{frame.label}</b><span>{frame.note}</span></figcaption></figure>)}
        </div>
      </section>

      <section className="projects" id="projects">
        <div className="shell">
          <div className="sectionHead"><p className="sectionLabel">03 — OPEN PROJECTS</p><h2>Research you can<br /><em>build on.</em></h2></div>
          <div className="projectList">
            {projects.map((project, i) => <a href={project.href} className="project" key={project.name}><span className="projectNum">0{i + 1}</span><div><span className="projectTag">{project.tag}</span><h3>{project.name}</h3><p>{project.text}</p></div><span className="projectArrow"><Arrow /></span></a>)}
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div><a className="brand" href="#top"><i />ROBOT<span>REPLICA</span></a><p>Open models for dexterous intelligence.</p></div>
        <div className="footerCta"><p>THE NEXT BREAKTHROUGH<br />NEEDS MORE HANDS.</p><a href="https://github.com/RobotReplica">COLLABORATE ON GITHUB <Arrow /></a></div>
        <div className="footerBottom"><span>© 2026 ROBOTREPLICA</span><span>OPEN RESEARCH · OPEN SOURCE</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
