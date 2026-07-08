import Image from "next/image";
import { profile, metrics, systems, links } from "./data";
import { Icon } from "./components/Icon";

const colorMap = {
  accent: "text-accent",
  violet: "text-violet",
  green: "text-green",
  amber: "text-amber",
} as const;

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[460px] px-4 pt-6 pb-11">
      {/* cabeçalho / status */}
      <div className="mb-3.5 flex items-center justify-between font-mono text-[11px] tracking-wide text-dim">
        <span>PAINEL · EDUMELOO.DEV</span>
        {profile.available && (
          <span className="inline-flex items-center gap-1.5 text-green">
            <span className="pulse-ring h-2 w-2 rounded-full bg-green" />
            DISPONÍVEL PARA PROJETOS
          </span>
        )}
      </div>

      {/* card de perfil */}
      <section className="mb-3 flex items-center gap-4 rounded-2xl border border-line bg-card p-5">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            width={62}
            height={62}
            priority
            className="h-[62px] w-[62px] flex-none rounded-2xl object-cover"
          />
        ) : (
          <div className="flex h-[62px] w-[62px] flex-none items-center justify-center rounded-2xl bg-linear-to-br from-accent to-violet font-display text-2xl font-bold text-white">
            {profile.initials}
          </div>
        )}
        <div>
          <h1 className="font-display text-[21px] font-bold tracking-tight">{profile.name}</h1>
          <div className="mt-0.5 text-[12.5px] text-dim">{profile.role}</div>
          <div className="mt-1.5 font-mono text-[11px] text-dim">📍 {profile.location}</div>
        </div>
      </section>

      {/* métricas */}
      <section className="mb-3 grid grid-cols-3 gap-3">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-2xl border border-line bg-card p-3">
            <div className={`font-display text-[22px] font-bold leading-none ${colorMap[m.color]}`}>
              {m.value}
            </div>
            <div className="mt-1.5 font-mono text-[9px] uppercase tracking-wide text-dim">{m.label}</div>
            {m.spark && (
              <div className="mt-2 flex h-4 items-end gap-0.5">
                {m.spark.map((h, i) => (
                  <span key={i} className="flex-1 rounded-[1px] bg-accent opacity-50" style={{ height: `${h}%` }} />
                ))}
              </div>
            )}
            {m.sectors && (
              <div className="mt-2 font-mono text-[8.5px] leading-tight text-dim">{m.sectors}</div>
            )}
          </div>
        ))}
      </section>

      {/* sistemas */}
      <div className="mx-1 mt-5 mb-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
        Sistemas que eu construo
      </div>
      <section className="mb-3 grid grid-cols-2 gap-3">
        {systems.map((s) => (
          <div key={s.title} className="rounded-2xl border border-line bg-card p-3.5">
            <div className="font-display text-[13px] font-semibold">{s.title}</div>
            <div className="mt-1 text-[11px] leading-snug text-dim">{s.desc}</div>
            <span className={`mt-2.5 inline-block rounded-full bg-card2 px-2 py-1 font-mono text-[9px] ${colorMap[s.tone]}`}>
              {s.chip}
            </span>
          </div>
        ))}
      </section>

      {/* links */}
      <div className="mx-1 mt-5 mb-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-dim">
        Conectar
      </div>
      <section className="flex flex-col gap-2.5">
        {links.map((l) => (
          <a
            key={l.name}
            href={l.href}
            target={l.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener"
            className="group flex items-center gap-3 rounded-xl border border-line bg-card p-3.5 transition hover:translate-x-1 hover:border-accent hover:bg-card2 focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-accent"
          >
            <span className="flex h-[34px] w-[34px] flex-none items-center justify-center rounded-lg bg-card2 text-accent">
              <Icon name={l.icon} />
            </span>
            <span className="flex-1">
              <span className="block font-display text-sm font-semibold">{l.name}</span>
              <span className="block font-mono text-[10px] text-dim">{l.desc}</span>
            </span>
            <span className="font-mono text-[11px] text-dim group-hover:text-accent">→</span>
          </a>
        ))}
      </section>

      <footer className="mt-6 text-center font-mono text-[9.5px] text-dim">
        SISTEMA ONLINE · DESENVOLVIDO POR EDUARDO MELO
      </footer>
    </main>
  );
}
