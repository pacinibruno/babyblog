import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface AmazonButtonProps {
  url: string;
  text?: string;
}

export function AmazonButton({
  url,
  text = "Ver na Amazon",
}: AmazonButtonProps) {
  return (
    <div className="space-y-2">
      <Button asChild className="w-full">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          {text}
        </a>
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        * Este é um link afiliado. Ao comprar através dele, você ajuda a manter
        o blog sem custo adicional.
      </p>
    </div>
  );
}
