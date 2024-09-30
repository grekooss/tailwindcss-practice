import { Info, Map, Settings, ShoppingBag } from "lucide-react";

import { NavButton } from "@/components/nav-button";

export const Navigation = () => {
  return (
    <div className="flex gap-x-4">
      <NavButton icon={Map} active={true} />
      <NavButton icon={ShoppingBag} />
      <NavButton icon={Info} />
      <NavButton icon={Settings} />
    </div>
  );
};
