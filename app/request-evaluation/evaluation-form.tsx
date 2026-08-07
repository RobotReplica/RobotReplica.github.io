"use client";

import { FormEvent, useEffect, useState } from "react";

const evaluationSites = [
  { robot: "SO-101", host: "Intelligent Robotics and Vision Lab · UT Dallas", status: "Accepting evaluations", available: true },
  { robot: "OpenArm", host: "General Intelligence Labs", status: "In development · coming soon", available: false },
  { robot: "Tianji Marvin Arms", host: "GRILL · Cornell University", status: "In development · coming soon", available: false },
  { robot: "Franka Panda", host: "CDFG · MIT", status: "In development · coming soon", available: false },
];

export default function EvaluationForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("robots");
    if (!requested) return;
    const robots = requested.split(",").map((robot) => robot.trim());
    setSelected(evaluationSites.filter((site) => site.available && robots.includes(site.robot)).map((site) => site.robot));
  }, []);

  const toggleRobot = (robot: string) => {
    setSelected((current) => current.includes(robot) ? current.filter((item) => item !== robot) : [...current, robot]);
    setError("");
  };

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selected.length) {
      setError("Select at least one robot or site.");
      return;
    }

    const data = new FormData(event.currentTarget);
    const subject = `RobotReplica evaluation request · ${selected.join(" + ")}`;
    const body = [
      "Hello RobotReplica team,",
      "",
      "I would like to request evaluation on the following RobotReplica sites:",
      ...selected.map((robot) => `- ${robot}`),
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Organization: ${data.get("organization") || "Not provided"}`,
      `Policy or model: ${data.get("policy")}`,
      `Repository / checkpoint: ${data.get("policyUrl")}`,
      "",
      "Policy interface and runtime requirements:",
      String(data.get("interface") || "Not provided"),
      "",
      "Compute requirements:",
      String(data.get("compute") || "Not provided"),
      "",
      "Additional notes:",
      String(data.get("notes") || "None"),
    ].join("\n");

    window.location.href = `mailto:robotreplica.org@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="evaluationForm" onSubmit={submitRequest}>
      <fieldset className="robotSelector">
        <legend><span>01</span><b>Select one or more robots</b><small>Choose every compatible site. We will coordinate one request across the selected teams.</small></legend>
        <div className="robotOptions">
          {evaluationSites.map((site) => {
            const checked = selected.includes(site.robot);
            return (
              <label className={`${checked ? "selected" : ""}${site.available ? "" : " unavailable"}`} key={site.robot}>
                <input type="checkbox" checked={checked} disabled={!site.available} onChange={() => toggleRobot(site.robot)} />
                <span><b>{site.robot}</b><small>{site.host}</small><em className={site.available ? "live" : "planned"}>{site.status}</em></span>
              </label>
            );
          })}
        </div>
        {error ? <p className="formError" role="alert">{error}</p> : null}
      </fieldset>

      <fieldset>
        <legend><span>02</span><b>Tell us about your policy</b><small>Provide one shared description for all selected sites.</small></legend>
        <div className="formGrid">
          <label><span>Name</span><input name="name" required autoComplete="name" /></label>
          <label><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>
          <label><span>Organization</span><input name="organization" autoComplete="organization" /></label>
          <label><span>Policy or model name</span><input name="policy" required /></label>
          <label className="wide"><span>Repository or checkpoint URL</span><input name="policyUrl" type="url" required placeholder="https://" /></label>
          <label className="wide"><span>Policy interface and runtime requirements</span><textarea name="interface" rows={4} placeholder="Inputs, outputs, control frequency, dependencies, serving interface…" /></label>
          <label className="wide"><span>Compute requirements</span><textarea name="compute" rows={3} placeholder="GPU, memory, network access, expected inference latency…" /></label>
          <label className="wide"><span>Additional notes</span><textarea name="notes" rows={4} placeholder="Benchmark tracks, scheduling constraints, or questions for the site teams…" /></label>
        </div>
      </fieldset>

      <div className="formSubmit">
        <div><b>One request. Multiple sites.</b><p>This prepares a structured email to robotreplica.org@gmail.com. Review it in your email app before sending.</p></div>
        <button className="button primary" type="submit">Prepare email request <span aria-hidden="true">↗</span></button>
      </div>
    </form>
  );
}
