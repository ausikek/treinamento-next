import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { LogoCiti } from "@/assets";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="bg-stone-800 h-20 justify-between flex flex-row items-center px-10">
      <div className="flex flex-row gap-4 items-center">
        <Image src={LogoCiti} alt="Logo do CITi" height={60} width={70} />
        <h1 className="font-space text-white">Space</h1>
      </div>
      <div className="font-domine">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white group inline-flex h-9 w-max items-center justify-center rounded-md bg-stone-800 px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-800 hover:text-white focus:bg-stone-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-stone-800 data-[state=open]:bg-stone-800">
                Sobre
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <p className="text-sm p-5">
                  Sou um site do CITi em homenagem à NASA
                </p>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-white group inline-flex h-9 w-max items-center justify-center rounded-md bg-stone-800 px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-800 hover:text-white focus:bg-stone-800 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-stone-800 data-[state=open]:bg-stone-800">
                Contato
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <p className="text-sm p-5">
                  Entre em contato conosco pelo email: bonof@cin.ufpe.br
                </p>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="https://github.com/ausikek/treinamento-next"
                passHref
                legacyBehavior
              >
                <NavigationMenuLink className="text-white text-sm font-medium">
                  GitHub
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export { NavBar };
