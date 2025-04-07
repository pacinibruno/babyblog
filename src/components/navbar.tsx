import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { getCategories } from "@/services/supabase";

export async function Navbar() {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Pais e Bebês
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {categories.map((category) => (
              <Link
                key={category}
                href={`/categoria/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {category}
              </Link>
            ))}
            <Link
              href="/sobre"
              className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
              Sobre
            </Link>
          </nav>
        </div>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>
    </header>
  );
}
