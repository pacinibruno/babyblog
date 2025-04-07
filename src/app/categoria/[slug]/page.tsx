import { PostCard } from "@/components/post-card";
import { getPostsByCategory, getCategories } from "@/services/supabase";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const categories = await getCategories();
  const category = categories.find(
    (c) => c.toLowerCase().replace(/\s+/g, "-") === params.slug,
  );

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(category);

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Posts em {category}</h1>
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
