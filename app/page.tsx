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
    mapPosition: { left: "49%", top: "70%" },
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
      "/request-evaluation?robots=SO-101",
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
    mapPosition: { left: "8%", top: "43%" },
    robot: "OpenArm",
    benchmark: "RobotReplica OpenArm",
    image: "/openarm-site-rollout.jpg",
    imageAlt: "OpenArm bimanual robot performing a manipulation rollout at the General Intelligence Labs site",
    imageCredit: ["Image: General Intelligence Labs", "https://www.gilabs.xyz/"],
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
      { name: "Haichen Shen", image: "/maintainer-haichen-shen.jpg", url: "https://haichen.xyz/" },
      { name: "Grant Gao", image: "/maintainer-grant-gao.png", url: "https://www.linkedin.com/in/grant221/" },
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
    mapPosition: { left: "84%", top: "27%" },
    robot: "Tianji Marvin Arms",
    benchmark: "RobotReplica Marvin site",
    image: "/cornell-marvin-wuji-site.jpg",
    imageAlt: "Cornell Tianji Marvin dual-arm evaluation setup equipped with two WUJI hands",
    imageCredit: ["Image: GRILL at Cornell", "https://kuanfang.github.io/join-us.html"],
    description:
      "A hosted Tianji Marvin dual-arm evaluation site equipped with two WUJI hands for reproducible, force-aware manipulation benchmarks.",
    partnerRole: "Developing a Tianji Marvin dual-arm site and a new suite of standardized manipulation tasks.",
    taskSummary: {
      intro: "The team is developing a benchmark around the force-controlled, humanlike Marvin arm platform.",
      groups: [
        ["Robot", "Dual 7-DoF humanlike arms · Two WUJI hands"],
        ["Control", "Full-force control · Adaptive impedance · Compliant interaction"],
        ["Benchmark", "Task suite and evaluation protocol in development"],
      ],
    },
    facts: ["Tianji Marvin arms", "Two WUJI hands", "In development"],
    maintainers: [
      { name: "Kuan Fang", image: "/maintainer-kuan-fang.jpg", url: "https://kuanfang.github.io/index.html" },
    ],
    primary: ["Explore Marvin", "https://en.tianjizn.com/products/marvin-series/"],
    secondary: ["Visit the lab", "https://kuanfang.github.io/join-us.html"],
  },
  {
    number: "SITE 04",
    status: "In development",
    host: "Computational Design and Fabrication Group @ MIT",
    hostUrl: "https://cdfg.mit.edu/",
    coHost: "Perceptual Science Group @ MIT",
    coHostUrl: "https://persci.mit.edu/",
    shortHost: "CDFG + Persci · MIT",
    logo: "/logo-mit-cdfg.png",
    location: "Cambridge, Massachusetts",
    mapPosition: { left: "91%", top: "22%" },
    robot: "Franka Panda",
    benchmark: "RobotReplica Franka Panda site",
    image: "/mit-franka-panda-workspace.jpeg",
    imageAlt: "Franka Panda arm installed over the optical-table workspace at MIT",
    imageCredit: ["Image: CDFG at MIT", "https://cdfg.mit.edu/"],
    description:
      "A hosted Franka Panda evaluation site extending the network with a new reproducible manipulation benchmark.",
    partnerRole: "Developing a Franka Panda site and a new suite of standardized manipulation tasks.",
    taskSummary: {
      intro: "The team is developing its robot workspace, benchmark tasks, scene specifications, and baseline evaluation protocol.",
      groups: [
        ["Robot", "Franka Panda 7-DoF research arm"],
        ["Workspace", "Controlled lighting · Fixed camera views · Repeatable scenes"],
        ["Benchmark", "Task suite and evaluation protocol in development"],
      ],
    },
    facts: ["Franka Panda arm", "MIT CSAIL", "In development"],
    maintainers: [
      { name: "Zhiyang (Frank) Dou", image: "/maintainer-frank-dou.webp", url: "https://people.csail.mit.edu/frankzydou/" },
      { name: "Yuxiang Ma", image: "/maintainer-yuxiang-ma.png", url: "https://yuxiang-ma.github.io/" },
      { name: "Edward Adelson", image: "/maintainer-edward-adelson.png", url: "https://persci.mit.edu/people/adelson/" },
      { name: "Wojciech Matusik", image: "/maintainer-wojciech-matusik.jpg", url: "https://cdfg.mit.edu/wojciech" },
    ],
    primary: ["Visit CDFG", "https://cdfg.mit.edu/"],
    secondary: ["Visit Persci", "https://persci.mit.edu/"],
    tertiary: ["Explore Franka", "https://franka.de/franka-research-3"],
  },
];

const steps = [
  ["1", "Find your robot", "Choose a site that operates the same robot embodiment as your model or policy."],
  ["2", "Contact the site", "Share your policy, interface requirements, and the benchmark track you want to enter."],
  ["3", "We run the evaluation", "The host executes your policy on its maintained setup under a standardized protocol."],
  ["4", "Compare the result", "Your verified score is added to the leaderboard for that site and robot."],
];

const siteBuildingSteps = [
  ["01", "Choose the robot", "Select the robot embodiment your organization can maintain and support for repeated community evaluations."],
  ["02", "Build the workspace", "Create a stable physical workspace with consistent lighting, a light box where appropriate, and fixed external and wrist cameras."],
  ["03", "Design the tasks", "Define a diverse benchmark suite—typically around 10 tasks—that reflects the robot’s capabilities and useful manipulation skills."],
  ["04", "Specify the scenes", "Create repeatable scene setups for every task, including object placement and in-distribution and out-of-distribution variations."],
  ["05", "Validate with a policy", "Run a baseline policy across the full suite to verify task feasibility, evaluation criteria, and the end-to-end protocol."],
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
          <a href="/policies">Policy registry</a>
          <a href="#process">How it works</a>
          <a href="#build-a-site">Build a site</a>
          <a href="#leaderboards">Leaderboards</a>
        </div>
        <div className="navActions">
          <a className="navCta" href="/propose-site">Propose a site</a>
          <a className="navCta" href="/request-evaluation">Request evaluations</a>
        </div>
      </nav>

      <header className="hero shell">
        <div className="heroStatement">
          <div className="heroCopy">
            <p className="kicker">A PHYSICAL BENCHMARK NETWORK FOR ROBOT MANIPULATION</p>
            <h1>Your policy.<br />Our robot.<br /><em>One comparable result.</em></h1>
            <p className="heroDefinition">
              RobotReplica is a non-commercial, community-led research initiative connecting
              organizations that voluntarily host standardized robot manipulation benchmarks.
            </p>
            <div className="heroPaths" aria-label="Ways policies are evaluated">
              <article><span>01</span><div><b>Submit your policy.</b><p>Choose a participating site with matching robot hardware. Its volunteer team will evaluate your policy on maintained real-world tasks.</p></div></article>
              <article><span>02</span><div><b>Benchmark public policies.</b><p>RobotReplica also evaluates compatible publicly released policies and checkpoints, then maintains verified leaderboards for each benchmark site.</p></div></article>
            </div>
            <div className="heroActions">
              <a className="button primary" href="/request-evaluation">Request evaluations <Arrow /></a>
              <a className="button primary" href="/propose-site">Propose a site <Arrow /></a>
              <a className="button text" href="#sites">View current sites <span>↓</span></a>
            </div>
          </div>
          <figure className="heroVisual">
            <img src="/og-network.png" alt="RobotReplica network connecting physical robot evaluation sites" />
            <figcaption><span>A DISTRIBUTED PHYSICAL BENCHMARK NETWORK</span><span>MULTIPLE ROBOTS</span></figcaption>
          </figure>
        </div>
        <div className="heroPartners" aria-label="RobotReplica partner organizations">
            <p>PARTNER ORGANIZATIONS &amp; PEOPLE</p>
            <div>
              {sites.map((site) => (
                <article className="heroPartner" key={site.host}>
                  {"coHost" in site ? (
                    <div className="heroPartnerOrg">
                      <img src={site.logo} alt="" />
                      <span>
                        <b className="heroPartnerOrgLinks">
                          <a href={site.hostUrl} target="_blank" rel="noreferrer">CDFG</a>
                          <i> + </i>
                          <a href={site.coHostUrl} target="_blank" rel="noreferrer">Persci</a>
                          <i> · MIT</i>
                        </b>
                        <small>{site.location}</small>
                      </span>
                    </div>
                  ) : (
                    <a className="heroPartnerOrg" href={site.hostUrl} target="_blank" rel="noreferrer"><img src={site.logo} alt="" /><span><b>{site.shortHost}</b><small>{site.location}</small></span></a>
                  )}
                  <div className="heroPartnerPeople">{site.maintainers.map((person) => (
                    <a href={person.url} key={person.name} target="_blank" rel="noreferrer" title={person.name}><img src={person.image} alt={person.name} /><span>{person.name}</span></a>
                  ))}</div>
                </article>
              ))}
            </div>
            <div className="partnerMap">
              <p><span>CURRENT ROBOTREPLICA SITES</span><b>Four sites across the United States</b></p>
              <div className="partnerMapIntro">
                <p>Our current network includes four physical benchmark sites. We welcome additional organizations, robot platforms, and evaluation sites to join RobotReplica.</p>
                <a href="#build-a-site">Become a partner <Arrow /></a>
              </div>
              <div className="partnerMapCanvas">
                <img src="/us-map-48states.svg?v=3" alt="Map of the contiguous United States with state boundaries" />
                {sites.map((site) => "coHost" in site ? (
                  <div className="mapMarker" key={site.host} style={site.mapPosition} aria-label={`CDFG and Persci, ${site.location}`}>
                    <i aria-hidden="true" />
                    <span>
                      <b className="mapMarkerLinks"><a href={site.hostUrl} target="_blank" rel="noreferrer">CDFG</a><em> + </em><a href={site.coHostUrl} target="_blank" rel="noreferrer">Persci</a><em> · MIT</em></b>
                      <small>{site.location}</small>
                    </span>
                  </div>
                ) : (
                  <a className="mapMarker" href={site.hostUrl} key={site.host} style={site.mapPosition} target="_blank" rel="noreferrer" aria-label={`${site.shortHost}, ${site.location}`}>
                    <i aria-hidden="true" />
                    <span><b>{site.shortHost}</b><small>{site.location}</small></span>
                  </a>
                ))}
              </div>
              <div className="partnerMapList">
                {sites.map((site) => "coHost" in site ? (
                  <div className="partnerMapListItem" key={site.host}>
                    <i aria-hidden="true" /><span><b className="mapMarkerLinks"><a href={site.hostUrl} target="_blank" rel="noreferrer">CDFG</a><em> + </em><a href={site.coHostUrl} target="_blank" rel="noreferrer">Persci</a><em> · MIT</em></b><small>{site.location}</small></span>
                  </div>
                ) : (
                  <a href={site.hostUrl} key={site.host} target="_blank" rel="noreferrer">
                    <i aria-hidden="true" /><span><b>{site.shortHost}</b><small>{site.location}</small></span>
                  </a>
                ))}
              </div>
            </div>
        </div>
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
            <article><span>02</span><h3>Robot-matched evaluation</h3><p>Partner sites evaluate submitted policies and compatible publicly released policies on matching robot hardware.</p></article>
            <article><span>03</span><h3>Verified leaderboards</h3><p>RobotReplica maintains a board for each benchmark site using verified results from both evaluation paths.</p></article>
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
          <p>Four organizations are building the first RobotReplica sites. Each site operates its hardware, tasks, and evaluation process; RobotReplica maintains the verified robot-specific leaderboards.</p>
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
                <p className="host"><a href={site.hostUrl} target="_blank" rel="noreferrer">{site.host} <Arrow /></a>{"coHost" in site ? <><span className="hostJoin"> + </span><a href={site.coHostUrl} target="_blank" rel="noreferrer">{site.coHost} <Arrow /></a></> : null}</p>
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
                  <a className={`button ${site.tertiary ? "primary" : "outline"}`} href={site.secondary[1]}>{site.secondary[0]} <Arrow /></a>
                  {site.tertiary ? <a className="button outline" href={site.tertiary[1]}>{site.tertiary[0]} <Arrow /></a> : null}
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
                <div className="leaderboardFoot"><span>Top 3 · success rate · 5 runs per task</span><a className="button leaderboardButton" href="/vla-replica#leaderboard">View full leaderboard <Arrow /></a></div>
              </section>
            ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="homepagePolicies" aria-labelledby="homepage-policies-title">
        <div className="shell homepagePoliciesInner">
          <div>
            <p className="eyebrow">POLICY REGISTRY</p>
            <h2 id="homepage-policies-title">Discover featured<br /><em>robot policies.</em></h2>
          </div>
          <div className="homepagePoliciesBody">
            <p>Explore a curated directory of public robot policies and foundation models. Inclusion is for discovery and does not imply RobotReplica evaluation or hardware compatibility.</p>
            <ul aria-label="Examples from the Policy Registry"><li>Xiaomi-Robotics-1</li><li>Qwen-RobotManip</li><li>GR00T N1.7</li><li>SmolVLA</li></ul>
            <a className="button primary" href="/policies">Explore featured policies <Arrow /></a>
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="shell">
          <div className="sectionHeading centered narrow">
            <p className="eyebrow">SUBMITTED-POLICY WORKFLOW</p>
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

      <section className="buildSite" id="build-a-site">
        <div className="shell">
          <div className="sectionHeading row light">
            <div><p className="eyebrow">PARTNER PLAYBOOK</p><h2>Build a new<br />RobotReplica <em>site.</em></h2></div>
            <p>A partner site turns a robot and workspace into a maintained community benchmark. These five stages provide the starting framework; RobotReplica coordinates details with each host.</p>
          </div>
          <div className="buildSiteFlow">
            {siteBuildingSteps.map(([number, title, description], index) => (
              <article key={number}>
                <div><span>{number}</span><i aria-hidden="true" /></div>
                <div><p>STAGE {index + 1} OF 5</p><h3>{title}</h3><p>{description}</p>{number === "04" ? <a href="/vla-replica#scenes">See VLA-Replica scene references <Arrow /></a> : null}</div>
              </article>
            ))}
          </div>
          <div className="buildSiteCallout">
            <div><span>READY TO HOST?</span><h3>Bring a new robot into the network.</h3><p>Tell us about your organization, robot platform, workspace, and the benchmark tasks you want to develop.</p></div>
            <a className="button buildSiteButton" href="/propose-site">Propose a partner site <Arrow /></a>
          </div>
        </div>
      </section>

      <footer className="footer shell">
        <div><a className="brand" href="#top"><i />ROBOT<span>REPLICA</span></a><p>Real robots. Maintained sites. Comparable results.</p></div>
        <div className="footerLinks"><a href="#sites">Current Sites</a><a href="/policies">Policy Registry</a><a href="#build-a-site">Build a Site</a><a href="https://github.com/RobotReplica">GitHub</a><a href="mailto:robotreplica.org@gmail.com">Contact</a></div>
        <div className="footerBottom"><span>© 2026 ROBOTREPLICA</span><span>A JOINT ROBOT MANIPULATION BENCHMARKING EFFORT</span><a href="#top">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
