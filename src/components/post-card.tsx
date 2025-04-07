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
import { Post } from "@/types/supabase";
import { formatDate } from "@/lib/utils";

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative h-48 w-full">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{post.category}</span>
          <span>•</span>
          <span>{formatDate(post.created_at)}</span>
        </div>
        <CardTitle className="line-clamp-2">{post.title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {post.description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/post/${post.slug}`}>Ler mais</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
