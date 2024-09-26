import { Logo2 } from "@/components/logo2";
import { Info, Map, Settings, ShoppingBag } from "lucide-react";

export const Header = () => {
  return (
    <header className="h-16">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between">
        <div>
          <Logo2 />
        </div>
        <div>
          <Map />
          <ShoppingBag />
          <Info />
          <Settings />
        </div>
        <div>Settings</div>
      </nav>
    </header>
  );
};
