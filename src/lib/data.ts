export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://clinica-ginecologica-three.vercel.app";

export const clinica = {
  nombre: "Clínica Ginecológica",
  doctora: "Dra. Alma Idalia Meléndez Pérez Rubio",
  tel: "922 221 1285",
  telHref: "tel:+529222211285",
  whatsapp: "922 346 0871",
  waMensaje:
    "Hola, vi la página de Clínica Ginecológica y quisiera solicitar información para agendar una consulta.",
  direccion: [
    "Calle Benito Juárez No. 5, Col. Insurgentes Sur",
    "Minatitlán, Veracruz, C.P. 96717",
  ],
  horario: [
    ["Lunes a viernes", "8:00 am – 8:00 pm"],
    ["Sábado", "8:00 am – 2:00 pm"],
  ] as const,
  facebook: "https://www.facebook.com/profile.php?id=61573648809814",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Clínica Ginecológica, Calle Benito Juárez No. 5, Col. Insurgentes Sur, 96717 Minatitlán, Ver."
    ),
  mapsEmbed:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "Calle Benito Juárez No. 5, Insurgentes Sur, 96717 Minatitlán, Ver."
    ) +
    "&output=embed",
};

export function waHref(text: string = clinica.waMensaje) {
  return `https://wa.me/529223460871?text=${encodeURIComponent(text)}`;
}

export type Servicio = {
  icon: string;
  title: string;
  desc: string;
  image: string;
};

export const servicios: Servicio[] = [
  {
    icon: "baby",
    title: "Atención obstétrica",
    desc: "Control prenatal con seguimiento cercano en cada trimestre y atención integral del embarazo.",
    image: "/images/services/atencion-obstetrica.webp",
  },
  {
    icon: "stethoscope",
    title: "Consulta ginecológica",
    desc: "Revisión integral, Papanicolaou, colposcopia y planificación familiar en un entorno confidencial.",
    image: "/images/services/consulta-ginecologica.webp",
  },
  {
    icon: "scissors",
    title: "Cirugía general",
    desc: "Evaluación, diagnóstico y tratamiento quirúrgico con un enfoque integral y personalizado.",
    image: "/images/services/cirugia-general.webp",
  },
  {
    icon: "scan-line",
    title: "GastroEndoscopía",
    desc: "Estudios endoscópicos para la prevención, diagnóstico y tratamiento de enfermedades del aparato digestivo.",
    image: "/images/services/gastroendoscopia.webp",
  },
  {
    icon: "activity",
    title: "FibroScan",
    desc: "Evaluación no invasiva de la salud hepática para valorar fibrosis y esteatosis sin necesidad de biopsia.",
    image: "/images/services/fibroscan.webp",
  },
  {
    icon: "flower-2",
    title: "Rejuvenecimiento urogenital",
    desc: "Tratamientos especializados para el bienestar íntimo, la salud urogenital y la calidad de vida de la mujer.",
    image: "/images/services/rejuvenecimiento-urogenital.webp",
  },
  {
    icon: "sparkles",
    title: "Medicina estética",
    desc: "Procedimientos estéticos no quirúrgicos con valoración médica previa y seguimiento personalizado.",
    image: "/images/services/medicina-estetica.webp",
  },
];

export const beneficios = [
  { icon: "heart-handshake", label: "Atención personalizada" },
  { icon: "stethoscope", label: "Prevención y diagnóstico oportuno" },
  { icon: "microscope", label: "Tecnología aplicada a tu salud" },
  { icon: "shield-check", label: "Confidencialidad y trato respetuoso" },
];

export const faqs = [
  {
    q: "¿Necesito agendar una cita?",
    a: "Te recomendamos agendar previamente para confirmar disponibilidad y recibir indicaciones antes de tu consulta.",
  },
  {
    q: "¿Qué debo llevar a mi primera consulta?",
    a: "Identificación, estudios recientes y una lista de los medicamentos o tratamientos que tomas actualmente.",
  },
  {
    q: "¿Atienden consultas prenatales?",
    a: "Sí, ofrecemos consulta prenatal con seguimiento cercano durante todo el embarazo.",
  },
  {
    q: "¿Realizan Papanicolaou y colposcopia?",
    a: "Sí, ambos estudios se realizan en consultorio y te explicamos los resultados paso a paso.",
  },
  {
    q: "¿Ofrecen métodos anticonceptivos?",
    a: "Sí, contamos con planificación familiar, aplicación de DIU e implante subdérmico. La opción adecuada se define contigo mediante valoración médica.",
  },
  {
    q: "¿Cómo puedo agendar?",
    a: "Por teléfono al 922 221 1285 o por WhatsApp al 922 346 0871.",
  },
];

export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "especialista", label: "Especialista" },
  { id: "preguntas", label: "Preguntas" },
  { id: "contacto", label: "Contacto" },
];
