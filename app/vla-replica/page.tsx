import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VLA-Replica | RobotReplica",
  description: "The complete VLA-Replica benchmark hub: tasks, videos, leaderboards, setup documentation, data, checkpoints, and evaluation resources.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

const resources = [
  ["Paper", "/vla-replica-materials/assets/pdf/VLAReplica.pdf", "Read the VLA-Replica paper"],
  ["Setup guide", "/vla-replica-materials/setup-docs/", "Build and calibrate the platform"],
  ["Task reference", "/vla-replica-materials/setup-docs/task-reference/", "Review every ID and OOD task"],
  ["Evaluation guide", "/vla-replica-materials/setup-docs/running-evaluations/", "Run the benchmark protocol"],
  ["Rollout videos", "/vla-replica-materials/scene-videos/", "Browse results by policy and split"],
  ["Model checkpoints", "/vla-replica-materials/model-checkpoints/", "Access published checkpoints"],
  ["Bill of materials", "/vla-replica-materials/setup-docs/bill-of-materials/", "Source the complete hardware setup"],
  ["Purchase links", "/vla-replica-materials/purchase-links/", "Find benchmark objects and parts"],
];

export default function VLAReplicaPage() {
  return (
    <main className="vlaPage">
      <nav className="nav shell" aria-label="VLA-Replica navigation">
        <a className="brand" href="/" aria-label="RobotReplica home"><i />ROBOT<span>REPLICA</span></a>
        <div className="navLinks"><a href="#overview">Overview</a><a href="#resources">Resources</a><a href="#full-project">Full project</a></div>
        <a className="navCta" href="/">Back to network</a>
      </nav>

      <header className="vlaHero shell">
        <div>
          <p className="kicker">THE COMPLETE SO-101 BENCHMARK HUB</p>
          <h1>VLA-Replica</h1>
          <p className="vlaSubtitle">A low-cost, reproducible real-world benchmark for evaluating vision-language-action models—with every project resource now hosted inside RobotReplica.</p>
          <div className="heroActions">
            <a className="button primary" href="#full-project">Explore the full project <span>↓</span></a>
            <a className="button outline" href="mailto:robotreplica.org@gmail.com?subject=RobotReplica%20SO-101%20evaluation%20request">Request evaluation <Arrow /></a>
          </div>
        </div>
        <figure className="vlaHeroImage">
          <video controls autoPlay muted loop playsInline poster="/vla-replica-materials/assets/images/VLAReplica_overview.jpg">
            <source src="/vla-replica-materials/assets/videos/VLAReplica.mp4" type="video/mp4" />
          </video>
          <figcaption>VLA-REPLICA OVERVIEW / SO-101 BENCHMARK</figcaption>
        </figure>
      </header>

      <section className="vlaOverview" id="overview">
        <div className="shell vlaSplit">
          <div><p className="eyebrow">OVERVIEW</p><h2>A complete, replicable evaluation package.</h2></div>
          <div className="vlaBody">
            <p>VLA-Replica standardizes an affordable SO-101 robot, physical workspace, cameras, task objects, demonstrations, and evaluation protocol so real-world manipulation results can be reproduced across laboratories.</p>
            <p>The benchmark contains 10 manipulation tasks, 50 expert demonstrations per task, 90 reference evaluation scenes, and separate in-distribution and out-of-distribution tracks.</p>
          </div>
        </div>
      </section>

      <section className="vlaBenchmark shell" id="resources">
        <div className="sectionHeading row">
          <div><p className="eyebrow">PROJECT MATERIALS</p><h2>Everything needed to<br />build, run, and <em>compare.</em></h2></div>
          <p>The paper, local overview video, task galleries, setup documentation, evaluation instructions, leaderboards, and rollout-video index have been imported from the original project.</p>
        </div>
        <div className="vlaFacts"><article><b>10</b><span>real-world manipulation tasks</span></article><article><b>50</b><span>demonstrations per task</span></article><article><b>90</b><span>reference evaluation scenes</span></article><article><b>ID + OOD</b><span>evaluation tracks</span></article></div>
        <div className="vlaResourceGrid">
          {resources.map(([title, href, description]) => (
            <a href={href} key={title}><span>{title}</span><p>{description}</p><Arrow /></a>
          ))}
          <a href="https://huggingface.co/datasets/HenryZhang/VLAReplica_SFT_data" target="_blank" rel="noreferrer"><span>Demonstration data</span><p>Download the training and fine-tuning dataset</p><Arrow /></a>
          <a href="https://github.com/IRVLUTD/VLAReplica" target="_blank" rel="noreferrer"><span>Evaluation code</span><p>Use the maintained benchmark implementation</p><Arrow /></a>
        </div>
      </section>

      <section className="vlaArchiveSection" id="full-project">
        <div className="shell vlaArchiveHeading">
          <div><p className="eyebrow">FULL VLA-REPLICA PROJECT</p><h2>Tasks, leaderboards, videos, and results.</h2></div>
          <a className="button outline" href="/vla-replica-materials/" target="_blank">Open full-page version <Arrow /></a>
        </div>
        <div className="shell">
          <iframe className="vlaArchive" src="/vla-replica-materials/index.html" title="Complete VLA-Replica project materials" loading="lazy" />
        </div>
      </section>

      <section className="vlaEvaluation" id="evaluation">
        <div className="shell vlaSplit">
          <div><p className="eyebrow">HOSTED EVALUATION</p><h2>Evaluate on the UT Dallas SO-101 site.</h2></div>
          <div className="vlaBody"><p>Send RobotReplica your policy or checkpoint, interface requirements, and desired benchmark track. The Intelligent Robotics and Vision Lab runs the maintained physical evaluation and reports the result.</p><div className="vlaLinks"><a className="button primary" href="mailto:robotreplica.org@gmail.com?subject=RobotReplica%20SO-101%20evaluation%20request">Request an evaluation <Arrow /></a><a className="button text" href="/vla-replica-materials/index.html#leaderboard">Open leaderboard <Arrow /></a></div></div>
        </div>
      </section>

      <footer className="footer shell vlaFooter">
        <div><a className="brand" href="/"><i />ROBOT<span>REPLICA</span></a><p>VLA-Replica is maintained by the Intelligent Robotics and Vision Lab at UT Dallas.</p></div>
        <div className="footerLinks"><a href="/">RobotReplica home</a><a href="/vla-replica-materials/setup-docs/">Setup guide</a><a href="https://github.com/RobotReplica">GitHub</a></div>
      </footer>
    </main>
  );
}
