"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Button, SectionHeading } from "./ui";
import { clinica, servicios, waHref } from "@/lib/data";

const horarios = [
  "Mañana (8:00 – 12:00)",
  "Mediodía (12:00 – 16:00)",
  "Tarde (16:00 – 20:00)",
];

function Field({
  label,
  required,
  hint,
  children,
  full,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <label
      style={{ display: "flex", flexDirection: "column", gap: 8 }}
      className={full ? "sm:col-span-2" : undefined}
    >
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-body-sm)",
          fontWeight: "var(--fw-bold)",
          color: "var(--text-strong)",
        }}
      >
        {label}
        {required ? <span style={{ color: "var(--rose-600)" }}> *</span> : null}
      </span>
      {children}
      {hint ? (
        <span style={{ fontSize: "var(--fs-caption)", color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </label>
  );
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [ok, setOk] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const partes = [
      "Hola, quisiera solicitar una cita en Clínica Ginecológica.",
      `Nombre: ${f.get("nombre")}`,
      `Teléfono: ${f.get("telefono")}`,
      f.get("servicio") ? `Servicio: ${f.get("servicio")}` : "",
      f.get("horario") ? `Horario preferido: ${f.get("horario")}` : "",
      f.get("motivo") ? `Motivo: ${f.get("motivo")}` : "",
    ].filter(Boolean);
    window.open(waHref(partes.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <div
      style={{
        background: "var(--white)",
        borderRadius: "var(--radius-lg)",
        boxShadow: "var(--shadow-card)",
        padding: "var(--space-10)",
      }}
    >
      <SectionHeading align="left" ornament={false} accent="tu cita">
        Agenda
      </SectionHeading>
      <p style={{ fontSize: "var(--fs-body-sm)", margin: "12px 0 var(--space-8)" }}>
        Déjanos tus datos y te confirmamos el horario por WhatsApp.
      </p>
      {sent ? (
        <div
          style={{
            background: "var(--rose-100)",
            border: "1px solid var(--border-rose)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-8)",
            display: "flex",
            gap: 16,
            alignItems: "flex-start",
          }}
        >
          <Icon name="check-circle" size={26} color="var(--green-600)" />
          <div>
            <h4 style={{ font: "var(--fw-bold) var(--fs-h4)/1.3 var(--font-display)" }}>
              Solicitud enviada
            </h4>
            <p style={{ fontSize: "var(--fs-body-sm)", marginTop: 8 }}>
              Tu mensaje se abrió en WhatsApp. Si no se abrió, escríbenos al {clinica.whatsapp} o
              llámanos al {clinica.tel} en horario de atención.
            </p>
            <Button
              variant="ghost"
              size="sm"
              style={{ marginTop: 14, paddingLeft: 0 }}
              onClick={() => setSent(false)}
            >
              Enviar otra solicitud
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "var(--space-5)" }}>
          <Field label="Nombre completo" required>
            <input name="nombre" required placeholder="Tu nombre" className="field-control" />
          </Field>
          <Field label="Teléfono" required hint="Te confirmamos por WhatsApp.">
            <input
              name="telefono"
              required
              placeholder="922 000 0000"
              inputMode="tel"
              className="field-control"
            />
          </Field>
          <Field label="Servicio">
            <div style={{ position: "relative" }}>
              <select name="servicio" defaultValue="" className="field-control">
                <option value="">Elige un servicio</option>
                {servicios.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
              </select>
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "var(--rose-600)",
                  fontSize: 12,
                }}
              >
                ▾
              </span>
            </div>
          </Field>
          <Field label="Horario preferido">
            <div style={{ position: "relative" }}>
              <select name="horario" defaultValue="" className="field-control">
                <option value="">Elige un horario</option>
                {horarios.map((h) => (
                  <option key={h} value={h}>
                    {h}
                  </option>
                ))}
              </select>
              <span
                aria-hidden
                style={{
                  position: "absolute",
                  right: 14,
                  top: "50%",
                  transform: "translateY(-50%)",
                  pointerEvents: "none",
                  color: "var(--rose-600)",
                  fontSize: 12,
                }}
              >
                ▾
              </span>
            </div>
          </Field>
          <Field label="Motivo de la consulta" full>
            <textarea
              name="motivo"
              rows={3}
              placeholder="Cuéntanos brevemente el motivo de tu consulta."
              className="field-control"
            />
          </Field>
          <label
            className="sm:col-span-2"
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              cursor: "pointer",
              fontSize: "var(--fs-body-sm)",
              lineHeight: "var(--lh-snug)",
            }}
          >
            <span
              style={{
                width: 20,
                height: 20,
                flex: "none",
                borderRadius: "var(--radius-xs)",
                border: `1px solid ${ok ? "var(--rose-500)" : "var(--border-subtle)"}`,
                background: ok ? "var(--rose-500)" : "var(--white)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all var(--dur-fast) var(--ease-standard)",
                marginTop: 1,
                color: "var(--white)",
                fontSize: 13,
              }}
            >
              {ok ? "✓" : null}
            </span>
            <input
              type="checkbox"
              checked={ok}
              onChange={(e) => setOk(e.target.checked)}
              style={{ position: "absolute", opacity: 0, width: 0, height: 0 }}
            />
            <span>
              Acepto el aviso de privacidad y el tratamiento de mis datos para agendar la cita.
            </span>
          </label>
          <div className="sm:col-span-2">
            <Button variant="primary" size="lg" fullWidth disabled={!ok} type="submit">
              Solicitar cita
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
