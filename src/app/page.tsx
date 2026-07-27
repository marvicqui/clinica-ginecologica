import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Icon } from "@/components/Icon";
import { NavBar } from "@/components/NavBar";
import {
  Badge,
  Button,
  FeatureItem,
  InfoTile,
  SectionHeading,
  ServiceCard,
} from "@/components/ui";
import { beneficios, clinica, faqs, servicios, waHref } from "@/lib/data";

function Hero() {
  return (
    <section id="inicio" style={{ position: "relative", background: "var(--gradient-hero)", overflow: "hidden" }}>
      <div
        aria-hidden
        className="hidden md:block"
        style={{
          position: "absolute",
          inset: "0 0 0 55%",
          backgroundImage: "url(/logo/simbolo-clinica-ginecologica.svg)",
          backgroundSize: "contain",
          backgroundPosition: "center right -60px",
          backgroundRepeat: "no-repeat",
          opacity: 0.9,
        }}
      />
      <div aria-hidden style={{ position: "absolute", inset: 0, background: "var(--scrim-image)" }} />
      <div className="container-ds" style={{ position: "relative", paddingBlock: "var(--space-20)" }}>
        <div
          className="fade-up"
          style={{
            maxWidth: 520,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--space-6)",
          }}
        >
          <Badge>Salud femenina integral</Badge>
          <h1 style={{ font: "var(--type-hero)", letterSpacing: "var(--ls-display)" }}>
            Tu salud merece
            <br />
            <span style={{ color: "var(--text-accent)" }}>atención especializada</span>
          </h1>
          <p style={{ maxWidth: 420 }}>
            En nuestra clínica encontrarás atención ginecológica y prenatal, prevención y
            tratamientos especializados en un ambiente seguro, confidencial y cercano.
          </p>
          <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", marginTop: "var(--space-2)" }}>
            <Button variant="primary" size="lg" href={waHref()} iconLeft={<Icon name="calendar" size={18} />}>
              Agendar una cita
            </Button>
            <Button variant="outline" size="lg" href="#servicios" iconRight={<Icon name="chevron-down" size={16} />}>
              Conocer servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Beneficios() {
  return (
    <section style={{ paddingBlock: "var(--space-16)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div
        className="container-ds grid grid-cols-2 md:grid-cols-4 place-items-center"
        style={{ gap: "var(--space-8)" }}
      >
        {beneficios.map((b) => (
          <FeatureItem key={b.icon} icon={b.icon} label={b.label} />
        ))}
      </div>
    </section>
  );
}

function Servicios() {
  return (
    <section id="servicios" className="section">
      <div className="container-ds">
        <SectionHeading accent="y bienestar">Servicios para tu salud</SectionHeading>
        <p
          style={{
            textAlign: "center",
            maxWidth: 620,
            margin: "var(--space-5) auto 0",
            fontSize: "var(--fs-body-lg)",
          }}
        >
          Consulta, prevención, planificación familiar y procedimientos especializados, con
          seguimiento cercano de principio a fin.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ gap: "var(--card-gap)", marginTop: "var(--space-12)" }}
        >
          {servicios.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.desc} icon={s.icon} image={s.image} />
          ))}
          <div
            style={{
              background: "var(--surface-dark)",
              borderRadius: "var(--radius-md)",
              padding: "var(--card-pad)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "var(--space-4)",
            }}
          >
            <h3 style={{ font: "var(--type-card-title)", color: "var(--text-on-dark)" }}>
              ¿No encuentras lo que buscas?
            </h3>
            <p style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-on-dark-muted)" }}>
              Escríbenos y te orientamos sobre el estudio o procedimiento que necesitas.
            </p>
            <Button
              variant="on-dark"
              href={waHref()}
              iconLeft={<Icon name="message-circle" size={16} />}
              style={{ alignSelf: "flex-start" }}
            >
              Escríbenos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BandaTecnologia() {
  return (
    <section style={{ background: "var(--surface-dark)" }} className="grid grid-cols-1 lg:grid-cols-2">
      <div
        style={{
          padding:
            "var(--space-20) var(--space-12) var(--space-20) max(var(--container-pad), calc((100vw - var(--container-max)) / 2))",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-8)",
        }}
      >
        <SectionHeading onDark align="left" ornament={false} accent="y experiencia">
          Atención médica con tecnología
        </SectionHeading>
        <div style={{ height: 1, width: 88, background: "rgba(240,184,193,.5)" }} />
        <div style={{ display: "flex", gap: "var(--space-10)", flexWrap: "wrap" }}>
          <FeatureItem
            onDark
            icon="stethoscope"
            label={
              <>
                Diagnóstico
                <br />
                especializado
              </>
            }
          />
          <FeatureItem
            onDark
            icon="microscope"
            label={
              <>
                Tecnología
                <br />
                avanzada
              </>
            }
          />
          <FeatureItem
            onDark
            icon="heart-handshake"
            label={
              <>
                Atención
                <br />
                personalizada
              </>
            }
          />
        </div>
        <p style={{ color: "var(--text-on-dark-muted)", maxWidth: 420 }}>
          Cada paciente recibe una evaluación individualizada y un plan de atención acorde con sus
          necesidades.
        </p>
      </div>
      <div
        aria-hidden
        style={{
          minHeight: 420,
          backgroundColor: "var(--navy-700)",
          backgroundImage: "url(/images/foto-consulta.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
}

function Especialista() {
  return (
    <section id="especialista" className="section" style={{ background: "var(--surface-alt)" }}>
      <div className="container-ds">
        <SectionHeading accent="especialista">Conoce a nuestra</SectionHeading>
        <div
          className="grid grid-cols-1 md:grid-cols-[280px_1fr]"
          style={{
            maxWidth: 860,
            margin: "var(--space-12) auto 0",
            background: "var(--white)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-card)",
            overflow: "hidden",
            alignItems: "stretch",
          }}
        >
          <div
            aria-hidden
            style={{
              minHeight: 280,
              backgroundImage: "url(/images/logo-clinica-ginecologica-dra-alma-idalia.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              padding: "var(--space-10)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-4)",
              justifyContent: "center",
            }}
          >
            <Badge>Salud femenina integral</Badge>
            <h3 style={{ font: "var(--fw-bold) var(--fs-h2)/var(--lh-heading) var(--font-display)" }}>
              {clinica.doctora}
            </h3>
            <p style={{ fontSize: "var(--fs-body)" }}>
              Atención enfocada en la salud reproductiva y el bienestar femenino. Acompañamiento
              cercano, orientación clara y evaluación personalizada en cada consulta.
            </p>
            <div style={{ display: "flex", gap: "var(--space-4)", flexWrap: "wrap", marginTop: "var(--space-2)" }}>
              <Button variant="accent" href={waHref()} iconLeft={<Icon name="message-circle" size={16} />}>
                Agendar por WhatsApp
              </Button>
              <Button variant="outline" href={clinica.telHref} iconLeft={<Icon name="phone" size={16} />}>
                {clinica.tel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="section">
      <div className="container-ds" style={{ maxWidth: 860 }}>
        <SectionHeading accent="frecuentes">Preguntas</SectionHeading>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
            marginTop: "var(--space-12)",
          }}
        >
          {faqs.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>
                {f.q}
                <Icon name="chevron-down" size={20} style={{ flex: "none" }} />
              </summary>
              <p className="answer">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contacto() {
  return (
    <section id="contacto" style={{ background: "var(--surface-alt)", paddingBlock: "var(--space-16) var(--section-y)" }}>
      <div
        className="container-ds grid grid-cols-1 lg:grid-cols-[1.25fr_1fr]"
        style={{ gap: "var(--space-12)", alignItems: "start" }}
      >
        <ContactForm />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-8)" }}>
          <div>
            <Badge>Visítanos</Badge>
          </div>
          <InfoTile filled icon="phone" title="Teléfono y WhatsApp">
            <div>
              Tel. <a href={clinica.telHref}>{clinica.tel}</a>
            </div>
            <div>
              WhatsApp <a href={waHref()}>{clinica.whatsapp}</a>
            </div>
          </InfoTile>
          <InfoTile icon="map-pin" title="Dirección">
            {clinica.direccion.map((l) => (
              <div key={l}>{l}</div>
            ))}
            <a
              href={clinica.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", marginTop: 10 }}
            >
              Ver en Google Maps
            </a>
          </InfoTile>
          <InfoTile icon="clock" title="Horarios de atención">
            {clinica.horario.map(([d, h]) => (
              <div key={d} style={{ marginBottom: 8 }}>
                <b style={{ color: "var(--text-strong)" }}>{d}</b>
                <br />
                {h}
              </div>
            ))}
          </InfoTile>
          <iframe
            title="Mapa — Clínica Ginecológica en Minatitlán, Veracruz"
            src={clinica.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              width: "100%",
              height: 220,
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function Cierre() {
  return (
    <section style={{ background: "var(--surface-dark)", paddingBlock: "var(--space-16)" }}>
      <div
        className="container-ds flex flex-col md:flex-row md:items-center"
        style={{ gap: "var(--space-8)", justifyContent: "space-between" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <h2 className="section-title section-title-on-dark" style={{ fontSize: "var(--fs-h2)" }}>
            Da el primer paso para <span className="accent">cuidar tu salud</span>
          </h2>
          <p style={{ color: "var(--text-on-dark-muted)", maxWidth: 520 }}>
            Escríbenos por WhatsApp para solicitar información y encontrar el horario de atención
            más conveniente para ti.
          </p>
        </div>
        <Button
          variant="accent"
          size="lg"
          href={waHref()}
          iconLeft={<Icon name="message-circle" size={18} />}
          style={{ flex: "none" }}
        >
          Solicitar información
        </Button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Beneficios />
        <Servicios />
        <BandaTecnologia />
        <Especialista />
        <Preguntas />
        <Contacto />
        <Cierre />
      </main>
      <Footer />
      <a href={waHref()} className="whatsapp-fab" aria-label="Escríbenos por WhatsApp" target="_blank" rel="noopener noreferrer">
        <Icon name="message-circle" size={28} color="var(--white)" />
      </a>
    </>
  );
}
