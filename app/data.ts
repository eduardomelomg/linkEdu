// ============================================================
//  EDITE AQUI — todo o conteúdo do site fica neste arquivo.
//  Troque os placeholders (SEU-...) pelos dados reais.
// ============================================================

export const profile = {
  name: "Eduardo Melo",
  role: "Dev Fullstack · Automação & IA",
  location: "Petrolina, PE",
  initials: "EM",
  photo: "/eduardo.jpg", // foto em public/ ; deixe "" para mostrar as iniciais
  available: true, // muda o status "disponível para projetos"
};

export const metrics = [
  { value: "+10", label: "Apps em produção", color: "accent" as const,
    spark: [40, 60, 50, 80, 100] },
  { value: "6+", label: "Anos em tech", color: "violet" as const,
    spark: [30, 50, 70, 65, 90] },
  { value: "4+", label: "Setores atendidos", color: "green" as const,
    sectors: "TI · DP · Fiscal · Gestão" },
];

export const systems = [
  { title: "Ponto Eletrônico", desc: "Biometria facial, jornada e auditoria.",
    chip: "FaceAPI · MediaPipe", tone: "accent" as const },
  { title: "Gestão de Férias", desc: "Solicitações, regras por setor, calendário.",
    chip: "React · Postgres", tone: "green" as const },
  { title: "Automação de PDFs", desc: "Leitura de documentos com LLMs.",
    chip: "Python · IA", tone: "violet" as const },
  { title: "Integrações", desc: "WhatsApp, e-mail e dashboards.",
    chip: "Evolution · Brevo", tone: "amber" as const },
];

export const links = [
  { name: "Site", desc: "deveduardomelo.nucleodigital.cloud", icon: "site",
    href: "https://deveduardomelo.nucleodigital.cloud/" },
  { name: "WhatsApp", desc: "Falar sobre um projeto", icon: "whatsapp",
    href: "https://wa.me/5587981115127" },
  { name: "LinkedIn", desc: "in/edumeloo", icon: "linkedin",
    href: "https://www.linkedin.com/in/edumeloo/" },
  { name: "GitHub", desc: "eduardomelomg", icon: "github",
    href: "https://github.com/eduardomelomg" },
  { name: "Instagram", desc: "@edumeloo.dev", icon: "instagram",
    href: "https://instagram.com/edumeloo.dev" },
  { name: "E-mail", desc: "Contato profissional", icon: "email",
    href: "mailto:eduardomelomg0704@gmail.com" },
];
