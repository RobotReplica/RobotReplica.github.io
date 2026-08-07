import type { Metadata } from "next";
import ProposalForm from "./proposal-form";

export const metadata: Metadata = {
  title: "Propose a Partner Site | RobotReplica",
  description: "Propose a volunteer organization, robot platform, and physical benchmark site for the RobotReplica network.",
};

export default function ProposeSitePage() {
  return (
    <main className="requestPage">
      <nav className="nav shell" aria-label="Partner site proposal navigation">
        <a className="brand" href="/" aria-label="RobotReplica home"><i />ROBOT<span>REPLICA</span></a>
        <a className="navCta requestBack" href="/#build-a-site">Back to partner playbook</a>
      </nav>

      <header className="requestHeader shell">
        <p className="kicker">EXPAND THE PHYSICAL BENCHMARK NETWORK</p>
        <h1>Bring your robot.<br /><em>Host a benchmark.</em></h1>
        <p>Tell us how your organization could operate a reproducible robot manipulation site. RobotReplica will work with selected partners to refine the workspace, tasks, scene specifications, baseline evaluation, and launch plan.</p>
        <div className="requestFacts"><span><b>01</b>Volunteer host team</span><span><b>02</b>Maintained robot setup</span><span><b>03</b>Shared evaluation protocol</span></div>
      </header>

      <section className="requestFormSection">
        <div className="shell"><ProposalForm /></div>
      </section>

      <footer className="footer shell requestFooter">
        <div><a className="brand" href="/"><i />ROBOT<span>REPLICA</span></a><p>A community-led network for reproducible real-world robot evaluation.</p></div>
        <div className="footerLinks"><a href="/">RobotReplica home</a><a href="/#build-a-site">Partner playbook</a><a href="mailto:robotreplica.org@gmail.com">Contact</a></div>
      </footer>
    </main>
  );
}
