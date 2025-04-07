'use client';

import { useRouter } from 'next/navigation';
import { MarkdownEditor } from '@/components/markdown-editor';
import { toast } from 'sonner';
import { Post } from '@/types/supabase';
import { updatePost } from '@/services/supabase';

interface EditPostFormProps {
  post: Post;
}

export function EditPostForm({ post }: EditPostFormProps) {
  const router = useRouter();

  const handleSubmit = async (data: {
    title: string;
    slug: string;
    content: string;
    image?: string;
    category: string;
  }) => {
    try {
      await updatePost(post.id, data);
      toast.success('Post atualizado com sucesso!');
      router.push('/admin');
    } catch (error) {
      toast.error('Erro ao atualizar post');
      console.error(error);
    }
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Editar Post</h1>
      <MarkdownEditor
        initialTitle={post.title}
        initialSlug={post.slug}
        initialContent={post.content}
        initialImage={post.image}
        initialCategory={post.category}
        onSubmit={handleSubmit}
      />
    </div>
  );
} 