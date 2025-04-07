import { getPosts } from "@/services/supabase";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default async function AdminPage() {
  const posts = await getPosts();

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Gerenciar Posts</h1>
        <Link href="/admin/posts/new">
          <Button>Novo Post</Button>
        </Link>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div>
              <h2 className="font-semibold">{post.title}</h2>
              <p className="text-sm text-muted-foreground">
                {formatDate(post.created_at)}
              </p>
            </div>
            <div className="flex gap-2">
              <Link href={`/admin/posts/${post.id}/edit`}>
                <Button variant="outline">Editar</Button>
              </Link>
              <Link href={`/post/${post.slug}`} target="_blank">
                <Button variant="ghost">Visualizar</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 