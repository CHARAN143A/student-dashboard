import {
  Code2, Cpu, Database, Globe, Layers, Terminal,
  BookOpen, Palette, Rocket, Brain, FlaskConical,
  Music, Camera, PenTool, LineChart, Server,
  Smartphone, Shield, Atom, Binary, FileCode,
  GitBranch, Box, Zap, Star, Heart,
  type LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  code2: Code2, Code: Code2, code: Code2,
  cpu: Cpu,
  database: Database,
  globe: Globe,
  layers: Layers,
  terminal: Terminal,
  bookopen: BookOpen, 'book-open': BookOpen, BookOpen: BookOpen,
  palette: Palette, Palette: Palette,
  rocket: Rocket, Rocket: Rocket,
  brain: Brain, Brain: Brain,
  flaskconical: FlaskConical, flask: FlaskConical, Flask: FlaskConical,
  music: Music,
  camera: Camera,
  pentool: PenTool, 'pen-tool': PenTool,
  linechart: LineChart, 'line-chart': LineChart,
  server: Server,
  smartphone: Smartphone,
  shield: Shield,
  atom: Atom,
  binary: Binary,
  filecode: FileCode, 'file-code': FileCode, FileCode: FileCode,
  gitbranch: GitBranch, 'git-branch': GitBranch,
  box: Box,
  zap: Zap,
  star: Star,
  heart: Heart,
}

interface DynamicIconProps {
  name: string
  size?: number
  className?: string
}

export function DynamicIcon({ name, size = 20, className }: DynamicIconProps) {
  const key = name?.toLowerCase().replace(/[_\s]/g, '-').replace(/-/g, '')
  const Icon =
    iconMap[name] ??   
    iconMap[key] ??       
    iconMap[name?.toLowerCase()] ??
    Code2                  
  return <Icon size={size} className={className} />
}
