import { PostCard } from "@/components/post-card";
import { getPosts } from "@/services/supabase";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Últimos Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            slug={post.slug}
            date={new Date(post.created_at).toLocaleDateString("pt-BR")}
            category={post.category}
          />
        ))}
      </div>
    </div>
  );
}
