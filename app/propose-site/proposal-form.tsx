"use client";

import type { FormEvent } from "react";

export default function ProposalForm() {
  const submitProposal = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `RobotReplica partner site proposal · ${data.get("organization")} · ${data.get("robot")}`;
    const body = [
      "Hello RobotReplica team,",
      "",
      "Our organization would like to propose a RobotReplica partner site.",
      "",
      `Contact name: ${data.get("name")}`,
      `Contact email: ${data.get("email")}`,
      `Organization: ${data.get("organization")}`,
      `Organization website: ${data.get("website") || "Not provided"}`,
      `Proposed location: ${data.get("location")}`,
      `Robot platform: ${data.get("robot")}`,
      "",
      "Robot access and workspace readiness:",
      String(data.get("workspace") || "Not provided"),
      "",
      "Proposed benchmark tasks:",
      String(data.get("tasks") || "Not provided"),
      "",
      "Expected timeline:",
      String(data.get("timeline") || "Not provided"),
      "",
      "Additional notes:",
      String(data.get("notes") || "None"),
    ].join("\n");

    window.location.href = `mailto:robotreplica.org@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="evaluationForm" onSubmit={submitProposal}>
      <fieldset>
        <legend><span>01</span><b>Introduce your organization</b><small>Tell us who will operate and maintain the proposed benchmark site.</small></legend>
        <div className="formGrid">
          <label><span>Contact name <abbr className="requiredMark" title="Required">*</abbr></span><input name="name" required autoComplete="name" /></label>
          <label><span>Contact email <abbr className="requiredMark" title="Required">*</abbr></span><input name="email" type="email" required autoComplete="email" /></label>
          <label><span>Organization <abbr className="requiredMark" title="Required">*</abbr></span><input name="organization" required autoComplete="organization" /></label>
          <label><span>Organization website <em>Optional</em></span><input name="website" type="url" placeholder="https://" /></label>
          <label className="wide"><span>Proposed site location <abbr className="requiredMark" title="Required">*</abbr></span><input name="location" required placeholder="City, state or region, country" /></label>
        </div>
      </fieldset>

      <fieldset>
        <legend><span>02</span><b>Describe the proposed site</b><small>Outline the robot, physical setup, tasks, and expected launch path.</small></legend>
        <div className="formGrid">
          <label className="wide"><span>Robot platform <abbr className="requiredMark" title="Required">*</abbr></span><input name="robot" required placeholder="Robot model, configuration, and end effector" /></label>
          <label className="wide"><span>Robot access and workspace readiness <em>Optional</em></span><textarea name="workspace" rows={5} placeholder="Robot availability, workspace, lighting, cameras, safety provisions, and people who will maintain the site…" /></label>
          <label className="wide"><span>Proposed benchmark tasks <em>Optional</em></span><textarea name="tasks" rows={5} placeholder="Describe the manipulation skills and approximately 10 tasks you would like to develop…" /></label>
          <label className="wide"><span>Expected timeline <em>Optional</em></span><textarea name="timeline" rows={3} placeholder="When could setup, task design, baseline testing, and public evaluations begin?" /></label>
          <label className="wide"><span>Additional notes <em>Optional</em></span><textarea name="notes" rows={4} placeholder="Existing datasets, policies, collaborators, funding, or questions for RobotReplica…" /></label>
        </div>
      </fieldset>

      <div className="formSubmit">
        <div><b>Start a partner conversation.</b><p>This prepares a structured email to robotreplica.org@gmail.com. Review it in your email app before sending.</p></div>
        <button className="button primary" type="submit">Prepare site proposal <span aria-hidden="true">↗</span></button>
      </div>
    </form>
  );
}
