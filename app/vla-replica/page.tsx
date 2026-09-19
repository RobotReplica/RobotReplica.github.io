import type { Metadata } from "next";
import Leaderboard from "./leaderboard";

export const metadata: Metadata = {
  title: "VLA-Replica | RobotReplica",
  description: "A low-cost, reproducible benchmark for real-world evaluation of vision-language-action models.",
};

const Arrow = () => <span aria-hidden="true">↗</span>;
const maintainers = [
  ["Alex S. Huang", "https://alexhuang1029.github.io/", "/vla-replica-materials/shared-assets/images/authors/alex_huang.webp"],
  ["Jiahui Zhang", "https://jiahui-3205.github.io/", "/vla-replica-materials/shared-assets/images/authors/jiahui_zhang.webp"],
  ["May Lynn Espinola", "https://goldpig888.github.io/index.html", "/maintainer-may-lynn-espinola.jpg"],
  ["Yu Xiang", "https://yuxng.github.io", "/vla-replica-materials/shared-assets/images/authors/yu_xiang.webp"],
];
const quickLinks = [
  ["Arxiv", "https://arxiv.org/abs/2605.20774"], ["PDF", "/vla-replica-materials/assets/pdf/VLAReplica.pdf"],
  ["Code", "https://github.com/IRVLUTD/VLAReplica"], ["Scenes", "#scenes"], ["Leaderboard", "#leaderboard"],
  ["Training", "https://github.com/IRVLUTD/VLAReplica#training"], ["Demonstration Data", "https://huggingface.co/datasets/HenryZhang/VLAReplica_SFT_data"],
  ["Model Checkpoints", "/vla-replica-materials/model-checkpoints/"], ["Purchase Links", "/vla-replica-materials/setup-docs/bill-of-materials/"],
  ["Setup Guide", "/vla-replica-materials/setup-docs/"],
];
const sceneNames = ["Put bread on plate", "Put bowl on coaster", "Stack blocks", "Fold towel", "Open oven", "Clean whiteboard", "Pour pepper", "Lift bowl", "Press button", "Collect blocks"];
const parameterHeaders = ["ACT", "DiT-D", "DiT-F", "SmolVLA", "X-VLA", "π₀", "π₀.₅", "MolmoAct2-SO100_101", "GR00T1.7"];
const parameterRows = [
  ["Training type", "From scratch", "From scratch", "From scratch", "Fine-tuning", "Fine-tuning", "Fine-tuning", "Fine-tuning", "Fine-tuning", "Fine-tuning"],
  ["Dataset size", "500 demos", "500 demos", "500 demos", "500 demos", "500 demos", "500 demos", "500 demos", "500 demos", "500 demos"],
  ["Batch size", "128", "128", "128", "128", "128", "16", "16", "16", "32"],
  ["Training steps", "40K", "40K", "40K", "40K", "40K", "40K", "40K", "40K", "40K"],
  ["GPUs", "2", "1", "1", "4", "4", "1", "1", "4", "4"],
  ["GPU type", "A6000 Ada", "H200", "H200", "A6000 Ada", "A6000 Ada", "H200", "H200", "A6000 Ada", "A6000 Ada"],
  ["Action chunk size", "32", "32", "32", "32", "32", "32", "32", "32", "32"],
  ["Number of action steps", "32", "24", "24", "32", "32", "32", "32", "32", "32"],
  ["Vision encoder", "Default", "Default", "Default", "Default", "Trainable", "Frozen", "Default", "Default", "Default"],
  ["Implementation", "LeRobot", "LeRobot", "LeRobot", "LeRobot", "LeRobot", "LeRobot", "LeRobot", "LeRobot", "LeRobot"],
  ["Learning rate", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default", "Default"],
];

export default function VLAReplicaPage() {
  return <main className="vlaPage vlaPaperPage">
    <nav className="nav shell" aria-label="VLA-Replica navigation">
      <a className="brand" href="/"><i />ROBOT<span>REPLICA</span></a>
      <div className="navLinks"><a href="#abstract">Abstract</a><a href="#overview">Overview</a><a href="#assembly">Build</a><a href="#calibration">Calibration</a><a href="#tasks">Tasks</a><a href="#leaderboard">Leaderboard</a></div>
      <a className="navCta" href="/">Back to network</a>
    </nav>

    <header className="vlaProjectHeader shell">
      <p className="kicker">ROBOTREPLICA / SITE 01 / SO-101</p>
      <h1>VLA-Replica</h1>
      <p className="vlaPaperTitle">A Low-Cost, Reproducible Benchmark for Real-World Evaluation of Vision-Language-Action Models</p>
      <p className="vlaMaintainerLabel">SITE MAINTAINERS</p>
      <div className="vlaAuthors">{maintainers.map(([name, href, image]) => <a href={href} target="_blank" rel="noreferrer" key={name}><img src={image} alt={name} /><span>{name}</span></a>)}</div>
      <p className="vlaAffiliation"><a href="https://labs.utdallas.edu/irvl" target="_blank" rel="noreferrer">Intelligent Robotics and Vision Lab at the University of Texas at Dallas</a></p>
      <div className="vlaQuickLinks">{quickLinks.map(([label, href]) => <a href={href} key={label}>{label} <Arrow /></a>)}</div>
      <video className="vlaLeadVideo" controls autoPlay muted loop playsInline poster="/vla-replica-materials/assets/images/VLAReplica_overview.jpg"><source src="/vla-replica-materials/assets/videos/VLAReplica.mp4" type="video/mp4" /></video>
    </header>

    <section className="vlaPaperSection vlaAbstract" id="abstract"><div className="shell vlaSectionGrid"><div><p className="eyebrow">01 / ABSTRACT</p><h2>Abstract</h2></div><div className="vlaLongCopy"><p>Vision-Language-Action (VLA) models have shown strong promise for general-purpose robotic manipulation, but their real-world evaluation remains limited by a lack of accessible, reproducible, and consistent benchmarks. Simulation benchmarks fail to capture real-world complexity, while existing real-world benchmarks often require expensive hardware, centralized evaluation, or are limited in task diversity.</p><p>We introduce <strong>VLA-Replica</strong>, a low-cost, easily reproducible real-world benchmark for evaluating VLA models. Built from off-the-shelf components, the system can be quickly assembled and replicated across laboratories, providing a consistent environment for policy evaluation anywhere in the world. It includes diverse manipulation tasks, a small-scale demonstration dataset for target-domain adaptation, and protocols for both in-distribution and out-of-distribution evaluation. Results across independently constructed setups demonstrate the reproducibility of the benchmark.</p></div></div></section>

    <section className="vlaPaperSection shell" id="overview"><div className="vlaSectionHead"><p className="eyebrow">02 / OVERVIEW</p><h2>Overview</h2><p>One standardized platform, ten manipulation tasks, and a complete train-to-evaluation workflow.</p></div><figure className="vlaFigure"><img src="/vla-replica-materials/assets/images/VLAReplica_overview.jpg" alt="VLA-Replica hardware, cameras, workspace, and task overview" /><figcaption>The platform combines the SO-101 follower arm, a light box, top and wrist cameras, and a standardized manipulation workspace.</figcaption></figure><div className="vlaFacts"><article><b>10</b><span>manipulation tasks</span></article><article><b>500</b><span>expert demonstrations</span></article><article><b>90</b><span>reference scenes</span></article><article><b>ID + OOD</b><span>evaluation tracks</span></article></div></section>

    <section className="vlaPaperSection vlaBuild" id="assembly"><div className="shell"><div className="vlaSectionHead light"><p className="eyebrow">03 / BUILDING THE PLATFORM</p><h2>Building the Platform</h2><p>A user with no prior knowledge of the benchmark assembled the setup within one hour using the published guide.</p></div><div className="vlaBuildGrid"><div className="vlaVideoFrame"><iframe src="https://drive.google.com/file/d/1D-gRK6pmiQf9aZj19-dRUEYke9cQNFLQ/preview" title="VLA-Replica platform assembly video" allow="autoplay; fullscreen" allowFullScreen /></div><div><h3>Replicate the physical setup</h3><ol><li>Source the SO-101, cameras, enclosure, lighting, and task objects.</li><li>Assemble the workspace and fixed camera mounts.</li><li>Calibrate the robot and cameras using the documented procedure.</li><li>Verify the platform against the reference scenes.</li></ol><div className="heroActions"><a className="button primary" href="/vla-replica-materials/setup-docs/">Open setup guide <Arrow /></a><a className="button outline" href="/vla-replica-materials/setup-docs/bill-of-materials/">Bill of materials <Arrow /></a></div></div></div></div></section>

    <section className="vlaPaperSection vlaCalibration" id="calibration"><div className="shell vlaSectionGrid"><div><p className="eyebrow">04 / CAMERA CALIBRATION</p><h2>Calibrate consistent camera views</h2><p>We use an AprilTag to guide camera placement and overlay reference images on the live camera feeds to calibrate the top and wrist cameras.</p><p>This helps maintain consistent camera viewpoints across replicated setups.</p><div className="vlaCalibrationPoints"><span>AprilTag guidance</span><span>Live reference overlay</span><span>Top + wrist cameras</span></div></div><video controls preload="metadata" playsInline poster="/vla-replica-materials/assets/images/camera-calibration-poster.jpg"><source src="/vla-replica-materials/assets/videos/camera-calibration.mp4" type="video/mp4" />Your browser does not support embedded video.</video></div></section>

    <section className="vlaPaperSection shell vlaTasksSection" id="tasks"><div className="vlaTasksIntro"><div className="vlaSectionHead"><p className="eyebrow">05 / MANIPULATION TASKS</p><h2>Manipulation Tasks</h2><p>Ten tasks test physical skill, object interaction, and instruction following across training, in-distribution, and out-of-distribution conditions.</p><a className="button outline" href="/vla-replica-materials/setup-docs/task-reference/">Open detailed task reference <Arrow /></a></div><div className="vlaTaskFamilies"><article><span>01—04</span><div><h3>Pick-and-Place</h3><p>Place bread and bowls, stack blocks, and collect multiple objects.</p></div></article><article><span>05—07</span><div><h3>Object Interaction</h3><p>Fold a towel, open an oven, and erase a whiteboard.</p></div></article><article><span>08—10</span><div><h3>Counting & Memory</h3><p>Shake pepper, lift a bowl, and press a button a specified number of times.</p></div></article></div></div><figure className="vlaFigure vlaTasksFigure"><img src="/vla-replica-materials/assets/images/tasks.png" alt="Ten VLA-Replica manipulation tasks and their ID and OOD variations" /><figcaption><b>Benchmark task suite.</b> Each column shows a task with its training and evaluation variations.</figcaption></figure></section>

    <section className="vlaPaperSection vlaDemoSection" id="demonstrations"><div className="shell vlaSectionGrid"><div><p className="eyebrow">06 / EXPERT DEMONSTRATIONS</p><h2>Expert Demonstrations</h2><p>We provide 50 demonstrations for each task for training or fine-tuning.</p><a className="button primary" href="https://huggingface.co/datasets/HenryZhang/VLAReplica_SFT_data" target="_blank" rel="noreferrer">Download demonstration data <Arrow /></a></div><img src="/vla-replica-materials/assets/images/demonstrations.png" alt="Examples of expert demonstrations" /></div></section>

    <section className="vlaPaperSection shell" id="scenes">
      <div className="vlaSectionHead"><p className="eyebrow">07 / TEST SCENES</p><h2>Test Scene Reference Images</h2></div>
      <div className="vlaSceneGuide">
        <video controls preload="metadata" playsInline poster="/vla-replica-materials/assets/images/scene-reference-placement-poster.jpg">
          <source src="/vla-replica-materials/assets/videos/scene-reference-placement.mp4" type="video/mp4" />
          Your browser does not support embedded video.
        </video>
        <div><p className="eyebrow">PLACEMENT GUIDE</p><h3>Match each test scene precisely.</h3><p>Use the corresponding reference image to reproduce the object positions and orientations before every evaluation rollout. This walkthrough demonstrates the placement process.</p></div>
      </div>
      <p className="vlaSceneDescription">Ninety fixed reference scenes make physical evaluation repeatable. The first row of each image shows ID conditions and the second shows OOD conditions, except for tasks without an OOD variant.</p>
      <div className="vlaSceneGrid">{sceneNames.map((name, i) => <figure key={name}><img src={`/vla-replica-materials/assets/images/task${String(i + 1).padStart(2, "0")}.png`} alt={`Reference scenes for ${name}`} /><figcaption><span>{String(i + 1).padStart(2, "0")}</span>{name}</figcaption></figure>)}</div>
    </section>

    <section className="vlaPaperSection vlaLeaderboard shell" id="leaderboard"><div className="vlaSectionHead"><p className="eyebrow">08 / LEADERBOARD</p><h2>Leaderboard</h2><p>Verified results include compatible publicly released policies evaluated by RobotReplica, alongside submitted policies. Success rates use five rollouts per task; switch evaluation tracks, sort by any task, and use the video link to inspect every rollout for a method.</p></div><Leaderboard /><div className="vlaParameterSection"><div><p className="eyebrow">TRAINING DETAILS</p><h3>Training &amp; Model Parameters</h3><p>Implementation and training settings used for each evaluated policy.</p></div><div className="vlaParameterTable"><table><thead><tr><th className="parameterLabel" scope="col">Parameter</th>{parameterHeaders.map((header) => <th scope="col" key={header}><span>{header}</span></th>)}</tr></thead><tbody>{parameterRows.map(([name, ...values]) => <tr key={name}><th scope="row">{name}</th>{values.map((value, index) => <td key={`${name}-${parameterHeaders[index]}`}><span>{value}</span></td>)}</tr>)}</tbody></table></div></div><div className="vlaReferences"><h3>References</h3><ol><li id="ref-1">Zhao, Tony Z., Vikash Kumar, Sergey Levine, and Chelsea Finn. <a href="https://arxiv.org/abs/2304.13705" target="_blank" rel="noreferrer">“Learning Fine-Grained Bimanual Manipulation with Low-Cost Hardware.”</a> <i>arXiv preprint arXiv:2304.13705</i>, 2023.</li><li id="ref-2">Jones, Bryson. <a href="https://brysonkjones.substack.com/p/dissecting-and-open-sourcing-multitask-diffusion-transformer-policy" target="_blank" rel="noreferrer">“Dissecting and Open-Sourcing Multitask Diffusion Transformer Policy.”</a> Blog post, 2026.</li><li id="ref-3">Shukor, Mustafa, Dana Aubakirova, Francesco Capuano, Pepijn Kooijmans, Steven Palma, Adil Zouitine, Michel Aractingi, et al. <a href="https://arxiv.org/abs/2506.01844" target="_blank" rel="noreferrer">“SmolVLA: A Vision-Language-Action Model for Affordable and Efficient Robotics.”</a> <i>arXiv preprint arXiv:2506.01844</i>, 2025.</li><li id="ref-4">Zheng, Jinliang, Jianxiong Li, Zhihao Wang, Dongxiu Liu, Xirui Kang, Yuchun Feng, Yinan Zheng, et al. <a href="https://arxiv.org/abs/2510.10274" target="_blank" rel="noreferrer">“X-VLA: Soft-Prompted Transformer as Scalable Cross-Embodiment Vision-Language-Action Model.”</a> <i>arXiv preprint arXiv:2510.10274</i>, 2025.</li><li id="ref-5">Black, Kevin, Noah Brown, Danny Driess, Adnan Esmail, Michael Equi, Chelsea Finn, Niccolo Fusai, et al. <a href="https://arxiv.org/abs/2410.24164" target="_blank" rel="noreferrer">“π₀: A Vision-Language-Action Flow Model for General Robot Control.”</a> <i>arXiv preprint arXiv:2410.24164</i>, 2024.</li><li id="ref-6">Physical Intelligence, Kevin Black, Noah Brown, James Darpinian, Karan Dhabalia, Danny Driess, Adnan Esmail, et al. <a href="https://arxiv.org/abs/2504.16054" target="_blank" rel="noreferrer">“π₀.₅: A Vision-Language-Action Model with Open-World Generalization.”</a> <i>arXiv preprint arXiv:2504.16054</i>, 2025.</li><li id="ref-7">Fang, Haoquan, Jiafei Duan, Donovan Clay, Sam Wang, Shuo Liu, Weikai Huang, Xiang Fan, et al. <a href="https://arxiv.org/abs/2605.02881" target="_blank" rel="noreferrer">“MolmoAct2: Action Reasoning Models for Real-world Deployment.”</a> <i>arXiv preprint arXiv:2605.02881</i>, 2026.</li><li id="ref-8">NVIDIA. <a href="https://arxiv.org/abs/2503.14734" target="_blank" rel="noreferrer">“GR00T N1: An Open Foundation Model for Generalist Humanoid Robots.”</a> <i>arXiv preprint arXiv:2503.14734</i>, 2025.</li></ol></div></section>

    <section className="vlaPaperSection vlaCode" id="code"><div className="shell vlaSectionGrid"><div><p className="eyebrow">09 / CODE & RESOURCES</p><h2>Run the benchmark</h2><p>The public implementation includes training, calibration, scene references, and evaluation utilities.</p><a className="button primary" href="https://github.com/IRVLUTD/VLAReplica" target="_blank" rel="noreferrer">View code on GitHub <Arrow /></a></div><div className="vlaResourceGrid"><a href="/vla-replica-materials/setup-docs/running-evaluations/"><span>Evaluation guide</span><p>Run the benchmark protocol</p><Arrow /></a><a href="/vla-replica-materials/model-checkpoints/"><span>Model checkpoints</span><p>Access published policies</p><Arrow /></a><a href="/vla-replica-materials/purchase-links/"><span>Purchase links</span><p>Source objects and parts</p><Arrow /></a><a href="/request-evaluation"><span>Hosted evaluation</span><p>Evaluate at the UT Dallas site</p><Arrow /></a></div></div></section>

    <section className="vlaPaperSection shell" id="citation"><div className="vlaSectionGrid"><div><p className="eyebrow">10 / CITATION</p><h2>BibTeX</h2><p>Please cite VLA-Replica if it helps your research.</p></div><pre className="vlaBib"><code>{`@misc{huang2026vlareplicalowcostreproduciblebenchmark,
  title={VLA-REPLICA: A Low-Cost, Reproducible Benchmark for
    Real-World Evaluation of Vision-Language-Action Models},
  author={Alex S. Huang and Jiahui Zhang and Shiqing Tang and Yu Xiang},
  year={2026},
  eprint={2605.20774},
  archivePrefix={arXiv},
  primaryClass={cs.RO},
  url={https://arxiv.org/abs/2605.20774}
}`}</code></pre></div></section>

    <section className="vlaPaperSection vlaClosing"><div className="shell vlaSectionGrid"><div><p className="eyebrow">11 / CONTACT</p><h2>Evaluate with RobotReplica</h2><p>Submit your policy information through the RobotReplica evaluation form. The team will coordinate the hosted evaluation and leaderboard submission with you.</p><a className="button primary" href="/request-evaluation">Request an evaluation <Arrow /></a></div><div><p className="eyebrow">ACKNOWLEDGEMENTS</p><p>This work was supported in part by the National Science Foundation under Grant Nos. 2346528 and 2520553, the NVIDIA Academic Grant Program Award, and gift funding from XPeng.</p></div></div></section>
    <footer className="footer shell vlaFooter"><div><a className="brand" href="/"><i />ROBOT<span>REPLICA</span></a><p>VLA-Replica is maintained by the Intelligent Robotics and Vision Lab at UT Dallas.</p></div><div className="footerLinks"><a href="/">RobotReplica home</a><a href="#abstract">Back to top</a><a href="https://github.com/RobotReplica">GitHub</a></div></footer>
  </main>;
}
