export type Post = {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  image: string;
  category: string;
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  amazon_url: string;
  price: number;
  created_at: string;
  updated_at: string;
};

export type PostProduct = {
  id: string;
  post_id: string;
  product_id: string;
  created_at: string;
};
