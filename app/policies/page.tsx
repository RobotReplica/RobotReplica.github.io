import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policy Registry | RobotReplica",
  description: "A curated directory of featured public robot policies and robot foundation models.",
};

const policies = [
  {
    name: "Xiaomi-Robotics-1",
    organization: "Xiaomi Robotics",
    year: "2026",
    category: "Robot foundation model",
    summary: "A vision-language-action foundation model pretrained on more than 100,000 hours of embodiment-free UMI manipulation trajectories, then aligned with cross-embodiment robot data for mobile manipulation and efficient task adaptation.",
    tags: ["100K+ hours", "UMI pretraining", "Open checkpoints"],
    links: [["Project", "https://robotics.xiaomi.com/xiaomi-robotics-1.html"], ["Code", "https://github.com/XiaomiRobotics/Xiaomi-Robotics-1"], ["Checkpoints", "https://huggingface.co/collections/XiaomiRobotics/xiaomi-robotics-1"], ["Paper", "https://arxiv.org/abs/2607.15330"]],
  },
  {
    name: "Qwen-RobotManip",
    organization: "Qwen Team",
    year: "2026",
    category: "Robotic manipulation foundation model",
    summary: "A Qwen3.5-4B-based VLA with a flow-matching diffusion-transformer action expert, trained on approximately 38,100 hours of open robot data, egocentric video, and synthesized demonstrations across multiple embodiments.",
    tags: ["Cross-embodiment", "Flow matching", "Report & demos"],
    links: [["Project", "https://qwen.ai/blog?id=qwen-robotmanip"], ["Official repository", "https://github.com/QwenLM/Qwen-RobotManip"], ["Paper", "https://arxiv.org/abs/2606.17846"]],
  },
  {
    name: "MolmoAct 2",
    organization: "Ai2",
    year: "2026",
    category: "Action reasoning foundation model",
    summary: "An open 5B robot-control model that pairs the Molmo 2-ER embodied-reasoning backbone with a flow-matching continuous action expert, with released weights, training data, code, and LeRobot integration.",
    tags: ["Open weights & data", "3D reasoning", "LeRobot"],
    links: [["Project", "https://allenai.org/blog/molmoact2"], ["Code", "https://github.com/allenai/molmoact2"], ["Models", "https://huggingface.co/collections/allenai/molmoact2-models"], ["Paper", "https://arxiv.org/abs/2605.02881"]],
  },
  {
    name: "π₀.₅",
    organization: "Physical Intelligence",
    year: "2025",
    category: "Vision-language-action model",
    summary: "An open-world generalist VLA trained across multiple robots and heterogeneous data sources, released through the OpenPI codebase with base checkpoints and fine-tuning examples.",
    tags: ["Cross-embodiment", "Flow matching", "Open checkpoints"],
    links: [["Code & checkpoints", "https://github.com/Physical-Intelligence/openpi"], ["Paper", "https://arxiv.org/abs/2504.16054"]],
  },
  {
    name: "GR00T N1.7",
    organization: "NVIDIA",
    year: "2026",
    category: "Generalist robot foundation model",
    summary: "An open VLA for generalized robot skills, with multimodal inputs, a diffusion-transformer action head, and adaptation workflows for multiple embodiments.",
    tags: ["Cross-embodiment", "Diffusion transformer", "Open checkpoints"],
    links: [["Code & checkpoints", "https://github.com/NVIDIA/Isaac-GR00T"], ["Paper", "https://arxiv.org/abs/2503.14734"]],
  },
  {
    name: "SmolVLA",
    organization: "Hugging Face · LeRobot",
    year: "2025",
    category: "Compact vision-language-action model",
    summary: "A compact 450M-parameter VLA trained on community-contributed LeRobot datasets and designed to run and fine-tune on accessible hardware.",
    tags: ["450M parameters", "LeRobot", "SO-100 / SO-101"],
    links: [["Project", "https://huggingface.co/blog/smolvla"], ["Checkpoint", "https://huggingface.co/lerobot/smolvla_base"], ["Paper", "https://arxiv.org/abs/2506.01844"]],
  },
  {
    name: "OpenVLA",
    organization: "Stanford · UC Berkeley · TRI",
    year: "2024",
    category: "Open-source vision-language-action model",
    summary: "A 7B-parameter open VLA pretrained on 970k robot episodes from Open X-Embodiment, with released checkpoints and fine-tuning support.",
    tags: ["7B parameters", "Open X-Embodiment", "Fine-tunable"],
    links: [["Project", "https://openvla.github.io/"], ["Code", "https://github.com/openvla/openvla"], ["Paper", "https://arxiv.org/abs/2406.09246"]],
  },
  {
    name: "X-VLA",
    organization: "Tsinghua AIR",
    year: "2025",
    category: "Cross-embodiment vision-language-action model",
    summary: "A scalable VLA that uses embodiment-specific soft prompts to share a transformer policy across heterogeneous robot platforms.",
    tags: ["Cross-embodiment", "Soft prompting", "Transformer policy"],
    links: [["Project", "https://thu-air-dream.github.io/X-VLA/"], ["Paper", "https://arxiv.org/abs/2510.10274"]],
  },
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function PoliciesPage() {
  return (
    <main className="policyPage">
      <nav className="nav shell" aria-label="Policy registry navigation">
        <a className="brand" href="/" aria-label="RobotReplica home"><i />ROBOT<span>REPLICA</span></a>
        <a className="navCta requestBack" href="/">Back to network</a>
      </nav>

      <header className="policyHeader shell">
        <p className="kicker">ROBOT POLICY REGISTRY</p>
        <h1>Featured public<br /><em>robot policies.</em></h1>
        <p>A curated starting point for discovering open robot policies and foundation models. We highlight projects with public technical resources that may inform future RobotReplica evaluations.</p>
        <div className="policyNotice"><b>CURATED, NOT RANKED</b><p>Inclusion does not indicate endorsement, hardware compatibility, or evaluation by RobotReplica. Verified performance remains on the site leaderboards.</p></div>
      </header>

      <section className="policyRegistry">
        <div className="shell">
          <div className="policySectionHead"><div><p className="eyebrow">FEATURED POLICIES</p><h2>Explore the field.</h2></div><p>{policies.length} public projects selected for their relevance to generalist and cross-embodiment robot learning.</p></div>
          <div className="policyGrid">
            {[...policies].sort((a, b) => Number(b.year) - Number(a.year)).map((policy, index) => (
              <article className="policyCard" key={policy.name}>
                <div className="policyCardTop"><span>{String(index + 1).padStart(2, "0")}</span><time>{policy.year}</time></div>
                <p className="policyCategory">{policy.category}</p>
                <h3>{policy.name}</h3>
                <p className="policyOrg">{policy.organization}</p>
                <p className="policySummary">{policy.summary}</p>
                <ul>{policy.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <div className="policyLinks">{policy.links.map(([label, url]) => <a href={url} target="_blank" rel="noreferrer" key={label}>{label} <Arrow /></a>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="policySuggest">
        <div className="shell"><div><p className="eyebrow">KEEP THE REGISTRY CURRENT</p><h2>Know a policy<br />we should feature?</h2></div><div><p>Send the project page, paper, or public checkpoint to the RobotReplica team. We review entries for relevance and source quality before adding them.</p><a className="button primary" href="mailto:robotreplica.org@gmail.com?subject=RobotReplica%20Policy%20Registry%20suggestion">Suggest a policy <Arrow /></a></div></div>
      </section>

      <footer className="footer shell requestFooter">
        <div><a className="brand" href="/"><i />ROBOT<span>REPLICA</span></a><p>A community-led network for reproducible real-world robot evaluation.</p></div>
        <div className="footerLinks"><a href="/">RobotReplica home</a><a href="/#leaderboards">Leaderboards</a><a href="mailto:robotreplica.org@gmail.com">Contact</a></div>
      </footer>
    </main>
  );
}
