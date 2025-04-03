import { LucideIcon } from "lucide-react"

export interface Meditation {
  id: string;
  title: string;
  duration: string;
  emoji: string;
  description: string;
  theme: string;
  icon: LucideIcon;
  gradient: string;
  iconColor: string;
  audioUrl?: string;
} 