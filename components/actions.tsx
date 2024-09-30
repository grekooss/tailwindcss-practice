import { Bell, Heart } from "lucide-react";
import { NavButton } from "@/components/nav-button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Actions = () => {
  return (
    <div className="flex gap-x-4">
      <NavButton icon={Heart} />
      <NavButton icon={Bell} />
      <Avatar>
        <AvatarImage />
        <AvatarFallback className="bg-sky-500/50">GK</AvatarFallback>
      </Avatar>
    </div>
  );
};
