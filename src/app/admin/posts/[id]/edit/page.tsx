import { getPostById } from '@/services/supabase';
import { EditPostForm } from '@/components/edit-post-form';
import { notFound } from 'next/navigation';
import { AdminPageProps } from '@/types/pages';

export default async function EditPostPage({ params, searchParams }: AdminPageProps) {
  if (!params.id) {
    notFound();
  }

  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  return <EditPostForm post={post} />;
} 