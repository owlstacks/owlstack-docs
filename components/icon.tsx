import {
  Globe,
  Home,
  Server,
  ArrowRightLeft,
  FileText,
  BookOpen,
  Rocket,
  Network,
  Hash,
  KeyRound,
  Zap,
  Code,
  LayoutDashboard,
  CreditCard,
  Crown,
  Brain,
  Cpu,
  Send,
  MessageSquare,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Home,
  Server,
  ArrowRightLeft,
  FileText,
  BookOpen,
  Rocket,
  Network,
  Hash,
  KeyRound,
  Zap,
  Code,
  LayoutDashboard,
  CreditCard,
  Crown,
  Brain,
  Cpu,
  Send,
  MessageSquare,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export function Icon({ name, className, size = 16 }: IconProps) {
  const IconComponent = iconMap[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent className={className} size={size} />;
}
