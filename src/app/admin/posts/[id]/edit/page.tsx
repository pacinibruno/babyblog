import { getPostById } from '@/services/supabase';
import { EditPostForm } from '@/components/edit-post-form';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function EditPostPage({ params, searchParams }: PageProps) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  return <EditPostForm post={post} />;
} 