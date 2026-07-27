"use client";

import { useState } from "react";
import { Icon } from "./Icon";
import { Button, Logotype } from "./ui";
import { navItems, waHref } from "@/lib/data";

export function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header style={{ background: "var(--surface-dark)" }}>
      <div
        className="container-ds"
        style={{ display: "flex", alignItems: "center", gap: "var(--space-6)", paddingBlock: 18 }}
      >
        <a href="#inicio" aria-label="Clínica Ginecológica — inicio">
          <Logotype onDark size="sm" descriptor={null} />
        </a>
        <nav
          aria-label="Principal"
          className="hidden lg:flex"
          style={{ gap: "var(--space-8)", marginLeft: "auto" }}
        >
          {navItems.map((it) => (
            <a key={it.id} href={`#${it.id}`} className="nav-link">
              {it.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button
            variant="accent"
            size="sm"
            href={waHref()}
            iconRight={<Icon name="calendar" size={16} />}
          >
            Agendar cita
          </Button>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          style={{
            marginLeft: "auto",
            background: "transparent",
            border: "none",
            color: "var(--text-on-dark)",
            cursor: "pointer",
            padding: 8,
          }}
        >
          <Icon name={open ? "x" : "menu"} size={26} />
        </button>
      </div>
      {open ? (
        <nav
          aria-label="Principal móvil"
          className="lg:hidden"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-5)",
            padding: "var(--space-4) var(--container-pad) var(--space-8)",
            borderTop: "1px solid rgba(255,255,255,.12)",
          }}
        >
          {navItems.map((it) => (
            <a key={it.id} href={`#${it.id}`} className="nav-link" onClick={() => setOpen(false)}>
              {it.label}
            </a>
          ))}
          <Button
            variant="accent"
            size="md"
            href={waHref()}
            iconRight={<Icon name="calendar" size={16} />}
            style={{ alignSelf: "flex-start" }}
          >
            Agendar cita
          </Button>
        </nav>
      ) : null}
    </header>
  );
}
