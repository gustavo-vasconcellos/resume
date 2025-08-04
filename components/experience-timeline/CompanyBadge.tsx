export type CompanyType = "enterprise" | "founder" | "startup" | "education";

interface Props {
  type: CompanyType;
}

const badgeType = {
  enterprise: "badge-error",
  founder: "badge-warning",
  startup: "badge-success",
  education: "badge-secondary",
} as Record<CompanyType, string>;

export const CompanyBadge = ({ type }: Props) => {
  return <span className={`badge ${badgeType[type]} badge-sm`}>{type}</span>;
};
