import { signal } from "@preact/signals-core";

export interface Props {
  label: string;
  value: string;
  count: number;
}

export const selectedFilter = signal("all");

export function ExperienceTimelineFilterButton({ label, count, value }: Props) {
  return (
    <button
      type="button"
      className={`btn join-item ${
        selectedFilter.value === value ? "btn-primary" : "btn-noise"
      }`}
      onClick={() => (selectedFilter.value = value)}
    >
      {label}
      <div class="badge badge-sm ml-2">{count}</div>
    </button>
  );
}
