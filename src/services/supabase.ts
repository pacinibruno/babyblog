import { supabase } from "@/lib/supabase";
import { Post, Product } from "@/types/supabase";

export async function getPosts() {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }

    if (!data) {
      console.error('No data returned from posts');
      return [];
    }

    return data as Post[];
  } catch (error) {
    console.error('Unexpected error in getPosts:', error);
    throw error;
  }
}

export async function getPostBySlug(slug: string) {
  try {
    console.log('Fetching post with slug:', slug);
    
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error('Error fetching post:', error);
      throw error;
    }

    if (!data) {
      console.error('No post found with slug:', slug);
      throw new Error('Post not found');
    }

    console.log('Post found:', data);
    return data as Post;
  } catch (error) {
    console.error('Unexpected error in getPostBySlug:', error);
    throw error;
  }
}

export async function getPostById(id: string) {
  try {
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error('Error fetching post:', error);
      throw error;
    }

    if (!data) {
      console.error('No post found with id:', id);
      throw new Error('Post not found');
    }

    return data as Post;
  } catch (error) {
    console.error('Unexpected error in getPostById:', error);
    throw error;
  }
}

export async function createPost(post: {
  title: string;
  slug: string;
  content: string;
  image?: string;
  category: string;
}) {
  try {
    const { data, error } = await supabase
      .from("posts")
      .insert([{
        ...post,
        created_at: new Date().toISOString(),
      }])
      .select()
      .single();

    if (error) {
      console.error('Error creating post:', error);
      throw error;
    }

    return data as Post;
  } catch (error) {
    console.error('Unexpected error in createPost:', error);
    throw error;
  }
}

export async function updatePost(
  id: string,
  post: {
    title?: string;
    slug?: string;
    content?: string;
    image?: string;
    category?: string;
  }
) {
  try {
    const { data, error } = await supabase
      .from("posts")
      .update(post)
      .eq("id", id)
      .select()
      .single();

    if (error) {
      console.error('Error updating post:', error);
      throw error;
    }

    return data as Post;
  } catch (error) {
    console.error('Unexpected error in updatePost:', error);
    throw error;
  }
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
