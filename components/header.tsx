import { Logo2 } from "@/components/logo2";
import { Navigation } from "@/components/navigation";
import { Actions } from "@/components/actions";

export const Header = () => {
  return (
    <header className="h-16 border-b">
      <nav className="mx-auto flex h-full max-w-screen-xl items-center justify-between px-2">
        <Logo2 />
        <Navigation />
        <Actions />
      </nav>
    </header>
  );
};
