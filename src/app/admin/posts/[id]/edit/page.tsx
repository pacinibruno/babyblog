import { getPostById } from '@/services/supabase';
import { EditPostForm } from '@/components/edit-post-form';
import { notFound } from 'next/navigation';
import { AdminPageProps } from '@/types/pages';

export default async function EditPostPage({ params, searchParams }: AdminPageProps) {
  const postId = params.id || '';

  if (!postId) {
    notFound();
  }

  const post = await getPostById(postId);

  if (!post) {
    notFound();
  }

  return <EditPostForm post={post} />;
} 