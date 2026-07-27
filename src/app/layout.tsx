import type { Metadata } from "next";
import { Lato, Playfair_Display, Poppins } from "next/font/google";
import { SITE_URL, clinica } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const title = "Clínica Ginecológica en Minatitlán, Veracruz | Consulta y Salud Femenina";
const description =
  "Atención ginecológica, control prenatal, Papanicolaou, colposcopia y planificación familiar en Minatitlán, Veracruz. Solicita información por WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "clínica ginecológica en Minatitlán",
    "ginecóloga en Minatitlán Veracruz",
    "consulta ginecológica en Minatitlán",
    "control prenatal en Minatitlán",
    "Papanicolaou en Minatitlán",
    "colposcopia en Minatitlán",
    "planificación familiar en Minatitlán",
  ],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: clinica.nombre,
    title,
    description,
    images: [
      {
        url: "/images/og-clinica-ginecologica.jpg",
        width: 1200,
        height: 630,
        alt: "Clínica Ginecológica — Minatitlán, Veracruz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-clinica-ginecologica.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: clinica.nombre,
  description,
  slogan: clinica.lema,
  url: SITE_URL,
  telephone: "+52 922 221 1285",
  image: `${SITE_URL}/images/og-clinica-ginecologica.jpg`,
  medicalSpecialty: ["Gynecologic", "Obstetric"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Benito Juárez No. 5, Col. Insurgentes Sur",
    addressLocality: "Minatitlán",
    addressRegion: "Veracruz",
    postalCode: "96717",
    addressCountry: "MX",
  },
  sameAs: [clinica.facebook],
  openingHours: ["Mo-Fr 08:00-20:00", "Sa 08:00-14:00"],
  employee: [
    {
      "@type": "Physician",
      name: "Dra. Alma Idalia Meléndez Pérez Rubio",
      medicalSpecialty: ["Gynecologic", "Obstetric"],
      description:
        "Médica Especialista en Ginecología y Obstetricia. Cédula profesional 2263155, cédula de especialidad 9858488. Certificada por el Consejo Mexicano de Ginecología y Obstetricia, A.C.",
    },
    {
      "@type": "Physician",
      name: "Dr. Víctor Hugo Herberth Hernández",
      medicalSpecialty: ["Gynecologic", "Obstetric"],
      description:
        "Médico Especialista en Ginecología y Obstetricia. Cédula profesional 2165588, cédula de especialidad 3273097. Certificado por el Consejo Mexicano de Ginecología y Obstetricia, A.C.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${playfair.variable} ${lato.variable} ${poppins.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
