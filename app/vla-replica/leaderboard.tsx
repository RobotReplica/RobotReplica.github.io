"use client";

import { useMemo, useState } from "react";

type DatasetKey = "id" | "ood";
type SortKey = "average" | number;
type LeaderboardRow = [task: string, ...scores: string[]];
type LeaderboardDataset = {
  average: string[];
  groups: Array<{ type: string; rows: LeaderboardRow[] }>;
};

const methods = [
  { label: "ACT", ref: 1, slug: "act" }, { label: "DiT-D", ref: 2, slug: "dit-d" },
  { label: "DiT-F", ref: 2, slug: "dit-f" }, { label: "SmolVLA", ref: 3, slug: "smolvla" },
  { label: "X-VLA", ref: 4, slug: "x-vla" }, { label: "π₀", ref: 5, slug: "pi-0" },
  { label: "π₀.₅", ref: 6, slug: "pi-0-5" },
  { label: "MolmoAct2-SO100_101", ref: 7, slug: "molmoact2" },
  { label: "GR00T N1.7", ref: 8, slug: "groot1.7" },
];

const data: Record<DatasetKey, LeaderboardDataset> = {
  id: {
    average: ["0.21 ± 0.08", "0.11 ± 0.05", "0.07 ± 0.05", "0.29 ± 0.04", "0.13 ± 0.02", "0.32 ± 0.03", "0.53 ± 0.05", "0.39 ± 0.06", "0.42 ± 0.06"],
    groups: [
      { type: "Pick-and-Place", rows: [
        ["Put bread on plate", "0.33 ± 0.12", "0.20 ± 0.20", "0.13 ± 0.23", "0.80 ± 0.20", "0.27 ± 0.12", "0.67 ± 0.12", "0.80 ± 0.20", "0.93 ± 0.12", "0.80 ± 0.00"],
        ["Put bowl on coaster", "0.07 ± 0.12", "0.13 ± 0.12", "0.00 ± 0.00", "0.20 ± 0.20", "0.13 ± 0.12", "0.67 ± 0.31", "0.87 ± 0.12", "0.73 ± 0.12", "0.87 ± 0.12"],
        ["Stack block on block", "0.00 ± 0.00", "0.00 ± 0.00", "0.00 ± 0.00", "0.27 ± 0.12", "0.00 ± 0.00", "0.00 ± 0.00", "0.33 ± 0.12", "0.27 ± 0.12", "0.00 ± 0.00"],
        ["Put all blocks into box", "0.00 ± 0.00", "0.07 ± 0.12", "0.00 ± 0.00", "0.00 ± 0.00", "0.00 ± 0.00", "0.00 ± 0.00", "0.47 ± 0.12", "0.27 ± 0.12", "0.29 ± 0.08"],
      ]},
      { type: "Object Interaction", rows: [
        ["Fold towel", "0.60 ± 0.20", "0.20 ± 0.00", "0.27 ± 0.12", "0.73 ± 0.12", "0.53 ± 0.12", "0.67 ± 0.23", "1.00 ± 0.00", "0.73 ± 0.12", "1.00 ± 0.00"],
        ["Open oven", "0.33 ± 0.12", "0.20 ± 0.35", "0.13 ± 0.23", "0.33 ± 0.12", "0.07 ± 0.12", "0.20 ± 0.00", "0.53 ± 0.12", "0.13 ± 0.23", "0.47 ± 0.31"],
        ["Erase whiteboard", "0.20 ± 0.00", "0.20 ± 0.00", "0.13 ± 0.12", "0.20 ± 0.00", "0.00 ± 0.00", "0.33 ± 0.12", "0.33 ± 0.12", "0.53 ± 0.12", "0.40 ± 0.20"],
      ]},
      { type: "Counting / Memory", rows: [
        ["Shake pepper n times", "0.27 ± 0.12", "0.07 ± 0.12", "0.00 ± 0.00", "0.00 ± 0.00", "0.20 ± 0.20", "0.27 ± 0.12", "0.33 ± 0.12", "0.13 ± 0.12", "0.20 ± 0.00"],
        ["Lift bowl n times", "0.33 ± 0.23", "0.00 ± 0.00", "0.00 ± 0.00", "0.20 ± 0.00", "0.07 ± 0.12", "0.20 ± 0.00", "0.40 ± 0.00", "0.13 ± 0.12", "0.07 ± 0.12"],
        ["Press button n times", "0.00 ± 0.00", "0.00 ± 0.00", "0.00 ± 0.00", "0.20 ± 0.00", "0.00 ± 0.00", "0.20 ± 0.00", "0.27 ± 0.31", "0.00 ± 0.00", "0.13 ± 0.12"],
      ]},
    ],
  },
  ood: {
    average: ["0.08 ± 0.01", "0.08 ± 0.04", "0.04 ± 0.01", "0.27 ± 0.04", "0.05 ± 0.04", "0.30 ± 0.02", "0.39 ± 0.10", "0.47 ± 0.05", "0.35 ± 0.00"],
    groups: [
      { type: "Pick-and-Place", rows: [
        ["Put bread on plate", "0.40 ± 0.20", "0.07 ± 0.12", "0.13 ± 0.12", "0.73 ± 0.12", "0.33 ± 0.31", "0.73 ± 0.12", "0.93 ± 0.12", "0.87 ± 0.12", "0.93 ± 0.12"],
        ["Put bowl on coaster", "0.27 ± 0.12", "0.33 ± 0.23", "0.07 ± 0.12", "0.33 ± 0.12", "0.00 ± 0.00", "0.67 ± 0.12", "0.60 ± 0.20", "0.87 ± 0.12", "0.67 ± 0.12"],
        ["Stack block on block", "0.00 ± 0.00", "0.00 ± 0.00", "0.00 ± 0.00", "0.20 ± 0.20", "0.00 ± 0.00", "0.20 ± 0.20", "0.20 ± 0.20", "0.60 ± 0.00", "0.00 ± 0.00"],
        ["Put all blocks into box", "0.00 ± 0.00", "0.00 ± 0.00", "0.07 ± 0.12", "0.13 ± 0.12", "0.00 ± 0.00", "0.00 ± 0.00", "0.27 ± 0.12", "0.20 ± 0.20", "0.13 ± 0.12"],
      ]},
      { type: "Object Interaction", rows: [["Fold towel", "0.00 ± 0.00", "0.07 ± 0.12", "0.07 ± 0.12", "0.47 ± 0.12", "0.07 ± 0.12", "0.53 ± 0.06", "0.80 ± 0.00", "0.87 ± 0.12", "1.00 ± 0.00"]] },
      { type: "Counting / Memory", rows: [
        ["Shake pepper n times", "0.00 ± 0.00", "0.07 ± 0.12", "0.00 ± 0.00", "0.00 ± 0.00", "0.00 ± 0.00", "0.22 ± 0.03", "0.27 ± 0.23", "0.13 ± 0.12", "0.00 ± 0.00"],
        ["Lift bowl n times", "0.00 ± 0.00", "0.00 ± 0.00", "0.00 ± 0.00", "0.20 ± 0.00", "0.00 ± 0.00", "0.00 ± 0.00", "0.00 ± 0.00", "0.13 ± 0.12", "0.07 ± 0.12"],
        ["Press button n times", "0.00 ± 0.00", "0.07 ± 0.12", "0.00 ± 0.00", "0.07 ± 0.12", "0.00 ± 0.00", "0.07 ± 0.12", "0.07 ± 0.12", "0.07 ± 0.12", "0.00 ± 0.00"],
      ]},
    ],
  },
};

const mean = (value: string) => Number(value.split(" ")[0]);

export default function Leaderboard() {
  const [dataset, setDataset] = useState<DatasetKey>("id");
  const [sort, setSort] = useState<SortKey>("average");
  const current = data[dataset];
  const rows = current.groups.flatMap(group => group.rows);
  const ranked = useMemo(() => methods.map((method, methodIndex) => ({
    ...method, average: current.average[methodIndex], values: rows.map(row => row[methodIndex + 1]),
  })).sort((a, b) => {
    const aValue = mean(sort === "average" ? a.average : a.values[sort]);
    const bValue = mean(sort === "average" ? b.average : b.values[sort]);
    return bValue - aValue || mean(b.average) - mean(a.average);
  }), [current, rows, sort]);

  return <>
    <div className="vlaDatasetSwitch" role="group" aria-label="Leaderboard track">
      {(["id", "ood"] as DatasetKey[]).map(key => <button className={dataset === key ? "active" : ""} onClick={() => { setDataset(key); setSort("average"); }} key={key}>VLA-Replica-{key.toUpperCase()}</button>)}
    </div>
    <div className="vlaOriginalTable"><table>
      <thead><tr><th>Rank</th><th>Method</th><th><button className={sort === "average" ? "active" : ""} onClick={() => setSort("average")}>Average</button></th>{rows.map((row, i) => <th key={String(row[0])}><button className={sort === i ? "active" : ""} onClick={() => setSort(i)}>{String(row[0])}</button></th>)}<th>Video</th></tr></thead>
      <tbody>{ranked.map((entry, rank) => <tr className={rank === 0 ? "top" : ""} key={entry.slug}><td className="rank">{rank + 1}</td><td className="method"><span>{entry.label}</span><a href={`#ref-${entry.ref}`} aria-label={`Reference ${entry.ref}`}>{entry.ref}</a></td><td className="average">{entry.average}</td>{entry.values.map((value, i) => <td key={i}>{value}</td>)}<td><div className="videoRuns">{[1, 2, 3].map(run => <a className="videoLink" href={`/vla-replica-materials/scene-videos/${dataset}-${entry.slug}.html?run=run${run}`} aria-label={`Open Run ${run} ${dataset.toUpperCase()} rollout videos for ${entry.label}`} key={run}>Run {run}</a>)}</div></td></tr>)}</tbody>
    </table></div>
    <p className="vlaTableHint">Values show mean ± standard deviation across three rounds. Select Average or any task heading to rank methods by mean; use the Run 1–3 buttons to inspect each evaluation round.</p>
  </>;
}
