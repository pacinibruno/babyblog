'use client';

import { useRouter } from 'next/navigation';
import { MarkdownEditor } from '@/components/markdown-editor';
import { toast } from 'sonner';
import { createPost } from '@/services/supabase';

export function NewPostForm() {
  const router = useRouter();

  const handleSubmit = async (data: {
    title: string;
    slug: string;
    content: string;
    image?: string;
    category: string;
  }) => {
    try {
      await createPost(data);
      toast.success('Post criado com sucesso!');
      router.push('/admin');
    } catch (error) {
      toast.error('Erro ao criar post');
      console.error(error);
    }
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-8">Novo Post</h1>
      <MarkdownEditor onSubmit={handleSubmit} />
    </div>
  );
} 