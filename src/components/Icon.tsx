import {
  Activity,
  ArrowRight,
  Award,
  Baby,
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  Clock,
  Droplets,
  Eye,
  Target,
  Zap,
  Flower2,
  HeartHandshake,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  Phone,
  ScanLine,
  Scissors,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
  type LucideIcon,
} from "lucide-react";

/* Lucide retiró los iconos de marca; se conserva el trazo facebook original de Lucide. */
const Facebook: LucideIcon = (({ size = 24, color = "currentColor", style }: {
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    style={style}
    aria-hidden
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)) as unknown as LucideIcon;

/* Sustitución declarada en el Design System: la clínica no entregó set de iconos;
   se usa Lucide (trazo 2px, extremos redondeados). */
const icons: Record<string, LucideIcon> = {
  activity: Activity,
  "arrow-right": ArrowRight,
  award: Award,
  baby: Baby,
  calendar: Calendar,
  check: Check,
  "check-circle": CheckCircle,
  droplets: Droplets,
  eye: Eye,
  target: Target,
  zap: Zap,
  "chevron-down": ChevronDown,
  clock: Clock,
  facebook: Facebook,
  "flower-2": Flower2,
  "heart-handshake": HeartHandshake,
  "map-pin": MapPin,
  menu: Menu,
  "message-circle": MessageCircle,
  microscope: Microscope,
  phone: Phone,
  "scan-line": ScanLine,
  scissors: Scissors,
  "shield-check": ShieldCheck,
  sparkles: Sparkles,
  stethoscope: Stethoscope,
  x: X,
};

export function Icon({
  name,
  size = 20,
  color = "currentColor",
  style,
}: {
  name: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}) {
  const Cmp = icons[name] ?? Stethoscope;
  return <Cmp aria-hidden size={size} color={color} style={{ flex: "none", ...style }} />;
}
