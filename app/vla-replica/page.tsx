import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VLA-Replica | RobotReplica",
  description: "The founding SO-101 benchmark behind RobotReplica, developed by the Intelligent Robotics and Vision Lab at The University of Texas at Dallas.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function VLAReplicaPage() {
  return (
    <main className="vlaPage">
      <nav className="nav shell" aria-label="VLA-Replica navigation">
        <a className="brand" href="/" aria-label="RobotReplica home"><i />ROBOT<span>REPLICA</span></a>
        <div className="navLinks"><a href="#overview">Overview</a><a href="#benchmark">Benchmark</a><a href="#evaluation">Evaluation</a></div>
        <a className="navCta" href="/">Back to network</a>
      </nav>

      <header className="vlaHero shell">
        <div>
          <p className="kicker">FOUNDING PROJECT / INTELLIGENT ROBOTICS AND VISION LAB @ UT DALLAS</p>
          <h1>VLA-Replica</h1>
          <p className="vlaSubtitle">A replicable real-world benchmark for vision-language-action models using the low-cost SO-101 arm.</p>
          <div className="heroActions">
            <a className="button primary" href="https://irvlutd.github.io/VLAReplica/">Official project site <Arrow /></a>
            <a className="button outline" href="mailto:robotreplica.org@gmail.com?subject=RobotReplica%20SO-101%20evaluation%20request">Request evaluation <Arrow /></a>
          </div>
        </div>
        <figure className="vlaHeroImage"><img src="/vla-overview.jpg" alt="SO-101 arm and VLA-Replica benchmark workspace" /><figcaption>SO-101 BENCHMARK SITE / RICHARDSON, TEXAS</figcaption></figure>
      </header>

      <section className="vlaOverview" id="overview">
        <div className="shell vlaSplit">
          <div><p className="eyebrow">OVERVIEW</p><h2>The project that started the network.</h2></div>
          <div className="vlaBody"><p>VLA-Replica was created to make real-world robot manipulation evaluation easier to reproduce and compare. It uses an affordable, off-the-shelf SO-101 arm and a carefully specified physical setup.</p><p>RobotReplica extends that idea beyond one benchmark: partner organizations maintain evaluation sites for different robot embodiments so policies can be tested on matched, real hardware.</p></div>
        </div>
      </section>

      <section className="vlaBenchmark shell" id="benchmark">
        <div className="sectionHeading row">
          <div><p className="eyebrow">BENCHMARK DESIGN</p><h2>Consistent tasks.<br />Meaningful <em>variation.</em></h2></div>
          <p>The benchmark standardizes the robot, workspace, task objects, camera views, demonstrations, and evaluation scenes while testing both familiar and shifted conditions.</p>
        </div>
        <div className="vlaFacts"><article><b>10</b><span>real-world manipulation tasks</span></article><article><b>50</b><span>demonstrations per task</span></article><article><b>90</b><span>reference evaluation scenes</span></article><article><b>ID + OOD</b><span>evaluation tracks</span></article></div>
        <img className="vlaTasks" src="/vla-tasks.png" alt="The ten manipulation tasks included in VLA-Replica" />
      </section>

      <section className="vlaEvaluation" id="evaluation">
        <div className="shell vlaSplit">
          <div><p className="eyebrow">EVALUATION</p><h2>Evaluate on the UT Dallas SO-101 site.</h2></div>
          <div className="vlaBody"><p>Researchers with SO-101-compatible manipulation policies can contact RobotReplica to discuss interfaces, checkpoints, task coverage, and evaluation reporting.</p><div className="vlaLinks"><a className="button primary" href="mailto:robotreplica.org@gmail.com?subject=RobotReplica%20SO-101%20evaluation%20request">Request an evaluation <Arrow /></a><a className="button text" href="https://irvlutd.github.io/VLAReplica/#leaderboard">View leaderboard <Arrow /></a></div></div>
        </div>
      </section>

      <footer className="footer shell vlaFooter">
        <div><a className="brand" href="/"><i />ROBOT<span>REPLICA</span></a><p>VLA-Replica is maintained by the Intelligent Robotics and Vision Lab at UT Dallas.</p></div>
        <div className="footerLinks"><a href="/">RobotReplica home</a><a href="https://irvlutd.github.io/VLAReplica/">Original project</a><a href="https://github.com/RobotReplica">GitHub</a></div>
      </footer>
    </main>
  );
}
