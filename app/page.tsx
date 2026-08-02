const Arrow = () => <span aria-hidden="true">↗</span>;

const sites = [
  {
    index: "01",
    status: "EVALUATION OPEN",
    city: "RICHARDSON, TEXAS",
    host: "IRVL @ UT Dallas",
    robot: "SO-101",
    description:
      "The founding VLA-Replica site: a low-cost, reproducible benchmark with ten real-world manipulation tasks and matched ID/OOD evaluation.",
    image: "/vla-overview.jpg",
    imageAlt: "VLA-Replica SO-101 benchmark platform and task suite",
    primaryHref: "https://irvlutd.github.io/VLAReplica/",
    primaryLabel: "Explore VLA-Replica",
    secondaryHref:
      "mailto:alex.huang@utdallas.edu?cc=jiahui.zhang@utdallas.edu&subject=RobotReplica%20SO-101%20evaluation",
    secondaryLabel: "Request evaluation",
    meta: ["10 tasks", "ID + OOD", "SO-101"],
  },
  {
    index: "02",
    status: "SITE IN DEVELOPMENT",
    city: "SAN FRANCISCO, CALIFORNIA",
    host: "General Intelligence Labs",
    robot: "OpenArm",
    description:
      "A partner benchmark site for the open-source OpenArm platform, extending RobotReplica toward larger, contact-rich manipulation systems.",
    image: "/openarm-cell.png",
    imageAlt: "OpenArm standardized robotic evaluation cell",
    primaryHref: "https://www.gilabs.xyz/",
    primaryLabel: "Meet GI Labs",
    secondaryHref: "https://openarm.dev/",
    secondaryLabel: "Explore OpenArm",
    meta: ["Bimanual", "Open source", "OpenArm"],
  },
];

const steps = [
  ["01", "Match your robot", "Find the benchmark site running the same embodiment as your policy."],
  ["02", "Contact the host", "Coordinate interfaces, checkpoints, task coverage, and evaluation logistics."],
  ["03", "Run standardized tasks", "The host executes your policy under a consistent physical protocol and scene setup."],
  ["04", "Join the leaderboard", "Results, settings, and evaluation evidence are reported on the robot-specific board."],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="RobotReplica home">
          <i />ROBOT<span>REPLICA</span>
        </a>
        <div className="navLinks">
          <a href="#network">Sites</a>
          <a href="#protocol">How it works</a>
          <a href="#origin">VLA-Replica</a>
          <a href="#leaderboards">Leaderboards</a>
        </div>
        <a className="githubLink" href="https://github.com/RobotReplica">
          GitHub <Arrow />
        </a>
      </nav>

      <section className="hero shell" id="top">
        <div className="eyebrow">
          <span>DISTRIBUTED REAL-WORLD EVALUATION</span>
          <span>02 ACTIVE PARTNERS / EXPANDING</span>
        </div>
        <div className="heroGrid">
          <div className="heroCopy">
            <h1>
              One benchmark<br />network. <em>Many robots.</em>
            </h1>
            <p>
              RobotReplica is a joint effort to make real-world robot manipulation
              evaluation reproducible, accessible, and comparable across embodiments.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#network">Find your robot <span>↓</span></a>
              <a className="button secondary" href="https://irvlutd.github.io/VLAReplica/">See the founding benchmark <Arrow /></a>
            </div>
          </div>
          <div className="networkGraphic" aria-hidden="true">
            <span className="axis axisX" /><span className="axis axisY" />
            <div className="route" />
            <div className="node nodeOne"><b>01</b><span>UT DALLAS</span><small>SO-101</small></div>
            <div className="node nodeTwo"><b>02</b><span>GI LABS</span><small>OPENARM</small></div>
            <span className="coordinate c1">32.9857° N</span>
            <span className="coordinate c2">37.7749° N</span>
          </div>
        </div>
        <div className="statBar">
          <div><strong>02</strong><span>benchmark sites</span></div>
          <div><strong>02</strong><span>robot embodiments</span></div>
          <div><strong>10</strong><span>founding tasks</span></div>
          <div><strong>01</strong><span>shared standard</span></div>
        </div>
      </section>

      <section className="origin" id="origin">
        <div className="shell">
          <div className="sectionIntro">
            <p className="sectionLabel">01 — WHERE IT STARTED</p>
            <h2>VLA-Replica proved<br />the benchmark can <em>travel.</em></h2>
          </div>
          <div className="originGrid">
            <figure className="originImage">
              <img src="/vla-tasks.png" alt="Ten manipulation tasks in the VLA-Replica benchmark" />
              <figcaption><span>VLA-REPLICA / SO-101</span><span>10 REAL-WORLD TASKS</span></figcaption>
            </figure>
            <div className="originCopy">
              <p className="lead">A real-world VLA benchmark built from off-the-shelf components, designed to be assembled quickly and reproduced across laboratories.</p>
              <p>VLA-Replica pairs a low-cost SO-101 arm with standardized cameras, workspace, scenes, and evaluation protocols. It covers both in-distribution and out-of-distribution conditions, with demonstrations and reference scenes that make comparison concrete.</p>
              <div className="factGrid">
                <div><strong>&lt; 1 hour</strong><span>demonstrated setup time</span></div>
                <div><strong>50 / task</strong><span>expert demonstrations</span></div>
                <div><strong>90</strong><span>test scene references</span></div>
                <div><strong>ID + OOD</strong><span>evaluation tracks</span></div>
              </div>
              <a className="textLink" href="https://irvlutd.github.io/VLAReplica/">Read the VLA-Replica project <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="network shell" id="network">
        <div className="sectionIntro split">
          <p className="sectionLabel">02 — BENCHMARK NETWORK</p>
          <div><h2>Choose the site<br />that matches <em>your robot.</em></h2><p>Each host maintains a physical robot, standardized tasks, evaluation protocols, and a dedicated leaderboard.</p></div>
        </div>
        <div className="siteList">
          {sites.map((site) => (
            <article className="siteCard" key={site.robot}>
              <div className="siteImage"><img src={site.image} alt={site.imageAlt} /></div>
              <div className="siteContent">
                <div className="siteTop"><span>{site.index}</span><span className={`status ${site.index === "01" ? "live" : "building"}`}>{site.status}</span></div>
                <p className="city">{site.city}</p>
                <h3>{site.host}</h3>
                <div className="robotName">{site.robot}</div>
                <p className="siteDescription">{site.description}</p>
                <div className="siteMeta">{site.meta.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="siteActions">
                  <a href={site.primaryHref}>{site.primaryLabel} <Arrow /></a>
                  <a href={site.secondaryHref}>{site.secondaryLabel} <Arrow /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="protocol" id="protocol">
        <div className="shell">
          <div className="sectionIntro split light">
            <p className="sectionLabel">03 — EVALUATION PATH</p>
            <h2>From model<br />to measured <em>result.</em></h2>
          </div>
          <div className="stepGrid">
            {steps.map(([number, title, text]) => <div className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="leaderboards shell" id="leaderboards">
        <div className="sectionIntro split">
          <p className="sectionLabel">04 — LEADERBOARDS</p>
          <div><h2>One board for<br />every <em>embodiment.</em></h2><p>Results stay tied to the robot and physical site that produced them—so comparisons remain meaningful.</p></div>
        </div>
        <div className="boardTable" role="table" aria-label="RobotReplica leaderboards">
          <div className="boardHead" role="row"><span>Robot / host</span><span>Track</span><span>Status</span><span>Leaderboard</span></div>
          <a className="boardRow" role="row" href="https://irvlutd.github.io/VLAReplica/#leaderboard"><span><b>SO-101</b><small>IRVL @ UT Dallas</small></span><span>VLA-Replica ID + OOD</span><span className="online">● LIVE</span><span>View board <Arrow /></span></a>
          <div className="boardRow muted" role="row"><span><b>OpenArm</b><small>General Intelligence Labs</small></span><span>Protocol in development</span><span>○ BUILDING</span><span>Coming soon</span></div>
        </div>
      </section>

      <section className="join">
        <div className="shell joinGrid">
          <p className="sectionLabel">05 — GROW THE NETWORK</p>
          <div><h2>Have a robot?<br /><em>Host a site.</em></h2><p>RobotReplica grows through organizations willing to maintain a reproducible physical setup and evaluate community policies. Bring a new embodiment into the network.</p><a className="button dark" href="https://github.com/RobotReplica/RobotReplica.github.io/issues/new?title=Benchmark%20site%20proposal">Propose a benchmark site <Arrow /></a></div>
        </div>
      </section>

      <footer className="footer shell">
        <div><a className="brand" href="#top"><i />ROBOT<span>REPLICA</span></a><p>A distributed proving ground for robot manipulation.</p></div>
        <div className="partnerLine"><span>FOUNDING SITE</span><a href="https://labs.utdallas.edu/irvl/">IRVL @ UT Dallas <Arrow /></a><span>NETWORK PARTNER</span><a href="https://www.gilabs.xyz/">General Intelligence Labs <Arrow /></a></div>
        <div className="footerBottom"><span>© 2026 ROBOTREPLICA</span><span>REAL ROBOTS · SHARED TASKS · COMPARABLE RESULTS</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
