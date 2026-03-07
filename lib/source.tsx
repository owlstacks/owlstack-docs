import { docs } from '../.source/server';
import { loader } from 'fumadocs-core/source';
import {
  Globe,
  Home,
  Server,
  ArrowRightLeft,
  FileText,
  Settings,
  Package,
  Database,
  Mail,
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
} from 'lucide-react';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/',
  source: docs.toFumadocsSource(),
  icon: (icon) => {
    switch (icon) {
      case 'Globe':
        return <Globe size={16} />;
      case 'Home':
        return <Home size={16} />;
      case 'Server':
        return <Server size={16} />;
      case 'ArrowRightLeft':
        return <ArrowRightLeft size={16} />;
      case 'FileText':
        return <FileText size={16} />;
      case 'Settings':
        return <Settings size={16} />;
      case 'Package':
        return <Package size={16} />;
      case 'Database':
        return <Database size={16} />;
      case 'Mail':
        return <Mail size={16} />;
      case 'BookOpen':
        return <BookOpen size={16} />;
      case 'Rocket':
        return <Rocket size={16} />;
      case 'Network':
        return <Network size={16} />;
      case 'Hash':
        return <Hash size={16} />;
      case 'KeyRound':
        return <KeyRound size={16} />;
      case 'Zap':
        return <Zap size={16} />;
      case 'Code':
        return <Code size={16} />;
      case 'LayoutDashboard':
        return <LayoutDashboard size={16} />;
      case 'CreditCard':
        return <CreditCard size={16} />;
      case 'Crown':
        return <Crown size={16} />;
      case 'Brain':
        return <Brain size={16} />;
      case 'Cpu':
        return <Cpu size={16} />;
      case 'Send':
        return <Send size={16} />;
      case 'MessageSquare':
        return <MessageSquare size={16} />;
      default:
        return null;
    }
  },
});
