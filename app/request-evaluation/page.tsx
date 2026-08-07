import type { Metadata } from "next";
import EvaluationForm from "./evaluation-form";

export const metadata: Metadata = {
  title: "Request Evaluations | RobotReplica",
  description: "Request coordinated robot-policy evaluation across one or more RobotReplica benchmark sites.",
};

export default function RequestEvaluationPage() {
  return (
    <main className="requestPage">
      <nav className="nav shell" aria-label="Evaluation request navigation">
        <a className="brand" href="/" aria-label="RobotReplica home"><i />ROBOT<span>REPLICA</span></a>
        <a className="navCta requestBack" href="/">Back to network</a>
      </nav>

      <header className="requestHeader shell">
        <p className="kicker">COORDINATED MULTI-SITE EVALUATION</p>
        <h1>Evaluate once—or<br /><em>across the network.</em></h1>
        <p>Select every RobotReplica site with compatible hardware. Submit one set of policy details, and the RobotReplica team will coordinate evaluation with the participating site teams.</p>
        <div className="requestFacts"><span><b>01</b>One shared request</span><span><b>02</b>One or more robots</span><span><b>03</b>Verified site leaderboards</span></div>
      </header>

      <section className="requestFormSection">
        <div className="shell"><EvaluationForm /></div>
      </section>

      <footer className="footer shell requestFooter">
        <div><a className="brand" href="/"><i />ROBOT<span>REPLICA</span></a><p>A community-led network for reproducible real-world robot evaluation.</p></div>
        <div className="footerLinks"><a href="/">RobotReplica home</a><a href="mailto:robotreplica.org@gmail.com">Contact</a></div>
      </footer>
    </main>
  );
}
