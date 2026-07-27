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
import {
  beneficios,
  clinica,
  doctores,
  faqs,
  filosofia,
  servicios,
  unidad,
  waHref,
} from "@/lib/data";

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
            maxWidth: 560,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "var(--space-6)",
          }}
        >
          <Badge>Más de 30 años cuidando la salud de la mujer</Badge>
          <h1 style={{ font: "var(--type-hero)", letterSpacing: "var(--ls-display)" }}>
            Tu salud merece
            <br />
            <span style={{ color: "var(--text-accent)" }}>atención especializada</span>
          </h1>
          <p style={{ maxWidth: 460 }}>
            Atención médica integral para la mujer en todas las etapas de su vida, con especialistas
            certificados y tecnología de última generación, en un ambiente seguro, confidencial y
            cercano.
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
            maxWidth: 640,
            margin: "var(--space-5) auto 0",
            fontSize: "var(--fs-body-lg)",
          }}
        >
          Ginecología, obstetricia, diagnóstico por imagen y tratamientos especializados, con
          seguimiento cercano de principio a fin.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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

function UnidadEstetica() {
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
        <div>
          <Badge onDark>Unidad especializada</Badge>
        </div>
        <SectionHeading onDark align="left" ornament={false} accent="regenerativa y estética íntima">
          Ginecología funcional,
        </SectionHeading>
        <p style={{ color: "var(--text-on-dark-muted)", maxWidth: 460, marginTop: "calc(var(--space-4) * -1)" }}>
          {unidad.intro}
        </p>
        <div style={{ height: 1, width: 88, background: "rgba(240,184,193,.5)" }} />
        <ul
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            gap: "var(--space-3) var(--space-8)",
            maxWidth: 640,
          }}
        >
          {unidad.tratamientos.map((t) => (
            <li
              key={t}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                color: "var(--text-on-dark)",
                fontSize: "var(--fs-body-sm)",
                lineHeight: "var(--lh-snug)",
              }}
            >
              <Icon name="check" size={16} color="var(--icon-on-dark)" style={{ marginTop: 2 }} />
              {t}
            </li>
          ))}
        </ul>
        <p style={{ color: "var(--text-on-dark-muted)", fontSize: "var(--fs-caption)", maxWidth: 460 }}>
          {unidad.nota}
        </p>
        <Button
          variant="accent"
          href={waHref(
            "Hola, quisiera información sobre la Unidad de Ginecología Funcional, Regenerativa y Estética Íntima."
          )}
          iconLeft={<Icon name="message-circle" size={16} />}
          style={{ alignSelf: "flex-start" }}
        >
          Agendar valoración
        </Button>
      </div>
      <div
        aria-hidden
        style={{
          minHeight: 420,
          backgroundColor: "var(--navy-700)",
          backgroundImage: "url(/images/services/rejuvenecimiento-urogenital.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </section>
  );
}

function Especialistas() {
  return (
    <section id="especialistas" className="section" style={{ background: "var(--surface-alt)" }}>
      <div className="container-ds">
        <SectionHeading accent="especialistas">Conoce a nuestros</SectionHeading>
        <p
          style={{
            textAlign: "center",
            maxWidth: 640,
            margin: "var(--space-5) auto 0",
            fontSize: "var(--fs-body-lg)",
          }}
        >
          Médicos certificados por el Consejo Mexicano de Ginecología y Obstetricia, A.C., y miembros
          de la Federación Mexicana de Colegios de Obstetricia y Ginecología (FEMECOG).
        </p>
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ gap: "var(--card-gap)", marginTop: "var(--space-12)", alignItems: "stretch" }}
        >
          {doctores.map((d) => (
            <article
              key={d.nombre}
              style={{
                background: "var(--white)",
                borderRadius: "var(--radius-lg)",
                boxShadow: "var(--shadow-card)",
                padding: "var(--space-10)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-5)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "var(--space-4)" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    flex: "none",
                    borderRadius: "var(--radius-circle)",
                    background: "var(--rose-100)",
                    border: "var(--border-hairline) solid var(--border-rose)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Icon name="stethoscope" size={30} color="var(--icon-accent)" />
                </div>
                <div>
                  <h3 style={{ font: "var(--fw-bold) var(--fs-h3)/var(--lh-heading) var(--font-display)" }}>
                    {d.nombre}
                  </h3>
                  <p style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-accent)", fontWeight: "var(--fw-bold)" }}>
                    {d.titulo}
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)" }}>
                {d.areas.map((a) => (
                  <Badge key={a}>{a}</Badge>
                ))}
              </div>
              <p style={{ fontSize: "var(--fs-body-sm)", flex: 1 }}>{d.semblanza}</p>
              <div
                style={{
                  paddingTop: "var(--space-4)",
                  borderTop: "var(--border-hairline) solid var(--border-subtle)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "var(--space-2)",
                }}
              >
                <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>{d.certificaciones}</span>
                <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-strong)", fontWeight: "var(--fw-bold)" }}>
                  {d.cedulas}
                </span>
              </div>
              <Button
                variant="accent"
                href={waHref(`Hola, quisiera agendar una cita con ${d.nombre.split(" ").slice(0, 3).join(" ")}.`)}
                iconLeft={<Icon name="message-circle" size={16} />}
                style={{ alignSelf: "flex-start" }}
              >
                Agendar cita
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Filosofia() {
  return (
    <section className="section" style={{ paddingBlock: "var(--space-16)" }}>
      <div
        className="container-ds grid grid-cols-1 md:grid-cols-3"
        style={{
          background: "var(--white)",
          border: "var(--border-hairline) solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-card)",
          padding: "var(--space-10)",
          gap: "var(--space-10)",
          maxWidth: "calc(var(--container-max))",
        }}
      >
        <InfoTile filled icon="target" title="Nuestra misión">
          {filosofia.mision}
        </InfoTile>
        <InfoTile icon="eye" title="Nuestra visión">
          {filosofia.vision}
        </InfoTile>
        <InfoTile icon="heart-handshake" title="Nuestros valores">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: 4 }}>
            {filosofia.valores.map((v) => (
              <Badge key={v}>{v}</Badge>
            ))}
          </div>
        </InfoTile>
      </div>
    </section>
  );
}

function Preguntas() {
  return (
    <section id="preguntas" className="section" style={{ paddingTop: 0 }}>
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
          <p style={{ color: "var(--text-on-dark-muted)", maxWidth: 560 }}>
            Permítenos acompañarte en cada etapa de tu vida con la confianza de estar en manos de
            especialistas comprometidos con tu salud y bienestar.
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
        <UnidadEstetica />
        <Especialistas />
        <Filosofia />
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
