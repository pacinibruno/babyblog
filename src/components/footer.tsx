import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Pais e Bebês. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/privacidade"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Política de Privacidade
          </Link>
          <Link
            href="/termos"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Termos de Uso
          </Link>
        </div>
      </div>
    </footer>
  );
}
