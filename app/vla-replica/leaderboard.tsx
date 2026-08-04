"use client";

import { useMemo, useState } from "react";

type DatasetKey = "id" | "ood";
type SortKey = "average" | number;
type LeaderboardRow = [task: string, ...scores: number[]];
type LeaderboardDataset = {
  average: number[];
  groups: Array<{ type: string; rows: LeaderboardRow[] }>;
};

const methods = [
  { label: "ACT", ref: 1, slug: "act" }, { label: "DiT-D", ref: 2, slug: "dit-d" },
  { label: "DiT-F", ref: 2, slug: "dit-f" }, { label: "SmolVLA", ref: 3, slug: "smolvla" },
  { label: "X-VLA", ref: 4, slug: "x-vla" }, { label: "π₀", ref: 5, slug: "pi-0" },
  { label: "π₀.₅", ref: 6, slug: "pi-0-5" },
];

const data: Record<DatasetKey, LeaderboardDataset> = {
  id: {
    average: [0.18, 0.16, 0.12, 0.26, 0.14, 0.34, 0.54],
    groups: [
      { type: "Pick-and-Place", rows: [
        ["Put bread on plate", .4, .4, .4, .6, .4, .8, .8], ["Put bowl on coaster", 0, 0, 0, .2, .2, .6, .8],
        ["Stack block on block", 0, 0, 0, .2, 0, 0, .4], ["Put all blocks into box", 0, .2, 0, 0, 0, 0, .4],
      ]},
      { type: "Object Interaction", rows: [
        ["Fold towel", .4, .2, .2, .6, .6, .8, 1], ["Open oven", .4, .6, .4, .4, 0, .2, .6],
        ["Erase whiteboard", .2, .2, .2, .2, 0, .4, .4],
      ]},
      { type: "Counting / Memory", rows: [
        ["Shake pepper n times", .2, 0, 0, 0, .2, .2, .4], ["Lift bowl n times", .2, 0, 0, .2, 0, .2, .4],
        ["Press button n times", 0, 0, 0, .2, 0, .2, .2],
      ]},
    ],
  },
  ood: {
    average: [.075, .05, .025, .3, .075, .3, .35],
    groups: [
      { type: "Pick-and-Place", rows: [
        ["Put bread on plate", .4, 0, .2, .8, .6, .8, 1], ["Put bowl on coaster", .2, .2, 0, .4, 0, .6, .4],
        ["Stack block on block", 0, 0, 0, .2, 0, .2, 0], ["Put all blocks into box", 0, 0, 0, .2, 0, 0, .2],
      ]},
      { type: "Object Interaction", rows: [["Fold towel", 0, .2, 0, .6, 0, .6, .8]] },
      { type: "Counting / Memory", rows: [
        ["Shake pepper n times", 0, 0, 0, 0, 0, .2, .4], ["Lift bowl n times", 0, 0, 0, .2, 0, 0, 0],
        ["Press button n times", 0, 0, 0, 0, 0, 0, 0],
      ]},
    ],
  },
};

const pct = (value: number) => value === 0 ? "0" : String(value);

export default function Leaderboard() {
  const [dataset, setDataset] = useState<DatasetKey>("id");
  const [sort, setSort] = useState<SortKey>("average");
  const current = data[dataset];
  const rows = current.groups.flatMap(group => group.rows);
  const ranked = useMemo(() => methods.map((method, methodIndex) => ({
    ...method, average: current.average[methodIndex], values: rows.map(row => Number(row[methodIndex + 1])),
  })).sort((a, b) => {
    const aValue = sort === "average" ? a.average : a.values[sort];
    const bValue = sort === "average" ? b.average : b.values[sort];
    return bValue - aValue || b.average - a.average;
  }), [current, rows, sort]);

  return <>
    <div className="vlaDatasetSwitch" role="group" aria-label="Leaderboard track">
      {(["id", "ood"] as DatasetKey[]).map(key => <button className={dataset === key ? "active" : ""} onClick={() => { setDataset(key); setSort("average"); }} key={key}>VLA-Replica-{key.toUpperCase()}</button>)}
    </div>
    <div className="vlaOriginalTable"><table>
      <thead><tr><th>Rank</th><th>Method</th><th><button className={sort === "average" ? "active" : ""} onClick={() => setSort("average")}>Average</button></th>{rows.map((row, i) => <th key={String(row[0])}><button className={sort === i ? "active" : ""} onClick={() => setSort(i)}>{String(row[0])}</button></th>)}<th>Video</th></tr></thead>
      <tbody>{ranked.map((entry, rank) => <tr className={rank === 0 ? "top" : ""} key={entry.slug}><td className="rank">{rank + 1}</td><td className="method"><span>{entry.label}</span><a href={`#ref-${entry.ref}`} aria-label={`Reference ${entry.ref}`}>{entry.ref}</a></td><td className="average">{pct(entry.average)}</td>{entry.values.map((value, i) => <td key={i}>{pct(value)}</td>)}<td><a className="videoLink" href={`/vla-replica-materials/scene-videos/${dataset}-${entry.slug}.html`} aria-label={`Open ${dataset.toUpperCase()} rollout videos for ${entry.label}`}>↗</a></td></tr>)}</tbody>
    </table></div>
    <p className="vlaTableHint">Select Average or any task heading to rank methods. Use the arrow in the Video column to open all five rollout videos for every task.</p>
  </>;
}
