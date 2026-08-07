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
  const [urlError, setUrlError] = useState("");

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

  const getUrlError = (value: string) => {
    if (!value.trim()) return "Provide a project page or code repository URL.";
    try {
      const url = new URL(value);
      return url.protocol === "http:" || url.protocol === "https:" ? "" : "Enter a complete URL beginning with http:// or https://.";
    } catch {
      return "Enter a complete URL, such as https://project.org or https://github.com/organization/repository.";
    }
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
      `Project page / code repository: ${data.get("policyUrl")}`,
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
        <legend><span>01</span><b>Select one or more robots <abbr className="requiredMark" title="Required">*</abbr></b><small>Choose every compatible site. We will coordinate one request across the selected teams.</small></legend>
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
          <label><span>Name <abbr className="requiredMark" title="Required">*</abbr></span><input name="name" required autoComplete="name" /></label>
          <label><span>Email <abbr className="requiredMark" title="Required">*</abbr></span><input name="email" type="email" required autoComplete="email" /></label>
          <label><span>Organization <abbr className="requiredMark" title="Required">*</abbr></span><input name="organization" required autoComplete="organization" /></label>
          <label><span>Policy or model name <abbr className="requiredMark" title="Required">*</abbr></span><input name="policy" required /></label>
          <label className="wide"><span>Project page or code repository URL <abbr className="requiredMark" title="Required">*</abbr></span><input name="policyUrl" type="url" required placeholder="https://your-project-page.org or https://github.com/organization/repository" aria-invalid={urlError ? "true" : "false"} aria-describedby="policy-url-error" onInvalid={(event) => { const message = getUrlError(event.currentTarget.value); event.currentTarget.setCustomValidity(message); setUrlError(message); }} onInput={(event) => { event.currentTarget.setCustomValidity(""); setUrlError(""); }} onBlur={(event) => setUrlError(getUrlError(event.currentTarget.value))} />{urlError ? <small className="fieldError" id="policy-url-error" role="alert">{urlError}</small> : null}</label>
          <label className="wide"><span>Policy interface and runtime requirements <em>Optional</em></span><textarea name="interface" rows={4} placeholder="Inputs, outputs, control frequency, dependencies, serving interface…" /></label>
          <label className="wide"><span>Compute requirements <em>Optional</em></span><textarea name="compute" rows={3} placeholder="GPU, memory, network access, expected inference latency…" /></label>
          <label className="wide"><span>Additional notes <em>Optional</em></span><textarea name="notes" rows={4} placeholder="Benchmark tracks, scheduling constraints, or questions for the site teams…" /></label>
        </div>
      </fieldset>

      <div className="formSubmit">
        <div><b>One request. Multiple sites.</b><p>This prepares a structured email to robotreplica.org@gmail.com. Review it in your email app before sending.</p></div>
        <button className="button primary" type="submit">Prepare email request <span aria-hidden="true">↗</span></button>
      </div>
    </form>
  );
}
