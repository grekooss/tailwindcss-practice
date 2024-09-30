import { cn } from "@/lib/utils";

import { LucideIcon } from "lucide-react";

type NavButtonProps = {
  active?: boolean;
  icon: LucideIcon;
};

export const NavButton = ({ active, icon: Icon }: NavButtonProps) => {
  return (
    <button className={cn("rounded-lg p-2 px-4", active && "bg-sky-500/50")}>
      <Icon className="text-neutral-800" />
    </button>
  );
};
