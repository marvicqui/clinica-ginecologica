import { Icon } from "./Icon";
import { Logotype } from "./ui";
import { clinica, waHref } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  const social = [
    { icon: "facebook", href: clinica.facebook, label: "Facebook" },
    { icon: "message-circle", href: waHref(), label: "WhatsApp" },
    { icon: "phone", href: clinica.telHref, label: "Teléfono" },
  ];
  return (
    <footer style={{ background: "var(--surface-dark-deep)", color: "var(--text-on-dark-muted)" }}>
      <div
        className="container-ds grid grid-cols-1 md:grid-cols-[220px_1fr_auto]"
        style={{ paddingBlock: "var(--space-12)", gap: "var(--space-12)", alignItems: "start" }}
      >
        <Logotype onDark size="sm" descriptor="Salud femenina integral" />
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-5)" }}>
          <p style={{ fontSize: "var(--fs-body-sm)", lineHeight: "var(--lh-body)", maxWidth: 320 }}>
            Experiencia, innovación y tecnología al servicio de la salud de la mujer. Más de 30 años
            cuidando tu bienestar en cada etapa de tu vida.
          </p>
          <div style={{ display: "flex", gap: 12 }}>
            {social.map((s) => (
              <a
                key={s.icon}
                href={s.href}
                aria-label={s.label}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: "var(--radius-circle)",
                  border: "1px solid rgba(255,255,255,.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-on-dark)",
                }}
              >
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>
        <div
          className="text-left md:text-right"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            fontSize: "var(--fs-caption)",
          }}
        >
          <span>© {year} Clínica Ginecológica. Todos los derechos reservados.</span>
          <span>{clinica.direccion.join(" · ")}</span>
          <span>
            Tel.{" "}
            <a href={clinica.telHref} style={{ color: "var(--text-on-dark-muted)" }}>
              {clinica.tel}
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
