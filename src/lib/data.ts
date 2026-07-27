export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://clinica-ginecologica-three.vercel.app";

export const clinica = {
  nombre: "Clínica Ginecológica",
  lema: "Más de 30 años cuidando la salud de la mujer con experiencia, innovación y tecnología de vanguardia.",
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

/* Cartera oficial (informacion-oficial-clinica.md) + servicios confirmados previamente
   en el Design System (GastroEndoscopía, FibroScan, medicina estética). */
export const servicios: Servicio[] = [
  {
    icon: "stethoscope",
    title: "Consulta ginecológica",
    desc: "Revisión integral, colposcopía y detección oportuna del VPH en un entorno confidencial.",
    image: "/images/services/consulta-ginecologica.webp",
  },
  {
    icon: "baby",
    title: "Obstetricia y control prenatal",
    desc: "Embarazo de bajo y alto riesgo, con atención del parto y cesárea por especialistas.",
    image: "/images/services/atencion-obstetrica.webp",
  },
  {
    icon: "scan-line",
    title: "Ultrasonido ginecológico y obstétrico",
    desc: "Estudios de imagen en consultorio, con resultados explicados paso a paso.",
    image: "/images/tecnologia-experiencia.webp",
  },
  {
    icon: "scissors",
    title: "Cirugía ginecológica",
    desc: "Evaluación, diagnóstico y tratamiento quirúrgico a cargo de especialistas certificados.",
    image: "/images/services/cirugia-general.webp",
  },
  {
    icon: "flower-2",
    title: "Climaterio y menopausia",
    desc: "Acompañamiento y tratamientos personalizados para tu bienestar en esta etapa de la vida.",
    image: "/images/services/climaterio-menopausia.webp",
  },
  {
    icon: "zap",
    title: "Ginecología regenerativa y estética íntima",
    desc: "Láser ginecológico, HIFU vaginal y rehabilitación del piso pélvico en nuestra unidad especializada.",
    image: "/images/services/rejuvenecimiento-urogenital.webp",
  },
  {
    icon: "activity",
    title: "GastroEndoscopía y FibroScan",
    desc: "Estudios endoscópicos y evaluación hepática no invasiva para la salud digestiva.",
    image: "/images/services/gastroendoscopia.webp",
  },
  {
    icon: "sparkles",
    title: "Medicina estética",
    desc: "Procedimientos estéticos no quirúrgicos con valoración médica previa y seguimiento personalizado.",
    image: "/images/services/medicina-estetica.webp",
  },
];

export const beneficios = [
  { icon: "award", label: "Más de 30 años de experiencia" },
  { icon: "shield-check", label: "Especialistas certificados" },
  { icon: "microscope", label: "Tecnología de vanguardia" },
  { icon: "heart-handshake", label: "Trato humano, ético y confidencial" },
];

export type Doctor = {
  nombre: string;
  titulo: string;
  cedulas: string;
  areas: string[];
  semblanza: string;
  certificaciones: string;
};

export const doctores: Doctor[] = [
  {
    nombre: "Dra. Alma Idalia Meléndez Pérez Rubio",
    titulo: "Médica Especialista en Ginecología y Obstetricia",
    cedulas: "Céd. Prof. 2263155 · Céd. Esp. 9858488",
    areas: ["Ginecología y Obstetricia", "Colposcopía", "Climaterio y menopausia"],
    semblanza:
      "Con más de 30 años de experiencia profesional, ofrece una atención cálida, ética y personalizada, acompañando a sus pacientes en cada etapa de su vida con profesionalismo, compromiso y actualización médica continua. Médica Cirujana y Especialista por la Universidad Veracruzana.",
    certificaciones:
      "Certificada por el Consejo Mexicano de Ginecología y Obstetricia, A.C. · Miembro de FEMECOG y del Colegio de Ginecólogos de la Región Minatitlán.",
  },
  {
    nombre: "Dr. Víctor Hugo Herberth Hernández",
    titulo: "Médico Especialista en Ginecología y Obstetricia",
    cedulas: "Céd. Prof. 2165588 · Céd. Esp. 3273097",
    areas: [
      "Ginecología y Obstetricia",
      "Colposcopía",
      "Ultrasonido gineco-obstétrico",
      "Ginecología regenerativa y estética íntima",
      "Láser ginecológico",
    ],
    semblanza:
      "Brinda atención integral a la salud de la mujer combinando una sólida formación académica, experiencia clínica y tecnología médica de vanguardia. Médico Cirujano por la UANL y Especialista por la Universidad Veracruzana; integra herramientas diagnósticas y terapéuticas de última generación.",
    certificaciones:
      "Certificado por el Consejo Mexicano de Ginecología y Obstetricia, A.C. · Miembro de FEMECOG y del Colegio de Ginecólogos de la Región Minatitlán.",
  },
];

export const unidad = {
  nombre: "Unidad de Ginecología Funcional, Regenerativa y Estética Íntima",
  intro:
    "Innovación médica para mejorar la salud, funcionalidad y bienestar femenino. Tratamientos mínimamente invasivos respaldados por tecnología médica de última generación.",
  tratamientos: [
    "Láser ginecológico",
    "HIFU vaginal",
    "Rejuvenecimiento vaginal",
    "Tratamiento de la atrofia vaginal",
    "Síndrome genitourinario de la menopausia",
    "Tratamiento de la laxitud vaginal",
    "Rehabilitación del piso pélvico",
    "Silla electromagnética para piso pélvico",
    "Manejo integral de la incontinencia urinaria",
    "Protocolos personalizados de salud íntima",
  ],
  nota: "Todos los tratamientos son realizados por médicos especialistas certificados, previa valoración clínica individualizada.",
};

export const filosofia = {
  mision:
    "Brindar atención médica integral, segura y de excelencia a la mujer, con diagnósticos oportunos, tratamientos personalizados y tecnología de vanguardia, siempre con un trato humano, ético y profesional.",
  vision:
    "Ser la clínica líder en salud femenina en el sur de Veracruz, reconocida por la calidad de su atención, la innovación tecnológica y el compromiso con el bienestar de nuestras pacientes.",
  valores: [
    "Ética profesional",
    "Calidad médica",
    "Honestidad",
    "Respeto",
    "Empatía",
    "Innovación",
    "Actualización científica",
    "Seguridad del paciente",
  ],
};

export const faqs = [
  {
    q: "¿Necesito agendar una cita?",
    a: "Te recomendamos agendar previamente para confirmar disponibilidad y recibir indicaciones antes de tu consulta.",
  },
  {
    q: "¿Quiénes me atenderán?",
    a: "La Dra. Alma Idalia Meléndez Pérez Rubio y el Dr. Víctor Hugo Herberth Hernández, especialistas en Ginecología y Obstetricia certificados por el Consejo Mexicano de Ginecología y Obstetricia.",
  },
  {
    q: "¿Qué debo llevar a mi primera consulta?",
    a: "Identificación, estudios recientes y una lista de los medicamentos o tratamientos que tomas actualmente.",
  },
  {
    q: "¿Atienden consultas prenatales?",
    a: "Sí, ofrecemos control prenatal con seguimiento cercano durante todo el embarazo, incluido el embarazo de alto riesgo, con atención del parto y cesárea.",
  },
  {
    q: "¿Realizan Papanicolaou y colposcopia?",
    a: "Sí, ambos estudios se realizan en consultorio, junto con la detección, seguimiento y tratamiento del VPH, y te explicamos los resultados paso a paso.",
  },
  {
    q: "¿Qué es la Unidad de Ginecología Funcional, Regenerativa y Estética Íntima?",
    a: "Es nuestra unidad de tratamientos mínimamente invasivos —láser ginecológico, HIFU vaginal, rehabilitación del piso pélvico y manejo de la incontinencia urinaria— realizados por especialistas certificados, previa valoración clínica.",
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
  { id: "especialistas", label: "Especialistas" },
  { id: "preguntas", label: "Preguntas" },
  { id: "contacto", label: "Contacto" },
];
