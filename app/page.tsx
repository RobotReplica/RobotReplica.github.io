const Arrow = () => <span aria-hidden="true">↗</span>;

const sites = [
  {
    number: "SITE 01",
    status: "Accepting evaluations",
    host: "Intelligent Robotics and Vision Lab @ UT Dallas",
    hostUrl: "https://labs.utdallas.edu/irvl/",
    shortHost: "IRVL · UT Dallas",
    logo: "/logo-irvl.png",
    location: "Richardson, Texas",
    robot: "SO-101",
    benchmark: "RobotReplica SO-101 site",
    image: "/vla-replica-overview.jpg",
    imageAlt: "VLA-Replica SO-101 evaluation setup showing the light box, top camera, camera mount, follower arm, and wrist webcam",
    imageCredit: null,
    description:
      "A hosted SO-101 evaluation site for reproducible VLA-Replica manipulation benchmarks.",
    partnerRole: "Created VLA-Replica and operates the network’s SO-101 benchmark and leaderboard.",
    taskSummary: {
      intro: "VLA-Replica evaluates 10 tabletop manipulation tasks in both in-distribution and out-of-distribution scenes.",
      groups: [
        ["Pick & place", "Bread on plate · Bowl on coaster · Lift bowl"],
        ["Dexterous", "Stack or collect blocks · Fold towel · Pour pepper"],
        ["Interaction", "Open oven · Clean whiteboard · Press button"],
      ],
    },
    facts: ["SO-101 arm", "UT Dallas", "Accepting evaluations"],
    maintainers: [
      { name: "Alex S. Huang", image: "/maintainer-alex-huang.jpg", url: "https://alexhuang1029.github.io/" },
      { name: "Jiahui Zhang", image: "/maintainer-jiahui-zhang.png", url: "https://jiahui-3205.github.io/" },
      { name: "Yu Xiang", image: "/maintainer-yu-xiang.jpg", url: "https://yuxng.github.io/" },
    ],
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
    hostUrl: "https://www.gilabs.xyz/",
    shortHost: "General Intelligence Labs",
    logo: "/logo-gi-labs.svg",
    location: "San Francisco, California",
    robot: "OpenArm",
    benchmark: "RobotReplica OpenArm",
    image: "/openarm-cell.png",
    imageAlt: "OpenArm standardized evaluation cell",
    imageCredit: null,
    description:
      "A hosted OpenArm evaluation site extending the network to bimanual, contact-rich manipulation.",
    partnerRole: "Developing the OpenArm site for reproducible bimanual and contact-rich evaluation.",
    taskSummary: {
      intro: "Initial benchmark tasks are being designed for the standardized OpenArm Cell; the final protocol is still in development.",
      groups: [
        ["Bimanual", "Coordinated grasping · Object handoffs · Two-arm placement"],
        ["Contact-rich", "Insertion and assembly · Tool use · Articulated objects"],
        ["Robustness", "Object variations · Scene distractors · Tasks at varied heights"],
      ],
    },
    facts: ["Bimanual platform", "Open-source hardware", "Protocol in development"],
    maintainers: [
      { name: "Shumo Chu", image: "/maintainer-shumo-chu.jpg", url: "https://www.shumochu.com/" },
    ],
    primary: ["Meet the host", "https://www.gilabs.xyz/"],
    secondary: ["Explore OpenArm", "https://openarm.dev/"],
  },
  {
    number: "SITE 03",
    status: "In development",
    host: "Generalizable Robot Intelligence and Learning Lab @ Cornell University",
    hostUrl: "https://kuanfang.github.io/join-us.html",
    shortHost: "GRILL · Cornell",
    logo: "/logo-grill.png",
    location: "Ithaca, New York",
    robot: "Franka Panda",
    benchmark: "RobotReplica DROID site",
    image: "/droid-setup.png",
    imageAlt: "DROID robot platform with a Franka Panda arm, external and wrist stereo cameras, gripper, control laptop, and teleoperation headset",
    imageCredit: ["Image: DROID Dataset", "https://droid-dataset.github.io/"],
    description:
      "A hosted Franka Panda evaluation site built around the standardized DROID platform.",
    partnerRole: "Building a Franka Panda evaluation site around the standardized DROID platform.",
    taskSummary: {
      intro: "The planned site follows the portable DROID setup for manipulation across varied scenes, objects, and everyday tasks.",
      groups: [
        ["Robot", "Franka Panda 7-DoF arm · Robotiq 2F-85 gripper"],
        ["Vision", "Two adjustable ZED 2 cameras · Wrist-mounted ZED Mini"],
        ["Operation", "Portable standing desk · Headset teleoperation"],
      ],
    },
    facts: ["Franka Panda arm", "DROID platform", "In development"],
    maintainers: [
      { name: "Kuan Fang", image: "/maintainer-kuan-fang.jpg", url: "https://kuanfang.github.io/index.html" },
    ],
    primary: ["Explore DROID", "https://droid-dataset.github.io/"],
    secondary: ["Visit the lab", "https://kuanfang.github.io/join-us.html"],
  },
];

const steps = [
  ["1", "Find your robot", "Choose a site that operates the same robot embodiment as your model or policy."],
  ["2", "Contact the site", "Share your policy, interface requirements, and the benchmark track you want to enter."],
  ["3", "We run the evaluation", "The host executes your policy on its maintained setup under a standardized protocol."],
  ["4", "Compare the result", "Your verified score is added to the leaderboard for that site and robot."],
];

const so101Leaders = [
  { policy: "π₀.₅", id: "54%", ood: "35%" },
  { policy: "π₀", id: "34%", ood: "30%" },
  { policy: "SmolVLA", id: "26%", ood: "30%" },
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
          <div className="heroPartners" aria-label="RobotReplica partner organizations">
            <p>PARTNER ORGANIZATIONS &amp; PEOPLE</p>
            <div>
              {sites.map((site) => (
                <article className="heroPartner" key={site.host}>
                  <a className="heroPartnerOrg" href={site.hostUrl} target="_blank" rel="noreferrer"><img src={site.logo} alt="" /><span><b>{site.shortHost}</b><small>{site.location}</small></span></a>
                  <div className="heroPartnerPeople">{site.maintainers.map((person) => (
                    <a href={person.url} key={person.name} target="_blank" rel="noreferrer" title={person.name}><img src={person.image} alt={person.name} /><span>{person.name}</span></a>
                  ))}</div>
                </article>
              ))}
            </div>
          </div>
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
          <p>Three organizations are building the first RobotReplica sites. Each site owns its hardware, tasks, evaluation process, and robot-specific leaderboard.</p>
        </div>
        <div className="siteStack">
          {sites.map((site) => (
            <div className="siteEntry" key={site.robot}>
            <article className="siteCard">
              <div className={`siteImage${site.image ? " hasImage" : " siteIdentity"}`}>
                {site.image ? <img src={site.image} alt={site.imageAlt} /> : <div><small>ROBOT</small><strong>SO-101</strong><small>INTELLIGENT ROBOTICS AND VISION LAB / UT DALLAS</small></div>}
                <span>{site.number}</span>
                {site.imageCredit ? <a className="imageCredit" href={site.imageCredit[1]}>{site.imageCredit[0]} <Arrow /></a> : null}
              </div>
              <div className="siteInfo">
                <div className="siteStatus"><span className={site.status === "Accepting evaluations" ? "live" : "planned"}>● {site.status}</span><span>{site.location}</span></div>
                <p className="host"><a href={site.hostUrl} target="_blank" rel="noreferrer">{site.host} <Arrow /></a></p>
                <h3>{site.robot}</h3>
                <p className="benchmarkName">{site.benchmark}</p>
                <p className="siteDescription">{site.description}</p>
                {site.taskSummary ? (
                  <div className="taskSummary">
                    <p><b>Benchmark tasks</b>{site.taskSummary.intro}</p>
                    <div>{site.taskSummary.groups.map(([label, tasks]) => <span key={label}><strong>{label}</strong><small>{tasks}</small></span>)}</div>
                  </div>
                ) : null}
                <ul>{site.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
                <div className="maintainers">
                  <p>Site maintainers</p>
                  <div className="maintainerList">{site.maintainers.map((person) => (
                    <a className="maintainer" href={person.url} key={person.name} target="_blank" rel="noreferrer">
                      <img src={person.image} alt={`${person.name}, maintainer of the ${site.robot} site`} />
                      <span><b>{person.name}</b><small>Profile <Arrow /></small></span>
                    </a>
                  ))}</div>
                </div>
                <div className="siteActions">
                  <a className="button primary" href={site.primary[1]}>{site.primary[0]} <Arrow /></a>
                  <a className="button outline" href={site.secondary[1]}>{site.secondary[0]} <Arrow /></a>
                </div>
              </div>
            </article>
            {site.robot === "SO-101" ? (
              <section className="siteLeaderboard" id="leaderboards" aria-labelledby="so101-leaderboard-title">
                <div className="leaderboardIntro">
                  <div><p className="eyebrow">LIVE LEADERBOARD</p><h3 id="so101-leaderboard-title">SO-101 · VLA-Replica</h3></div>
                  <p>Average policy success rates across the official benchmark. Ranked by the in-distribution result.</p>
                </div>
                <div className="leaderboardTop" aria-label="Top three SO-101 policies">
                  <div className="leaderboardLabels"><span>Rank / policy</span><span>ID</span><span>OOD</span></div>
                  {so101Leaders.map((result, index) => (
                    <div className="leaderRow" key={result.policy}>
                      <span className="leaderIdentity"><i>{String(index + 1).padStart(2, "0")}</i><b>{result.policy}</b></span>
                      <span><small>ID</small>{result.id}</span>
                      <span><small>OOD</small>{result.ood}</span>
                    </div>
                  ))}
                </div>
                <div className="leaderboardFoot"><span>Top 3 · success rate · 5 runs per task</span><a className="button leaderboardButton" href="https://irvlutd.github.io/VLAReplica/#leaderboard">View full leaderboard <Arrow /></a></div>
              </section>
            ) : null}
            </div>
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
