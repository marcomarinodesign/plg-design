import type { DashboardData, RadarArea } from "./dashboard-types"

const radarAreas: RadarArea[] = [
  { subject: "Reputación", value: 72, fullMark: 100 },
  { subject: "Visibilidad", value: 65, fullMark: 100 },
  { subject: "Comunicación", value: 58, fullMark: 100 },
  { subject: "Competitors", value: 80, fullMark: 100 },
  { subject: "Engagement", value: 47, fullMark: 100 },
]

export const dashboardMockData: DashboardData = {
  hero: {
    businessName: "Reforma López",
    plinngScore: 45,
    maxScore: 100,
    logoUrl: "/logo.png",
  },
  radarAreas,
  feedbackItems: [
    {
      id: "1",
      title: "Carga rápida",
      description:
        "Tus páginas cargan más rápido que la media, lo que mejora la experiencia.",
    },
    {
      id: "2",
      title: "Presencia en redes",
      description:
        "Mantienes una actividad constante que genera confianza en tu audiencia.",
    },
    {
      id: "3",
      title: "Información clara",
      description:
        "Tu propuesta de valor está bien definida y es fácil de encontrar.",
    },
  ],
  scoreMetrics: [
    { id: "1", label: "Propuesta de valor", score: 49, icon: "/icons/target.png" },
    { id: "2", label: "Instagram", score: 50, icon: "/icons/instagram.png" },
    { id: "3", label: "Canal de contacto", score: 52, icon: "/icons/whatsapp.png" },
    { id: "4", label: "SEO", score: 48, icon: "/icons/google.png" },
    { id: "5", label: "Competitors", score: 55, icon: "/icons/component.png" },
    { id: "6", label: "Google Maps", score: 51, icon: "/icons/map-pin.png" },
  ],
}
