export function StatusPill({ status = "confirmed", children }: { status?: "confirmed" | "unknown"; children: React.ReactNode }) {
  return <span className={`status-pill ${status}`}>{children}</span>;
}
