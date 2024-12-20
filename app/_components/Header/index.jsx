import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const MENU = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="flex items-center justify-between p-4 shadow-sm">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="logo" width={180} height={80} />

        <ul className="md:flex gap-8 hidden">
          {MENU.map((item) => (
            <li
              key={item.id}
              className="hover:text-primary hover:font-semibold cursor-pointer hover:scale-105 transition-all"
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <Button>Get Started</Button>
    </div>
  );
}
