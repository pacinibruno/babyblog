import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/services/supabase';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const post = await getPostBySlug(params.slug);
    
    if (!post) {
      return notFound();
    }

    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            {post.image && (
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            )}
            <div className="prose max-w-none">
              {post.content}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    console.error('Error in PostPage:', error);
    return notFound();
  }
}
