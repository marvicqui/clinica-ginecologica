import { Icon } from "./Icon";

/* Componentes portados 1:1 del Design System (components/core, marketing). */

type ButtonProps = {
  variant?: "primary" | "accent" | "outline" | "ghost" | "on-dark" | "whatsapp";
  size?: "sm" | "md" | "lg";
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"a"> &
  React.ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  iconLeft,
  iconRight,
  fullWidth,
  children,
  className = "",
  style,
  ...rest
}: ButtonProps) {
  const cls = `btn btn-${size} btn-${variant} ${className}`;
  const s = fullWidth ? { width: "100%", ...style } : style;
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={cls}
        style={s}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {iconLeft}
        {children}
        {iconRight}
      </a>
    );
  }
  return (
    <button className={cls} style={s} {...rest}>
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

export function Badge({
  onDark = false,
  children,
}: {
  onDark?: boolean;
  children: React.ReactNode;
}) {
  return <span className={`badge${onDark ? " badge-on-dark" : ""}`}>{children}</span>;
}

export function SectionHeading({
  children,
  accent,
  align = "center",
  onDark = false,
  ornament = true,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  accent?: string;
  align?: "center" | "left";
  onDark?: boolean;
  ornament?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div style={{ textAlign: align }}>
      <Tag className={`section-title${onDark ? " section-title-on-dark" : ""}`}>
        {children}
        {accent ? (
          <>
            {" "}
            <span className="accent">{accent}</span>
          </>
        ) : null}
      </Tag>
      {ornament ? (
        <div
          className={`ornament${align === "center" ? " ornament-center" : ""}${onDark ? " ornament-on-dark" : ""}`}
        >
          <span className="line" />
          <span className="dot" />
          <span className="line" />
        </div>
      ) : null}
    </div>
  );
}

export function LinkArrow({
  children = "Ver más",
  href = "#",
  ...rest
}: {
  children?: React.ReactNode;
  href?: string;
} & React.ComponentPropsWithoutRef<"a">) {
  return (
    <a href={href} className="link-arrow" {...rest}>
      {children}
      <Icon name="arrow-right" size={16} />
    </a>
  );
}

export function ServiceCard({
  title,
  description,
  image,
  icon = "stethoscope",
  href = "#contacto",
}: {
  title: string;
  description: string;
  image?: string;
  icon?: string;
  href?: string;
}) {
  return (
    <article className="service-card">
      <div
        className="photo"
        style={image ? { backgroundImage: `url(${image})` } : undefined}
      />
      <div
        style={{
          padding: "0 var(--card-pad) var(--card-pad)",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <div className="medallion">
          <Icon name={icon} size={26} color="var(--icon-accent)" />
        </div>
        <h3 style={{ font: "var(--type-card-title)", marginBottom: "10px" }}>{title}</h3>
        <p style={{ fontSize: "var(--fs-body-sm)", flex: 1 }}>{description}</p>
        <div
          style={{
            marginTop: "20px",
            paddingTop: "16px",
            borderTop: "var(--border-hairline) solid var(--border-subtle)",
          }}
        >
          <LinkArrow href={href} aria-label={`Más información sobre ${title}`} />
        </div>
      </div>
    </article>
  );
}

export function FeatureItem({
  icon = "stethoscope",
  label,
  onDark = false,
}: {
  icon?: string;
  label: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "12px",
        maxWidth: "180px",
      }}
    >
      <Icon name={icon} size={38} color={onDark ? "var(--icon-on-dark)" : "var(--icon-accent)"} />
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-body-sm)",
          lineHeight: "var(--lh-snug)",
          color: onDark ? "var(--text-on-dark)" : "var(--text-strong)",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function InfoTile({
  icon = "map-pin",
  title,
  filled = false,
  children,
}: {
  icon?: string;
  title: string;
  filled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex", gap: "18px", alignItems: "flex-start" }}>
      <div
        style={{
          width: "52px",
          height: "52px",
          flex: "none",
          borderRadius: "var(--radius-circle)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: filled ? "var(--rose-500)" : "transparent",
          border: filled ? "none" : "var(--border-hairline) solid var(--border-rose)",
        }}
      >
        <Icon name={icon} size={24} color={filled ? "var(--white)" : "var(--icon-accent)"} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <h4 style={{ font: "var(--fw-bold) var(--fs-h4)/var(--lh-heading) var(--font-display)" }}>
          {title}
        </h4>
        <div style={{ fontSize: "var(--fs-body-sm)", color: "var(--text-body)" }}>{children}</div>
      </div>
    </div>
  );
}

export function Logotype({
  onDark = false,
  size = "sm",
  descriptor,
}: {
  onDark?: boolean;
  size?: "sm" | "md" | "lg";
  descriptor?: string | null;
}) {
  const h = { sm: 40, md: 56, lg: 88 }[size];
  if (!onDark) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo/logo-clinica-ginecologica.svg"
        alt="Clínica Ginecológica"
        style={{ height: h * 1.35, display: "block" }}
      />
    );
  }
  /* Sobre azul marino: símbolo + nombre en blanco/rosa (la palabra "Clínica" del SVG
     completo no contrastaría). */
  return (
    <div style={{ display: "flex", alignItems: "center", gap: Math.round(h * 0.24) }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo/simbolo-clinica-ginecologica.svg"
        alt=""
        style={{ height: h, width: h, display: "block", flex: "none" }}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: Math.round(h * 0.05), lineHeight: 1 }}>
        <span
          style={{
            fontFamily: "var(--font-brand)",
            fontWeight: 600,
            fontSize: Math.round(h * 0.36),
            letterSpacing: "0.02em",
            color: "var(--text-on-dark)",
          }}
        >
          Clínica
        </span>
        <span
          style={{
            fontFamily: "var(--font-brand)",
            fontWeight: 600,
            fontSize: Math.round(h * 0.36),
            letterSpacing: "0.02em",
            color: "var(--rose-400)",
          }}
        >
          Ginecológica
        </span>
        {descriptor ? (
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: Math.round(h * 0.15),
              letterSpacing: "var(--ls-overline)",
              textTransform: "uppercase",
              color: "var(--text-on-dark-muted)",
              marginTop: Math.round(h * 0.1),
            }}
          >
            {descriptor}
          </span>
        ) : null}
      </div>
    </div>
  );
}
