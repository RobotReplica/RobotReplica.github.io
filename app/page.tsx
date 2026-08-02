const Arrow = () => <span aria-hidden="true">↗</span>;

const sites = [
  {
    number: "SITE 01",
    status: "Accepting evaluations",
    host: "Intelligent Robotics and Vision Lab @ UT Dallas",
    location: "Richardson, Texas",
    robot: "SO-101",
    benchmark: "RobotReplica SO-101 site",
    image: "/so101-follower.webp",
    imageAlt: "Black SO-101 follower robot arm with LeRobot branding",
    imageCredit: ["Image: Hugging Face LeRobot", "https://huggingface.co/docs/lerobot/so101"],
    description:
      "A hosted SO-101 evaluation site operated by the Intelligent Robotics and Vision Lab at The University of Texas at Dallas.",
    facts: ["SO-101 arm", "UT Dallas", "Accepting evaluations"],
    primary: ["Site details", "/vla-replica"],
    secondary: [
      "Request evaluation",
      "mailto:robotreplica.org@gmail.com?subject=RobotReplica%20SO-101%20evaluation%20request",
    ],
  },
  {
    number: "SITE 02",
    status: "In development",
    host: "General Intelligence Labs",
    location: "San Francisco, California",
    robot: "OpenArm",
    benchmark: "RobotReplica OpenArm",
    image: "/openarm-cell.png",
    imageAlt: "OpenArm standardized evaluation cell",
    imageCredit: null,
    description:
      "A new hosted benchmark for the open-source OpenArm platform, extending the network to larger, bimanual, contact-rich manipulation.",
    facts: ["Bimanual platform", "Open-source hardware", "Protocol in development"],
    primary: ["Meet the host", "https://www.gilabs.xyz/"],
    secondary: ["Explore OpenArm", "https://openarm.dev/"],
  },
];

const steps = [
  ["1", "Find your robot", "Choose a site that operates the same robot embodiment as your model or policy."],
  ["2", "Contact the site", "Share your policy, interface requirements, and the benchmark track you want to enter."],
  ["3", "We run the evaluation", "The host executes your policy on its maintained setup under a standardized protocol."],
  ["4", "Compare the result", "Your verified score is added to the leaderboard for that site and robot."],
];

export default function Home() {
  return (
    <main id="top">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="RobotReplica home">
          <i />ROBOT<span>REPLICA</span>
        </a>
        <div className="navLinks">
          <a href="#overview">Overview</a>
          <a href="#sites">Current sites</a>
          <a href="#process">How it works</a>
          <a href="#leaderboards">Leaderboards</a>
        </div>
        <a className="navCta" href="#sites">Find a site</a>
      </nav>

      <header className="hero shell">
        <div className="heroCopy">
          <p className="kicker">A PHYSICAL BENCHMARK NETWORK FOR ROBOT MANIPULATION</p>
          <h1>Your policy.<br />Our robot.<br /><em>One comparable result.</em></h1>
          <p className="heroDefinition">
            RobotReplica is a network of organizations that host standardized robot
            manipulation benchmarks. Find a site with the same robot you use, send us
            your policy, and we evaluate it on maintained real-world tasks.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#sites">View current sites <span>↓</span></a>
            <a className="button text" href="#process">How evaluation works <Arrow /></a>
          </div>
        </div>
        <figure className="heroVisual">
          <img src="/og-network.png" alt="RobotReplica network connecting physical robot evaluation sites" />
          <figcaption><span>A DISTRIBUTED PHYSICAL BENCHMARK NETWORK</span><span>MULTIPLE ROBOTS</span></figcaption>
        </figure>
      </header>

      <section className="overview" id="overview">
        <div className="shell">
          <div className="sectionHeading centered">
            <p className="eyebrow">OVERVIEW</p>
            <h2>A shared evaluation service<br />for <em>real robots.</em></h2>
            <p className="sectionLead">
              Robotics results are difficult to compare when every lab uses a different
              robot, scene, and protocol. RobotReplica keeps physical benchmark sites
              running so the community can evaluate on consistent hardware and tasks.
            </p>
          </div>
          <div className="overviewGrid">
            <article><span>01</span><h3>Physical benchmark sites</h3><p>Each partner maintains a robot, workspace, task objects, cameras, and an evaluation protocol.</p></article>
            <article><span>02</span><h3>Robot-matched evaluation</h3><p>You choose the site with the same robot as your system. The site runs your policy for you.</p></article>
            <article><span>03</span><h3>Verified leaderboards</h3><p>Every robot and site has its own board, keeping scores comparable and evidence traceable.</p></article>
          </div>
          <div className="distinction">
            <b>THE ROBOTREPLICA MODEL</b>
            <p>Researchers do not need to rebuild the full benchmark. The benchmark stays at the host site; policies travel to it.</p>
          </div>
        </div>
      </section>

      <section className="sites shell" id="sites">
        <div className="sectionHeading row">
          <div><p className="eyebrow">CURRENT SITES</p><h2>Start with the robot<br />you already <em>use.</em></h2></div>
          <p>Two organizations are building the first RobotReplica sites. Each site owns its hardware, tasks, evaluation process, and robot-specific leaderboard.</p>
        </div>
        <div className="siteStack">
          {sites.map((site) => (
            <article className="siteCard" key={site.robot}>
              <div className={`siteImage${site.image ? " hasImage" : " siteIdentity"}`}>
                {site.image ? <img src={site.image} alt={site.imageAlt} /> : <div><small>ROBOT</small><strong>SO-101</strong><small>INTELLIGENT ROBOTICS AND VISION LAB / UT DALLAS</small></div>}
                <span>{site.number}</span>
                {site.imageCredit ? <a className="imageCredit" href={site.imageCredit[1]}>{site.imageCredit[0]} <Arrow /></a> : null}
              </div>
              <div className="siteInfo">
                <div className="siteStatus"><span className={site.status === "Accepting evaluations" ? "live" : "planned"}>● {site.status}</span><span>{site.location}</span></div>
                <p className="host">{site.host}</p>
                <h3>{site.robot}</h3>
                <p className="benchmarkName">{site.benchmark}</p>
                <p className="siteDescription">{site.description}</p>
                <ul>{site.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                <div className="siteActions">
                  <a className="button primary" href={site.primary[1]}>{site.primary[0]} <Arrow /></a>
                  <a className="button outline" href={site.secondary[1]}>{site.secondary[0]} <Arrow /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="process">
        <div className="shell">
          <div className="sectionHeading centered narrow">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2>From your model<br />to a <em>verified score.</em></h2>
          </div>
          <div className="steps">
            {steps.map(([number, title, description]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>
            ))}
          </div>
          <p className="processNote">Evaluation details—policy interface, checkpoints, task coverage, and reporting—are coordinated directly with the selected host site.</p>
        </div>
      </section>

      <section className="leaderboards" id="leaderboards">
        <div className="shell">
          <div className="sectionHeading row light">
            <div><p className="eyebrow">LEADERBOARDS</p><h2>Results grouped by<br /><em>robot and site.</em></h2></div>
            <p>A score is meaningful only when the embodiment and physical protocol match. RobotReplica keeps those contexts explicit.</p>
          </div>
          <div className="boards">
            <a href="https://irvlutd.github.io/VLAReplica/#leaderboard"><span className="boardRobot">SO-101</span><span><b>VLA-Replica</b><small>Intelligent Robotics and Vision Lab @ UT Dallas</small></span><span className="boardState live">LIVE</span><span>View leaderboard <Arrow /></span></a>
            <div><span className="boardRobot">OpenArm</span><span><b>RobotReplica OpenArm</b><small>General Intelligence Labs</small></span><span className="boardState planned">IN DEVELOPMENT</span><span>Coming soon</span></div>
          </div>
        </div>
      </section>

      <section className="join">
        <div className="shell joinInner">
          <div><p className="eyebrow">EXPAND THE NETWORK</p><h2>Operate a robot?<br /><em>Host a site.</em></h2></div>
          <div><p>We are looking for organizations that can maintain a reproducible robot setup and evaluate community policies. Help bring a new embodiment into RobotReplica.</p><a className="button dark" href="mailto:robotreplica.org@gmail.com?subject=RobotReplica%20benchmark%20site%20proposal">Propose a site <Arrow /></a></div>
        </div>
      </section>

      <footer className="footer shell">
        <div><a className="brand" href="#top"><i />ROBOT<span>REPLICA</span></a><p>Real robots. Maintained sites. Comparable results.</p></div>
        <div className="footerLinks"><a href="/vla-replica">VLA-Replica</a><a href="https://www.gilabs.xyz/">GI Labs</a><a href="https://openarm.dev/">OpenArm</a><a href="https://github.com/RobotReplica">GitHub</a></div>
        <div className="footerBottom"><span>© 2026 ROBOTREPLICA</span><span>A JOINT ROBOT MANIPULATION BENCHMARKING EFFORT</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
