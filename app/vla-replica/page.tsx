import type { Metadata } from "next";
import Leaderboard from "./leaderboard";

export const metadata: Metadata = {
  title: "VLA-Replica | RobotReplica",
  description: "A low-cost, reproducible benchmark for real-world evaluation of vision-language-action models.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;
const authors = [
  ["Alex S. Huang*", "https://alexhuang1029.github.io/", "/vla-replica-materials/shared-assets/images/authors/alex_huang.webp"],
  ["Jiahui Zhang*", "https://jiahui-3205.github.io/", "/vla-replica-materials/shared-assets/images/authors/jiahui_zhang.webp"],
  ["Shiqing Tang", "https://openreview.net/profile?id=~Shiqing_Tang2", "/vla-replica-materials/shared-assets/images/authors/shiqing_tang.webp"],
  ["Yu Xiang", "https://yuxng.github.io", "/vla-replica-materials/shared-assets/images/authors/yu_xiang.webp"],
];
const quickLinks = [
  ["Arxiv", "https://arxiv.org/abs/2605.20774"], ["PDF", "/vla-replica-materials/assets/pdf/VLAReplica.pdf"],
  ["Code", "https://github.com/IRVLUTD/VLAReplica"], ["Scenes", "#scenes"], ["Leaderboard", "#leaderboard"],
  ["Training", "https://github.com/IRVLUTD/VLAReplica#training"], ["Demonstration Data", "https://huggingface.co/datasets/HenryZhang/VLAReplica_SFT_data"],
  ["Model Checkpoints", "/vla-replica-materials/model-checkpoints/"], ["Purchase Links", "/vla-replica-materials/setup-docs/bill-of-materials/"],
  ["Setup Guide", "/vla-replica-materials/setup-docs/"],
];
const sceneNames = ["Put bread on plate", "Put bowl on coaster", "Stack blocks", "Collect blocks", "Fold towel", "Open oven", "Erase whiteboard", "Shake pepper", "Lift bowl", "Press button"];

export default function VLAReplicaPage() {
  return <main className="vlaPage vlaPaperPage">
    <nav className="nav shell" aria-label="VLA-Replica navigation">
      <a className="brand" href="/"><i />ROBOT<span>REPLICA</span></a>
      <div className="navLinks"><a href="#abstract">Abstract</a><a href="#overview">Overview</a><a href="#assembly">Build</a><a href="#tasks">Tasks</a><a href="#leaderboard">Leaderboard</a></div>
      <a className="navCta" href="/">Back to network</a>
    </nav>

    <header className="vlaProjectHeader shell">
      <p className="kicker">ROBOTREPLICA / SITE 01 / SO-101</p>
      <h1>VLA-Replica</h1>
      <p className="vlaPaperTitle">A Low-Cost, Reproducible Benchmark for Real-World Evaluation of Vision-Language-Action Models</p>
      <div className="vlaAuthors">{authors.map(([name, href, image]) => <a href={href} target="_blank" rel="noreferrer" key={name}><img src={image} alt={name.replace("*", "")} /><span>{name}</span></a>)}</div>
      <p className="vlaAffiliation"><sup>*</sup> Equal contribution · <a href="https://labs.utdallas.edu/irvl" target="_blank" rel="noreferrer">Intelligent Robotics and Vision Lab at the University of Texas at Dallas</a></p>
      <div className="vlaQuickLinks">{quickLinks.map(([label, href]) => <a href={href} key={label}>{label} <Arrow /></a>)}</div>
      <video className="vlaLeadVideo" controls autoPlay muted loop playsInline poster="/vla-replica-materials/assets/images/VLAReplica_overview.jpg"><source src="/vla-replica-materials/assets/videos/VLAReplica.mp4" type="video/mp4" /></video>
    </header>

    <section className="vlaPaperSection vlaAbstract" id="abstract"><div className="shell vlaSectionGrid"><div><p className="eyebrow">01 / ABSTRACT</p><h2>Abstract</h2></div><div className="vlaLongCopy"><p>Vision-Language-Action (VLA) models have shown strong promise for general-purpose robotic manipulation, but their real-world evaluation remains limited by a lack of accessible, reproducible, and consistent benchmarks. Simulation benchmarks fail to capture real-world complexity, while existing real-world benchmarks often require expensive hardware, centralized evaluation, or are limited in task diversity.</p><p>We introduce <strong>VLA-Replica</strong>, a low-cost, easily reproducible real-world benchmark for evaluating VLA models. Built from off-the-shelf components, the system can be quickly assembled and replicated across laboratories, providing a consistent environment for policy evaluation anywhere in the world. It includes diverse manipulation tasks, a small-scale demonstration dataset for target-domain adaptation, and protocols for both in-distribution and out-of-distribution evaluation. Results across independently constructed setups demonstrate the reproducibility of the benchmark.</p></div></div></section>

    <section className="vlaPaperSection shell" id="overview"><div className="vlaSectionHead"><p className="eyebrow">02 / OVERVIEW</p><h2>Overview</h2><p>One standardized platform, ten manipulation tasks, and a complete train-to-evaluation workflow.</p></div><figure className="vlaFigure"><img src="/vla-replica-materials/assets/images/VLAReplica_overview.jpg" alt="VLA-Replica hardware, cameras, workspace, and task overview" /><figcaption>The platform combines the SO-101 follower arm, a light box, top and wrist cameras, and a standardized manipulation workspace.</figcaption></figure><div className="vlaFacts"><article><b>10</b><span>manipulation tasks</span></article><article><b>500</b><span>expert demonstrations</span></article><article><b>90</b><span>reference scenes</span></article><article><b>ID + OOD</b><span>evaluation tracks</span></article></div></section>

    <section className="vlaPaperSection vlaBuild" id="assembly"><div className="shell"><div className="vlaSectionHead light"><p className="eyebrow">03 / BUILDING THE PLATFORM</p><h2>Building the Platform</h2><p>A user with no prior knowledge of the benchmark assembled the setup within one hour using the published guide.</p></div><div className="vlaBuildGrid"><div className="vlaVideoFrame"><iframe src="https://drive.google.com/file/d/1D-gRK6pmiQf9aZj19-dRUEYke9cQNFLQ/preview" title="VLA-Replica platform assembly video" allow="autoplay; fullscreen" allowFullScreen /></div><div><h3>Replicate the physical setup</h3><ol><li>Source the SO-101, cameras, enclosure, lighting, and task objects.</li><li>Assemble the workspace and fixed camera mounts.</li><li>Calibrate the robot and cameras using the documented procedure.</li><li>Verify the platform against the reference scenes.</li></ol><div className="heroActions"><a className="button primary" href="/vla-replica-materials/setup-docs/">Open setup guide <Arrow /></a><a className="button outline" href="/vla-replica-materials/setup-docs/bill-of-materials/">Bill of materials <Arrow /></a></div></div></div></div></section>

    <section className="vlaPaperSection shell" id="tasks"><div className="vlaSectionHead"><p className="eyebrow">04 / MANIPULATION TASKS</p><h2>Manipulation Tasks</h2><p>Task definitions cover training, in-distribution evaluation, and out-of-distribution evaluation.</p></div><figure className="vlaFigure"><img src="/vla-replica-materials/assets/images/tasks.png" alt="Ten VLA-Replica manipulation tasks and their variations" /><figcaption>Pick-and-place, object interaction, and counting or memory tasks test physical skill and instruction following.</figcaption></figure><a className="button outline" href="/vla-replica-materials/setup-docs/task-reference/">Open detailed task reference <Arrow /></a></section>

    <section className="vlaPaperSection vlaDemoSection" id="demonstrations"><div className="shell vlaSectionGrid"><div><p className="eyebrow">05 / EXPERT DEMONSTRATIONS</p><h2>Expert Demonstrations</h2><p>We provide 50 demonstrations for each task for training or fine-tuning.</p><a className="button primary" href="https://huggingface.co/datasets/HenryZhang/VLAReplica_SFT_data" target="_blank" rel="noreferrer">Download demonstration data <Arrow /></a></div><img src="/vla-replica-materials/assets/images/demonstrations.png" alt="Examples of expert demonstrations" /></div></section>

    <section className="vlaPaperSection shell" id="scenes"><div className="vlaSectionHead"><p className="eyebrow">06 / TEST SCENES</p><h2>Test Scene Reference Images</h2><p>Ninety fixed reference scenes make physical evaluation repeatable. The first row of each image shows ID conditions and the second shows OOD conditions, except for tasks without an OOD variant.</p></div><div className="vlaSceneGrid">{sceneNames.map((name, i) => <figure key={name}><img src={`/vla-replica-materials/assets/images/task${String(i + 1).padStart(2, "0")}.png`} alt={`Reference scenes for ${name}`} /><figcaption><span>{String(i + 1).padStart(2, "0")}</span>{name}</figcaption></figure>)}</div></section>

    <section className="vlaPaperSection vlaLeaderboard shell" id="leaderboard"><div className="vlaSectionHead"><p className="eyebrow">07 / LEADERBOARD</p><h2>Leaderboard</h2><p>Success rates from five rollouts per task. Switch evaluation tracks, sort by any task, and use the video link to inspect every rollout for a method.</p></div><Leaderboard /><img className="vlaTraining" src="/vla-replica-materials/assets/images/training_details.png" alt="Training and fine-tuning details for evaluated policies" /><div className="vlaReferences"><h3>Method references</h3><ol><li id="ref-1"><a href="https://arxiv.org/abs/2304.13705">ACT</a> — Zhao et al., 2023.</li><li id="ref-2"><a href="https://brysonkjones.substack.com/p/dissecting-and-open-sourcing-multitask-diffusion-transformer-policy">DiT-D / DiT-F</a> — Jones, 2026.</li><li id="ref-3"><a href="https://arxiv.org/abs/2506.01844">SmolVLA</a> — Shukor et al., 2025.</li><li id="ref-4"><a href="https://arxiv.org/abs/2510.10274">X-VLA</a> — Zheng et al., 2025.</li><li id="ref-5"><a href="https://arxiv.org/abs/2410.24164">π₀</a> — Black et al., 2024.</li><li id="ref-6"><a href="https://arxiv.org/abs/2504.16054">π₀.₅</a> — Physical Intelligence et al., 2025.</li></ol></div></section>

    <section className="vlaPaperSection vlaCode" id="code"><div className="shell vlaSectionGrid"><div><p className="eyebrow">08 / CODE & RESOURCES</p><h2>Run the benchmark</h2><p>The public implementation includes training, calibration, scene references, and evaluation utilities.</p><a className="button primary" href="https://github.com/IRVLUTD/VLAReplica" target="_blank" rel="noreferrer">View code on GitHub <Arrow /></a></div><div className="vlaResourceGrid"><a href="/vla-replica-materials/setup-docs/running-evaluations/"><span>Evaluation guide</span><p>Run the benchmark protocol</p><Arrow /></a><a href="/vla-replica-materials/model-checkpoints/"><span>Model checkpoints</span><p>Access published policies</p><Arrow /></a><a href="/vla-replica-materials/purchase-links/"><span>Purchase links</span><p>Source objects and parts</p><Arrow /></a><a href="mailto:robotreplica.org@gmail.com?subject=RobotReplica%20SO-101%20evaluation%20request"><span>Hosted evaluation</span><p>Evaluate at the UT Dallas site</p><Arrow /></a></div></div></section>

    <section className="vlaPaperSection shell" id="citation"><div className="vlaSectionGrid"><div><p className="eyebrow">09 / CITATION</p><h2>BibTeX</h2><p>Please cite VLA-Replica if it helps your research.</p></div><pre className="vlaBib"><code>{`@misc{huang2026vlareplicalowcostreproduciblebenchmark,
  title={VLA-REPLICA: A Low-Cost, Reproducible Benchmark for
    Real-World Evaluation of Vision-Language-Action Models},
  author={Alex S. Huang and Jiahui Zhang and Shiqing Tang and Yu Xiang},
  year={2026},
  eprint={2605.20774},
  archivePrefix={arXiv},
  primaryClass={cs.RO},
  url={https://arxiv.org/abs/2605.20774}
}`}</code></pre></div></section>

    <section className="vlaPaperSection vlaClosing"><div className="shell vlaSectionGrid"><div><p className="eyebrow">10 / CONTACT</p><h2>Evaluate with RobotReplica</h2><p>Questions, leaderboard submissions, and hosted evaluation requests are coordinated through one address.</p><a className="button primary" href="mailto:robotreplica.org@gmail.com">robotreplica.org@gmail.com <Arrow /></a></div><div><p className="eyebrow">ACKNOWLEDGEMENTS</p><p>This work was supported in part by the National Science Foundation under Grant Nos. 2346528 and 2520553, the NVIDIA Academic Grant Program Award, and gift funding from XPeng.</p></div></div></section>
    <footer className="footer shell vlaFooter"><div><a className="brand" href="/"><i />ROBOT<span>REPLICA</span></a><p>VLA-Replica is maintained by the Intelligent Robotics and Vision Lab at UT Dallas.</p></div><div className="footerLinks"><a href="/">RobotReplica home</a><a href="#abstract">Back to top</a><a href="https://github.com/RobotReplica">GitHub</a></div></footer>
  </main>;
}
