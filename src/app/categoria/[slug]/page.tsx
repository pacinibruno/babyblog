import { getPostsByCategory } from '@/services/supabase';
import { PostCard } from '@/components/post-card';
import { notFound } from 'next/navigation';
import { CategoryPageProps } from '@/types/pages';

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const posts = await getPostsByCategory(params.slug);

  if (!posts.length) {
    notFound();
  }

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">
        Posts em {params.slug}
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
