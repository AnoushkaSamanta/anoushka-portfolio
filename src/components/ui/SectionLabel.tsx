export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <span className="block w-8 h-px bg-accent" />
      <span
        className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent"
        style={{ fontFamily: 'DM Mono, monospace' }}
      >
        {children}
      </span>
    </div>
  )
}
