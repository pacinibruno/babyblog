import Image from "next/image";
import { AmazonButton } from "@/components/amazon-button";
import { getPostBySlug, getProductsByPostId } from "@/services/supabase";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);
  const products = await getProductsByPostId(post.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="container py-10">
      <div className="max-w-3xl mx-auto">
        <div className="relative h-[400px] w-full mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <span>{post.category}</span>
          <span>•</span>
          <span>{new Date(post.created_at).toLocaleDateString("pt-BR")}</span>
        </div>

        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {products.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Produtos Recomendados</h2>
            <div className="grid gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex flex-col md:flex-row gap-6 p-6 border rounded-lg"
                >
                  <div className="relative h-48 w-full md:w-48">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4">
                      {product.title}
                    </h3>
                    <AmazonButton url={product.amazon_url} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
