https://cdn.dribbble.com/userupload/10802216/file/original-7d7042b7feaebce062cd7bc5130c1893.png

- aby strona zajela caly ekran w globals.css:

```css
html,
body,
:root {
  @apply h-full;
  //height: 100%;
}
```

nadac stala wartosc height dla navbara h-16 bo jest to pojawiajace sie zawsze

- componenty export lepiej bez default bo lepiej pozniej sie je importuje

```tsx
export const Header = () => {
  return (
    <nav className="flex h-16 justify-between bg-red-100">
      <div>Logo</div>
      <div>Menu</div>
      <div>Settings</div>
    </nav>
  );
};
```

w layout.tsx w klamrach

```tsx
import { Header } from "@/components/header";
```

Haeder.tsx w componentach albo w features
w nav ustawic flex i wszsytko (3 x "div") ustawi sie kolo siebie a nastepnie nadac justify-between
(mozna tez na srodkowym uzyc flex-1)

```tsx
export const Header = () => {
  return (
    <header className="h-16">
      <nav className="mx-auto flex h-full max-w-screen-md items-center justify-between">
        <div>Logo</div>
        <div>Menu</div>
        <div>Settings</div>
      </nav>
    </header>
  );
};
```

max-w-screen-md lub xl i mx-auto ogranicza nav przy duzych ekranach do okreslonego rozmiaru
trzeba jeszcze nadac h-full i items-center na nav zeby wszystkie odziedziczyly

Logo mozna stworzyc komponent i wkleic kod svg (czasami class zmienic na className)
ikonki menu importujemy z lucide-react
wszystko trzymamy w 3 divach

Te 3 x div wyrzucamy do poszczegolnych komponentow (Logo, Navigation, Actions)

W navigation robimy z tych ikonek buttony
`{icon : Icon}` bo wtedy mozemy importowac `<Icon/>`

```jsx
import { cn } from "@/lib/utils";
import { Info, LucideIcon, Map, Settings, ShoppingBag } from "lucide-react";

type NavButtonProps = {
  active?: boolean;
  icon: LucideIcon;
};

const NavButton = ({ active, icon: Icon }: NavButtonProps) => {
  return (
    <button className={cn("rounded-lg p-2 px-4", active && "bg-sky-500/50")}>
      <Icon className="text-neutral-800" />
    </button>
  );
};

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
```

i ten NavButton do osobnego komponetu zeby uzyc w actions
