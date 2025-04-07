import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  date: string;
  category: string;
}

export function PostCard({
  title,
  description,
  image,
  slug,
  date,
  category,
}: PostCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{category}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/post/${slug}`}>Ler mais</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
