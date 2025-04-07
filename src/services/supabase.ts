import { supabase } from "@/lib/supabase";
import { Post, Product } from "@/types/supabase";

export async function getPosts() {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Post[];
}

export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error) throw error;
  return data as Post;
}

export async function getProductsByPostId(postId: string) {
  const { data, error } = await supabase
    .from("post_products")
    .select(
      `
      product:products (
        id,
        title,
        description,
        image,
        amazon_url,
        price,
        created_at,
        updated_at
      )
    `,
    )
    .eq("post_id", postId);

  if (error) throw error;
  return data.map((item) => item.product) as unknown as Product[];
}

export async function getCategories() {
  const { data, error } = await supabase
    .from("posts")
    .select("category")
    .order("category");

  if (error) throw error;
  return [...new Set(data.map((item) => item.category))] as string[];
}

export async function getPostsByCategory(category: string) {
  const { data, error } = await supabase
    .from("posts")
    .select("*")
    .eq("category", category)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data as Post[];
}
